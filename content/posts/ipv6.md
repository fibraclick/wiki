---
title: "IPv6 per principianti"
slug: ipv6
date: 2022-01-30T16:00:00+01:00
lastmod: 2022-01-30T22:20:00+01:00
authors: [Matteo, Edoardo]
description: "Gli indirizzi IPv4 sono finiti da tempo e la soluzione è la transizione verso IPv6. Tutto quello che c'è da sapere su IPv6, tra indirizzi, configurazione e diffusione in Italia."
categories: [Reti]
image: /social/ipv6.jpg
---

La trasmissione di dati tramite Internet si basa sullo scambio di pacchetti tra dispositivi (router, computer, server, ecc.). Questo scambio avviene anche grazie all'**Internet Protocol e al suo sistema di indirizzamento**, la cui versione più nota è **IPv4**, in uso da quando Internet è nata negli anni 80.

Quando il protocollo IP è stato progettato la crescita che Internet avrebbe poi avuto fu ampiamente sottostimata: **la dimensione degli indirizzi IP**, che permettono di indirizzare i pacchetti sulla rete, **si è rivelata insufficiente**. Gli indirizzi IPv4 sono quindi finiti da tempo (tutti i registri regionali hanno assegnato sostanzialmente tutti i blocchi a loro disposizione) e la soluzione al problema è la **migrazione al successore di IPv4, cioè IPv6**.[^exhaustion]

[^exhaustion]: *IPv4 Address Report* https://ipv4.potaroo.net/

Come ha scritto Vinton Cerf, uno dei creatori di IP: «Vorrei mi fossi accorto che avremmo avuto bisogno di uno spazio di indirizzamento più grande. Al tempo pensavo che questo fosse solo un esperimento e che avremmo poi sviluppato la versione definitiva. Immagino che la versione definitiva sia IPv6.»[^cerf]

[^cerf]: *Vint Cerf Answers Your Questions About IPv6 and More* https://interviews.slashdot.org/story/11/10/25/1532213/vint-cerf-answers-your-questions-about-ipv6-and-more

Il protocollo IPv6 è stato definito negli anni 90 e la sua diffusione è iniziata a metà degli anni 2000, ma trattandosi di un **protocollo molto diverso da IPv4** e senza retrocompatibilità **la sua crescita è stata molto lenta**.

La direzione però è ormai decisa ed è importante iniziare a **conoscere IPv6**. Questo articolo prova a descrivere con un linguaggio il più semplice possibile cos'è IPv6, quali caratteristiche ha e come si fa ad utilizzarlo nella pratica (quando previsto dal proprio operatore). **Non serve essere esperti di reti per comprendere questo articolo**, ma è necessario avere qualche nozione di base di reti.

{{< toc >}}

## Ripasso su IPv4

Da quando Internet esiste siamo abituati ad avere a che fare con gli **indirizzi IP versione 4**. Un indirizzo IPv4 ha questo aspetto:

{{< large >}}
208.67.222.222
{{< /large >}}

È quindi composto da **4 numeri separati da dei punti**. In realtà questa è soltanto una notazione testuale pensata per rendere più semplice a noi umani la lettura degli indirizzi. Internamente gli indirizzi IP vengono memorizzati in **formato binario**, cioè con una sequenza di 0 e 1.

Nel caso di un indirizzo IPv4 **la rappresentazione in binario è lunga 32 bit** (quattro gruppi da 8 bit, spesso chiamati "ottetti"). Ad esempio l'indirizzo sopra corrisponde a:

{{< large >}}
11010000.01000011.11011110.11011110
{{< /large >}}

Considerando che ciascuna cifra può assumere due valori, il **numero totale di IPv4 teoricamente esistenti è** 2<sup>32</sup>, cioè **4.294.967.296 (poco più di 4 miliardi)**. Nella pratica alcuni indirizzi sono riservati e quelli realmente utilizzabili sono quindi un po' di meno.

Un indirizzo IPv4 viene sempre diviso in **due parti**: **la prima parte identifica la rete mentre la seconda l'*host*** (il "computer" o dispositivo). Per capire in quale punto finisce la prima parte e inizia la seconda si utilizza la notazione CIDR (pronunciato *saider*), che consiste nello specificare il numero di bit riservati alla rete in seguito all'indirizzo IP.[^cidr]

[^cidr]: *RFC 4632, Classless Inter-Domain Routing* https://datatracker.ietf.org/doc/html/rfc4632#section-3.1

Un esempio che tutti abbiamo visto almeno una volta è la **classica rete privata** spesso utilizzata in casa, che in notazione CIDR possiamo descrivere con:

{{< large nobold="true" >}}
192.168.0.0<span style="font-weight: bold; color: red">/24</span>
{{< /large >}}

Il numero 24 si riferisce al fatto che **i primi 24 bit (quindi i primi tre ottetti) identificano la rete mentre la parte rimanente l'host**. Ovviamente il numero non è necessariamente un multiplo di 8, rendendo a volte non immediato capire dove finisce la rete.

La possibilità di "estrarre" la rete da un indirizzo IP è cruciale per il funzionamento del sistema di indirizzamento IP: il prefisso viene infatti utilizzato dai router per capire verso quale direzione un pacchetto deve essere inoltrato per raggiungere la destinazione (attraverso la maschera di sottorete e la procedura di *ANDing* con l'indirizzo IP).

## Indirizzi IPv6

L'esaurimento degli indirizzi IPv4 ha portato a progettare un nuovo protocollo IP che tra i vari miglioramenti prevedesse anche un numero maggiore di indirizzi. Se IPv4 prevedeva indirizzi lunghi 32 bit, **gli indirizzi IPv6 sono invece lunghi 128 bit, quattro volte tanto**.

La maggiore lunghezza ha portato anche ad utilizzare il **sistema esadecimale** per la rappresentazione testuale. Nella pratica quindi un indirizzo IPv6 si presenta così:

{{< large >}}
2600:1409:d000:05a6:0000:0000:0000:0b63
{{< /large >}}

Si tratta in totale di 32 caratteri raggruppati in 8 "parole" o gruppi da 4 caratteri ciascuno, separate dal simbolo due punti. Ciascun carattere può assumere valori tra 0 e 9 e tra la lettera A e la lettera F, cioè 16 valori in totale (esadecimale).[^ipv6-binario] (È indifferente che le lettere siano scritte in maiuscolo o in minuscolo.)

[^ipv6-binario]: Di conseguenza nella rappresentazione binaria ciascun carattere corrisponde a 4 bit, perché 2<sup>4</sup> = 16)

La lunghezza di 128 bit porta ad avere un numero di indirizzi IPv6 estremamente alto. Si tratta infatti di 2<sup>128</sup> indirizzi, cioè <span style="word-wrap: break-word">340.282.366.920.938.463.463.374.607.431.768.211.456</span>. È un numero grandissimo (39 cifre) che risolve definitivamente il problema della carenza di indirizzi IP.

L'indirizzo che abbiamo preso come esempio è effettivamente lungo e difficile da ricordare, ma c'è la possibilità di **comprimerlo togliendo le parti poco utili**. Possiamo ad esempio rimuovere tutti gli zeri all'inizio di ciascun gruppo (*leading zeros*) e comprimere le parti composte solo da zeri (non più di una volta nello stesso indirizzo).[^formato] Come conseguenza, **lo stesso indirizzo IPv6 può essere scritto in più modi diversi ma equivalenti**.

[^formato]: *RFC 4291, IP Version 6 Addressing Architecture* https://datatracker.ietf.org/doc/html/rfc4291

Ad esempio,

{{< large >}}
2600:1409:d000:<span style="color:red">0</span>5a6:<span style="color:red">0000</span>:<span style="color:red">0000</span>:<span style="color:red">0000</span>:<span style="color:red">0</span>b63
{{< /large >}}

diventa:

{{< large >}}
2600:1409:d000:5a6::b63
{{< /large >}}

Il fatto che nell'indirizzo non compresso ci siano così tanti bit a zero non è un caso: in IPv6 **la seconda parte di un indirizzo identifica infatti sempre l'host**, più precisamente chiamato ***interface ID*** perché lo stesso dispositivo può avere più interfacce di rete (es. WiFi e Ethernet). A differenza di IPv4, dove il "confine" tra rete e host è variabile, l'*interface ID* è sempre lungo 64 bit e occupa quindi la seconda metà dell'indirizzo, dal bit 65 al bit 128.[^formato]

La prima parte dell'indirizzo è invece il prefisso di rete e contiene al suo interno anche la sottorete, come vedremo meglio fra poco.

## Diversi tipi di IPv6

Come in IPv4 esiste un indirizzo di **loopback**, corrispondente a *localhost*, che identifica il dispositivo stesso su cui ci troviamo. L'equivalente dell'indirizzo `127.0.0.1` in IPv6 è:

{{< large >}}
0000:0000:0000:0000:0000:0000:0000:0001/128
{{< /large >}}

che come abbiamo visto può essere compresso in:

{{< large >}}
::1/128
{{< /large >}}

Anche in IPv6 si utilizza la sintassi CIDR. In questo caso **/128** serve ad indicare una singola interfaccia.[^formato]

In IPv6 l'idea è che **ciascun dispositivo abbia assegnato almeno un indirizzo pubblico** che sia indirizzabile nella rete globale Internet. Per questo motivo un indirizzo di questo tipo è definito **global unicast** (GUA), indicazione che spesso si trova nella configurazione del proprio sistema operativo. Un esempio di indirizzo *global* è quello visto sopra (`2600:1409:d000:5a6::b63`).

{{< green >}}
Gli indirizzi IPv6 *global unicast* vengono [al momento allocati](https://www.iana.org/assignments/ipv6-unicast-address-assignments/ipv6-unicast-address-assignments.xhtml) partendo dal blocco `2000::/3`, che corrisponde a circa un ottavo dell'intero spazio IPv6. Nella pratica attualmente tutti gli indirizzi IPv6 pubblici iniziano con la cifra `2`.
{{< /green >}}

Il fatto che ogni dispositivo abbia assegnato un indirizzo IPv6 pubblico è una differenza fondamentale rispetto ad IPv4, dove di solito è solo il router di casa a disporre di un indirizzo pubblico mentre i dispositivi della rete locale utilizzano indirizzi privati (con l'ausilio del NAT). **Anche in IPv6 esistono gli indirizzi privati** (chiamati indirizzi locali o **unique local** (ULA) e riconoscibili perché iniziano sempre con `fc` o `fd`) ma sono meno usati in confronto ad IPv4 per via della presenza degli indirizzi *global*. Risultano spesso utili per servizi che devono rimanere interni, come può avvenire ad esempio nelle reti aziendali.

Le specifiche di IPv6 impongono anche che ogni interfaccia di rete di ogni dispositivo abbia assegnato un indirizzo di tipo **link-local**, o **locale rispetto al collegamento**. È un indirizzo obbligatorio per il funzionamento di IPv6 perché permette lo scambio di informazioni nel proprio segmento di rete (es. tra tutti i dispositivi connessi allo stesso router di casa) anche in assenza di un indirizzo GUA o ULA. Gli indirizzi *link-local* sono facilmente riconoscibili perché iniziano sempre con `fe80`, facendo parte del blocco `fe80::/10` (negli indirizzi *link-local* i bit 11-64 sono sempre a 0).

Un esempio di indirizzo *link-local* è:

{{< large >}}
<span style="color: red">fe80</span>::75d8:7c6d:fda4:d337/64
{{< /large >}}

{{< green >}}
Anche se il tuo operatore non supporta IPv6, **tutti i tuoi dispositivi dovrebbero disporre di un indirizzo link-local**, generato casualmente (come nel caso sopra) oppure a partire dall'indirizzo MAC, come vedremo tra poco. Un indirizzo *link-local* non è ovviamente sufficiente per poter navigare in IPv6.
{{< /green >}}

## Prefix Delegation e subnetting

Se vogliamo utilizzare IPv6 per la navigazione su Internet dobbiamo innanzitutto assicurarci che il nostro Internet Service Provider lo supporti.

Il metodo più utilizzato dagli ISP per la **configurazione di IPv6** consiste nell'uso del **protocollo DHCPv6 con *Prefix Delegation***. In altre parole, un router dell'operatore delega al nostro router di casa la possibilità di gestire un prefisso IPv6, di crearci delle sottoreti e di assegnare così indirizzi pubblici a tutti i dispositivi.[^pd][^pd2]

[^pd]: *RFC 3633, IPv6 Prefix Options for Dynamic Host Configuration Protocol (DHCP) version 6* https://datatracker.ietf.org/doc/html/rfc3633\; *RFC 8415, Dynamic Host Configuration Protocol for IPv6 (DHCPv6)* https://datatracker.ietf.org/doc/html/rfc8415#section-6.3
[^pd2]: *Overview of Using DHCPv6 Prefix Delegation* https://www.juniper.net/documentation/en_US/release-independent/nce/topics/concept/subscriber-management-ds-dhcpv6-pd.html

Secondo le raccomandazioni del RIPE, l'ente che gestisce l'allocazione degli indirizzi IP in Europa, **gli ISP dovrebbero delegare un prefisso /56 oppure /48 a ciascuna linea**. Il prefisso dovrebbe inoltre essere **statico**, cioè non variare con il tempo.[^ripe]

[^ripe]: *Best Current Operational Practice for Operators: IPv6 prefix assignment for end-users - persistent vs non-persistent, and what size to choose* https://www.ripe.net/publications/docs/ripe-690

Ricordando che ogni "gruppo" in un indirizzo IPv6 corrisponde a 16 bit, la delega di un prefisso /48 consiste nel poter gestire ad esempio un indirizzo di questo tipo, dove i primi tre gruppi corrispondono al prefisso:

{{< large >}}
<span style="color: red">2001:db8:aaaa</span>::/48
{{< /large >}}

Nel caso di /56, invece, l'indirizzo potrebbe essere:

{{< large >}}
<span style="color: red">2001:db8:aaaa:1a</span>00::/56
{{< /large >}}

Come abbiamo visto, l'*interface ID* di IPv6 occupa sempre la seconda metà dell'indirizzo e di conseguenza **il prefisso delegato può essere suddiviso in tante sottoreti /64**. Nel caso di un **prefisso /56** abbiamo la possibilità di partizionare la rete locale in **256 sottoreti /64** (2<sup>64-56</sup> = 2<sup>8</sup>). Gli indirizzi assegnati ai dispositivi della rete vengono quindi scelti da una o più di queste sottoreti /64.

Questo permette, ad esempio, di dedicare una sottorete alla rete cablata, una alla rete WiFi oppure alla rete ospite, supportando scenari anche più avanzati e complessi.

Prendendo l'esempio sopra, le sottoreti /64 contenute nel prefisso sarebbero, in ordine:

{{< large >}}
<span style="color: red">2001:db8:aaaa:1a</span>00::/64<br>
<span style="color: red">2001:db8:aaaa:1a</span>01::/64<br>
<span style="color: red">2001:db8:aaaa:1a</span>02::/64<br>
...<br>
<span style="color: red">2001:db8:aaaa:1a</span>fd::/64<br>
<span style="color: red">2001:db8:aaaa:1a</span>fe::/64<br>
<span style="color: red">2001:db8:aaaa:1a</span>ff::/64
{{< /large >}}

Ciascuna sottorete /64 contiene più di 18 miliardi di miliardi di indirizzi IPv6. Può sembrare uno spreco, ma gli indirizzi IPv6 sono talmente tanti che permettono di seguire un approccio di questo tipo senza preoccupazioni. È stato stimato che anche se assegnassimo in modo permanente un prefisso /48 ad ogni essere umano potremmo andare avanti per 480 anni.[^spreco]

[^spreco]: *Frequently Asked Questions (FAQ) on IPv6 adoption and IPv4 exhaustion* https://www.internetsociety.org/deploy360/ipv6/faq/#5

{{< green >}}
Va detto che **non tutti gli operatori seguono le raccomandazioni RIPE per la delega dei prefissi**, specialmente per le connessioni residenziali, a volte assegnando una singola sottorete /64 per tutta la casa (oppure /62, ad esempio) limitando la possibilità di creare sottoreti. Spesso inoltre il prefisso non è statico.
{{< /green >}}

## Configurazione IPv6

L'assegnazione degli indirizzi IPv6 ai singoli dispositivi all'interno delle sottoreti /64 può avvenire in diversi modi. Va tenuto però presente che, a differenza di IPv4, **in IPv6 ciascuna interfaccia di rete può avere più di un indirizzo pubblico**. Di conseguenza, i metodi di assegnazione non si escludono tra loro.

Come in IPv4 c'è la possibilità di **assegnare gli indirizzi IPv6 manualmente** sui dispositivi stessi, richiedendo però di conoscere il prefisso delegato dall'ISP. Questo approccio è problematico specialmente nei casi in cui il prefisso non è statico e può quindi cambiare nel tempo.

In alternativa è possibile configurare il **server DHCPv6** sul proprio router facendo in modo che i dispositivi della rete ricevano dal router l'assegnazione dell'IPv6 (in modo analogo a quanto avviene in IPv4). Un problema di questo approccio è che il sistema operativo Android non include il supporto a DHCPv6, rendendo difficile basarsi solo su DHCP per la configurazione degli IP.[^android]

[^android]: *Android's lack of DHCPv6 support frustrates enterprise network admins* https://www.techrepublic.com/article/androids-lack-of-dhcpv6-support-frustrates-enterprise-network-admins/

Come abbiamo visto tutti i dispositivi che supportano IPv6 dispongono in automatico di un indirizzo *link-local*. Questo permette ai dispositivi di "scoprire" com'è fatta la rete in cui si trovano e di **auto-configurarsi e quindi auto-assegnarsi un indirizzo IPv6**. Questo sistema si chiama **SLAAC** (*Stateless Address Auto-Configuration*) ed è definito *stateless* (senza stato) perché non richiede di mantenere una lista di IP assegnati come con DHCPv6 (che è *stateful*).[^slaac]

[^slaac]: *RFC 4862, IPv6 Stateless Address Autoconfiguration* https://datatracker.ietf.org/doc/html/rfc4862

Gli indirizzi auto-assegnati tramite SLAAC vengono definiti da ciascun dispositivo partendo dal prefisso di sottorete /64 seguendo in genere due schemi:

- **assegnazione casuale**: l'*interface ID* dell'indirizzo IPv6 viene **generato in modo casuale**;
- **sistema EUI-64**: l'*interface ID* viene generato **a partire dall'indirizzo MAC**[^mac] dell'interfaccia di rete, con un algoritmo che trovi spiegato [qui](https://support.lenovo.com/it/it/solutions/ht509925-how-to-convert-a-mac-address-into-an-ipv6-link-local-address-eui-64). Un indirizzo IPv6 generato in questo modo è facilmente riconoscibile perché l'*interface ID* contiene sempre esattamente al centro i caratteri `ff:fe`.[^formato]

[^mac]: Media Access Control

Siccome gli indirizzi IPv6 sono pubblici e vengono utilizzati anche per la navigazione su Internet, le versioni più recenti dei sistemi operativi implementano le cosiddette *Privacy Extensions*, che consistono sostanzialmente nel **cambiare periodicamente l'indirizzo auto-configurato** per rendere più difficile il tracciamento del singolo dispositivo.[^privacy]

[^privacy]: *RFC 4941, Privacy Extensions for Stateless Address Autoconfiguration in IPv6* https://datatracker.ietf.org/doc/html/rfc4941

A seconda del sistema operativo può essere più o meno facile abilitare o disabilitare le *Privacy Extensions*, così come scegliere manualmente quale indirizzo IPv6 utilizzare "in uscita" su Internet tra SLAAC e DHCPv6, nel caso entrambi i sistemi siano attivi.[^os]

[^os]: Privacy Extensions e sistemi operativi, pagine 47-52, Istituto Nazionale di Astrofisica https://indico.ict.inaf.it/event/0/contributions/30/attachments/40/42/IPv6-Pula.pdf

{{< green >}}
###### Neighbor Discovery (NDP)

Prima di poter scegliere un indirizzo IPv6 un dispositivo deve conoscere qual è la sottorete /64 che può utilizzare. Per farlo sfrutta il protocollo [**Neighbor Discovery**](https://datatracker.ietf.org/doc/html/rfc4861), essenziale per il funzionamento di IPv6 e basato su pacchetti di tipo ICMPv6.

Il dispositivo invia quindi un pacchetto ICMPv6 di tipo **Router Solicitation** (RS) per individuare il router sulla rete locale. In questa fase il dispositivo sfrutta un **indirizzo di multicast** che corrisponde a tutti i router sulla rete. Il router risponderà con un messaggio **Router Advertisement** (RA), contenente uno o più prefissi.

Una volta scelto un indirizzo IPv6 con SLAAC, il dispositivo deve assicurarsi che non ci siano altri dispositivi nella rete con lo stesso indirizzo. Sfrutta quindi di nuovo il multicast e messaggi di tipo **Neighbor Solicitation** (NS) e **Neighbor Advertisement** (NA) per individuare eventuali altri dispositivi con la stessa assegnazione (*DAD, Duplicate Address Detection*).
{{< /green >}}

{{< green >}}
###### Configurazione WAN

Anche il router stesso ha bisogno di un indirizzo IPv6 sull'interfaccia WAN, cioè verso la rete dell'operatore. Può ottenerlo tramite il server DHCPv6 (dell'ISP) oppure con SLAAC, utilizzando il protocollo Neighbor Discovery. Questo permette di configurare anche il *default gateway*, cioè il primo router della rete dell'operatore verso cui inviare i pacchetti IP, che può essere raggiungibile sia con un indirizzo *link-local* che *global*, a seconda della configurazione dell'ISP.
{{< /green >}}

## Altre novità di IPv6

Il passaggio da IPv4 a IPv6 è stato un'occasione per rivedere anche altri aspetti di IPv4 che con il tempo si sono rivelati inadeguati.

L'header dei pacchetti IPv6 è stato rivisto e semplificato, ad esempio rimuovendo il campo checksum e prevedendo una lunghezza fissa per semplificare e velocizzare l'inoltro dei pacchetti sui router. L'header IPv6 è comunque di base lungo il doppio rispetto a quello IPv4 (40 byte vs 20 byte) per via degli indirizzi più lunghi. L'header IPv6 è anche estensibile, cioè permette di definire funzionalità aggiuntive inserendo header "in catena" come contenuto del pacchetto.[^spec]

[^spec]: *Internet Protocol, Version 6 (IPv6) Specification* https://datatracker.ietf.org/doc/html/rfc8200

{{< fig src="/images/ipv6-header.png" caption="Confronto tra header IPv4 e IPv6. Fonte: RIPE NCC Academy." alt="" >}}

Un'altra novità è che IPv6 non include il supporto agli indirizzi di broadcast, che in IPv4 permettono di recapitare un pacchetto a tutti gli host in una sottorete. Sono invece fondamentali gli indirizzi multicast (`ff00::/8`), come visto sopra per le procedure di Neighbor Discovery.

## Navigazione con IPv6

Una volta configurato IPv6, sistemi operativi e software solitamente lo preferiscono in automatico ad IPv4. Ad esempio scrivendo `ping google.com` in un terminale si dovrebbe ottenere un ping verso uno degli indirizzi IPv6 di Google. (Su macOS bisogna usare `ping6`.)

```
$ ping google.com
PING google.com(fra24s04-in-x0e.1e100.net (2a00:1450:4001:827::200e)) 56 data bytes
64 bytes from fra24s04-in-x0e.1e100.net (2a00:1450:4001:827::200e): icmp_seq=1 ttl=57 time=3.94 ms
64 bytes from fra24s04-in-x0e.1e100.net (2a00:1450:4001:827::200e): icmp_seq=2 ttl=57 time=3.77 ms
64 bytes from fra24s04-in-x0e.1e100.net (2a00:1450:4001:827::200e): icmp_seq=3 ttl=57 time=3.78 ms
^C
--- google.com ping statistics ---
3 packets transmitted, 3 received, 0% packet loss, time 2003ms
rtt min/avg/max/mdev = 3.765/3.826/3.940/0.080 ms
```

Ovviamente è possibile "pingare" anche un indirizzo IPv6 specifico. L'esempio più banale è localhost:

```
ping ::1
```

In alcuni contesti, come ad esempio nei browser, potrebbe essere necessario **racchiudere l'indirizzo IPv6 tra parentesi quadre**, per evitare che i due punti che separano i gruppi dell'indirizzo si confondano con il numero di porta. Ad esempio per raggiungere una pagina web su localhost su porta 8080 in IPv6 dovremo scrivere `http://[::1]:8080`.

Il fatto che un nome di dominio come `google.com` risulti accessibile in IPv6 in modo trasparente deriva dal fatto che la **configurazione DNS del dominio** include non solo un record `A` (cioè l'associazione tra dominio e IPv4) ma anche un record `AAAA` (associazione tra dominio e IPv6).

Esiste un protocollo chiamato **Happy Eyeballs** che definisce come i sistemi operativi e i browser si dovrebbero comportare per **decidere quando utilizzare IPv6 o IPv4**. A grandi linee, le due query DNS per i record `A` e `AAAA` vengono lanciate in contemporanea e viene scelta la prima risposta ricevuta. Se la risposta IPv4 arriva prima, si attende però la risposta IPv6 per altri 50 millisecondi. Un algoritmo simile viene poi applicato per i tentativi di connessione agli indirizzi IPv4/IPv6 ottenuti, in modo da ripiegare su IPv4 nei casi in cui IPv6 non risulti raggiungibile.[^happyeyeballs]

[^happyeyeballs]: *RFC 8305, Happy Eyeballs Version 2: Better Connectivity Using Concurrency* https://datatracker.ietf.org/doc/html/rfc8305

## IPv6 è meno sicuro?

Una **convinzione diffusa** è che IPv6 sia **meno sicuro** perché **a ciascun dispositivo viene assegnato un indirizzo pubblico**, a differenza di IPv4 dove gli indirizzi sono di solito privati e il NAT svolge in modo naturale la funzione di protezione dall'accesso dall'esterno.

Bisogna però tenere presente che il NAT non è un sistema di sicurezza e non sostituisce la necessità di avere un firewall per bloccare gli accessi dall'esterno.[^sec] Per questo motivo **IPv6 non è meno sicuro**: i router per la casa sono in genere configurati in automatico per impedire l'accesso dall'esterno agli indirizzi IPv6 pubblici.

[^sec]: *Common misconceptions about IPv6 security* https://blog.apnic.net/2019/03/18/common-misconceptions-about-ipv6-security/

## Transizione a IPv6

Seppur l'obiettivo iniziale di IPv6 era di sostituire interamente IPv4, la lentissima diffusione del nuovo protocollo ha portato al più probabile scenario di un lungo periodo in cui i due protocolli coesisteranno.[^transizione]

[^transizione]: *RFC 4942, IPv6 Transition/Coexistence Security Considerations* https://datatracker.ietf.org/doc/html/rfc4942#section-1

Il metodo "classico" per la convivenza dei due protocolli è una configurazione **dual stack**, in cui IPv4 e IPv6 coesistono in modo "nativo", configurati in parallelo.

Per gli ISP che non sono ancora pronti per abilitare IPv6 nella propria rete esistono dei meccanismi di transizione che permettono di **incapsulare il traffico IPv6 dei clienti all'interno di IPv4**. Ad esempio **6rd** (*IPv6 Rapid Deployment*) prevede la creazione di un tunnel tra il router del cliente e un *border relay* dell'operatore, che si occupa di "decapsulare" il pacchetto IPv6. Ha il vantaggio di essere *stateless* ma lo svantaggio di richiedere dei router dedicati alla funzione di *border relay*.[^6rd]

[^6rd]: *IPv6 Rapid Deployment on IPv4 Infrastructures (6rd) -- Protocol Specification* https://datatracker.ietf.org/doc/html/rfc5969

Viceversa, un ISP che parte da zero potrebbe voler **progettare la propria rete per essere IPv6-only**, in modo da evitare le complessità di dover gestire IPv4 e IPv6 in parallelo. In questo caso è comunque necessario fornire ai clienti finali la possibilità di navigare tramite IPv4. Due metodi per farlo sono:

- **l'incapsulamento dei pacchetti IPv4 in IPv6** tramite un tunnel **4in6**, eventualmente con l'ausilio di MAP-E per condividere lo stesso indirizzo IPv4 tra più linee;[^map]
- **la traduzione di IPv4 in IPv6**, ottenuta convertendo l'header IPv4 in un header IPv6 e poi viceversa presso un *border relay*. È il caso di **MAP-T** ma in modo simile anche di **464XLAT**, utilizzato soprattutto nelle reti mobili.[^map][^464xlat]

[^map]: *MAP-T/MAP-E Packet Processing* https://support.huawei.com/enterprise/it/doc/EDOC1100055044/d28a3f9d/map-t-map-e-packet-processing
[^464xlat]: *IPv6-only Deployment in Broadband and Cellular Networks IPv4aaS (as-a-Service)* https://www.lacnic.net/innovaportal/file/3900/1/ipv6-only_v15.pdf

## Diffusione

La diffusione del protocollo IPv6 è iniziata a metà degli anni 2000 ma **il processo, ovviamente ancora in corso, ha avuto una progressione lentissima**. Il motivo principale è che la maggior parte degli ISP non vedono benefici immediati (e invece complessità e costi aggiuntivi) nella migrazione a IPv6, e allo stesso modo i proprietari di siti web non percepiscono l'urgenza di configurare IPv6 considerando che è poco usato e che i server sono comunque sempre accessibili via IPv4.[^reasons]

[^reasons]: *Reasons for servers to support IPv6* https://jvns.ca/blog/2022/01/29/reasons-for-servers-to-support-ipv6/

Secondo le statistiche pubblicate da Google, **a gennaio 2022 il traffico IPv6 in Italia si attestava al 5,31% del totale**, mentre globalmente era attorno al 35%.[^stats] Nel momento in cui questo articolo è stato aggiornato, in Italia tra i grandi operatori solo tre offrivano IPv6: Fastweb tramite tunnel 6rd e Sky Wifi e Iliad nativamente (rispettivamente con MAP-T e MAP-E per IPv4).[^italia]

[^stats]: *Google IPv6 statistics* https://www.google.com/intl/en/ipv6/statistics.html#tab=per-country-ipv6-adoption
[^italia]: *Stato di IPv6 in Italia* https://forum.fibra.click/d/21324-stato-di-ipv6-in-italia

{{< fig src="/images/ipv6-stats.jpg" caption="Diffusione di IPv6 tra gli utenti Google in Europa. Fonte: [Google](https://www.google.com/intl/en/ipv6/statistics.html#tab=per-country-ipv6-adoption)." alt="" >}}

{{< fig src="/images/ipv6-stats2.jpg" caption="Diffusione di IPv6 tra gli utenti Google nel corso del tempo. Fonte: [Google](https://www.google.com/intl/en/ipv6/statistics.html#tab=ipv6-adoption)." alt="" >}}

La situazione potrebbe iniziare a cambiare un po' più rapidamente ora che **sul mercato di compravendita degli IPv4 il prezzo per IP sta aumentando significativamente** (nel 2021 ha raggiunto picchi di 60$).[^prezzi] Questa crescita sta costringendo molti operatori ad iniziare ad **utilizzare tecnologie come il Carrier-grade NAT**, che nella pratica fanno fronte alla carenza di IPv4 condividendo lo stesso indirizzo pubblico tra più linee (di solito fino a 16).[^cgnat][^vodafone]

[^cgnat]: *Esaurimento degli indirizzi IP ed obblighi di identificazione degli utenti* https://www.sicurezzaegiustizia.com/wp-content/uploads/2015/05/SeG_I_MMXV_PROTO.pdf
[^vodafone]: *Vodafone inizia a mettere i clienti in CG-NAT?* https://forum.fibra.click/d/25881-vodafone-inizia-a-mettere-i-clienti-in-cg-nat

Il CGNAT non è però gratis per l'operatore perché **richiede risorse computazionali (se non hardware dedicato)** per le operazioni di traslazione di indirizzo e porta. Per questo motivo in questi casi può essere di beneficio l'abilitazione del protocollo IPv6, con l'effetto di **"spostare" una percentuale molto alta del traffico, anche del 70%, da IPv4 a IPv6**.[^traffico]

[^prezzi]: https://auctions.ipv4.global/prior-sales
[^traffico]: La fonte sono dati condivisi da alcuni operatori italiani tra addetti del settore.

{{< info >}}
Per approfondire la situazione di IPv6 in Italia, sul forum di FibraClick puoi trovare una tabella con lo stato di implementazione di IPv6 per un gran numero di ISP italiani.

- [Stato di IPv6 in Italia](https://forum.fibra.click/d/21324-stato-di-ipv6-in-italia)
{{< /info >}}

{{< footer >}}
