---
title: "Come funziona la rete Internet"
slug: internet
date: 2020-03-13T16:00:00+01:00
lastmod: 2020-03-14T10:30:00+01:00
authors: [Matteo]
description: "Come funziona Internet? Con un linguaggio semplice, spieghiamo cos'è il modello a strati, i sistemi autonomi, il peering e il transito."
categories: [Reti]
image: /social/mix.jpg
---

**Internet** è la **rete globale** che utilizziamo tutti i giorni, ed è realizzata grazie all'**interconnessione di decine di migliaia di reti più piccole**, che collegano a loro volta al loro interno un numero più o meno grande di computer[^computer].

[^computer]: Computer intesi nel senso più ampio, quindi qualsiasi dispositivo di calcolo collegabile in rete.

Questo articolo prova a spiegare con un linguaggio semplice **come funziona la rete Internet**, e cioè quali sono gli elementi fondamentali che permettono lo straordinario risultato di far comunicare tra loro miliardi di dispositivi.

{{< toc >}}

## I protocolli TCP/IP

Internet è una rete a *commutazione di pacchetto*: significa che basa la trasmissione delle informazioni su un sistema di invio e ricezione di piccoli pacchetti di dati.

Qualsiasi operazione effettuata in rete genera la trasmissione di pacchetti, e questi pacchetti virtuali sono costruiti seguendo delle regole descritte dai **protocolli di rete**. Il funzionamento dei protocolli è definito in modo molto dettagliato da dei documenti di testo chiamati <abbr title="Request For Comments">RFC</abbr>, pubblicamente disponibili su Internet.

Quando si vogliono inviare dei dati in rete, questi devono prima essere **imbustati** (o **incapsulati**) in un pacchetto, in modo che gli altri computer della rete sappiano come comportarsi quando li ricevono.

L'imbustamento avviene in più livelli, e ciascun livello che effettua l'imbustamento aggiunge delle informazioni che ritiene importanti.

Per quanto riguarda Internet, la suite di protocolli di riferimento è **TCP/IP**, che prende il nome dei due protocolli fondamentali **TCP** (*Transmission Control Protocol*) e **IP** (*Internet Protocol*). Per quanto riguarda le reti locali cablate si aggiunge inoltre **Ethernet**, mentre per le reti wireless **IEEE 802.11** (Wi-Fi).

{{< fig src="/images/internet/incapsulamento.png" caption="Schema a strati di TCP/IP. Ogni livello, partendo dall'alto, imbusta i dati del livello superiore aggiungendo dei dati al loro inizio, fino ad arrivare al livello di accesso fisico alla rete." >}}

Se una trasmissione usa i protocolli TCP + IP + Ethernet, sul "filo" vengono trasmessi pacchetti di tipo Ethernet (più precisamente trame, o **frame**), che contengono pacchetti del protocollo IP, che a loro volta contengono segmenti del protocollo TCP. **Servono così tanti livelli perché ciascun livello svolge un ruolo diverso.**

Ad esempio, il protocollo IP si occupa dell'**indirizzamento**, e cioè indica quali sono gli **indirizzi IP pubblici** del mittente e del destinatario della trasmissione, che sono unici a livello globale.

Il **protocollo Ethernet** si occupa invece della trasmissione su cavo, e utilizza gli **indirizzi MAC** per indirizzare i frame **all'interno della rete locale**.

I **router**, come quelli che tutti abbiamo in casa, sono dispositivi che **operano (almeno) a livello Internet**, e cioè riescono a "leggere" e interpretare pacchetti di tipo IP. Quando un router riceve un pacchetto, lo analizza per capire se e come è in grado di gestirlo. **È cruciale che questa decisione avvenga in tempi rapidissimi, in modo da non introdurre latenza.**

Nella maggior parte dei casi, un router non può gestire direttamente un pacchetto ma deve inoltrarlo verso un altro dispositivo (un computer, un altro router, uno switch, ecc.), e cioè ritrasmetterlo fisicamente su un'altra porta. Questa operazione fa parte del processo di **instradamento**, o **routing**, che è la funzione principale dei router.

Il router incapsula quindi  nuovamente il pacchetto IP, ma non è detto che utilizzi sempre Ethernet. Ad esempio, nelle connessioni DSL residenziali per la trasmissione verso l'esterno si usa solitamente il protocollo <abbr title="Point to Point Protocol over Ethernet">PPPoE</abbr>.

{{< green >}}
TCP/IP deriva da un modello a strati ideale chiamato **ISO/OSI**, che è più articolato e prevede **7 livelli**. Per questo motivo spesso **i router vengono anche chiamati apparati *di livello 3***, perché il terzo strato di ISO/OSI è equivalente al livello Internet.
{{< /green >}}

## I sistemi autonomi (AS)

Un sistema autonomo, **Autonomous System** in inglese (**AS**), è definito come un **insieme di indirizzi IP**, e quindi come un insieme di destinazioni solitamente riconducibili alla stessa organizzazione (aziende, governi, istituti di ricerca, ecc.). Per esempio, l'AS più grande in Italia è l'AS3269 di Telecom Italia S.p.A, che comprende più di 19 milioni di indirizzi IP tra cui anche utenze di rete fissa e mobile (e di conseguenza i loro router di casa).[^astelecom]

[^astelecom]: https://ipinfo.io/countries/it

Lo scopo degli AS è **semplificare lo smistamento dei pacchetti** sulla rete Internet, perché permette di avere un **raggruppamento** di un numero anche molto alto di dispositivi. Ai "bordi" di un autonomous system ci sono dei router, tramite i quali passa tutto il traffico IP in ingresso e in uscita dal sistema. Un sistema autonomo non è necessariamente delimitato da una specifica area geografica: **l'importante è che i dispositivi di un AS siano in qualche modo connessi tra loro *all'interno* del sistema autonomo**.

A questo punto dovrebbe essere più facile comprendere la definizione di Internet: **un'interconnessione di sistemi autonomi che utilizza TCP/IP per la trasmissione dei dati**.

## L'interconnessione tra sistemi autonomi

Nel mondo ci sono decine di migliaia di sistemi autonomi[^asstats], e per fare in modo che Internet funzioni (e cioè che ogni destinazione sia raggiungibile da qualsiasi parte del mondo) hanno bisogno di comunicare tra loro.

[^asstats]: https://www-public.imtbs-tsp.eu/~maigron/RIR_Stats/RIR_Delegations/World/ASN-ByNb.html

Per farlo utilizzano un protocollo chiamato **BGP** (*Border Gateway Protocol*), tramite un'operazione che in gergo si chiama "annunciare". **Un AS annuncia ai suoi "vicini" l'insieme degli indirizzi IP che sono sotto il suo controllo**, in modo che possano essere raggiunti dal resto della rete.

Esistono dei **sistemi autonomi molto grandi**, corrispondenti a delle reti classificate come **Tier I** (di "primo livello"). Queste reti sono molto poche, ma sono in grado di raggiungere l'intera rete Internet[^tier1]: lo fanno esclusivamente tramite **accordi di peering**, e cioè con lo scambio reciproco di traffico.

[^tier1]: https://en.wikipedia.org/wiki/Tier_1_network

La parola *peer* in inglese significa "pari", e infatti gli accordi di peering si hanno di solito tra operatori approssimativamente della stessa dimensione e che devono scambiarsi quantità simili di dati. Un accordo di peering prevede spesso lo scambio del traffico a costo zero (in questo caso viene chiamato *settlement-free peering*), perché permette ad entrambe le parti di accedere a una porzione di Internet a cui altrimenti potrebbero non avere accesso.

**Tutti gli operatori di tipo Tier I sono quindi in peering tra loro, e fanno in questo modo da "collage" di Internet**. Uno di questi operatori è italiano, si chiama **Telecom Italia Sparkle** e gestisce una vasta rete di dorsali in tutto il mondo. Altre reti Tier I note sono ad esempio quelle di AT&T, NTT o Telia, nomi che si trovano spesso quando si eseguono *traceroute*.

{{% green %}}
###### Cos'è traceroute?

**Traceroute** è uno strumento che permette di tracciare il percorso di un pacchetto nella rete globale. Permette di elencare la lista dei router tramite cui un pacchetto passa, e di conseguenza di sapere tramite quali reti e sistemi autonomi il traffico verso una determina destinazione transita.

{{< fig src="/images/internet/tracert2.jpg" caption="In questo traceroute fatto da rete Fastweb verso un sito web statunitense (ospitato da Amazon Web Services), il traffico transita tramite Telecom Italia Sparkle (righe 9 e 10). La traccia in questo caso non termina mai perché il server di destinazione è configurato per non essere \"rilevato\", per cui il meccanismo con cui funziona traceroute \"fallisce\"." >}}

{{< fig src="/images/internet/tracert3.jpg" caption="In questo caso l'indirizzo IP di destinazione è interno alla rete Cogent, un operatore molto grande ma non classificabile come Tier I. Il traceroute mostra in modo molto evidente tutti i luoghi fisici tramite cui i dati transitano: Zurigo, Monaco, Francoforte, Amsterdam per poi passare negli Stati Uniti." >}}
{{% /green %}}

## Il transito e il peering

Oltre alle reti di tipo Tier I, esistono anche reti di secondo e terzo livello. Le reti **Tier III corrispondono ai piccoli operatori** (<abbr title="Internet Service Provider">ISP</abbr>) o ad altre piccole organizzazioni che gestiscono un sistema autonomo. Per connettersi al resto di Internet, questi operatori siglano degli **accordi di transito con almeno un altro operatore di livello superiore**.

In questo modo tutto il traffico Internet generato dall'operatore Tier III viene inoltrato all'operatore di livello superiore, che si occuperà poi in modo trasparente di recapitarlo nel modo che preferisce.

Affidarsi a un operatore per il transito ha i suoi vantaggi, ma **quando il traffico cresce può essere limitante**. Entra quindi in gioco di nuovo il **peering**: oltre agli accordi di transito, l'operatore può decidere di fare peering con altri operatori e fornitori di contenuti.

Ad esempio, **un operatore potrebbe voler siglare un accordo di peering con Netflix**, in modo che tutto il traffico verso il servizio di streaming venga recapitato direttamente senza passare da altre reti. Questo si traduce tipicamente in una **minore latenza** e in generale **migliori prestazioni, affidabilità e controllo**.[^peering]

[^peering]: https://www.linux.it/~md/text/peering-fict2015.pdf

{{% green %}}
###### Transito vs peering

La differenza fondamentale tra transito e peering è che il primo permette a un operatore di raggiungere il resto di Internet, mentre il peering serve a scambiare traffico tra due specifici sistemi autonomi (es. un ISP e Netflix, come abbiamo visto). **Il peering serve a migliorare la qualità del servizio**, perché permette di consegnare il traffico direttamente alla rete di destinazione senza transitare tramite router che possono essere geograficamente anche molto distanti.

###### Lessico

Il transito può essere chiamato anche *upstream peering*, proprio perché dipende dalla presenza di una rete di livello superiore. Inoltre una rete può avere più transiti, e in questo caso si dice che è *multi-homed*.
{{% /green %}}

### Dove avviene il peering

Il peering può essere di due tipi: **pubblico o privato**.

Nel primo caso si svolge fisicamente negli **Internet Exchange Point** (IXP), cioè dei luoghi in cui decine o centinaia di operatori si connettono a un'unica grande rete Ethernet che permette lo scambio facilitato dei dati tra tutti gli operatori presenti (comunque a seconda degli accordi di peering).[^ixp]

[^ixp]: https://www.cloudflare.com/learning/cdn/glossary/internet-exchange-point-ixp/

In Italia ci sono diversi IXP, ma il più grande è il **MIX di Milano**, che ha una capacità totale di scambio di traffico di più di **5 Tbps** (in condizioni normali non supera però il singolo Tbps).[^ixp2][^mix] La lista degli operatori presenti al MIX, con la relativa capacità di rete, è pubblica e disponibile [sul sito del MIX](https://www.mix-it.net/servizi-di-peering/#content-2). Nella lista ci sono aziende come Netflix (200 Gbps), Google (110 Gbps), Microsoft (200 Gbps), ma anche operatori come Vodafone (200 Gbps), Fastweb (100 Gbps) e EOLO, che nel momento in cui scriviamo detiene il record di 300 Gbps.

[^ixp2]: https://en.wikipedia.org/wiki/List_of_Internet_exchange_points
[^mix]: https://www.mix-it.net/2020/01/15/5-tb-di-capacita-connessa/

{{< fig src="/images/internet/mix.jpg" caption="Un datacenter di Caldera21, che ospita anche il MIX. Si trova al Caldera Park di via Caldera 21 a Milano. [Fonte](https://www.linkedin.com/showcase/caldera21%C2%AE/about/)." >}}

{{< fig src="/images/internet/tracert1.jpg" caption="Un traceroute fatto da rete Fastweb nel nord Italia mostra chiaramente che il traffico verso l'indirizzo IP `1.1.1.1` viene consegnato all'azienda CloudFlare presso il MIX di Milano (passo 8). CloudFlare è un'importante azienda che fornisce servizi CDN (Content Delivery Network) e protezione da attacchi DDoS." >}}

In alternativa **il peering può essere anche privato**, e cioè due "operatori" possono accordarsi per lo **scambio diretto del traffico senza passare tramite la rete di un IXP**. Questi accordi sono riservati, lo scambio può avvenire in qualsiasi struttura/centrale e non è sempre facile capire quali operatori sono in peering tra loro.

{{< green >}}
###### Telecom Italia e il depeering

[Dal 2013](https://www.chimerarevo.com/guide/internet/telecom-italia-depeering-146284/) Telecom Italia ha avviato una politica di depeering, e cioè ha smesso quasi completamente di fare peering pubblico negli IXP (al MIX fa peering solo con il GARR, la rete degli istituti di ricerca e delle università).

Lo stop del peering pubblico ha inizialmente [peggiorato la qualità di Internet](https://www.linux.it/~md/text/depeering-topix.pdf) in Italia, perché il traffico degli operatori non poteva più essere consegnato direttamente a Telecom Italia se non tramite singoli accordi di peering privato (potenzialmente a pagamento per gli operatori più piccoli).
{{< /green >}}

{{< footer >}}

*Grazie a x_term, Emilio e Andrea per aver revisionato questo articolo.*
