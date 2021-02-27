---
title: "Cos'è e cosa fa FiberCop"
slug: fibercop
date: 2021-02-27T15:00:00+01:00
lastmod: 2021-02-27T15:00:00+01:00
authors: [Matteo]
description: "FiberCop è un progetto di TIM, Fastweb e KKR che coprirà 1610 comuni in FTTH Gigabit entro il 2025. Ecco la lista e i dettagli."
categories: [Definizioni, Copertura, FTTH]
image: /social/fibercop.jpg
hidden: true
---

**FiberCop** è un'azienda partecipata da TIM (58%), Fastweb (4,5%) e il fondo statunitense KKR (37,5%) con lo scopo di **realizzare reti [FTTH]({{< relref "/posts/architetture.md" >}}) in 1610 comuni italiani entro il 2025**, corrispondenti al 56% delle unità immobiliari "tecniche" nazionali.[^uit][^costituzione]

[^uit]: Le unità immobiliari tecniche sono quelle che nel tempo hanno fatto uso della rete fissa. https://wdc.wholesale.telecomitalia.it/fibercop/
[^costituzione]: https://www.gruppotim.it/it/archivio-stampa/corporate/2020/CS-TIM-FiberCop-Access.html

FiberCop è un operatore che opera solo all'ingrosso, e cioè **non vende direttamente ai clienti finali**. Per attivare una linea su rete FiberCop è necessario quindi rivolgersi agli operatori al dettaglio che usufruiscono della rete FiberCop, cioè, nel momento in cui questo articolo è stato aggiornato, soltanto TIM.

L'infrastruttura FTTH è realizzata con la tecnologia [GPON]({{< relref "/posts/gpon.md" >}}), che consente di fornire connessioni con velocità di **1 Gbps in download** e centinaia di Mbps in upload, a seconda del profilo scelto dell'operatore.

{{< toc >}}

## Città coperte

La lista dei **1610 comuni** che saranno coperti è pubblicata da TIM [in questo file PDF](https://storage.googleapis.com/tim_media_prod/2021/01/Allegato_1-Piano_di_Copertura_Co_investimento.pdf), ed è anche disponibile [una mappa](https://www.google.com/maps/d/viewer?mid=1HAJLRDgqhdg7dcq7LqhXayCLnf2Gq76A&usp=sharing) (non ufficiale). Per ogni comune è indicato l'**anno di completamento della copertura**, ma a detta di TIM **i lavori saranno avviati in tutti i comuni tra il 2021 e il 2022**.[^coinvestimento]

[^coinvestimento]: Offerta di Coinvestimento https://storage.googleapis.com/tim_media_prod/2021/01/Proposta_Impegni_Coinvestimento_TIM.zip

In ciascun comune del piano è prevista la copertura di circa il 75-80% delle unità immobiliari tecniche, per un totale di circa 12,9 milioni di UIT entro il 2025, cioè circa il 75% delle [aree nere e grigie]({{< relref "/posts/aree.md" >}}). Tra i comuni che saranno coperti sono presenti anche delle aree bianche (aree teoricamente "a fallimento di mercato").

{{< fig src="/images/fibercop-comuni.jpg" nolink="true" caption="Alcuni dei comuni coinvolti dal piano. La lista completa è pubblicata [qua](https://storage.googleapis.com/tim_media_prod/2021/01/Allegato_1-Piano_di_Copertura_Co_investimento.pdf)." alt="Una lista di alcuni comuni coinvolti dal piano FiberCop." >}}

## Lavori di copertura

Il progetto FiberCop prevede soltanto la realizzazione della **rete secondaria in fibra ottica**, cioè quella che va dall'armadio ripartilinea di TIM alle abitazioni, e prevede l'installazione di un apposito **"armadio ottico"** marchiato *FiberCop* o *TIM*.

In genere, i nuovi armadi vengono collocati **accanto a un armadio ripartilinea TIM esistente**, ma sono stati segnalati anche armadi "solitari".[^solitario] La presenza dell'armadio ottico è il **principale indizio** per comprendere se è in corso la copertura di FiberCop in un determinato comune.[^avvistamenti]

[^solitario]: https://forum.fibra.click/d/16642-fibercop-a-lecce
[^avvistamenti]: https://forum.fibra.click/d/16660-avvistamenti-fibercop

{{< fig src="/images/fibercop-cro1.jpg" caption="Sulla sinistra, un armadio ottico marchiato FiberCop, accanto alla colonnina di alimentazione per la FTTC (al centro) e all'ARL TIM (a destra). Grazie a @ilredellapietra per la foto. [Fonte](https://forum.fibra.click/d/16373-nuovo-armadio-fibercop)." alt="Marciapiede con installati diversi armadi stradali di TIM. Uno di questi è l'ARLO, è metallico, alto circa un metro, di colore grigio e con il tettuccio dipinto di rosso." >}}

La copertura prevede anche l'installazione di un **Punto di Terminazione di Edificio** (PTE) per abitazione coperta, cioè una scatola che fa da raccordo per la fibra ottica e che viene montata solitamente nel locale contatori del palazzo o su una parete esterna dell'edificio.

{{< fig src="/images/fibercop-pte1.jpg" caption="Un PTE FiberCop montato su un palo della rete telefonica di TIM. Grazie ad Andrea G. per la foto." alt="Primo piano di una scatola rettangolare di plastica con i loghi TIM e FiberCop, montata su un palo di legno." >}}

## Architettura

Come accennato, il progetto prevede la **realizzazione della sola rete secondaria**. La **rete primaria**, cioè quella tra armadio e centrale, è invece **già presente** grazie alla copertura **FTTC** (*Fiber To The Cabinet*) realizzata da TIM nel corso degli anni. A seconda della modalità scelta, un operatore terzo che vuole acquisire servizi passivi da FiberCop dovrà costruirsi la propria rete primaria oppure acquisirla da FiberCop/TIM.

L'architettura FTTH scelta è di tipo **passivo**, e cioè non ha bisogno di apparati alimentati (al di là di quelli presenti in centrale e nelle abitazioni dei clienti), e **ruota attorno al concetto di armadio ottico**, quasi sempre situato nei pressi degli armadi ripartilinea esistenti (ARL). L'armadio ottico viene di conseguenza chiamato **CRO** (*Cabinet Ripartilinea Ottico*), e spesso anche **ARLO** (*Armadio Ripartilinea Ottico*) o **CNO** (*Centro Nodale Ottico*). Un armadio ottico serve **fino a 384 unità immobiliari**.

[^gpon]: https://wdc.wholesale.telecomitalia.it/fibercop/servizi/semi-gpon-e-full-gpon/

L'insieme di questi due fattori, cioè il fatto che la rete primaria è già presente e che è necessario installare solo un armadio nei pressi degli armadi esistenti, permette di **realizzare la rete con molta rapidità**, come segnalato da molti utenti anche sul forum di FibraClick.[^avvistamenti]

{{< info >}}
I dettagli dell'architettura di rete FiberCop, basata sulla tecnologia GPON, sono illutrati nella **sezione apposita** della pagina [Cos'è e come funziona la GPON]({{< relref "/posts/gpon.md#fibercop" >}}).
{{< /info >}}

## Foto

{{< fig src="/images/fibercop-cro4.jpg" caption="Un CRO \"solitario\" in una zona ad alta densità abitativa di Savona. Grazie ad @ErnyTech per la foto. [Fonte](https://forum.fibra.click/d/16373-nuovo-armadio-fibercop/119)." >}}

{{< fig src="/images/fibercop-cro2.jpg" vertical="true" caption="Interno di un CRO. In alto, i 384 connettori per la rete secondaria punto-punto. Al centro, lo spazio per i 14 splitter GPON primari 1:4 (inizialmente ne viene installato solo uno). In basso, lo spazio per 24 splitter secondari 1:16. In basso a destra si vedono i cavi di fibre ottiche primarie in arrivo dalla centrale. Grazie ad Andrea G. per la foto." >}}

{{< fig src="/images/fibercop-cro3.jpg" vertical="true" caption="Le uscite di uno splitter primario 1:4 (in alto, si vedono i 4 connettori), e di uno splitter secondario 1:16 (in basso, con 16 connettori). Grazie ad Andrea G. per la foto." >}}

{{< footer >}}
