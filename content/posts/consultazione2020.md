---
title: "La consultazione Infratel 2020"
slug: consultazione-2020
date: 2020-06-24T13:30:00+02:00
lastmod: 2020-09-18T16:00:00+02:00
authors: [Matteo]
description: La consultazione 2020 ha mappato la copertura a banda ultralarga del Paese, per rilevare le aree in cui c'è carenza di reti ad alta capacità.
categories: [Copertura, Piano BUL]
---

La **consultazione Infratel 2020** è stata un'attività di mappatura condotta da Infratel con lo scopo di raccogliere dagli operatori di rete fissa dati sulla **copertura attuale e futura delle abitazioni** italiane. La consultazione è stata annunciata il 23 giugno 2020 ed è terminata il 31 luglio 2020, senza proroghe.[^cons]

[^cons]: *Mappatura 2020 della copertura delle reti a Banda ultralarga* https://bandaultralarga.italia.it/strategia-bul/consultazioni/

Agli operatori è stato chiesto di inviare **per ogni indirizzo civico delle aree nere e grigie** la copertura esistente al **31 dicembre 2019**, oltre alle previsioni per il **31 dicembre 2020, 2021 e 2022**.[^manuale]

[^manuale]: *Mappatura reti a Banda ultralarga 2020 - Manuale di istruzioni* https://bandaultralarga.italia.it/wp-content/uploads/2020/06/Manuale-di-Istruzioni-mappatura-2020.pdf

Il risultato è una **mappatura della banda ultralarga** sul territorio nazionale, con lo scopo di rilevare le aree in cui c'è **carenza di reti ad alta capacità** e si rende quindi necessario un intervento dello Stato (il cosiddetto "piano aree grigie"). I risultati della consultazione sono stati pubblicati a settembre 2020.

{{< toc >}}

## Aree oggetto di consultazione

La consultazione ha come oggetto **le aree già precedentemente dichiarate come nere o grigie**, cioè tutti gli indirizzi in cui almeno un operatore aveva dichiarato di coprire o voler coprire con una rete a banda ultralarga.

Dalla consultazione sono quindi **escluse le** [**aree bianche**]({{< relref "/posts/aree.md" >}}), che sono in larghissima parte già oggetto di intervento pubblico tramite il [piano BUL]({{< relref "bul.md" >}}).

## A cosa serve la consultazione

I dati raccolti serviranno per definire più in dettaglio la [fase 2 del piano BUL]({{< relref "/posts/bul.md#il-piano-aree-grigie" >}}), che ha come scopo un **intervento pubblico** per realizzare reti in grado di offrire **connessioni ad altissima velocità**, **superiore a 100 Mbps ed espandibile al Gigabit/s**. L'obiettivo è raggiungere gli obiettivi della Gigabit Society della Commissione Europea.

Le aree coinvolte dal piano saranno quindi tutte quelle che risulteranno **scoperte nel breve periodo da tecnologie in grado di offrire queste prestazioni**. Non è ancora del tutto chiaro quali tecnologie rientreranno in questa classificazione.

## I dati raccolti

Una delle novità della consultazione 2020 è che per ciascun civico sono stati raccolti **dati più dettagliati** sul tipo di copertura. Ad ogni operatore è stato chiesto di specificare per ciascun numero civico:[^manuale]

- se l'indirizzo è coperto da banda ultralarga (**NGA** ad almeno 30 Mbps in download e 15 in upload);
- la **tecnologia** usata per la copertura;
- le **velocità massime** in download e upload;
- le **velocità nelle ore di picco** (*novità*);
- la "**classe VHCN**" (*novità*), cioè se e secondo quale criterio la rete è classificabile come rete ad alta capacità secondo la bozza delle linee guida del BEREC.[^vhcn]

[^vhcn]: https://forum.fibra.click/d/5314-bozza-linee-guida-reti-vhcn

{{< warn >}}
Le **connessioni wireless fisse** (FWA) sono accettate come copertura a banda ultralarga **solo se erogate su frequenze licenziate**. Per fare un esempio, la copertura EOLO 100 (EOLOwave G) è classificabile come NGA, mentre EOLO 30 non lo è perché usa frequenze libere ISM.
{{< /warn >}}

## I vincoli per gli operatori

I dati forniti dagli operatori in fase di consultazione non sono vincolanti, ma la consultazione 2020 **ha introdotto delle regole per evitare che gli operatori dichiarino copertura che non realizzerano**.

Ad esempio, agli operatori è stato chiesto di inviare a Infratel **aggiornamenti semestrali** sullo stato di avanzamento dei piani di copertura. Se l'operatore non rispetta i piani o non invia gli aggiornamenti, Infratel si riserva la facoltà di «di **procedere con l'esecuzione del piano di intervento pubblico** nonché a **dare comunicazione dell'inadempimento** dell'operatore sul proprio sito istituzionale».[^cons]

Un altro vincolo è che **un'abitazione può essere dichiarata coperta solo se l'attivazione non comporta costi eccessivi e la rete raggiunge il confine della proprietà privata** (nel caso di FTTH/FTTB, a non più di 50 metri di distanza).[^manuale]

Nel caso delle reti wireless, l'abitazione deve trovarsi in prossimità di una stazione radio base (BTS), «tipicamente in visbilità diretta», e il «livello di campo e il rapporto segnale/rumore devono consentire l'attivazione del servizio».

Entrambi i vincoli sulla copertura devono essere auto-valutati dall'operatore che dichiara copertura, ma **Infratel dice che vigilerà su «informazioni fuorvianti, errate o incomplete»** segnalando eventualmente le condotte alle autorità competenti.[^cons]

## I risultati

Una prima analisi dei dati è stata [pubblicata](https://bandaultralarga.italia.it/esiti-consultazione-2020/) da Infratel il 9 settembre 2020:

- i dati raccolti riguardano quasi **21 milioni di civici**, cioè circa il 70% del totale in Italia;
- hanno fornito dati di copertura 44 operatori, di cui 16 nuovi rispetto alla consultazione 2019;
{{< fig src="/images/cons20-operatori.jpg" caption="Lista degli operatori che hanno risposto alla consultazione." >}}
- i civici sono stati classificati utilizzando la nuova definizione di **"rete ad alta capacità"** (VHCN), che comprende le reti interamente in fibra ottica (FTTH/B) e le reti wireless (FWA) erogate da postazioni radio collegate in fibra ottica, indipendentemente dalla velocità offerta.

Dai risultati emerge che **a fine 2019 3,6 milioni civici** non risultavano coperti da **nessuna rete a banda ultralarga**. A fine 2022, 80mila di questi civici continueranno a non risultare coperti, e sono quindi diventati "nuove aree bianche".

{{< fig src="/images/cons20-bianchi.jpg" >}}

Dei civici [grigi e neri]({{< relref "/posts/aree.md" >}}), a fine 2022 **il 77% risulterà coperto da almeno una rete VHCN**, il 49% in FTTH e il 28% in FWA con fibra ottica alla postazione radio. (Questa classificazione non tiene in considerazione l'effettiva velocità di accesso.)

{{< fig src="/images/cons20-vhcn.jpg" caption="Tabella riassuntiva della copertura VHCN. Gran parte della copertura VHCN sarà realizzata in aggiunta a una rete già esistente, ad esempio FTTC o FWA (si tratta quindi di aree grigie che diventano così nere). Il 49% dei civici sarà connesso in FTTH, e nel 2% dei casi la FTTH sarà l'unica connettività disponibile." >}}

{{< fig src="/images/cons20-tabella.jpg" caption="La copertura privata prevista a fine 2022 per ciascuna regione." >}}

Nelle prossime settimane sarà possibile consultare i risultati della consultazione per ciascun indirizzo tramite il sito [Banda Ultralarga](https://bandaultralarga.italia.it).

A differenza delle consultazioni precedenti, Infratel potrà pubblicare i dati **anche in forma "disaggregata"**, cioè mostrare per ciascun indirizzo **informazioni aggiuntive sugli operatori e sulle tecnologie utilizzate** per la copertura. Sette operatori (TIM, EOLO, VODAFONE, MYNET, TELWEB, TNET SERVIZI, OPEN FIBER) hanno negato il consenso alla pubblicazione dei dati di copertura in forma disaggregata.[^cons]

{{< footer >}}
