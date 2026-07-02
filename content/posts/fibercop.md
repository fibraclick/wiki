---
title: "Cos'è e cosa fa FiberCop"
slug: fibercop
date: 2021-02-27T15:00:00+01:00
lastmod: 2026-06-30T00:00:00+02:00
authors: [Matteo,LeoVentu]
description: "FiberCop è l'operatore infrastrutturale wholesale che gestisce la rete fissa di accesso in Italia, con oltre 6.200 comuni raggiunti e circa 14,3 milioni di unità immobiliari raggiunte in FTTH."
categories: [Definizioni, Copertura, FTTH]
image: /social/fibercop.jpg
---

**FiberCop** è una società costituita nel novembre 2020 nell'ambito di un progetto volto ad ampliare la copertura in fibra ottica sul territorio italiano. Inizialmente costituita da TIM come azionista unico, dal marzo 2021 è stata partecipata anche da Teemo Bidco, controllata da fondi gestiti o assistiti da KKR, e da Fastweb, rispettivamente con quote del 37,5% e del 4,5%, con TIM al 58%.

Il 1° luglio 2024, nell'ambito dell'operazione di cessione della rete fissa di TIM (cosiddetta operazione NetCo), TIM ha conferito in FiberCop il ramo d'azienda relativo alla rete primaria in fibra e rame, mentre le quote detenute da TIM e Fastweb sono state acquisite da nuovi investitori[^tim2024][^fastweb2024]. FiberCop è diventata così un operatore infrastrutturale wholesale indipendente, separato dalla proprietà di TIM.

L'attuale assetto societario vede come azionisti KKR Infrastructure (37,8%), CPP Investments (17,5%), ADIA (17,5%), il Ministero dell'Economia e delle Finanze (16%) e F2i (11,2%)[^fibercop2024].

FiberCop gestisce oggi un'infrastruttura che raggiunge **oltre 6.200 comuni italiani**, di cui più di **3.200 connessi in [FTTH]({{< relref "/posts/architetture.md" >}})**, per circa **14,3 milioni di unità immobiliari** al 31 dicembre 2025[^fibercopAzienda], salite a circa 15 milioni secondo comunicazioni FiberCop di giugno 2026, con l'obiettivo di superare i **20 milioni entro fine 2027**[^fibercop2025]. FiberCop è inoltre coinvolta nei **7 lotti** del **Piano Italia 1 Giga** originariamente aggiudicati a TIM in raggruppamento temporaneo d'impresa con FiberCop[^fibercopP1G].

FiberCop è un operatore che opera solo all'ingrosso, e cioè **non vende direttamente ai clienti finali**. Per attivare una linea su rete FiberCop è necessario quindi rivolgersi agli operatori al dettaglio che usufruiscono della rete FiberCop, tramite i propri [partner](https://www.fibercop.com/en/our-partners/).

L'infrastruttura [FTTH]({{< relref "/posts/architetture.md" >}}) di FiberCop utilizza sia la tecnologia [GPON]({{< relref "/posts/gpon.md" >}}), con profili fino a **2,5 Gbit/s in download** e **1 Gbit/s in upload**, sia la tecnologia **XGS-PON**, con profili fino a **10 Gbit/s in download e in upload**. I profili effettivamente disponibili dipendono dall'operatore scelto, dalla copertura tecnica dell'indirizzo e dall'offerta commerciale sottoscritta.

{{< toc >}}

## Città coperte

È possibile verificare se la propria zona è coperta tramite la pagina ufficiale di FiberCop[^fibercopVerifica], che indica se il civico è raggiunto dalla rete FTTH e mostra le offerte degli operatori partner disponibili. È inoltre disponibile la pagina [Cantieri in corso](https://www.fibercop.com/cantieri-in-corso/), che permette di visualizzare le aree in cui sono attivi i lavori nel proprio comune[^fibercopCantieri].

La disponibilità commerciale della linea dipende dagli operatori che utilizzano la rete FiberCop. I servizi su rete FiberCop possono essere forniti agli operatori in diverse modalità wholesale, tra cui [VULA]({{< relref "/posts/vula-slu-nga.md#vula-virtual-unbundled-local-access" >}}), [Bitstream-NGA]({{< relref "/posts/vula-slu-nga.md#nga-next-generation-access" >}}) e servizi passivi su rete in fibra[^fibercopWholesaleVula][^fibercopWholesaleBitstream].

## Piani di sviluppo

Il primo piano di sviluppo della rete FTTH risale al **2021**, con l'offerta di coinvestimento presentata da TIM ad AGCOM il 29 gennaio 2021 per la realizzazione di una rete in fibra ottica punto-punto nella rete di accesso secondaria di **1.610 comuni**, con completamento previsto entro il 2025[^fibercopOfferta]. Nel giugno dello stesso anno il piano è stato **ampliato** con l'inserimento di ulteriori 968 comuni nelle aree grigie, raggiungendo un totale di **2.578 comuni** e circa **13,6 milioni di unità immobiliari tecniche (UIT)**[^uit] (pari a circa l'80% delle UIT delle aree nere e grigie), con la data di completamento **prorogata** dal 31 dicembre 2025 al 30 aprile 2026[^fibercopOfferta]. Nell'agosto 2023, a seguito dell'approvazione del Piano Strategico 2023-25 di TIM, il piano complessivo di copertura FTTH di TIM/FiberCop è stato ulteriormente **ampliato**, con l'obiettivo di raggiungere a fine **2028** circa **16 milioni di UIT**, pari a circa il 65% delle UIT totali presenti sul territorio nazionale[^fibercop2028].

Nel nuovo assetto societario, FiberCop ha annunciato un piano di investimenti complessivo di circa **10 miliardi di euro** nel periodo 2024–2027 per l'espansione e il potenziamento della rete FTTH su tutto il territorio nazionale[^fibercopAzienda]. L'obiettivo è raggiungere **oltre 20 milioni di unità immobiliari** entro fine 2027, rispetto alle 14,3 milioni coperte a dicembre 2025.

Parallelamente al piano autonomo, FiberCop è impegnata nei progetti PNRR, per i quali è destinataria di circa **2,3 miliardi di euro**. Nell’ambito del **Piano Italia 1 Giga**, i **7 lotti** furono aggiudicati al raggruppamento temporaneo d'impresa tra TIM e FiberCop; il 1° luglio 2024 si è conclusa l'operazione di conferimento del ramo d'azienda relativo alla rete fissa primaria in fibra e rame da TIM a **FiberCop**, che era già titolare della rete secondaria[^fibercopP1G][^tim2024]. Dopo il walk-in del 30 giugno 2023 sono stati individuati **1.334.545 civici** da raggiungere con connettività ad almeno **1 Gbit/s** entro il 2026, per **1.628 milioni di euro** di fondi stanziati. Con il completamento delle attività legate al PNRR, l’azienda prevede di accelerare ulteriormente il ritmo di copertura, arrivando a connettere circa **3 milioni di nuove unità immobiliari all’anno**[^fibercopH12025].

Sempre dal 2026 è previsto l'avvio dello **switch-off della rete in rame**, cioè la dismissione progressiva delle linee telefoniche tradizionali a favore della fibra ottica, con l'obiettivo di completare la transizione entro il 2027[^fibercopH12025].

### Fatti della stessa fibra

**Fatti della stessa fibra** è un progetto di FiberCop rivolto ai comuni italiani che non rientrano nei piani di copertura ordinari. Attraverso la firma di un accordo con il singolo comune, FiberCop si impegna a portare la rete FTTH direttamente nelle abitazioni e nelle imprese locali, finanziando interamente i lavori. Per ogni comune aderente viene predisposto un sito dedicato dove i residenti possono verificare la copertura del proprio civico e prenotare l'installazione del collegamento in fibra, a titolo gratuito, tramite un tecnico FiberCop[^fibercopFdSF]. Tra i comuni già coinvolti figurano Parabita (LE), Maniago (PN) e Curtarolo (PD).

## Lavori di copertura

I lavori di copertura FTTH di FiberCop prevedono l'installazione di un apposito **"armadio ottico"** marchiato *FiberCop*, che costituisce il nodo di distribuzione della fibra ottica verso le abitazioni.

In genere, i nuovi armadi vengono collocati **accanto a un armadio ripartilinea esistente**, ma sono stati segnalati anche armadi "solitari".[^solitario] La presenza dell'armadio ottico è il **principale indizio** per comprendere se è in corso la copertura di FiberCop in un determinato comune.[^avvistamenti]

{{< fig src="/images/fibercop-cro1.jpg" caption="Sulla sinistra, un armadio ottico marchiato FiberCop, accanto alla colonnina di alimentazione per la FTTC (al centro) e all'armadio ripartilinea (a destra). Grazie a @ilredellapietra per la foto. [Fonte](https://forum.fibra.click/d/16373-nuovo-armadio-fibercop)." alt="Marciapiede con installati diversi armadi stradali. Uno di questi è l'ARLO, è metallico, alto circa un metro, di colore grigio e con il tettuccio dipinto di rosso." >}}

La copertura prevede anche l'installazione di un **Punto di Terminazione di Edificio** (PTE) per abitazione coperta, cioè una scatola che fa da raccordo per la fibra ottica e che viene montata solitamente nel locale contatori del palazzo o su una parete esterna dell'edificio.

{{< fig src="/images/fibercop-roe1.jpg" caption="Un PTE FiberCop montato su un palo della rete. Grazie a @ag23900 per la foto." alt="Primo piano di una scatola rettangolare di plastica con il logo FiberCop, montata su un palo di legno." >}}

## Architettura

FiberCop gestisce oggi l'**intera infrastruttura di rete fissa**: oltre alla rete primaria (tra centrale e armadio) e alla rete secondaria (tra armadio e abitazione), gestisce anche le **centrali di attestazione** — circa 10.500 in tutta Italia — acquisite da TIM il 1° luglio 2024[^fibercopAzienda]. La rete primaria era già presente grazie alla copertura **FTTC** (*Fiber To The Cabinet*) realizzata da TIM nel corso degli anni. Un operatore terzo che vuole acquisire servizi passivi da FiberCop può quindi appoggiarsi all'intera infrastruttura esistente oppure costruirsi la propria rete primaria.

L'architettura FTTH scelta è di tipo **passivo**, e cioè non ha bisogno di apparati alimentati (al di là di quelli presenti in centrale e nelle abitazioni dei clienti), e **ruota attorno al concetto di armadio ottico**, quasi sempre situato nei pressi degli armadi ripartilinea esistenti (ARL). L'armadio ottico viene di conseguenza chiamato **CRO** (*Cabinet Ripartilinea Ottico*) e spesso anche **ARLO** (*Armadio Ripartilinea Ottico*). Un armadio ottico serve **fino a 384 unità immobiliari**.

La disponibilità della rete primaria preesistente e la possibilità di installare il nuovo armadio ottico nei pressi degli armadi esistenti permette di **realizzare la rete con molta rapidità**, come segnalato da molti utenti anche sul forum di FibraClick.[^avvistamenti]

{{< info >}}
I dettagli dell'architettura di rete FiberCop, basata su tecnologie GPON e XGS-PON, sono illustrati nella **sezione apposita** della pagina [Cos'è e come funziona la GPON]({{< relref "/posts/gpon.md#fibercop" >}}).
{{< /info >}}

## Foto

{{< fig src="/images/fibercop-pozzetto.jpg" caption="Pozzetto FiberCop." alt="Chiusino di un pozzetto, con la scritta FiberCop e relativo logo" >}}

{{< fig src="/images/fibercop-cro4.jpg" caption="Un CRO \"solitario\" in una zona ad alta densità abitativa di Savona. Grazie a @ErnyTech per la foto. [Fonte](https://forum.fibra.click/d/16373-nuovo-armadio-fibercop/119)." >}}

{{< fig src="/images/fibercop-cro6.jpg" caption="Un CRO di dimensione ridotta a Chieri (TO), può coprire al massimo 128 unità immobiliari. [Fonte](https://forum.fibra.click/d/16660-avvistamenti-e-mappa-lavori-ftth-fibercop/3236)." >}}

{{< fig src="/images/fibercop-cro5.jpg" caption="Due CRO affiancati a Chiavari (GE). Grazie a @Salvozzo per la foto. [Fonte](https://forum.fibra.click/d/16660-avvistamenti-e-mappa-lavori-ftth-fibercop/995)." >}}

{{< fig src="/images/fibercop-cro2.jpg" caption="Interno di un CRO. In alto, i 384 connettori per la rete secondaria punto-punto. Al centro, lo spazio per i 14 splitter GPON primari 1:4 (inizialmente ne viene installato solo uno). In basso, lo spazio per 24 splitter secondari 1:16. In basso a destra si vedono i cavi di fibre ottiche primarie in arrivo dalla centrale. Grazie a @ag23900 per la foto." >}}

{{< fig src="/images/fibercop-cro3.jpg" vertical="true" caption="Le uscite di uno splitter primario 1:4 (in alto, si vedono i 4 connettori), e di uno splitter secondario 1:16 (in basso, con 16 connettori). Grazie a @ag23900 per la foto." >}}

[^fibercop2024]: Bilancio annuale FiberCop FY2024. https://www.fibercop.com/wp-content/uploads/2025/06/ENG_FiberCop_FS_FY_2024.pdf
[^fastweb2024]: https://www.fastweb.it/corporate/media/comunicati-stampa/fastweb-vende-la-sua-quota-in-fibercop/
[^tim2024]: https://www.gruppotim.it/it/archivio-stampa/corporate/2024/CS-Closing-NetCo-1-luglio.html
[^fibercopP1G]: https://www.fibercop.com/bandi-pnrr/piano-italia-1-giga/
[^fibercopAzienda]: https://www.fibercop.com/en/about-us/the-company/
[^fibercopOfferta]: https://www.fibercop.com/2021/06/28/estensione-della-copertura-dell-offerta-di-co-investimento-di-tim-nella-nuova-rete-in-fibra-di-fibercop/
[^uit]: Le unità immobiliari tecniche (UIT) rappresentano le unità immobiliari del territorio nazionale per le quali, nel tempo, è stata attivata una linea telefonica e/o di banda larga. https://www.fibercop.com/wp-content/uploads/2022/10/Testo-consolidato-dellofferta-di-co-investimento-di-TIM-nella-nuova-rete-in-fibra-di-FiberCop_21.10.22-1.pdf
[^fibercop2028]: https://www.fibercop.com/2023/08/10/evoluzione-al-2028-del-piano-di-copertura-ftth-di-tim-fibercop/
[^fibercop2025]: https://www.fibercop.com/en/comunicati-stampa/fibercop-celebrates-its-first-anniversary-and-looks-to-the-future-a-new-identity-and-new-values-to-accelerate-the-countrys-digital-transformation/
[^fibercopH12025]: https://www.fibercop.com/comunicati-stampa/fibercop-confermate-le-linee-guida-strategiche-risultati-in-linea-con-le-aspettative-nel-primo-semestre-2025/
[^fibercopFdSF]: https://www.fibercop.com/comunicati-stampa/fibercop-porta-la-fibra-ottica-ultraveloce-a-parabita/
[^fibercopVerifica]: https://copertura.fibercop.com/
[^fibercopCantieri]: https://www.fibercop.com/cantieri-in-corso/
[^fibercopWholesaleVula]: https://market.fibercop.com/tw_servizi/vula/
[^fibercopWholesaleBitstream]: https://market.fibercop.com/tw_servizi/bitstream-nga/
[^solitario]: https://forum.fibra.click/d/16642-fibercop-a-lecce
[^avvistamenti]: https://forum.fibra.click/d/16660-avvistamenti-fibercop

{{< footer >}}
