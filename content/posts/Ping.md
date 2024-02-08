---
title: "Cos'è il ping?"
slug: ping
date: 2023-12-31T21:30:00+02:00
lastmod: 2023-01-19T15:22:34+01:00
authors: [x_term]
description: 
categories: [Reti]
---

{{< toc >}}

### Cos’è il ping? 

Quante volte abbiamo letto o fatto noi stessi la domanda *“ma quanto hai di ping?”* oppure *“si può abbassare il ping?”* ? Sappiamo, in generale, che più è basso, meglio è, ma cosa rappresenta davvero quel numero? Perché e come condiziona la navigazione e l’utilizzo della nostra connessione ad Internet?

Prima di tutto: quello che spesso viene chiamato “ping” altro non è che **la misura del tempo trascorso tra l’invio di un particolare tipo di pacchetto da un dispositivo di rete ad un altro e la ricezione della sua risposta**, o in inglese Round-Trip Time.
Questi due dispositivi possono essere server, router o altri dispositivi della rete.
Non è tuttavia formalmente corretto parlare di “ping” per riferirsi a ciò, in quanto questo è semplicemente il comando utilizzato per inviare questi pacchetti e ottenere la relativa misura.
Per riferirsi al tempo necessario alla trasmissione di questo pacchetto sarebbe quindi più appropriato parlare di latenza.
La latenza è influenzata principalmente dalla distanza fisica tra il nostro apparato che sta inviando il pacchetto ed il server o router che lo riceve e risponde.
Un computer che si trova in Sicilia e che invia un ping verso un server locato a Francoforte (a oltre 1700 km), non potrà mai avere una latenza inferiore a 12 ms, inteso come limite fisico assoluto tenendo conto della velocità della luce e immaginando che ci sia un collegamento diretto tra casa nostra e il server (di fatto una situazione impossibile).
---

{{< green >}}
##### Il protocollo ICMP
Il pacchetto inviato quando si esegue il comando ping viene costruito utilizzando un protocollo chiamato ICMP, Internet Control Message Protocol. [Questo standard](https://datatracker.ietf.org/doc/html/rfc792) scritto ad inizio anni '80 gestisce vari tipi di messaggi tra dispositivi di rete ed è di aiuto nella diagnostica del protocollo IP, in cui è “imbustato”. Perchè fu inventato questo protocollo? Tradotto dalla RFC direttamente, perchè 
> Internet Protocol non è stato pensato per essere assolutamente affidabile. Lo scopo di questi messaggi è di fornire informazioni diagnostiche sull'ambiente di rete, non per migliorare l'affidabilità del protocollo.[^1]

Esempio di header di un pacchetto ICMP TTL exceeded [^2]:
```
    0                   1                   2                   3
    0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
    +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
    |     Type      |     Code      |          Checksum             |
    +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
    |                             unused                            |
    +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
    |      Internet Header + 64 bits of Original Data Datagram      |
    +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
```
{{< /green >}}

---
### Perché la latenza aumenta in caso di saturazione?
Il pacchetto di ping viene trasportato insieme a tutto il resto del traffico internet sui vari collegamenti fino a raggiungere i router, che non fanno altro che smistare il traffico come se fossero un ufficio postale con le lettere. 
I pacchetti ICMP sono chiaramente contraddistinti e riconoscibili da un router, che li può anche trattare **con priorità diverse** rispetto agli altri pacchetti. Per questo motivo, nei momenti di maggiore congestione, questi pacchetti sono spesso messi in secondo piano, in quanto non trasportano nessun dato reale e vengono pertanto processati in un secondo momento. Questa attesa si traduce in un tempo più elevato di risposta. La variazione dei tempi di risposta tra più misurazioni viene chiamata **jitter**. Più è alto, più è segno che la rete è sotto pressione e non è in grado di mantenere un tempo di consegna e processamento costante.
Può succedere anche che questi pacchetti vengano messi da parte per un tempo eccessivo scadendo di validità, in questo caso il computer che li ha inviati non considererà più valide eventuali risposte. Questo fenomeno è detto “packet loss” e può essere utile in determinati casi per individuare criticità sui collegamenti.

### Tecnologie diverse possono influire sulla latenza? “Mi avevano detto che con la fibra si abbassava il ping!”

Sfatiamo un mito: *non c’è differenza apprezzabile tra una FTTC o una FTTH a livello di latenze*.
Il fatto che il mezzo fisico della rete di accesso sia diverso (rame vs fibra) non corrisponde ad un ritardo minore o maggiore.
Anzi, in via del tutto teorica le connessioni FTTC potrebbero essere (in condizioni ottimali) migliori perchè sono un collegamento punto a punto tra il nostro modem e l’apparato ONU del cabinet, mentre le connessioni in fibra (in architettura PON) sono comunemente punto a multipunto, ovvero sfruttano **un mezzo di trasmissione condiviso con altri utenti**. Le tecnologie di gestione dell’accesso consentono di evitare normalmente situazioni di collisione e ritrasmissione (che aggiungerebbero ritardo), ma parliamo in ogni caso di grandezze dell’ordine di microsecondi, meno di un millisecondo.

La latenza, dunque, dipenderà sempre principalmente dalla distanza totale tra i due dispositivi su cui viene misurata, ed in caso di eventuali problemi come quelli del precedente paragrafo dalla congestione della rete. Inoltre ogni operatore potrebbe anche avere diversi instradamenti fisici tra casa nostra ed il resto di Internet, vedi anche [il nostro articolo](https://fibra.click/internet/) a riguardo.

### Ma il ping su `speedtest.net`?

Il sito speedtest.net è di certo il più noto per misurare la velocità di trasferimento. Vari enti, aziende ecc possono installare un server Speedtest e pubblicarlo sul sito.
L’applicazione non fa altro che connettersi a detto server attraverso la rete ed iniziare il download (o upload) di un file, di dimensioni variabili in base alla velocità della linea, oltre a misurarne la latenza in tre momenti diversi: a riposo, con download saturo e con upload saturo.
Attenzione: il server selezionato automaticamente dipende da alcuni fattori tra cui la **presunta localizzazione dell’utente**. Non sempre il server assegnato automaticamente è il più semplice da raggiungere o rispecchia le prestazioni di uno scenario realistico: per via di come è strutturata Internet e le interconnessioni tra le varie reti, un “ping” basso o alto sul server consigliato dal portale non equivale necessariamente ad una migliore o peggiore linea e potrebbe essere fuorviante. Su reti con interconnessioni capillari o server molto distribuiti (come ad esempio quelli di TIM dislocati nelle varie città) è possibile vedere latenze di 3-4ms che sono sicuramente molto appaganti, ma va sottolineato che quel server è posizionato volutamente in quel luogo per mostrare un risultato migliore degli altri, in quanto fisicamente e logicamente vicino.
Viceversa, dall’esterno della rete TIM in esempio un test sul server geograficamente vicino potrebbe dare risultati deludenti, perché nella realtà a causa della gerarchia delle reti il traffico potrebbe dover seguire un percorso decisamente più lungo.
Per approfondire questo argomento, leggi [questo articolo](https://fibra.click/internet/#l-interconnessione-tra-sistemi-autonomi) sul funzionamento di Internet.

Assicurati di seguire [la nostra guida](https://fibra.click/speedtest/) per eseguire speedtest nel modo migliore possibile.

#### Porte e abbassamento del ping

Spesso si legge di rimedi casalinghi a latenze elevate che includono l'uso di [cavi esoterici](https://fibra.click/cavi/), DMZ e apertura porte sul router.
Le porte TCP/UDP sono necessarie al funzionamento della comunicazione tra programmi e **sono identificate da un numero che può andare da 1 a 65535**. Ogni flusso di comunicazione (o sessione) ha una porta sorgente, spesso scelta casualmente tra le porte “alte” ossia quelle successive alla 49152, ed una porta di destinazione. Queste porte servono al router di casa (al suo firewall integrato) ad identificare i flussi e consentire o meno il loro passaggio.
I flussi iniziati dall’interno della nostra rete locale verso Internet sono generalmente sempre consentiti: in questo caso il firewall inserirà nella sua lista le informazioni scritte nel pacchetto inviato dal dispositivo ed aprirà la porta necessaria per poter ricevere le eventuali risposte alla richiesta inviata. La macchina che funge da server avrà la medesima regola ma in ingresso, per consentire a qualsiasi dispositivo sulla rete di contattarla. I meccanismi di apertura delle porte possono essere manuali (l’operazione che facciamo nel router di “aprire le porte” appunto) oppure automatici (UPnP è il metodo più diffuso).
Ora che sappiamo cosa sono e come funzionano le porte… possono influire sulla latenza?
**No**, le porte sono esclusivamente un modo per poter gestire in sicurezza e ordinatamente le comunicazioni tra macchine, ma non influiranno sulla latenza, né la potranno ridurre.
Influiranno solamente sulla possibilità o meno degli host di comunicare tra di loro.

Spesso su internet viene consigliato ai gamer di aprire le porte sui propri router, ad esempio utilizzando funzioni come DMZ. È bene sapere che questa pratica non solo **non migliorerà**, come abbiamo visto, **le latenze sui giochi**, ma anzi potrebbe esporre la nostra rete a **vari rischi di sicurezza informatica** (pensate, molto semplicemente, a lasciare la porta di casa costantemente spalancata, giorno e notte).

---

[^1] [^2]: https://datatracker.ietf.org/doc/html/rfc792