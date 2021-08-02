---
title: "Come riconoscere la rete pubblica BUL"
slug: riconoscere-rete-bul
date: 2019-09-01T20:56:49+02:00
lastmod: 2021-07-26T13:45:00+02:00
authors: [Matteo]
description: "La rete pubblica BUL copre in banda ultralarga il 25% della popolazione. Può quindi essere utile conoscerne gli elementi principali."
categories: [Copertura, FTTH, Piano BUL]
image: /social/riconoscere-rete-bul.jpg
---

La **rete pubblica BUL** è realizzata da [**Open Fiber**]({{< relref "/posts/openfiber.md" >}}) per conto di **Infratel** (società che fa capo al MiSE) nell'ambito del [piano BUL aree bianche]({{< relref "/posts/piano-aree-bianche.md" >}}), e ha l'obiettivo di coprire quasi il 25% della popolazione con connessioni <abbr title="Fiber To The Home, fibra fino a casa">FTTH</abbr> (per circa l'81%) e <abbr title="Fixed Wireless Access, connessione senza fili">FWA</abbr> entro il 2020.

Per verificare se si è coinvolti dal piano, il metodo più affidabile è utilizzare la [mappa del sito BUL](https://bandaultralarga.italia.it/mappa/), che mostra un pallino nero sulla propria abitazione nel caso di copertura in fibra ottica. (I tracciati e i pallini sono mostrati soltanto in presenza di progetto esecutivo approvato.)

È in ogni caso utile imparare a riconoscere gli **elementi chiave della rete BUL** nelle aree bianche, la cui estensione raggiungerà gli 80mila chilometri di fibra ottica in più di 7000 comuni.[^piano-of]

[^piano-of]: https://bandaultralarga.italia.it/wp-content/uploads/2020/07/Linee-guida-piano-di-azione-a-supporto-delle-realizzazioni-BUL-CD-8-sent.cleaned-1.pdf

{{< toc >}}

## Pozzetti #BUL

Nelle aree coperte in FTTH, questi pozzetti sono di due dimensioni[^pozz3] e sono posizionati ogni circa 40-50 metri sulle vie da coprire in fibra ottica.[^pozz1][^pozz2] Sono l'equivalente di un PTA (Punto di Terminazione Arretrato), e cioè il punto da cui partono le fibre ottiche per le abitazioni.

[^pozz1]: https://forum.fibra.click/d/1439-incontro-openfiber-volano-tn
[^pozz2]: http://www.regione.marche.it/Portals/0/Agenda_Digitale/Piano_BUL/TaskForceBUL/2019%2007%2001%20Regione%20%20Marche%20Task%20Force%20Infratel.pdf
[^pozz3]: http://www.crescitadigitaleincomune.it/wp-content/uploads/2018/04/Presentazione-Cudia.pdf

{{< fig src="/images/rete-bul/pozzetto-bul-1.jpg" caption="Pozzetto 76 x 40 cm, per coprire 24 UI (unità immobiliari)." >}}

{{< fig src="/images/rete-bul/pozzetto-bul-2.jpg" caption="Pozzetto 125 x 80 cm, per coprire 48 UI." >}}

{{< fig src="/images/rete-bul/pozzetto-bul-3.jpg" caption="Pozzetto 76 x 40 cm aperto. Si vede il ROE per coprire 24 UI." vertical="true" >}}

## ROE su edifici e pali

Nelle zone ad alta densità di unità immobiliari possono essere installati dei ROE (Ripartitori Ottici di Edificio), con lo stesso scopo dei PTA. I ROE possono essere montati sui pali o sulle pareti degli edifici, ed essere anonimi o avere un'etichetta con scritto #BUL o Infratel.

{{< fig src="/images/rete-bul/roe-bul-1.jpg" caption="ROE BUL su palo. Grazie a @Stregone84 per la foto." vertical="true" >}}

{{< fig src="/images/rete-bul/roe-bul-2.jpg" caption="ROE BUL su palo. Grazie a @TrtRndS per la foto." vertical="true" >}}

{{< fig src="/images/rete-bul/roe-bul-3.jpg" caption="ROE BUL su palo. Grazie a @TrtRndS per la foto." vertical="true" >}}

## PTA su strada

In alcuni casi i ROE/PTA sono posizionati ai lati delle strade all'interno di scatole che assomigliano alle chiostrine TIM, ma di colore blu e con l'etichetta #BUL.

{{< fig src="/images/rete-bul/pta-bul-1.jpg" caption="ROE/PTA BUL su strada. Grazie a Leonardo F. per la foto." vertical="true" >}}

## CNO

I CNO (Centri Nodali Ottici) rappresentano il punto di splitting della rete passiva GPON (FTTH). A ciascun CNO fanno capo fino a 256 unità immobiliari[^pozz3], e ne sono quindi presenti alcuni per ogni comune, a seconda della copertura prevista.

{{< info >}}
Vedi anche [Cos'è e come funziona GPON]({{< relref "/posts/gpon.md" >}}) per un approfondimento.
{{< /info >}}

{{< fig src="/images/rete-bul/cno-bul-4.jpg" vertical="true" caption="Un CNO BUL nel comune di Ayas (AO). Grazie a Pierre02 per la foto." >}}

{{< fig src="/images/rete-bul/cno-bul-1.jpg" caption="CNO BUL con etichetta Invitalia (azienda pubblica a cui fa capo Infratel Italia, proprietaria della rete). Grazie a @Hadx per la foto." >}}

{{< fig src="/images/rete-bul/cno-bul-2.jpg" vertical="true" caption="Un CNO BUL nel comune di Volano (TN). Grazie a Federico N. per la foto." >}}

{{< fig src="/images/rete-bul/cno-bul-3.jpg" vertical="true" caption="Interno di un CNO BUL." >}}

## PCN (centrali)

I PCN (**Punti di Consegna Neutri**) sono le **centrali** a cui fanno capo le fibre ottiche che collegano gli altri elementi della rete per una determinata zona (antenne FWA incluse). Un PCN spesso copre più comuni, e può connettere anche decine di migliaia di unità immobiliari.[^pozz2][^pcn1][^pcn2]

[^pcn1]: https://www.to.camcom.it/sites/default/files/pid/Martucci_OpenFiber_Presentazione_Torino_20181120.pdf
[^pcn2]: https://www.provinceditalia.it/wp-content/uploads/docs/contenuti/2018/05/OpenFiber_UPI.pdf

I PCN contengono gli apparati attivi che costituiscono il confine tra la rete di accesso e la rete di trasporto. Gli operatori possono richiedere l'installazione dei propri OLT (terminazioni ottiche) all'interno del PCN.

{{< info >}}
Vedi anche [Cos'è e come funziona GPON]({{< relref "/posts/gpon.md" >}}) per un approfondimento.
{{< /info >}}

Esistono diversi modelli di PCN, che si distinguono in base alla dimensione dello *shelter* e di conseguenza al numero di abitazioni che possono connettere. Nello specifico, i modelli pubblicamente noti sono:

- **PCN SH30**: il più comune, è lungo 3,3 m e ha una superficie interna di 7 mq. Connette al massimo 14mila UI;[^sh30]
- **PCN SH65**: lungo 6,5 m, ha una superficie interna di 14 mq e connette al massimo 32mila UI;[^sh65]
- **PCN CAB24**: composto da 4 armadi da 0,80 m di lato ciascuno, connette al massimo 3mila UI.[^cab24]
- **PCN CAB16**: composto da 2 armadi, connette al massimo 1000 UI.[^cab16]

[^sh30]: https://fabriano.trasparenza-valutazione-merito.it/ca/web/trasparenza/papca-ap?p_p_id=jcitygovalbopubblicazioni_WAR_jcitygovalbiportlet&p_p_lifecycle=2&p_p_state=pop_up&p_p_mode=view&p_p_resource_id=downloadAllegato&p_p_cacheability=cacheLevelPage&controlPanelCategory=portlet_jcitygovalbopubblicazioni_WAR_jcitygovalbiportlet&_jcitygovalbopubblicazioni_WAR_jcitygovalbiportlet_downloadSigned=true&_jcitygovalbopubblicazioni_WAR_jcitygovalbiportlet_id=3342850&_jcitygovalbopubblicazioni_WAR_jcitygovalbiportlet_action=mostraDettaglio&_jcitygovalbopubblicazioni_WAR_jcitygovalbiportlet_fromAction=recuperaDettaglio

[^sh65]: https://www.comune.madignano.cr.it/public/atti/allegato_327.pdf

[^cab24]: https://www.comune.gorgoglione.mt.it/cms/uploads/2018/07/3292018.pdf

[^cab16]: https://www.comuneweb.it/egov/Lampedusa/ammTrasparente/Provvedimenti/Provvedimenti_organi_indirizzo_politico/dettaglio/allegato.2010.2020.0.pdf

{{< fig src="/images/rete-bul/pcn-bul-5.jpg" caption="PCN SH65 nel comune di Sant'Angelo a Cupolo (BN). Grazie al sindaco Fabrizio d'Orta per la foto." >}}

{{< fig src="/images/rete-bul/pcn-bul-6.jpg" caption="PCN SH30 nel comune di San Michele di Ganzaria (CT). Grazie a Giuseppe Loris D. per la foto." >}}

{{< fig src="/images/rete-bul/pcn-bul-7.jpg" caption="PCN CAB24 nel comune di Salcito (CB). Grazie a Fiorenzo L. per la foto." >}}

{{< fig src="/images/rete-bul/pcn-bul-2.jpg" caption="PCN definitivo in formato armadio/cab, per coprire poche centinaia di UI. Grazie a @Hadx per la foto." vertical="true" >}}

## Mini PCN

Per velocizzare la vendibilità della rete FTTH o FWA in un comune, Open Fiber utilizza da metà 2020 dei **PCN temporanei di dimensione ridotta**, chiamati "mini PCN", in attesa della costruzione del PCN definitivo.[^minipcn] **In alcuni casi i mini PCN restano però definitivi**.[^minipcndef]

[^minipcn]: https://bandaultralarga.italia.it/wp-content/uploads/2020/07/Linee-guida-piano-di-azione-a-supporto-delle-realizzazioni-BUL-CD-8-sent.cleaned-1.pdf
[^minipcndef]: https://forum.fibra.click/d/131-rete-bul-infratel-in-provincia-di-trento/842

Internamente, i mini PCN includono la gestione della parte elettrica e dell'aerazione, la telegestione su rete LTE, gli apparati DWDM per la rete di trasporto, almeno un mini [OLT]({{< relref "/posts/gpon.md" >}}) da 16 porte (max 256 linee), i cassetti ottici per collegare le fibre ottiche dei CNO, delle BTS FWA e dei "nodi operatore", e lo spazio per le batterie.[^minipcn2]

C'è anche spazio per ampliamenti, ad esempio OLT aggiuntivi sia di Open Fiber che di altri operatori.

{{< fig src="/images/rete-bul/minipcn-2.jpg" caption="Mini PCN realizzato da [Cometi](http://www.cometi.it/it/she_e_cab/prodotti/shelter/armadi-stradali-per-fibra-ottica-cabinet-per-connessione-a-banda-larga-misuratori-pozzetti-e-rack_240.html) di Castelbelforte (MN). Grazie a Davide B. per la foto." >}}

{{< fig src="/images/rete-bul/minipcn-3.jpg" caption="Mini PCN di tipo [CAB 8](https://forum.fibra.click/d/14646-a-cosa-servono-questi-nuovi-segni/426), probabilmente definitivo, a Calimera (LE). Grazie a @secret105 per la foto." >}}

{{< fig src="/images/rete-bul/minipcn-4.jpg" caption="Mini PCN di tipo CAB 8 a Romanengo (CR). Grazie a @SkyNut per la foto." >}}

{{< fig src="/images/rete-bul/minipcn.jpg" caption="Mini PCN \"tradizionale\". Grazie a @TrtRndS per la foto." vertical="true" >}}

{{< fig src="/images/rete-bul/minipcn-5.jpg" caption="Mini PCN (davanti) e PCN definitivo in costruzione (dietro) a Cellatica (BS). Grazie a @Abbagiub per la foto.">}}


[^minipcn2]: Fonti di FibraClick

{{< footer >}}
 