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
        .filter(c => c.archive_slug.match(/^\d{4}-\d{2}-\d{2}$/))
        .map(campaign => {
            return {
                url: `https://newsletter.fibra.click/archive/${campaign.archive_slug}`,
                title: campaign.subject,
                date: campaign.send_at,
                guid: campaign.archive_slug
            };
        });

    // Get mailchimp campaigns
    url = new URL('https://us20.api.mailchimp.com/3.0/campaigns');
    url.searchParams.set('type', 'regular');
    url.searchParams.set('status', 'sent');
    url.searchParams.set('fields', 'campaigns.long_archive_url,campaigns.settings.subject_line,campaigns.settings.title,campaigns.send_time');
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
            title: campaign.settings.subject_line,
            guid: campaign.settings.title,
            date: campaign.send_time
        };
    });

    let v2duplicates = mcCampaigns.filter(campaign => campaign.guid.length > 10);
    mcCampaigns = mcCampaigns.filter(campaign => {
        if (campaign.guid.length > 10) return false;
        let v2 = v2duplicates.find(v2 => v2.guid.startsWith(campaign.guid));
        if (v2) campaign.url = v2.url;
        return true;
    });

    campaigns = campaigns.concat(mcCampaigns);

    let xml = `<?xml version="1.0" encoding="utf-8" standalone="yes"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
        <title>FibraClick - Riflessione ottica</title>
        <link>https://fibra.click/newsletter/</link>
        <description>Riflessione ottica, la newsletter settimanale di FibraClick</description>
        <language>it-IT</language>
        <lastBuildDate>${buildRFC822Date(new Date())}</lastBuildDate>
        <atom:link href="https://fibra.click/newsletter/index.xml" rel="self" type="application/rss+xml" />`;

    campaigns.forEach(campaign => {
        xml += `
        <item>
            <title>${campaign.title}</title>
            <link>${campaign.url}</link>
            <guid>${campaign.guid}</guid>
            <pubDate>${buildRFC822Date(new Date(campaign.date))}</pubDate>
        </item>`;
    });

    xml += `
    </channel>
</rss>`;

    return new Response(xml, {
        headers: {
            'Content-Type': 'application/xml',
            'Cache-Control': 'public, max-age=3600'
        }
    });
}

// Mix of https://whitep4nth3r.com/blog/how-to-format-dates-for-rss-feeds-rfc-822/ and Copilot, let's hope
function buildRFC822Date(date) {
    const dayStrings = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const monthStrings = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const day = dayStrings[date.getDay()];
    const dayNumber = addLeadingZero(date.getDate());
    const month = monthStrings[date.getMonth()];
    const year = date.getFullYear();
    const time = `${addLeadingZero(date.getHours())}:${addLeadingZero(date.getMinutes())}:${addLeadingZero(date.getSeconds())}`;

    const timezoneOffset = date.getTimezoneOffset();
    let timezoneOffsetString = timezoneOffset <= 0 ? '+' : '-';
    timezoneOffsetString += addLeadingZero(Math.abs(timezoneOffset / 60));
    timezoneOffsetString += addLeadingZero(Math.abs(timezoneOffset % 60));

    return `${day}, ${dayNumber} ${month} ${year} ${time} ${timezoneOffsetString}`;
}

function addLeadingZero(num) {
    num = num.toString();
    while (num.length < 2) num = '0' + num;
    return num;
}
