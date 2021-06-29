---
title: "La consultazione Infratel 2021"
slug: consultazione-2021
date: 2021-05-08T11:20:00+02:00
lastmod: 2021-05-08T11:20:00+02:00
authors: [Matteo]
description: La consultazione 2021 ha lo scopo di mappare le reti a banda ultralarga presenti sul territorio per definire le aree in cui c'è carenza di reti ad altissima capacità.
categories: [Copertura, Piano BUL]
---

La **consultazione Infratel 2021** è un'attività di mappatura condotta da Infratel con lo scopo di raccogliere dagli operatori di rete fissa dati sulla **copertura attuale e futura delle abitazioni** italiane. La consultazione è stata annunciata il 30 aprile 2021 e terminerà il 15 giugno 2021.[^cons]

[^cons]: *Mappatura 2021 reti fisse a banda ultralarga: consultazione degli operatori* https://www.infratelitalia.it/archivio-documenti/documenti/mappatura-2021-reti-fisse-a-banda-ultralarga-consultazione-degli-operatori

Agli operatori è stato chiesto di inviare **per ogni indirizzo civico delle aree nere e grigie** la copertura esistente al **30 aprile 2021** e le previsioni di copertura per i successivi 5 anni, e cioè al **30 aprile 2022, 2023, 2024, 2025 e 2026**.[^manuale]

[^manuale]: *Manuale di istruzioni mappatura 2021 reti a banda ultralarga fisse NGA e VHCN*. Il manuale non è disponibile pubblicamente ma FibraClick ha potuto prenderne visione.

Il risultato sarà una **mappatura della banda ultralarga** sul territorio nazionale, con lo scopo di rilevare le aree in cui c'è **carenza di reti ad altissima capacità** e si rende quindi necessario un intervento dello Stato tramite il [Piano Banda Ultralarga]({{< relref "/posts/bul.md" >}}).

{{< toc >}}

## Aree oggetto di consultazione

La consultazione ha come oggetto **le aree già precedentemente dichiarate come nere o grigie**, cioè tutti gli indirizzi in cui almeno un operatore aveva dichiarato di coprire o voler coprire con una rete a banda ultralarga.

Dalla consultazione sono quindi **escluse le** [**aree bianche**]({{< relref "/posts/aree.md" >}}), che sono in larghissima parte già oggetto di intervento pubblico tramite il [piano BUL]({{< relref "bul.md" >}}). La consultazione potrà però identificare **nuove aree bianche** dove gli operatori hanno ritirato gli impegni di investimento.

## A cosa serve la consultazione

I dati raccolti serviranno per definire con precisione gli **interventi pubblici [previsti dal PNRR](https://forum.fibra.click/d/19800-piano-italia-1-gbps-il-cronoprogramma)**, che faranno uso dei fondi europei del programma Next Generation EU.

In particolare, le aree di intervento dovrebbero essere quelle dove nel prossimo quinquennio non è prevista la realizzazione di reti **VHCN** (*Very High Capacity Network*), cioè reti con determinati livelli minimi di qualità.

## I dati raccolti

Gli operatori dovranno fornire documentazione dettagliata sui piani di copertura, in particolare:[^cons]

- «il **piano dettagliato degli investimenti**, che includa per ogni fase di attuazione le date di inizio e completamento e gli elementi che ne evidenzino la concreta attuabilità»;
- informazioni sull'«**architettura e struttura della rete** sul territorio (numero siti, dislocazione territoriale, tipologia link di backhaul, apparati di trasporto, POP e relativo posizionamento), apparati e tecnologie previste»;
- informazioni sul «**dimensionamento dei siti radio** (con evidenza dei metodi e parametri utilizzati per le simulazioni radioelettriche) in termini di numero medio di utenti per sito e per antenna, coerente con quanto fornito nei questionari compilati per civico e dimensionamento della banda, della rete dati e di trasporto».

Per ciascun indirizzo civico sul territorio nazionale, ciascun operatore dovrà dichiarare il livello di servizio che è in grado di offire con reti proprie. In particolare:[^manuale]

- se l'indirizzo è coperto da banda ultralarga (**NGA** ad almeno 30 Mbps in download e 15 in upload);
- la **tecnologia** usata per la copertura;
- le **velocità massime** in download e upload che l'utente finale può ottenere «per almeno un certo periodo del giorno». Le velocità devono rispecchiare «la capacità della rete», tenendo conto degli apparati installati e del backhauling, e non il servizio commerciale effettivamente offerto dall'operatore. Sono le velocità più elevate che possono essere offerte;
- le **velocità nelle ore di picco**, da calcolare secondo una formula matematica fornita da Infratel, assumendo che il traffico medio generato da ciascun cliente nelle ore di picco raggiungerà i 10 Mbps nel prossimo quinquennio;
- la "**classe VHCN**", cioè se e secondo quale criterio la rete è classificabile come rete ad altissima capacità. In particolare, un operatore può indicare se si tratta di **FTTH/FTTB**, oppure, in caso di FWA o altre architetture, se sono rispettati dei **requisiti minimi di qualità, e cioè: almeno 1 Gbps in download, almeno 200 Mbps in upload, latenza (RTT) inferiore o uguale a 10 millisecondi** fino al primo *peering point*.

{{< warn >}}
Le **connessioni wireless fisse** (FWA) sono accettate come copertura a banda ultralarga **solo se erogate su frequenze licenziate**. Per fare un esempio, la copertura EOLO 100 (EOLOwave G) è classificabile come NGA, mentre EOLO 30 non lo è perché usa frequenze libere ISM.
{{< /warn >}}

## I vincoli per gli operatori

Come per la consultazione 2020, **sono state inserite delle regole per evitare che gli operatori dichiarino copertura che non realizzerano**.

Ad esempio, agli operatori è stato chiesto di inviare a Infratel **aggiornamenti semestrali** sullo stato di avanzamento dei piani di copertura. Se l'operatore non rispetta i piani o non invia gli aggiornamenti, Infratel si riserva la facoltà di «di **procedere con l'esecuzione del piano di intervento pubblico** nonché a **dare comunicazione dell'inadempimento** dell'operatore sul proprio sito istituzionale».[^cons]

Un altro vincolo è che **un'abitazione può essere dichiarata coperta solo se l'attivazione «avviene secondo la normale pratica commerciale, senza costi addizionali o straordinari, e quando la tempistica di attivazione non supera le 4 settimane»**. Nel caso di FTTH/FTTB, la rete deve raggiungere il confine della proprietà privata a una distanza inferiore a 50 metri.[^manuale]

Nel caso delle reti wireless, l'abitazione deve trovarsi in prossimità di una stazione radio base (BTS), «tipicamente in visibilità diretta», e il «livello di campo e il rapporto segnale/rumore devono consentire l'attivazione del servizio».

Entrambi i vincoli sulla copertura devono essere auto-valutati dall'operatore che dichiara copertura, ma **Infratel dice che vigilerà su «informazioni fuorvianti, errate o incomplete»** segnalando eventualmente le condotte alle autorità competenti.[^cons]

## I risultati

I risultati saranno pubblicati sul sito [bandaultralarga.italia.it](https://bandaultralarga.italia.it) presumibilmente durante l'estate 2021.

{{< footer >}}
