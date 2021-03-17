---
title: "A cosa serve cambiare i DNS"
slug: dns
date: 2019-06-26T19:38:28+02:00
lastmod: 2021-03-17T22:00:00+01:00
authors: [Matteo]
description: "I server DNS hanno lo scopo di convertire i nomi di dominio in indirizzi IP, ma in quali casi ha senso cambiarli e in quali non porta benefici?"
categories: [Reti]
---

I server DNS (Domain Name System) hanno lo scopo di effettuare la "conversione" (più precisamente **risoluzione**) dei nomi di dominio nei relativi indirizzi IP.

Ad esempio, per caricare il sito `https://fibra.click` viene prima contattato un server DNS per trovare l'indirizzo IP del server che ospita il sito di FibraClick, cioè `116.203.133.130`.

{{< warn >}}
I server DNS possono essere *authoritative* ("autorevoli") oppure *non-authoritative*, o *ricorsivi*. La differenza è che i primi danno informazioni sempre aggiornate, ma solo per i domini che sono sotto il loro controllo, mentre i secondi "danno una mano" ai server authoritative facendo da intermediari e memorizzando temporaneamente in cache le richieste di risoluzione.

In questo articolo ci si riferisce ai server DNS ricorsivi, anche chiamati **resolver DNS pubblici**.
{{< /warn >}}

Essendo il DNS un sistema gerarchico e distribuito, **esistono numerosi server DNS pubblici** che si occupano di risolvere i nomi di dominio.

Anche **il router che abbiamo in casa è un server DNS**, che a sua volta contatta altri server DNS esterni, solitamente quelli del proprio operatore Internet.

{{< toc >}}

## Perché cambiarli

- ✅ **Privacy**: i server DNS predefiniti sono quelli del proprio gestore Internet, che ha quindi la possibilità di leggere, analizzare e archiviare la lista completa dei siti web che vengono visitati. La maggior parte dei server DNS alternativi ha politiche sulla privacy più facilmente accessibili e trasparenti di quelle del proprio ISP.
- ✅ **Per aggirare la censura**: i DNS sono spesso usati dagli ISP per attuare provvedimenti di censura di siti web su richiesta delle autorità. Se un sito web è bloccato impedendone la risoluzione DNS, cambiare il server DNS potrebbe permettere di aggirare il blocco.
- ✅ **Per evitare i redirect**: alcuni DNS manipolano le risposte e fanno in modo che venga mostrata una pagina di errore personalizzata (a volte contenente pubblicità) quando si prova a contattare un dominio che non esiste. Questa pratica è chiamata *DNS hijacking* e non è adottata dai server DNS alternativi menzionati in questo articolo.
- ❓ **Affidabilità e prestazioni**: i server DNS pubblici di Google e Cloudflare sono una garanzia di affidabilità, mentre per i DNS degli operatori si hanno meno informazioni. A seconda di quanto sono curati o trascurati, potrebbero avere prestazioni eccellenti, nella media, oppure pessime.

{{< green >}}
Esistono degli strumenti gratuiti per eseguire **benchmark** e trovare i server DNS migliori per la propria connessione, tra cui [questo](https://www.grc.com/dns/benchmark.htm) (i DNS del proprio ISP devono essere inseriti manualmente).

In ogni caso, la risoluzione DNS è un processo che impiega **poche decine di millisecondi**, anche nel peggiore dei casi, e i risultati della risoluzione vengono memorizzati in una cache locale potenzialmente per ore. **Il tempo di risoluzione potrebbe quindi essere trascurabile.**
{{< /green >}}

{{< warn >}}
Alcuni operatori applicano sui propri modem una tecnica di *Man-in-the-middle* per intercettare qualsiasi richiesta DNS proveniente dai dispositivi della rete per inoltrarla ai server DNS predefiniti. Ad esempio sui modem Vodafone questa funzione viene chiamata "DNS sicuro" ed è disabilitabile dalle impostazioni del modem. È possibile verificare la presenza di MITM DNS tramite il servizio [DNS Leak Test](https://dnsleaktest.com/).
{{< /warn >}}

## Perché non cambiarli

Ci sono diversi **falsi miti** sui presunti benefici che deriverebbero dal cambio dei server DNS:

- ❓ **Migliore velocità di risoluzione**: tendenzialmente, un server DNS è più veloce a rispondere se si trova più "vicino" al proprio router. È quindi probabile che il DNS predefinito del proprio ISP, raggiungibile senza nemmeno uscire dalla rete dell'operatore, risponda in tempi inferiori rispetto a un DNS alternativo presente su Internet. Inoltre, il fatto che i DNS degli ISP sono utilizzati da milioni di linee ha l'effetto che le risposte del server possano essere servite direttamente dalla cache, in tempi molto bassi (~1 millisecondo in più rispetto alla latenza di rete).
- ❓ **Risolvere problemi con un sito**: al netto di censura e complotti, i server DNS non hanno ruolo nel caricamento delle pagine web. È vero però che server DNS diversi potrebbero effettuare la risoluzione dei domini seguendo regole diverse (vedi sezione successiva), per cui in alcuni casi è possibile che l'uso di un server DNS specifico comporti l'irragiungibilità di un sito web.
- ❌ **Ping migliore**: il ping misura il tempo necessario per raggiungere un indirizzo IP e tornare indietro, mentre la risoluzione DNS avviene prima dell'avvio del ping. A parità di risoluzione, il DNS non influisce quindi sul ping.
- ❌ **Download più veloce**: per lo stesso motivo del ping, il DNS non influisce sulla velocità della propria connessione. Anche nel caso in cui vengano usate tecniche di geolocalizzazione per individuare l'indirizzo IP del server più vicino[^anycast], il server DNS di un ISP italiano si trova in Italia e consente quindi una corretta geolocalizzazione.

[^anycast]: IP Anycast: https://www.cloudflare.com/learning/cdn/glossary/anycast-network/

## I server DNS alternativi

I server DNS pubblici più popolari sono quelli di Google[^g] e di Cloudflare[^cf], che corrispondono a questi indirizzi IP:

- Google: `8.8.8.8` e `8.8.4.4`
- Cloudflare: `1.1.1.1` e `1.0.0.1`

[^g]: https://developers.google.com/speed/public-dns/
[^cf]: https://1.1.1.1/

Ce ne sono due per ciascun servizio perché è possibile fare in modo che se il server DNS primario non risponde venga contattato quello secondario.

{{< green >}}
È comunque consigliabile **scegliere due server DNS di fornitori diversi**, ad esempio uno di Cloudflare e uno di Google, in modo da escludere disservizi generalizzati di uno dei due servizi.
{{< /green >}}

## Quale scegliere

I server DNS di **Cloudflare** offrono generalmente **prestazioni leggermente migliori** di quelli di Google. Cloudflare ha punti di presenza **sia a Milano che a Roma**, mentre Google solo a Milano. Gli utenti che si trovano nel centro o sud Italia potrebbero quindi avere una latenza inferiore con Cloudflare, a seconda della configurazione di rete del proprio operatore.

Una differenza fondamentale tra i due servizi è che **i server DNS di Cloudflare non supportano l'opzione EDNS Client Subnet** (ECS): significa che non trasmettono per motivi di privacy la rete da cui proviene la richiesta ai server DNS *authoritative*. In pratica, questo si traduce nell'**impossibilità** da parte dei servizi di distribuzione dei contenuti (CDN) **di sfruttare le cache interne degli operatori**, che servono a migliorare notevolmente le prestazioni di servizi di streaming come Netflix o Rai Play specialmente nei momenti con picchi di traffico.[^ecs] In casi più unici che rari, ci sono siti web che non accettano del tutto richieste di risoluzione senza ECS, e per questo [non sono raggiungibili](https://webapps.stackexchange.com/questions/135222/why-does-1-1-1-1-not-resolve-archive-is) con DNS Cloudflare. 

[^ecs]: https://forum.fibra.click/d/9833-dns-cloudflare-attenzione-alle-cdn

Dal punto di vista della privacy, Cloudflare non memorizza gli indirizzi IP degli utenti che contattano i server DNS, e in ogni caso rimuove ogni traccia dopo 24 ore.[^privacy-cf]

Google mantiene invece un registro dettagliato per 24-48 ore, dopodiché anonimizza i dati e ne memorizza un campione in un archivio permanente.[^privacy-google]

[^privacy-cf]: https://developers.cloudflare.com/1.1.1.1/privacy/public-dns-resolver/
[^privacy-google]: https://developers.google.com/speed/public-dns/privacy

{{< footer >}}
