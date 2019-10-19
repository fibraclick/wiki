document.addEventListener('DOMContentLoaded', () => {
    bootstrap();
});

const State = {
    isLoading: true,
    comuni: [],
    loadComuni: function() {
        this.isLoading = true;
        m.request("index.json").then(data => {
            this.comuni = data;
            this.isLoading = false;
        });
    },
    filter: {
        results: [],
        term: null,
        load: function(term) {
            term = term.toLowerCase().trim();
            this.term = term;

            if (!term) {
                this.results = [];
                return;
            }

            let exactMatches = [];
            let matches = [];

            for (let i = 0; i < State.comuni.length; i++) {
                let cur = State.comuni[i];
                let name = cur.nome.toLowerCase();

                if (name == term) {
                    cur.hl = '<em>' + cur.nome + '</em>';
                    exactMatches.unshift(cur);
                }
                else {
                    let startIndex = name.indexOf(term); // start of string

                    if (startIndex != 0) {
                        startIndex = name.indexOf(' ' + term); // preceded by space
                        if (startIndex != -1) startIndex += 1; // add 1 to ignore the space 
                    }

                    if (startIndex >= 0) {
                        cur.hl = cur.nome.substr(0, startIndex)
                            + "<em>" + cur.nome.substr(startIndex, term.length) + "</em>"
                            + cur.nome.substr(startIndex + term.length);

                        matches.push(cur);
                    }
                }
            }

            matches.sort((x, y) => x.nome.length > y.nome.length); // shorter first
            this.results = exactMatches.concat(matches).slice(0, 5);
        }
    },
    comune: {
        data: null,
        load: function(key) {
            State.isLoading = true;

            m.request("comuni/" + key + ".json").then(data => {
                this.data = data;
                State.isLoading = false;
            });
        }
    }
};

const FilterField = {
    value: '',
    view: function () {
        return m("input[type=text][class=statobul-input][placeholder='Cerca comune...'][autofocus]", {
            oninput: e => State.filter.load(e.target.value)
        });
    }
};

const LoadingStatus = {
    view: function() {
        return State.isLoading ? m("div[class=statobul-loading]", m("img[src=/loading.gif]")) : [];
    }
};

const FilterResults = {
    oninit: function() {
        State.loadComuni();
    },
    view: function() {
        if (State.filter.results.length) {
            return m("ul[class=statobul-filter]",
                State.filter.results.map(x => {
                    return m("li", {
                        onclick: e => State.comune.load(x.key)
                    }, m("a", m.trust(x.regione + " - " + x.hl)));
                })
            );
        }
        else if (State.filter.term) {
            return m("p", [
                m("strong", "Nessun risultato."),
                " Se il comune non è presente potrebbe significare che non è incluso nel piano nazionale. Se ritieni si tratti di un errore, segnalacelo ",
                m("a", { href: "https://forum.fibra.click", target: "_blank" }, "sul forum"),
                "."
            ]);
        }
    }
};

const ResultBlock = {
    view: function(vnode) {
        return [
            m("h4", vnode.attrs.type.toUpperCase()),
            m("dl",
                State.comune.data[vnode.attrs.type].reduce((result, x) => {
                    result.push(
                        m("dt", formatDate(x.date)),
                        m("dd", x.text)
                    );

                    return result;
                }, [])
            )
        ];
    }
};

const LookupResult = {
    view: function() {
        if (!State.comune.data) return [];

        return [
            m("h2", "Stato cantieri - " + State.comune.data.nome),
            m(ResultBlock, { type: 'fibra' }),
            m(ResultBlock, { type: 'fwa' })
        ];
    }
};

const Root = {
    view: () => {
        return m("div", [
            m(FilterField),
            m(FilterResults),
            m(LoadingStatus),
            m(LookupResult),
        ]);
    }
};

function bootstrap() {
    const root = document.getElementById("statobul");
    m.mount(root, Root);
}

function formatDate(d) {
    return d.split('-').map(x => ('0' + x).slice(-2)).join('/');
}
