const NEWSLETTER_TEMPLATE = `
<div class="propaganda">
    <div class="propaganda-header">Una piccola interruzione. <span>L'articolo prosegue sotto ↓</span></div>

    <div class="propaganda-text">
        <span class="propaganda-title">Non perderti le novità.</span><br>
        Iscriviti a <strong>Riflessione ottica</strong>, la newsletter settimanale di FibraClick. <strong>Ogni domenica le principali novità sulla banda ultra larga e Internet in Italia, spiegate in 5 minuti.</strong> Niente spam, promesso.
        
        <div id="mc_embed_signup">
          <form action="https://newsletter.fibra.click/subscription/form" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank">
              <input type="email" value="" name="email" class="email" id="mce-EMAIL" placeholder="Il tuo indirizzo email..." required>
              <input type="hidden" name="l" value="44de0b25-d6e5-435f-abcd-56b890a6316e">
              <input type="hidden" name="name" value="">
              <input type="hidden" name="nonce" value="">
              <input type="submit" value="ISCRIVITI" id="mc-embedded-subscribe">
              <label for="newsletter-signup-privacy" id="newsletter-signup-privacy-label" style="display:block;padding-top:10px">
                <input type="checkbox" required id="newsletter-signup-privacy" />
                Ho letto l'<a href="https://fibra.click/privacy.pdf" target="_blank">informativa sulla privacy</a>.
            </label>
            <div class="h-captcha" data-sitekey="9ba852e0-266e-4570-8f24-1a4028c686cc">
            </div>
          </form>
        </div>

        <!--Seguici anche su <a target="_blank" href="https://t.me/FibraClick">Telegram</a>, <a target="_blank" href="https://www.facebook.com/fibraclick">Facebook</a> e <a target="_blank" href="https://twitter.com/fibraclick">Twitter</a>.-->
    </div>
</div>
`;

const AD_TEMPLATE = `
<div class="propaganda" style="margin-top:1.5rem">
    <div class="propaganda-header">Una piccola interruzione. <span>L'articolo prosegue sotto ↓</span></div>
        <ins class="adsbygoogle"
            style="display:block"
            data-ad-client="ca-pub-7028530372547989"
            data-ad-slot="9383150637"
            data-ad-format="auto"
            data-full-width-responsive="true"></ins>
    </div>
</div>`;

function onLoad() {
    const headings = document.querySelectorAll('h2, h3');
    injectCta(headings);
    if (window.location.hostname == 'fibra.click') {
        injectAds(headings);
    }
}

function injectCta(headings) {
    const ctaNode = headings[headings.length - 1];
    if (ctaNode) {
        const url = encodeURIComponent(location.href);
        const html = NEWSLETTER_TEMPLATE.replace('{url}', url);
        ctaNode.insertAdjacentHTML('beforebegin', html);
        document.querySelector('#mc-embedded-subscribe-form').addEventListener('click', function(e) {
            hcaptcha.render(document.querySelector('.h-captcha'));
        });
    }
}

function injectAds(headings) {
    let lastNodeOffset;
    let adNodes = [];
    headings.forEach((node, i) => {
        if (i == headings.length - 1) {
            return;
        }
        if (lastNodeOffset && node.offsetTop - lastNodeOffset < window.innerHeight) {
            return;
        }
        lastNodeOffset = node.offsetTop;
        adNodes.push(node);
    });

    adNodes.forEach(node => {
        node.insertAdjacentHTML('beforebegin', AD_TEMPLATE);
        (adsbygoogle = window.adsbygoogle || []).push({});
    });
}

window.onload = onLoad;
