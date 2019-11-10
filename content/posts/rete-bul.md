---
title: "Come riconoscere la rete pubblica BUL"
slug: riconoscere-rete-bul
date: 2019-09-01T20:56:49+02:00
lastmod: 2019-11-08T21:00:00+01:00
authors: [Matteo]
description: "La rete pubblica BUL copre in banda ultralarga il 25% della popolazione. Può quindi essere utile conoscerne gli elementi principali."
categories: [Copertura, FTTH, Piano BUL]
image: /social/riconoscere-rete-bul.jpg
---

La **rete pubblica BUL** è realizzata da [**Open Fiber**]({{< relref "/posts/openfiber.md" >}}) per conto di **Infratel** (società che fa capo al MiSE) nell'ambito del [piano BUL]({{< relref "/posts/bul.md" >}}) 2015-2020, e ha l'obiettivo di coprire il 25% della popolazione con connessioni <abbr title="Fiber To The Home, fibra fino a casa">FTTH</abbr> (per circa il 75%) e <abbr title="Fixed Wireless Access, connessione senza fili">FWA</abbr> entro il 2020.

Un buon inizio per provare a capire se si è coinvolti dal piano è seguire la guida [*Come controllare la presenza di intervento pubblico o privato*]({{< relref "/posts/sitobul2019.md" >}}), che però dà a volte risultati imprecisi o non sufficientemente dettagliati. Il sito [Open Fiber-Area Infratel](https://openfiber.it/it/fibra-ottica/area-infratel/piano-copertura-infratel) fornisce informazioni più affidabili, ma si limita a indicare il numero di unità immobiliari previste o coperte nel comune.

Può quindi essere utile imparare a riconoscere gli elementi della rete BUL, che nei prossimi anni vedrà una notevole espansione.

{{< toc >}}

## Pozzetti #BUL

Nelle aree coperte in FTTH, questi pozzetti sono di due dimensioni[^pozz3] e sono posizionati ogni circa 40-50 metri sulle vie da coprire in fibra ottica.[^pozz1][^pozz2] Sono l'equivalente di un PTA (Punto di Terminazione Avanzato), e cioè il punto da cui partono le fibre ottiche per le abitazioni.

[^pozz1]: https://forum.fibra.click/d/1439-incontro-openfiber-volano-tn
[^pozz2]: http://www.regione.marche.it/Portals/0/Agenda_Digitale/Piano_BUL/TaskForceBUL/2019%2007%2001%20Regione%20%20Marche%20Task%20Force%20Infratel.pdf
[^pozz3]: http://www.crescitadigitaleincomune.it/wp-content/uploads/2018/04/Presentazione-Cudia.pdf

{{% fig src="/images/rete-bul/pozzetto-bul-1.jpg" caption="Pozzetto 76 x 40 cm, per coprire 24 UI (unità immobiliari)." %}}

{{% fig src="/images/rete-bul/pozzetto-bul-2.jpg" caption="Pozzetto 125 x 80 cm, per coprire 48 UI." %}}

{{% fig src="/images/rete-bul/pozzetto-bul-3.jpg" caption="Pozzetto 125 x 80 cm aperto. Si vede il ROE per coprire 24 UI." vertical="true" %}}

## ROE su edifici e pali

Nelle zone ad alta densità di unità immobiliari possono essere installati dei ROE (Ripartitori Ottici di Edificio), con lo stesso scopo dei PTA. I ROE possono essere montati sui pali o sulle pareti degli edifici, ed essere anonimi o avere un'etichetta con scritto #BUL o Infratel.

{{% fig src="/images/rete-bul/roe-bul-1.jpg" caption="ROE BUL su palo. Grazie a @Stregone84 per la foto." vertical="true" %}}

{{% fig src="/images/rete-bul/roe-bul-2.jpg" caption="ROE BUL su palo. Grazie a @TrtRndS per la foto." vertical="true" %}}

{{% fig src="/images/rete-bul/roe-bul-3.jpg" caption="ROE BUL su palo. Grazie a @TrtRndS per la foto." vertical="true" %}}

## PTA su strada

In alcuni casi i ROE/PTA sono posizionati ai lati delle strade all'interno di scatole che assomigliano alle chiostrine TIM, ma di colore blu e con l'etichetta #BUL.

{{% fig src="/images/rete-bul/pta-bul-1.jpg" caption="ROE/PTA BUL su strada. Grazie a Leonardo F. per la foto." vertical="true" %}}

## CNO

I CNO (Centri Nodali Ottici) rappresentano il punto di splitting della rete passiva GPON (FTTH). A ciascun CNO fanno capo fino a 256 unità immobiliari[^pozz3], e ne sono quindi presenti alcuni per ogni comune, a seconda della copertura prevista.

{{% info %}}
Vedi anche [Cos'è e come funziona GPON]({{< relref "/posts/gpon.md" >}}) per un approfondimento.
{{% /info %}}

{{% fig src="/images/rete-bul/cno-bul-1.jpg" caption="CNO BUL con etichetta Invitalia (azienda pubblica proprietaria della rete). Grazie a @Hadx per la foto." %}}

{{% fig src="/images/rete-bul/cno-bul-2.jpg" vertical="true" caption="Altro CNO BUL. Grazie a Federico N. per la foto." %}}

{{% fig src="/images/rete-bul/cno-bul-3.jpg" vertical="true" caption="Interno di un CNO BUL." %}}

## PCN (centrali)

I PCN (Punti di Consegna Neutri) o POP sono le centrali a cui fanno capo i ROE e le antenne FWA di una determinata zona (tipicamente si tratta di più comuni, per un totale di qualche decina di migliaia di unità immobiliari collegate).[^pozz2][^pcn1][^pcn2]

[^pcn1]: https://www.to.camcom.it/sites/default/files/pid/Martucci_OpenFiber_Presentazione_Torino_20181120.pdf
[^pcn2]: https://www.provinceditalia.it/wp-content/uploads/docs/contenuti/2018/05/OpenFiber_UPI.pdf

Contengono gli apparati attivi che costituiscono il "bordo" tra rete di accesso e rete di trasporto. Gli operatori possono richiedere l'installazione dei propri OLT (terminazioni ottiche) all'interno del PCN.

{{% info %}}
Vedi anche [Cos'è e come funziona GPON]({{< relref "/posts/gpon.md" >}}) per un approfondimento.
{{% /info %}}

{{% green %}}
Hai una foto di un PCN Infratel/BUL? Inviacela a [info@fibra.click](mailto:info@fibra.click) (sono preferite foto scattate in orizzontale e inviate senza compressione). Grazie!
{{% /green %}}

{{% fig src="/images/rete-bul/pcn-bul-4.jpg" caption="PCN BUL di Vo'. Grazie a Igor T. per la foto." %}}

{{% fig src="/images/rete-bul/pcn-bul-2.jpg" caption="PCN BUL di dimensione ridotta. Grazie a @Hadx per la foto." vertical="true" %}}

{{% fig src="/images/rete-bul/pcn-bul-3.jpg" caption="PCN BUL di dimensione ridotta." vertical="true" %}}

{{< footer >}}
 