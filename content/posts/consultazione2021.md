---
title: "La mappatura Infratel 2021"
slug: mappatura-2021
aliases: [consultazione-2021]
date: 2021-05-08T11:20:00+02:00
lastmod: 2021-10-17T19:00:00+02:00
authors: [Matteo]
description: La consultazione 2021 ha lo scopo di mappare le reti a banda ultralarga presenti sul territorio per definire le aree in cui c'è carenza di reti ad altissima capacità.
categories: [Copertura, Piano BUL]
---

La **consultazione Infratel 2021 è un'attività di mappatura** condotta da Infratel con lo scopo di raccogliere dagli operatori di rete fissa dati sulla **copertura attuale e futura delle abitazioni** italiane. La consultazione è stata annunciata il 30 aprile 2021 ed è terminata il 15 giugno 2021.[^cons] Il 13 ottobre 2021 è stata avviata una seconda fase per l'aggiornamento delle aree bianche, escluse dalla fase precedente.[^cons2]

[^cons]: *Mappatura 2021 reti fisse a banda ultralarga: consultazione degli operatori* https://www.infratelitalia.it/archivio-documenti/documenti/mappatura-2021-reti-fisse-a-banda-ultralarga-consultazione-degli-operatori
[^cons2]: *Mappatura 2021 reti fisse a banda ultralarga nelle “Aree bianche 2016” - al via la consultazione degli operatori* https://www.infratelitalia.it/archivio-news/notizie/avviso-mappatura-bul-aree-bianche

Agli operatori è stato quindi chiesto di inviare **per ogni indirizzo civico italiano** la copertura esistente al **30 aprile 2021** e le previsioni di copertura per i successivi 5 anni, e cioè al **30 aprile 2022, 2023, 2024, 2025 e 2026**.[^esiti]

Il risultato sarà una **mappatura della banda ultralarga** sul territorio nazionale, con lo scopo di rilevare le aree in cui c'è **carenza di reti ad altissima capacità** e si rende quindi necessario un intervento dello Stato tramite la [*Strategia per la banda ultralarga*]({{< relref "/posts/piano-bul.md" >}}).

{{< toc >}}

## Aree oggetto di consultazione

**La mappatura ha come oggetto l'intero territorio nazionale**. Nella prima fase sono stati raccolti dati per le aree già precedentemente dichiarate come nere o grigie, cioè tutti gli indirizzi in cui almeno un operatore aveva dichiarato di coprire o voler coprire con una rete a banda ultralarga.

Nella seconda fase sono invece state aggiornate le [**aree bianche**]({{< relref "/posts/aree.md" >}}), che sono in larghissima parte già oggetto di intervento pubblico tramite il [piano BUL aree bianche]({{< relref "/posts/piano-aree-bianche.md" >}}).

## A cosa serve la consultazione

I dati raccolti serviranno per definire con precisione gli **interventi pubblici [previsti dal PNRR](https://forum.fibra.click/d/19800-piano-italia-1-gbps-il-cronoprogramma)**, che faranno uso dei fondi europei del programma Next Generation EU.

In particolare, le aree di intervento saranno quelle in cui nel prossimo quinquennio non è prevista la realizzazione di reti ad alta capacità, con determinati livelli minimi di qualità.

## I dati raccolti

Gli operatori hanno dovuto fornire documentazione dettagliata sui piani di copertura, in particolare:[^cons]

- «il **piano dettagliato degli investimenti**, che includa per ogni fase di attuazione le date di inizio e completamento e gli elementi che ne evidenzino la concreta attuabilità»;
- informazioni sull'«**architettura e struttura della rete** sul territorio (numero siti, dislocazione territoriale, tipologia link di backhaul, apparati di trasporto, POP e relativo posizionamento), apparati e tecnologie previste»;
- informazioni sul «**dimensionamento dei siti radio** (con evidenza dei metodi e parametri utilizzati per le simulazioni radioelettriche) in termini di numero medio di utenti per sito e per antenna, coerente con quanto fornito nei questionari compilati per civico e dimensionamento della banda, della rete dati e di trasporto».

Per ciascun indirizzo civico sul territorio nazionale, ciascun operatore ha dovuto dichiarare il livello di servizio che è in grado di offire con reti proprie. In particolare:[^esiti]

- se l'indirizzo è coperto da banda ultralarga (**NGA** ad almeno 30 Mbps in download e 15 in upload);
- la **tecnologia** usata per la copertura;
- le **velocità massime** in download e upload che l'utente finale può ottenere «per almeno un certo periodo del giorno». Le velocità devono rispecchiare «la capacità della rete», tenendo conto degli apparati installati e del backhauling, e non il servizio commerciale effettivamente offerto dall'operatore. Sono le velocità più elevate che possono essere offerte;
- le **velocità nelle ore di picco**, da calcolare secondo una formula matematica fornita da Infratel, assumendo che il traffico medio generato da ciascun cliente nelle ore di picco raggiungerà i 10 Mbps nel prossimo quinquennio;
- la "**classe VHCN**", cioè se e secondo quale criterio la rete è classificabile come rete ad altissima capacità. In particolare, un operatore può indicare se si tratta di **FTTH/FTTB**, oppure, in caso di FWA o altre architetture, se sono rispettati dei **requisiti minimi di qualità, e cioè: almeno 1 Gbps in download, almeno 200 Mbps in upload, latenza (RTT) inferiore o uguale a 10 millisecondi** fino al primo *peering point*.

{{< warn >}}
Le **connessioni wireless fisse** (FWA) sono accettate come copertura a banda ultralarga **solo se erogate su frequenze licenziate**. Per fare un esempio, la copertura EOLO 100 (EOLOwave G) è classificabile come NGA, mentre EOLO 30 non lo è perché usa frequenze libere ISM.
{{< /warn >}}

## I vincoli per gli operatori

Come per la [mappatura 2020]({{< relref "/posts/consultazione2020.md" >}}), **sono state inserite delle regole per evitare che gli operatori dichiarino copertura che non realizzerano**.

Ad esempio, agli operatori è stato chiesto di inviare a Infratel **aggiornamenti semestrali** sullo stato di avanzamento dei piani di copertura. Se l'operatore non rispetta i piani o non invia gli aggiornamenti, Infratel si riserva la facoltà di «di **procedere con l'esecuzione del piano di intervento pubblico** nonché a **dare comunicazione dell'inadempimento** dell'operatore sul proprio sito istituzionale».[^cons]

Un altro vincolo è che **un'abitazione può essere dichiarata coperta solo se l'attivazione «avviene secondo la normale pratica commerciale, senza costi addizionali o straordinari, e quando la tempistica di attivazione non supera le 4 settimane»**. Nel caso di FTTH/FTTB, la rete deve raggiungere il confine della proprietà privata a una distanza inferiore a 50 metri.[^esiti]

Nel caso delle reti wireless, l'abitazione deve trovarsi in prossimità di una stazione radio base (BTS), «tipicamente in visibilità diretta», e il «livello di campo e il rapporto segnale/rumore devono consentire l'attivazione del servizio».

Entrambi i vincoli sulla copertura devono essere auto-valutati dall'operatore che dichiara copertura, ma **Infratel dice che vigilerà su «informazioni fuorvianti, errate o incomplete»** segnalando eventualmente le condotte alle autorità competenti.[^cons]

## I risultati

In seguito all'analisi dei dati da parte di Infratel, i risultati della prima fase della mappatura sono stati [pubblicati](https://www.infratelitalia.it/archivio-news/notizie/esiti-mappatura-delle-reti-fisse-2021) il 6 agosto 2021.

Dalla relazione di sintesi si ricava che:[^esiti]

[^esiti]: https://www.infratelitalia.it/-/media/infratel/documents/mappatura-reti-fisse-2021/relazione-mappatura-fissa-2021cleaned.pdf

- i dati raccolti hanno riguardato poco più di **21 milioni di civici**;
- hanno fornito dati di copertura **47 operatori**, di cui 12 nuovi rispetto all'anno precedente. 9 operatori presenti nella mappatura 2020 non hanno fornito dati;
{{< fig src="/images/cons21-operatori.jpg" caption="Lista degli operatori che hanno partecipato alla mappatura." >}}
- particolare attenzione è stata posta sulla verifica della coerenza della copertura **Fixed Wireless Access** (FWA). In particolare:
  - si definiscono ***Passed*** tutti i civici **che rientrano nell'area di copertura** di un sito radio FWA;
  - si definiscono ***Served*** i civici **che possono essere effettivamente serviti**, tenendo conto delle limitazioni tecniche e dei requisiti minimi di qualità. Si stima che **in media questi civici siano il 10% dei civici *Passed***;
  - i civici *Served* non sono determinabili con precisione a priori;
- per quanto riguarda la **copertura Next Generation Access** (almeno 30 Mbps in download), al 2026 si stima la seguente copertura da parte di operatori privati:
  - **aree nere**: 39% senza FWA, 52% con FWA *Served*
  - **aree grigie**: 54% senza FWA, 43% con FWA *Served*
- per quanto riguarda la **copertura ad almeno 300 Mbps** in download, al 2026 si stima la seguente copertura da parte di operatori privati:
  - **senza FWA**: 71,0%
  - **con FWA** *Served*: 71,2%
  - **con FWA** *Passed*: 73,6%

I risultati della **seconda fase della mappatura**, riguardante le aree bianche, sono stati [pubblicati](https://www.infratelitalia.it/archivio-documenti/documenti/relazione-2021-reti-fisse-bul) il 24 novembre 2021. Dalla relazione di sintesi si ricava che **al 2026 solo il 30% dei civici non già inclusi nel [piano aree bianche]({{< relref "/posts/piano-aree-bianche.md" >}}) sarà coperto in FTTH**. L'82% sarà invece coperto in FWA ad almeno 300 Mbps.[^esiti2]

[^esiti2]: https://www.infratelitalia.it/-/media/infratel/documents/relazione-mappatura-fissa-2021_aree-bianche--2016_24112021_def.pdf

I dati di entrambe le mappature, solo per quanto riguarda la copertura cablata (no FWA), sono consultabili sul sito Banda Ultralarga tramite la pagina [Ricerca per indirizzo](https://bandaultralarga.italia.it/indirizzo) oppure consultando i file in formato CSV pubblicati sul sito Infratel.

{{< footer >}}
