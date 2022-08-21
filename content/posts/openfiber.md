---
title: "Cos'è e cosa fa Open Fiber"
slug: openfiber
date: 2019-04-17T21:34:32+02:00
lastmod: 2022-08-21T21:00:00+02:00
authors: [Matteo]
description: Open Fiber realizza reti in fibra ottica FTTH, con l'obiettivo di coprire centinaia di città e migliaia di piccoli comuni nel corso dei prossimi anni.
categories: [Definizioni, Copertura, FTTH]
image: /social/openfiber.jpg
---

**Open Fiber** è un'azienda nata a dicembre 2015 con l'obiettivo di realizzare reti [FTTH]({{< relref "/posts/architetture.md" >}}) sul territorio italiano. Fino al 2021 era partecipata al 50% da Enel e al 50% da Cassa Depositi e Prestiti (CDP), la società a controllo pubblico che finanzia opere e infrastrutture. Da quando Enel è uscita dal progetto **CDP detiene il 60% della società** mentre il restante 40% fa capo al fondo di investimento australiano Macquarie.[^società]

[^società]: *Open Fiber - Struttura societaria* https://openfiber.it/corporate/societa/struttura-societaria/

Open Fiber è un operatore *wholesale-only*, e cioè di vendità all'ingrosso. Per poter attivare una linea Internet su rete Open Fiber bisogna quindi rivolgersi a un operatore al dettaglio, come Vodafone, Tiscali, Wind Tre, Fastweb, ecc.

L'infrastruttura FTTH è realizzata con la tecnologia [GPON]({{< relref "/posts/gpon.md" >}}), che consente di fornire connessioni con velocità anche di **1 Gbps in download**. La velocità offerta (nominale ed effettiva) dipende però dall'operatore scelto.

Le attività di Open Fiber sono finanziate **sia con investimenti propri che con fondi pubblici**. Nel primo caso si tratta di copertura delle aree considerate remunerative (grandi città), mentre nel secondo caso prevalentemente di "aree bianche", cioè zone a fallimento di mercato dove la banda larga non è presente.

{{< info >}}
Se stai cercando informazioni sulla **rete pubblica** realizzata per **Infratel** nell'ambito del [piano BUL aree bianche]({{< relref "/posts/piano-aree-bianche.md" >}}), leggi la sezione "Finanziamenti pubblici e aree bianche".
{{< /info >}}

{{< toc >}}

## Copertura delle città

Il piano originale di Open Fiber prevedeva di coprire in FTTH **circa 270 città entro il 2023**, con un investimento stimato di circa 6,5 miliardi di euro.[^obiettivi][^adnk]

[^obiettivi]: *Open Fiber - Obiettivi* https://openfiber.it/corporate/chi-siamo/obiettivi/
[^adnk]: *Open Fiber: 3,5 miliardi per banda ultralarga*, 14 aprile 2018 https://www.adnkronos.com/soldi/economia/2018/04/13/open-fiber-miliardi-per-banda-ultralarga_nJdSg9xbVbg0vhxPjMBqFJ.html

A maggio 2020 Open Fiber ha aggiornato il piano estendendolo ad altre **1,1 milioni di abitazioni** nelle cosiddette aree grigie, cioè **città più piccole** dove però si concentra la maggior parte delle aziende italiane.[^grigie]

[^grigie]: *Open Fiber rilancia sulla rete. Nuovi fondi per contrastare Tim*, 6 agosto 2020 https://rep.repubblica.it/pwa/generale/2020/08/06/news/open_fiber_rilancia_sulla_rete_nuovi_fondi_per_contrastare_tim-263958470/

A fine 2021 il piano industriale è stato ulteriormente aggiornato e prevede ora investimenti per raggiungere **24 milioni di unità immobiliari** grazie a 11 miliardi di euro di investimenti.[^piano2021]

[^piano2021]: *Open Fiber: via libera al nuovo Piano Industriale. In campo circa 11 miliardi di nuovi investimenti* https://openfiber.it/media/comunicati-stampa/open-fiber-piano-industriale/

La lista completa delle città pianificate non è pubblica, ma le città in cui la rete è in realizzazione vengono inserite sul [sito ufficiale di Open Fiber](https://openfiber.it).

{{< green >}}
###### La rete Metroweb

Open Fiber ha incorporato alla sua nascita la rete di Metroweb, realizzata con il sostegno di Fastweb a partire dagli anni 2000 a Milano e in poche altre città italiane. Fastweb ha conservato la possibilità di vendere la ex rete Metroweb, e nel 2019 ha [annunciato](https://www.fastweb.it/corporate/media/comunicati-stampa/fastweb-e-open-fiber-accordo-per-l-utilizzo-da-parte-di-fastweb-delle-connessioni-ftth-di-open-fiber-e-l-accesso-reciproco-alle-rispettive-infrastrutture-di-rete/) di voler estendere la copertura ad altre città Open Fiber.
{{< /green >}}

## Lavori di copertura

La copertura FTTH prevede l'**installazione di un PTE** (*Punto di Terminazione di Edificio*), una scatola che viene montata nel locale contatori del palazzo o su una parete esterna dell'edificio.

Nel caso di un condominio, Open Fiber chiederà l'autorizzazione per procedere all'amministratore, che però per legge non può opporsi (vedi nota).[^legge]

[^legge]: *DECRETO LEGISLATIVO 15 febbraio 2016, n. 33*, art. 8 https://www.gazzettaufficiale.it/eli/id/2016/03/09/16G00041/sg

{{< fig src="/images/ofcartello.jpg" caption="Avviso che anticipa l'intervento di Open Fiber in un condominio" alt="Foglio di carta appeso con il logo Open Fiber, che dice \"Arriva OpEn Fiber\"" vertical="true" >}}

{{< fig src="/images/roe-of1.jpg" caption="PTE Open Fiber. Grazie a Edoardo M. per la foto" alt="Scatola di un PTE con l'etichetta Open Fiber" vertical="true" >}}

{{< fig src="/images/roe-ff-of.jpg" caption="ROE Flash Fiber (in alto) e doppio PTE Open Fiber. Grazie a Luca Z. per la foto" alt="Tre scatole di ROE/PTE attaccate al muro di una casa" vertical="true" >}}

## Operatori disponibili

La rete Open Fiber è ad "accesso aperto", e cioè resa disponibile a tutti gli operatori, che possono quindi utilizzarla per vendere connessioni a Internet alla velocità che preferiscono.

Gli operatori disponibili **dipendono da città a città**, e sono indicati più precisamente sul [sito ufficiale](https://openfiber.it/it). Sono in genere presenti alcuni operatori nazionali (Vodafone, Wind Tre, Tiscali, ecc.), e a volte altri operatori locali.

## Tecnologia

La rete FTTH di Open Fiber è realizzata esclusivamente utilizzando la tecnologia GPON, che ha la peculiarità di non richiedere elementi di rete attivi (alimentati) tra la centrale e l’abitazione del cliente.

{{< info >}}
I dettagli della rete Open Fiber sono illustrati nell'apposita sezione nella pagina [Cos'è e come funziona la GPON]({{< relref "/posts/gpon.md#open-fiber" >}}).
{{< /info >}}

## Finanziamenti pubblici e aree bianche

Nell'ambito del [piano BUL aree bianche]({{< relref "/posts/piano-aree-bianche.md" >}}), Open Fiber ha vinto **tre gare pubbliche** per la realizzazione di infrastrutture a banda ultralarga nelle aree svantaggiate del Paese. Queste aree sono le cosiddette "**aree bianche**", o a fallimento di mercato, e sono quelle in cui è presente solo l'ADSL o una tecnologia inferiore. Rappresentano **circa il 25% della popolazione** italiana.

L'offerta di Open Fiber è di molto superiore a quanto richiesto dai bandi, e prevede di coprire circa il **75% delle aree bianche in FTTH**, e il restante in **FWA** (*Fixed Wireless Access*).

{{< green >}}
###### Requisiti minimi di velocità
La velocità di accesso che deve essere garantita secondo i bandi è di **100 Mbps nel caso di FTTH** e **30 Mbps nel caso di FWA**.

Le tecnologie utilizzate da Open Fiber sono quindi calibrate per garantire queste prestazioni. Ad esempio, per la FTTH è stata scelta la GPON con un fattore di splitting 1:16, che a differenza di quanto avviene nelle aree nere e grigie riesce ad offrire circa 150 Mbps per linea, anche in caso di contemporaneità.

La FTTH Open Fiber viene offerta agli operatori in due profili: 100 Mbps oppure 1 Gbps *best-effort*.
{{< /green >}}

La rete realizzata è di **proprietà pubblica**, ma è data in gestione a Open Fiber con una concessione rinnovabile di 20 anni.

Nelle aree in cui è presente la rete pubblica si trovano sulla strada numerosi pozzetti con la scritta "#BUL rete pubblica", come nella foto seguente.

{{< fig src="/images/pozzetto-bul1.jpg" caption="Pozzetto realizzato da Open Fiber in un'area bianca coperta in FTTH" alt="Chiusino di un pozzetto, con la scritta BUL rete pubblica" >}}

{{< info >}}
###### Per approfondire i temi di questa sezione:
- [Cos'è il piano BUL]({{< relref "/posts/piano-aree-bianche.md" >}})
- [Cosa sono le aree nere, grigie, e bianche]({{< relref "/posts/aree.md" >}})
- [Come riconoscere la rete pubblica BUL]({{< relref "/posts/rete-bul.md" >}})
{{< /info >}}

{{< footer >}}
