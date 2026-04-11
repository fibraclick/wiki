---
title: "Cos'è il Piano Italia 1 Gbps"
slug: piano-italia-1-giga
date: 2026-03-28
lastmod: 2026-03-28T10:00:00+01:00
authors: [Leoventu]
description: Il Piano Italia 1 Gbps (PI1G) è il progetto pubblico finanziato dal PNRR per portare connessioni fino a 1 Gbps in download nelle aree italiane prive di copertura adeguata.
categories: [Definizioni, Copertura, PI1G]
---

Il **Piano Italia 1 Gbps** (PI1G) è un intervento pubblico finalizzato alla **realizzazione di reti con una capacità minima garantita di 1 Gbps in download e 200 Mbps in upload**, nelle aree prive di connessioni ad almeno 300 Mbps in download o dove tali connessioni non siano previste entro il 2026. Le velocità effettivamente commercializzate agli utenti finali rimangono a discrezione dell'operatore, nel rispetto delle proprie strategie commerciali.

Il piano nasce per avvicinarsi agli obiettivi europei per il digitale del 2030, che prevedono connettività **Gigabit per tutti i cittadini europei**. Le infrastrutture devono inoltre essere **"10G ready"**, ovvero progettate per garantire la **scalabilità fino a 10 Gbps** e l'evoluzione verso reti **XGS-PON o equivalenti**, in linea con gli obiettivi della **Gigabit Society 2030**.[^specifiche]

[^specifiche]: *Infratel Italia – Bando "Piano Italia a 1 Giga", Allegato 4 – Specifiche Tecniche, 2022* https://www.infratelitalia.it/archivio-bandi/piano-italia-a-1-giga-bando-di-gara

{{< toc >}}

## Gli obiettivi e il finanziamento

Il piano coinvolge **7 milioni di numeri civici** identificati dagli esiti della mappatura 2021 condotta da Infratel, per un investimento complessivo di **3,8 miliardi di euro**.

Il bando, suddiviso in **15 aree geografiche**, è stato pubblicato a inizio 2022 e aggiudicato a maggio dello stesso anno. Il progetto segue il modello **"ad incentivo"**, che prevede un finanziamento pubblico delle reti fino al **70% del costo totale**. Le infrastrutture realizzate resteranno quindi di proprietà degli operatori privati.

Il cronoprogramma del piano prevede la **realizzazione delle reti entro l'inizio del 2026**, con tappe intermedie che gli operatori sono tenuti a rispettare per non incorrere in penali.

{{< green >}}
###### Storia del piano

Il piano era originariamente chiamato **"piano aree grigie"** e la pianificazione era iniziata nel **2018**, con l'idea di finanziare il progetto attingendo dai fondi europei e nazionali del ciclo di programmazione economica **2014–2020**.

Il progetto è stato riprogrammato nel **2020 durante la pandemia di COVID-19**, poi rimodulato per essere incluso nel **Piano Nazionale di Ripresa e Resilienza (PNRR)** e nei progetti finanziati dal programma europeo **Next Generation EU**.
{{< /green >}}

## Chi realizza le infrastrutture

Il bando prevede la divisione dei civici coinvolti in 15 lotti geografici, assegnati a due operatori:

- **Open Fiber** per 8 lotti (Puglia, Toscana, Lazio, Sicilia, Emilia-Romagna, Campania, Friuli Venezia Giulia-Veneto, Lombardia), per un valore di **circa 2 miliardi di euro**;
- **TIM/FiberCop** per i restanti 7 lotti (Sardegna, Abruzzo-Molise-Marche-Umbria, Piemonte-Liguria-Val d'Aosta, Calabria Sud, Calabria Nord, Basilicata, PA Trento e PA Bolzano), per un valore di **circa 1,6 miliardi di euro**.

{{< fig src="/images/italy_map_pi1g.png" caption="Mappa dell'Italia che illustra la suddivisione regionale dei lotti del Piano Italia 1 Gbps assegnati a Open Fiber e TIM/FiberCop. Fonte mappa base: [es:Usuario:Mnemoc](https://commons.wikimedia.org/wiki/File:Italy_Regions_Blank.svg), [CC BY-SA 3.0](http://creativecommons.org/licenses/by-sa/3.0/), via Wikimedia Commons" >}}

Il **primo cantiere** del piano è stato avviato da **Open Fiber** il **29 settembre 2022** a **Mugnano di Napoli**.

## Architettura di rete

L'architettura adottata nel PI1G riprende in gran parte i modelli già utilizzati dagli operatori nei propri investimenti privati, con adattamenti legati alla natura pubblica dell'intervento e ai vincoli tecnici imposti da **Infratel Italia** nel bando del 2022.

Nel caso di **FiberCop**, la rete mantiene la stessa impostazione architetturale dei piani di investimento privato dell'operatore.

**Open Fiber** ha scelto di replicare l'architettura impiegata nei **cluster A e B (aree nere)**, con alcune differenze rilevanti: nei lotti PI1G i **Punti di Flessibilità Secondari (PFS)** non sono collegati in anello, bensì **collegati direttamente**.

{{< warn >}}
Open Fiber ha dovuto **realizzare POP dedicati al PI1G** nelle aree in cui non era possibile utilizzare quelli già esistenti dei cluster AB. Non potendo condividere direttamente le infrastrutture del progetto **BUL (Banda Ultra Larga Aree Bianche)**, in alcuni casi i nuovi POP sono stati collocati in prossimità dei PCN BUL e collegati tramite una dorsale primaria light.
{{< /warn >}}

## FWA

Con la delibera **[AGCOM 131/23/CONS](https://www.agcom.it/provvedimenti/delibera-131-23-cons)** del 20 giugno 2023, **Open Fiber** è stata autorizzata a utilizzare la tecnologia **FWA** per la copertura dei civici sparsamente distribuiti o difficilmente raggiungibili con infrastruttura FTTH.

La copertura FWA avviene utilizzando la banda **28 GHz** in modalità punto-multipunto con due blocchi da 112 MHz, garantendo una velocità di **1 Gbps in download e 200 Mbps in upload**.[^fwa]

[^fwa]: *FWA Gigabit di Open Fiber per il Piano Italia a 1 Giga* https://forum.fibra.click/d/41556-fwa-gigabit-di-open-fiber-per-il-piano-italia-a-1-giga

## Civici adiacenti (o "di prossimità")

Con la **[Legge 56/2024](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2024-04-29;56)** (conversione del DL 19/2024), il Governo ha concesso agli operatori la possibilità di **sostituire i civici previsti dal bando con altri civici in prossimità o adiacenti**, a condizione di non modificare il numero complessivo di civici né le scadenze fissate.

Il 6 settembre 2025 Infratel Italia ha pubblicato una consultazione pubblica per raccogliere la lista dei civici adiacenti esclusi dal bando originale e valutarne la sostituzione con quelli ritenuti sparsi.

{{< green >}}
###### Criteri di ammissibilità

Affinché un civico rientri tra quelli accettati nella consultazione, deve soddisfare tre condizioni:
- non essere oggetto di altri investimenti già attuati;
- non essere inserito in piani di sviluppo privati;
- non trovarsi a meno di **50 metri** da un civico già coperto presente a bando.
{{< /green >}}

I risultati della consultazione mostrano un tasso di accettazione di circa il 50% in entrambi i casi:

- **FiberCop** ha comunicato un totale di **49.522 civici**, di cui sono risultati ammissibili **22.274**;
- **Open Fiber** ha presentato un totale di **96.060 civici**, di cui ne sono stati giudicati ammissibili **46.443**.

## Taglio di circa 700.000 civici

Il **13 settembre 2025**, il Sottosegretario all'Innovazione **Alessio Butti** ha dichiarato che, a seguito delle difficoltà di Open Fiber nel rispettare le scadenze del 30 giugno 2026, il Governo ha concordato con la Commissione Europea una **rimodulazione del Piano Italia a 1 Giga**.[^butti]

[^butti]: *Butti: Italia a 1 Giga, 700mila civici in meno per salvare i fondi PNRR* https://innovazione.gov.it/notizie/interventi/butti-italia-a-1-giga-700mila-civici-in-meno-per-salvare-i-fondi-pnrr

La rimodulazione comporta l'esclusione temporanea di circa **700.000 civici** dai piani originari, generando **economie per circa 700 milioni di euro** che saranno reinvestite in nuovi progetti di copertura entro il 2030, attraverso tecnologie **FTTH, FWA o satellitari**.

{{< warn >}}
L'intervento è stato necessario per consentire il rispetto dei **target di spesa PNRR** e la **salvaguardia dei fondi europei**, evitando il rischio di decadenza delle risorse.
{{< /warn >}}

{{< footer >}}
