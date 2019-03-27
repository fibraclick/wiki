---
title: "Cos'è il piano BUL"
date: 2019-03-24
lastmod: 2019-03-28
authors: [Matteo]
description: ""
categories: [Definizioni, Copertura]
---

La **Strategia nazionale per la banda ultralarga**, o **piano BUL**, è il progetto avviato dal Governo italiano nel marzo del 2015 con lo scopo di pianificare gli interventi in materia di banda larga e ultralarga.[^1]

Il piano si divide in due fasi, con l'intento di raggiungere gli obiettivi della Commissione Europa fissati per il 2020 e successivamente quelli per il 2025.

I bandi per la prima fase sono stati tutti vinti dall'azienda **Open Fiber**, che coprirà **entro il 2020 le aree bianche del Paese**, adottando le architetture FTTH (~80%) e FWA (~20%).

I prossimi paragrafi approfondiscono più in dettaglio la nascita e gli sviluppi del piano.

{{% info %}}
Vedi anche:

- [Cosa significano FTTC, FTTE, FTTH, FTTS e FWA]({{< relref "architetture.md" >}})
- [Come controllare la presenza di intervento pubblico o privato]({{< relref "sitobul.md" >}})
{{% /info %}}

## Gli obiettivi europei per il 2020

La **Commissione Europea** ha stabilito[^2] nel 2010 tre obiettivi da raggiungere entro il 2020:

1. coprire tutti i cittadini con la banda larga di base (0-30 Mbps) entro il 2013;
2. coprire tutti i cittadini con la **banda larga veloce (>30 Mbps) entro il 2020**;
3. fare in modo che il **50% delle famiglie** europee siano abbonate a connessioni a **banda ultralarga (>100 Mbps) entro il 2020**.

Il piano è ambizioso, ed è stato stimato che avrebbe richiesto in totale 250 miliardi di euro di investimenti. Circa 15 miliardi di dollari sono stati messi a disposizione dall'UE nel periodo 2014-2020 per agevolare i piani nazionali.[^3]

{{% green %}}
In Italia quando si parla di connessioni a **"30 Mbps" ci si riferisce all'architettura FTTC o FWA**. Questo perché per limiti tecnologici né la VDSL né il wireless riescono (per ora) a garantire in modo consistente più di 100 Mbps in download.

Ad oggi **con "100 Mbps" si intende invece esclusivamente la FTTH**.
{{% /green %}}

## Gli obiettivi europei per il 2025

Nel 2016 la Commissione Europea ha annunciato gli obiettivi per il 2025:

1. connettività di almeno 1 Gbps per scuole e uffici pubblici;
2. connettività di **almeno 100 Mbps, espandibile a Gigabit, per tutte le famiglie europee**;
3. copertura 5G ininterrotta in tutte le aree urbane e lungo i principali assi di trasporto terrestre.

## Il piano BUL italiano

Il piano BUL in Italia è stato presentato nel 2015 ed è diviso in due fasi, corrispondenti rispettivamente agli obiettivi europei per il 2020 e per il 2025. La prima fase è attualmente in corso e sarà completata entro il 2020, mentre la seconda fase è ancora da definire in dettaglio.

La prima fase del piano BUL è stata finanziata tramite fondi FSC, FESR e FEASR e ha l'obiettivo di coprire il 24,6% della popolazione italiana, cioè la porzione considerata a rischio di divario digitale.[^9]

{{% green %}}
###### Cos'è l'intervento diretto

A differenza di quanto avveniva in precedenza, il piano BUL 2015-2020 ha adottato in modo esclusivo il modello di **intervento diretto**.

Questo prevede che il coordinamento della rete sia gestito da un'autorità completamente pubblica, in particolare **Infratel**, un'azienda controllata dal Ministero dello Sviluppo Economico.

**La rete realizzata è perciò di proprietà pubblica** e ad accesso aperto all'ingrosso (*open access wholesale*). In altre parole, significa che **tutti gli operatori possono utilizzarla** dietro pagamento di un canone.
{{% /green %}}

{{% warn %}}
⚠ L'intervento diretto previsto dal piano BUL è considerato un aiuto di Stato e deve quindi sottostare a determinate norme in tutela del mercato e degli investimenti privati.

Per questo motivo, il piano si occupa di **coprire soltanto le aree non già coperte da altri operatori privati**. Sono di conseguenza escluse le aree coperte in [FTTC]({{< relref "architetture.md" >}}), cioè le cosiddette aree grigie o cluster B. Sono invece incluse le aree coperte solo con tecnologie wireless (es. Eolo).

La questione è approfondita qua sotto quando si parla di consultazioni, aree e cluster 👇
{{% /warn %}}

## I bandi pubblici

La realizzazione della rete pubblica è stata affidata tramite tre bandi pubblici all'azienda **Open Fiber**, controllata al 50% da Enel e al 50% da Cassa Depositi Prestiti (CDP). Open Fiber avrà in concessione la rete per i prossimi vent'anni, e sarà responsabile anche della sua manutenzione.

{{% info %}}
Vedi anche [Cos'è e cosa fa Open Fiber]({{< relref "openfiber.md" >}}).
{{% /info %}}

I bandi pubblici hanno rispettato il principio della **neutralità tecnologica**[^5], e cioè il criterio di scelta della proposta vincitrice non è stato la tecnologia utilizzata (es. VDSL, LTE, ecc.) ma piuttosto le caratteristiche di qualità garantite dalla proposta.

Ciascuno dei **tre bandi Infratel** ha riguardato un insieme di regioni o province autonome. Nello specifico:

- **BUL1**: Abruzzo, Molise, Emilia Romagna, Lombardia, Toscana e Veneto;
- **BUL2**: Basilicata, Campania, Friuli Venezia Giulia, Lazio, Liguria, Marche, Piemonte, Provincia Autonoma di Trento, Sicilia, Umbria e Valle d’Aosta;
- **BUL3**: Calabria, Puglia e Sardegna.

{{% warn %}}
⚠ La provincia di Bolzano non partecipa al piano BUL.
{{% /warn %}}

{{% warn %}}
⚠ La Sardegna ha preferito ampliare la copertura in modo indipendente con un accordo con TIM (FTTC). La copertura Open Fiber in Sardegna è quindi limitata. Per approfondimenti, visita il sito web [Sardegna Digital](http://www.sardegnadigital.it/banda-ultra-larga-sardegna-vdsl-fibra-ottica/).
{{% /warn %}}

## L'offerta di Open Fiber

**Open Fiber** ha vinto tutti e tre i bandi Infratel (per il terzo bando c'è stato un solo candidato), grazie a delle offerte fortemente vantaggiose rispetto a quanto richiesto dal bando e dagli obiettivi europei.[^4]

In particolare, la proposta di Open Fiber è così articolata (le percentuali si riferiscono al totale delle unità immobiliari coinvolte nel progetto):

- **Primo bando**[^6]
 - 87% di copertura FTTH (>100 Mbps)
 - 4% di copertura FTTH facoltativa (>100 Mbps)
 - 8% di copertura FWA facoltativa (>30 Mbps)
 - 1% non coperto
- **Secondo bando**[^7]
 - 74% di copertura FTTH (>100 Mbps)
 - 26% di copertura FWA (>30 Mbps)
- **Terzo bando**[^8]
 - 70% di copertura FTTH (>100 Mbps)
 - 30% di copertura FWA (>30 Mbps)

{{% info %}}
Vedi anche:

- [Cosa significano FTTC, FTTE, FTTH, FTTS e FWA]({{< relref "architetture.md" >}})
- [Come controllare la presenza di intervento pubblico o privato]({{< relref "sitobul.md" >}})
{{% /info %}}

## L'avanzamento del progetto

Per via dei numerosi ricorsi e della lentezza nell'organizzazione, la copertura è stata avviata con notevole ritardo.

Infratel e Open Fiber hanno dichiarato di aver aperto più di 1000 cantieri durante il 2018, con l'obiettivo di aprirne altri 2000 entro la fine del 2019.[^10][^11]

Si noti che i comuni interessati dal bando sono poco più di 7000, e frequentemente ciascuno di questi ha più di un cantiere (FTTH e FWA).

Lo **stato dei lavori** (comune per comune) viene pubblicato circa una volta al mese sul sito [Banda Ultralarga](http://bandaultralarga.italia.it/). Se vuoi ricevere in automatico gli aggiornamenti, segui il [canale Telegram di FibraClick](https://t.me/FibraClick) oppure gli account [Facebook](https://fb.me/FibraClick) e [Twitter](https://twitter.com/FibraClick).

Al momento (aprile 2019) **nessun utente è stato ancora attivato su rete BUL**, e non sono ancora noti con certezza i nomi degli operatori che saranno disponibili. Alcune voci riportano che **la vendibilità** dei comuni con infrastruttura completata e collaudata **sarà aperta durante l'estate del 2019**.

## Le consultazioni Infratel

Come menzionato, la fase 1 del piano BUL ha l'obiettivo di ridurre il divario digitale tra le aree in cui sono presenti investimenti privati in banda larga (es. Open Fiber FTTH o TIM FTTC) e le aree in cui c'è solo l'ADSL (o inferiore).

A partire da marzo 2015, Infratel mantiene una **mappatura di queste aree** tramite delle apposite **consultazioni pubbliche**. Le aree, aggiornate ogni circa due anni, si distinguono in:[^12]

- **aree nere**: presenza nei prossimi tre anni di almeno due reti a banda ultralarga di operatori diversi
- **aree grigie**: presenza nei prossimi tre anni di una sola rete a banda ultralarga
- **aree bianche**: nessuna previsione di investimento privato per banda ultralarga nei prossimi tre anni

**Le aree bianche sono le aree che sono state prese in considerazione per il piano BUL 2015-2020**. Inizialmente è stata presa come riferimento la consultazione Infratel 2015, ma in seguito ha assunto valore la consultazione 2017 (poi aggiornata nel 2018).

{{% green %}}
Quando si parla di area, non si intende territorio comunale. Ogni comune può essere suddiviso in più aree, in modo da distinguere tra aree grigie e bianche all'interno dello stesso comune. In Italia sono state definite 94˙645 aree su circa 8˙000 comuni.
{{% /green %}}

**Le aree sono il riferimento a livello europeo per valutare la possibilità di intervento da parte dello Stato in materia di banda ultralarga**. Hanno tuttavia un difetto, quello di considerare il numero di infrastrutture presenti ma non il livello di qualità offerto.

Per questo motivo, l'Italia ha definito un'ulteriore distinzione[^12], basata sui **cluster A, B, C e D**. I cluster sono definiti in base alle infrastrutture presenti nei successivi tre anni:

- **cluster A**: aree in cui sarà presente almeno un'infrastruttura che garantisca almeno 100 Mbps in download (in Italia equivale a **FTTH**)
- **cluster B**: aree in cui sarà presente almeno un'infrastruttura che garantisca almeno 30 Mbps in download (in Italia equivale a **FTTC**, **le connessioni wireless non vengono considerate**)
- **cluster C e D**: aree in cui non saranno previste connessioni >30 Mbps

{{% green %}}
Le aree interessate dal **piano BUL 2015-2020** (fase 1) sono quelle dei **cluster C e D**.
{{% /green %}}

La differenza tra cluster C e D sta nell'entità dell'intervento pubblico consentito allo Stato, che nel cluster C si limita al 70% del totale degli investimenti per quel cluster, mentre nel cluster D non ha limiti.

Anche **nel cluster B è consentito l'intervento diretto dello Stato fino al 70%** degli investimenti totali, il che ci porta alla fase 2 del piano BUL.

## La fase 2: le aree grigie

Ad aprile 2018 Infratel ha pubblicato un documento in cui esprime delle intenzioni generali per quanto riguarda la fase 2 del piano BUL.[^13]

Lo scopo è raggiungere gli obiettivi della Commissione Europea fissati per il 2025, e in particolare la copertura della totalità della popolazione con connessioni che garantiscano almeno 100 Mbps in download.

In pratica questo si traduce in un **intervento pubblico diretto per portare la FTTH a tutte le abitazioni del cluster B**, cioè dove è presente solo la FTTC senza previsioni di ulteriori investimenti.

Questa fase del piano è ancora in alto mare, ma si saprà di più durante il 2019 o 2020, man mano che la fase 1 si avvicina alla conclusione.

## Verificare gli interventi

Tramite il sito [Banda Ultralarga](http://bandaultralarga.italia.it/) del MiSE è possibile verificare indirizzo per indirizzo i risultati delle consultazioni Infratel, fino al 2020, e di conseguenza capire se sarà presente intervento privato/pubblico a 30 o 100 Mbps.

{{% info %}}
Per approfondire, consulta la pagina [Come controllare la presenza di intervento pubblico o privato]({{< relref "sitobul.md" >}}).
{{% /info %}}

[^1]: http://bandaultralarga.italia.it/piano-bul/strategia/
[^2]: Gli obiettivi sono contenuti nel documento che descrive il piano *Agenda Digitale 2020*. Tra le varie cose, prevedeva anche che ogni Stato europeo presentasse entro il 2012 un piano di interventi per raggiungere gli obiettivi. Molti Stati europei, Italia inclusa, hanno presentato il piano con anni di ritardo. https://eur-lex.europa.eu/LexUriServ/LexUriServ.do?uri=COM:2010:0245:FIN:EN:PDF
[^3]: http://publications.europa.eu/webpub/eca/special-reports/broadband-12-2018/it/
[^4]: http://bandaultralarga.italia.it/piano-bul/obiettivi/
[^5]: http://europa.eu/rapid/press-release_IP-16-2363_it.htm
[^6]: https://openfiber.it/it/fibra-ottica/area-infratel/bandi-gara/aree-bianche
[^7]: https://openfiber.it/it/fibra-ottica/area-infratel/bandi-gara/seconda-gara
[^8]: https://www.tomshw.it/altro/open-fiber-si-aggiudica-anche-il-terzo-bando-infratel-cablera-in-fibra-le-aree-bianche-di-puglia-calabria-e-sardegna/
[^9]: http://bandaultralarga.italia.it/piano-aree-bianche/obiettivi/
[^10]: http://www.infratelitalia.it/per-saperne-di-piu/archivio-news/banda-ultra-larga-oltre-1000-cantieri-aperti-raggiunto-lobiettivo-del-2018/
[^11]: https://www.tomshw.it/altro/infratel-e-open-fiber-2000-cantieri-fibra-aperti-nel-2019-per-il-grande-progetto-bul/
[^12]: https://www.telecomitalia.com/tit/it/notiziariotecnico/edizioni-2016/n-2-2016/capitolo-3/approfondimenti-2.html
[^13]: http://bandaultralarga.italia.it/pubblicato-il-piano-per-le-aree-grigie-al-via-la-consultazione/

{{< footer >}}
