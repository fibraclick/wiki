window.propaganda = {
    template: `
<div class="propaganda">
    <div class="propaganda-header">Una piccola interruzione. <span>L'articolo prosegue sotto ↓</span></div>

    <div class="propaganda-text">
        <span class="propaganda-title">Non perderti gli aggiornamenti.</span><br>
        Iscriviti a <strong>Riflessione ottica</strong>, la newsletter settimanale di FibraClick. <strong>Ogni domenica le principali novità sulla banda ultra larga e Internet in Italia, spiegate in 5 minuti.</strong> Niente spam, promesso.
        
        <div id="mc_embed_signup">
          <form action="https://click.us20.list-manage.com/subscribe/post?u=43e7f0aa512956e35c8d37395&amp;id=8d73a21b79&amp;SIGNUP=propaganda&amp;WIKIURL={url}" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank">
              <input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="Il tuo indirizzo email..." required>
              <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_43e7f0aa512956e35c8d37395_8d73a21b79" tabindex="-1" value=""></div>
              <input type="submit" value="ISCRIVITI" name="subscribe" id="mc-embedded-subscribe">
          </form>
        </div>

        <!--Seguici anche su <a target="_blank" href="https://t.me/FibraClick">Telegram</a>, <a target="_blank" href="https://www.facebook.com/fibraclick">Facebook</a> e <a target="_blank" href="https://twitter.com/fibraclick">Twitter</a>.-->
    </div>
</div>
`,

    init: function() {
        window.onload = window.propaganda.onLoad;
    },

    onLoad: function () {
        console.log('[Propaganda] onLoad');

        var node = window.propaganda.findNode();

        console.log('[Propaganda] Chosen node:', node);

        if (node) {
            var url = encodeURIComponent(location.href);
            var html = window.propaganda.template.replace('{url}', url);

            console.log('[Propaganda] Injecting with URL:', url);

            node.insertAdjacentHTML('beforebegin', html);

            console.log('[Propaganda] Injected');
        }
    },

    findNode: function() {
        var postHeight = document.querySelector('.post-content').offsetHeight;
        var half = postHeight / 2;
        var nodes = document.querySelectorAll('h2');

        var putBeforeThis;

        for (var i = 0; i < nodes.length; i++) {
            if (nodes[i].offsetTop > half) {
                if (nodes[i].offsetTop / postHeight > 0.8) {
                    i--;
                }

                if (nodes[i].offsetTop > half) {
                    putBeforeThis = nodes[i];
                }

                break;
            }
        }

        if (!putBeforeThis) {
            if (nodes.length >= 2) {
                putBeforeThis = nodes[nodes.length - 1];
            }
            else {
                return;
            }
        }

        return putBeforeThis;
    },
};

window.propaganda.init();
