document.addEventListener('DOMContentLoaded', () => {
    bootstrap();
});

const State = {
    comuni: [],
    loadComuni: function() {
        m.request("index.json").then(data => {
            this.comuni = data;
        });
    },
    filter: {
        results: [],
        load: function(term) {
            term = term.toLowerCase().trim();

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
                    let startIndex = name.split(' ').findIndex(x => x.indexOf(term) == 0);

                    if (startIndex >= 0) {
                        cur.hl = cur.nome.replace(
                            new RegExp(term, 'i'),
                            '<em>' + cur.nome.slice(startIndex, term.length) + '</em>'
                        );

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
            m.request("comuni/" + key + ".json").then(data => {
                this.data = data;
            });
        }
    }
};

const FilterField = {
    value: '',
    view: function () {
        return m("div", [
            m("input[type=text][class=statobul-input][placeholder='Cerca comune...'][autofocus]", {
                oninput: e => State.filter.load(e.target.value)
            })
        ]);
    }
};

const LoadingStatus = {
    view: function() {
        return State.isLoading ? m("div[class=statobul-loading]", m("img[src=/loading.gif]")) : m("div");
    }
};

const FilterResults = {
    oninit: function() {
        State.loadComuni();
    },
    view: function() {
        return m("ul[class=statobul-filter]",
            State.filter.results.map(x => {
                return m("li", {
                    onclick: e => State.comune.load(x.key)
                }, m("a", m.trust(x.regione + " - " + x.hl)));
            })
        );
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
            m(LoadingStatus),
            m(FilterResults),
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
