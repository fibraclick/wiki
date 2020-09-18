---
title: "La consultazione Infratel 2019"
slug: consultazione-2019
date: 2019-04-04
lastmod: 2019-06-27T18:51:00+02:00
authors: [Matteo]
description: La consultazione Infratel 2019 ha lo scopo di aggiornare le aree nere e grigie, per poi pianificare gli interventi pubblici per la copertura FTTH.
categories: [Copertura, Piano BUL]
---

La **consultazione Infratel 2019** è stata un'attività di raccolta dati svolta nel primo semestre 2019 con lo scopo di aggiornare le previsioni di copertura a banda ultralarga nelle cosiddette aree nere e grigie.

L'attività è stata coordinata da **Infratel**, l'azienda controllata dal Ministero dello Sviluppo Economico che si occupa di pianificare gli investimenti per lo sviluppo della banda larga e ultralarga sul territorio nazionale.

L'obiettivo è **produrre una mappatura (civico per civico)** dello stato della banda ultralarga in Italia, e nello specifico **la copertura esistente a dicembre 2018 e le previsioni per fine 2019, 2020 e 2021**.

La consultazione 2019 è stata avviata a gennaio 2019 ed è terminata il 15 maggio 2019, dopo tre rinvii.

{{< toc >}}

## Aree oggetto di consultazione

Per essere precisi, la consultazione 2019 è un **monitoraggio della precedente, tenuta nel 2017**, e raccoglie quindi dati sullo **stato di attuazione degli interventi già pianificati nelle aree nere e grigie**.[^infratel1]

Le aree bianche già oggetto di intervento pubblico nel [piano BUL 2015-2020]({{< relref "bul.md" >}}) non sono di interesse della consultazione, per cui eventuali interventi privati in queste aree non sono stati rilevati.

{{< green >}}
###### Ripasso sulle aree nere e grigie
La Commissione Europea definisce così le aree nere, grigie e bianche:

- **aree nere**: presenza nei prossimi tre anni di almeno due reti a banda ultralarga di operatori diversi
- **aree grigie**: presenza nei prossimi tre anni di una sola rete a banda ultralarga
- **aree bianche**: nessuna previsione di investimento privato per banda ultralarga nei prossimi tre anni
{{< /green >}}

## A cosa serve la consultazione

I dati raccolti serviranno per definire più in dettaglio **la fase 2 del piano BUL**, che ha come scopo un intervento pubblico diretto in favore delle abitazioni nelle **aree grigie**, per un upgrade a tecnologie in grado di offrire fino a 1 Gbps di velocità in download.

{{< info >}}
Per approfondimenti, consulta la pagina [Cos'è il piano BUL]({{< relref "/posts/bul.md" >}}).
{{< /info >}}

## I risultati aggregati

I primi risultati sono stati pubblicati il 3 giugno 2019 sul sito Infratel:[^infratel2]

- i dati riguardano **19,8 milioni di numeri civici**, cioè circa il 70% del totale in Italia;
- le aree bianche (circa 12 milioni di numeri civici) sono già oggetto di intervento pubblico e sono quindi escluse da questi dati;
- alla consultazione hanno partecipato **37 operatori**, tra cui tutti i grandi operatori italiani **ad eccezione di Vodafone**.

{{< fig src="/images/cons19-operatori.jpg" caption="Operatori che hanno risposto alla consultazione" >}}

La novità più importante che emerge dai risultati è che **le linee FTTC/FTTE** in VDSL2 o eVDSL **non sono più classificate come "30 Mbps" ma come "100 Mbps"**. Dai dati risulta infatti che già a dicembre 2018 le linee VDSL2 con velocità inferiore a 100 Mbps sarebbero quasi lo 0%.[^percentuale]

Secondo quanto dichiarato dagli operatori (essenzialmente **TIM**), la VDSL permetterebbe infatti già da ora di offrire in quasi il 100% dei casi almeno 100 Mbps di velocità in download, in due modi:

- per le linee con **lunghezza inferiore ai 400 metri** i 100 Mbps sarebbero raggiungibili con la **eVDSL**, comunemente chiamata "**FTTC 200 Mbps**". Si noti che non è chiaro se la distanza è intesa in linea d'aria o stimata con altre tecniche;
- per tutte le altre linee, i 100 Mbps si otterrebbero, citiamo, *con la tecnica dell'affasciamento («bonding») di uno o due collegamenti VDSL-enhanced e uno mobile 4G/5G*. Si tratterebbe in altre parole di sommare più linee FTTC per poter superare i 100 Mbps in download per singolo cliente, integrando anche collegamenti 4G o 5G.

È evidente che **soprattutto la seconda situazione è molto irrealistica**, e per questo le soluzioni >100 Mbps saranno oggetto di **approfondimento tecnico e dimensionale da parte di Infratel**, in collaborazione con gli operatori interessati.

Sintetizzando, le previsioni di copertura per il 2021 sono le seguenti:

- **FTTH > 100 Mbps: 32,7%**
- **FTTC > 100 Mbps: 45,3%**
- FTTC > 30 Mbps: 0,01%
- FWA > 100 Mbps: 16,8%
- FWA > 30 Mbps: 4,7%

A questi dati, riguardanti le aree nere e grigie, vanno aggiunte le aree già coperte o in fase di copertura tramite fondi pubblici, cioè circa il 36% dei numeri civici:

{{< fig src="/images/cons19-totale.jpg" caption="Percentuale di copertura sul totale dei civici italiani al 2021. La provincia autonoma di Bolzano prevede rilevazioni e piani di copertura interni a livello provinciale." >}}

## I risultati dettagliati

I dati comune dettagliati (per comune e per indirizzo) sono stati pubblicati il 27 giugno 2019 sul sito [Banda Ultra Larga](http://bandaultralarga.italia.it).

Segui [la nostra guida]({{< relref "/posts/sitobul2019.md" >}}) per verificare le previsioni di intervento fino al 2021.

[^infratel1]: *Monitoraggio Consultazioni Aree Grigie e Nere - Manuale di Istruzioni* https://consultazione.infratelitalia.it/doc/Manuale_Istruzioni_monitoraggio_2019.pdf (non più accessibile da luglio 2020)
[^infratel2]: *Infratel ha completato il Monitoraggio della Consultazione Aree Grigie e Nere*, 3 giugno 2019 https://www.infratelitalia.it/archivio-news/notizie/infratel-ha-completato-il-monitoraggio-della-consultazione-aree-grigie-e-nere
[^percentuale]: le percentuali indicate da qui in poi si riferiscono sempre ai 19,8 milioni di civici oggetto di consultazione, non al Paese intero

{{< footer >}}
