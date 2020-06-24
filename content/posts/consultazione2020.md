---
title: "La consultazione Infratel 2020"
slug: consultazione-2020
date: 2020-06-24T13:30:00+02:00
lastmod: 2020-06-24T13:30:00+02:00
authors: [Matteo]
description: La consultazione 2020 ha lo scopo di mappare la copertura a banda ultralarga del Paese, per rilevare le aree in cui c'è carenza di reti ad alta velocità.
categories: [Copertura, Piano BUL]
---

La **consultazione Infratel 2020** è un'attività condotta da Infratel con lo scopo di raccogliere dagli operatori di rete fissa dati sulla **copertura attuale e futura delle abitazioni** italiane. La consultazione è stata annunciata il 23 giugno 2020 e terminerà il 31 luglio 2020, salvo proroghe.[^cons]

[^cons]: https://bandaultralarga.italia.it/documentazione/consultazioni/

Agli operatori è stato chiesto di inviare **per ogni indirizzo civico delle aree nere e grigie** la copertura esistente al **31 dicembre 2019**, oltre alle previsioni per il **31 dicembre 2020, 2021 e 2022**.[^manuale]

[^manuale]: https://bandaultralarga.italia.it/wp-content/uploads/2020/06/Manuale-di-Istruzioni-mappatura-2020.pdf

Il risultato sarà una **mappatura della banda ultralarga** sul territorio nazionale, con lo scopo di rilevare le aree in cui c'è **carenza di reti ad alta velocità** e si rende quindi necessario un intervento dello Stato (il cosiddetto "piano aree grigie").

{{< toc >}}

## Aree oggetto di consultazione

La consultazione ha come oggetto **le aree già precedentemente dichiarate come nere o grigie**, cioè tutti gli indirizzi in cui almeno un operatore aveva dichiarato di coprire o voler coprire il numero civico.

Dalla consultazione sono quindi **escluse le** [**aree bianche**]({{< relref "/posts/aree.md" >}}), in larghissima parte già oggetto di intervento pubblico tramite il [piano BUL 2015-2020]({{< relref "bul.md" >}}). Non risulta che le aree escluse dal piano aree bianche, ad esempio perché "opzionali", saranno censite da questa consultazione.

## A cosa serve la consultazione

I dati raccolti serviranno per definire più in dettaglio la fase 2 del piano BUL, anche chiamata [piano aree grigie]({{< relref "/posts/bul.md#la-fase-2-le-aree-grigie" >}}), che ha come scopo un **intervento pubblico** per realizzare reti in grado di offrire **connessioni ad altissima velocità**, **superiore a 100 Mbps ed espandibile al Gigabit/s**. L'obiettivo è implementare la strategia della Gigabit Society della Commissione Europea.

Le aree coinvolte dal piano saranno quindi tutte quelle che risulteranno **scoperte nel breve periodo da tecnologie in grado di offrire queste prestazioni**. Non è ancora del tutto chiaro quali tecnologie rientreranno in questa classificazione.

{{< green >}}
FibraClick è in grado di confermare che **il piano potrà coinvolgere sia le aree grigie** (presenza di 1 operatore privato BUL) **sia le aree nere** (2+ operatori), a patto che le reti non offrano velocità superiori a 100 Mbps espandibili al Gbps.

Ad esempio:

- 1 o più reti FTTC: ✅
- 1 rete FTTC e 1 rete FWA non Gigabit: ✅
- 1 o più reti FTTH: ❌
{{< /green >}}

## I dati raccolti

Una delle novità della consultazione 2020 è che per ciascun civico vengono raccolti **dati più dettagliati** sul tipo di copertura. Ad ogni operatore è richiesto di specificare per ciascun numero civico:[^manuale]

- se l'indirizzo è coperto da banda ultralarga (**NGA** ad almeno 30 Mbps in download e 15 in upload);
- la **tecnologia** usata per la copertura;
- le **velocità massime** in download e upload;
- le **velocità nelle ore di picco** (*novità*);
- la "**classe VHCN**" (*novità*), cioè se e secondo quale criterio la rete è classificabile come rete ad alta capacità secondo la bozza delle linee guida del BEREC.[^vhcn]

[^vhcn]: https://forum.fibra.click/d/5314-bozza-linee-guida-reti-vhcn

{{< warn >}}
Le **connessioni wireless fisse** (FWA) sono accettate come copertura a banda ultralarga **solo se sono erogate su frequenze licenziate**. Per fare un esempio, la copertura EOLO 100 (EOLOwave G) è classificabile come NGA, mentre EOLO 30 non lo è perché usa frequenze libere ISM.
{{< /warn >}}

## I vincoli per gli operatori

I dati forniti dagli operatori in fase di consultazione non sono vincolanti, ma la consultazione 2020 **introduce delle regole per evitare che gli operatori dichiarino copertura che non realizzerano**.

Ad esempio, agli operatori viene chiesto di inviare a Infratel **aggiornamenti semestrali** sullo stato di avanzamento dei piani di copertura. Se l'operatore non rispetta i piani o non invia gli aggiornamenti, Infratel si riserva la facoltà di «di **procedere con l'esecuzione del piano di intervento pubblico** nonché a **dare comunicazione dell'inadempimento** dell'operatore sul proprio sito istituzionale».[^cons]

Un altro vincolo è che **un'abitazione può essere dichiarata coperta solo se l'attivazione non comporta costi eccessivi e la rete raggiunge il confine della proprietà privata**.[^manuale]

Nel caso delle reti wireless, l'abitazione deve trovarsi in prossimità di una stazione radio base (BTS), «tipicamente in visbilità diretta», e il «livello di campo e il rapporto segnale/rumore devono consentire l'attivazione del servizio».

Entrambi i vincoli sulla copertura devono essere auto-valutati dall'operatore che dichiara copertura, ma **Infratel dice che vigilerà su «informazioni fuorvianti, errate o incomplete»** segnalando eventualmente le condotte alle autorità competenti.[^cons]

## I risultati

I risultati saranno disponibili dopo il termine della consultazione tramite il sito [Banda Ultra Larga](https://bandaultralarga.italia.it).

A differenza delle consultazioni precedenti, Infratel potrà pubblicare i dati **anche in forma "disaggregata"**, cioè mostrare per ciascun indirizzo **informazioni aggiuntive sugli operatori e sulle tecnologie utilizzate** per la copertura. Gli operatori potranno però presentare richieste motivate per mantenere i dati riservati.[^cons]

{{< footer >}}
