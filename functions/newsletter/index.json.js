export async function onRequest(context) {
    // Get listmonk campaigns
    let url = new URL('https://newsletter.fibra.click/api/campaigns');
    url.searchParams.set('no_body', 'true');
    url.searchParams.set('status', 'finished');
    url.searchParams.set('per_page', 'all');
    url.searchParams.set('order_by', 'created_at');
    url.searchParams.set('order', 'DESC');

    let response = await fetch(url, {
        headers: {
            Authorization: 'Basic ' + btoa(context.env.LISTMONK_CREDENTIALS)
        }
    });

    if (!response.ok) {
        console.log('Error fetching newsletter data (lm)');
        console.log('Status: ' + response.status);
        console.log('Body: ' + await response.text());
        return new Response('', {
            status: 500,
            statusText: 'Error fetching newsletter data (lm)'
        });
    }

    let data = await response.json();

    let campaigns = data['data']['results']
        .map(campaign => {
            return {
                url: `https://newsletter.fibra.click/archive/${campaign.archive_slug}`,
                title: campaign.subject,
                date: campaign.archive_slug
            };
        })
        .filter(c => c.date.match(/^\d{4}-\d{2}-\d{2}$/));

    // Get mailchimp campaigns
    url = new URL('https://us20.api.mailchimp.com/3.0/campaigns');
    url.searchParams.set('type', 'regular');
    url.searchParams.set('status', 'sent');
    url.searchParams.set('fields', 'campaigns.long_archive_url,campaigns.settings.subject_line,campaigns.settings.title');
    url.searchParams.set('count', '1000');
    url.searchParams.set('sort_field', 'send_time');
    url.searchParams.set('sort_dir', 'DESC');

    response = await fetch(url, {
        headers: {
            Authorization: 'Bearer ' + context.env.MAILCHIMP_API_KEY
        }
    });

    if (!response.ok) {
        console.log('Error fetching newsletter data (mc)');
        console.log('Status: ' + response.status);
        console.log('Body: ' + await response.text());
        return new Response('', {
            status: 500,
            statusText: 'Error fetching newsletter data (mc)'
        });
    }

    data = await response.json();

    let mcCampaigns = data['campaigns'].map(campaign => {
        return {
            url: campaign.long_archive_url,
            title: campaign.settings.subject_line.replace(/^#[0-9]+[:\.] /, ''),
            date: campaign.settings.title
        };
    });

    let v2duplicates = mcCampaigns.filter(campaign => campaign.date.length > 10);
    mcCampaigns = mcCampaigns.filter(campaign => {
        if (campaign.date.length > 10) return false;
        let v2 = v2duplicates.find(v2 => v2.date.startsWith(campaign.date));
        if (v2) campaign.url = v2.url;
        return true;
    });

    campaigns = campaigns.concat(mcCampaigns);

    return new Response(JSON.stringify(campaigns), {
        headers: {
            'Content-Type': 'application/json',
            'Cache-Control': 'public, max-age=3600'
        }
    });
}
