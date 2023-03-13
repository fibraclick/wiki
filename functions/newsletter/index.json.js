export async function onRequest(context) {
    const url = new URL('https://us20.api.mailchimp.com/3.0/campaigns');
    url.searchParams.set('type', 'regular');
    url.searchParams.set('status', 'sent');
    url.searchParams.set('fields', 'campaigns.long_archive_url,campaigns.settings.subject_line,campaigns.settings.title');
    url.searchParams.set('count', '1000');
    url.searchParams.set('sort_field', 'send_time');
    url.searchParams.set('sort_dir', 'DESC');

    let response = await fetch(url, {
        headers: {
            Authorization: 'Bearer ' + context.env.MAILCHIMP_API_KEY
        }
    });

    if (!response.ok) {
        console.log('Error fetching newsletter data');
        console.log('Status: ' + response.status);
        console.log('Body: ' + await response.text());
        return new Response('', {
            status: 500,
            statusText: 'Error fetching newsletter data'
        });
    }

    let data = await response.json();

    let campaigns = data.campaigns.map(campaign => {
        return {
            url: campaign.long_archive_url,
            title: campaign.settings.subject_line.replace(/^#[0-9]+[:\.] /, ''),
            date: campaign.settings.title
        };
    });

    let v2duplicates = campaigns.filter(campaign => campaign.date.length > 10);
    campaigns = campaigns.filter(campaign => {
        if (campaign.date.length > 10) return false;
        let v2 = v2duplicates.find(v2 => v2.date.startsWith(campaign.date));
        if (v2) campaign.url = v2.url;
        return true;
    });

    return new Response(JSON.stringify(campaigns), {
        headers: {
            'Content-Type': 'application/json',
            'Cache-Control': 'public, max-age=3600'
        }
    });
}
