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

    let data = await response.json();

    let campaigns = data.campaigns.map(campaign => {
        return {
            url: campaign.long_archive_url,
            title: campaign.settings.subject_line.replace(/^#[0-9]+[:\.] /, ''),
            date: campaign.settings.title
        };
    }).filter(campaign => {
        return campaign.date.length == 10
    });

    return new Response(JSON.stringify(campaigns), {
        headers: {
            'Content-Type': 'application/json',
            'CDN-Cache-Control': 'max-age=1800'
        }
    });
}
