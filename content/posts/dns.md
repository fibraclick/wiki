---
title: "A cosa serve cambiare i DNS"
slug: dns
date: 2019-06-26T19:38:28+02:00
lastmod: 2019-06-27T15:39:00+02:00
authors: [Matteo]
description: "I server DNS hanno lo scopo di convertire i nomi di dominio in indirizzi IP, ma in quali casi ha senso cambiarli e in quali non porta benefici?"
categories: [Reti]
---

I server <abbr title="Domain Name System">DNS</abbr> hanno lo scopo di effettuare la "conversione" (più precisamente **risoluzione**) dei nomi di dominio nei relativi indirizzi IP.

Ad esempio, per caricare il sito `https://fibra.click` viene prima contattato un server DNS per trovare l'indirizzo IP del server che ospita il sito di FibraClick, cioè `116.203.133.130`.

{{< warn >}}
I server DNS possono essere *authoritative* ("autorevoli") oppure *non-authoritative*. La differenza è che i primi danno informazioni sempre aggiornate, ma solo per i domini che sono sotto il loro controllo, mentre i secondi "danno una mano" ai server authoritative facendo da intermediari e memorizzando in cache le richieste di risoluzione.

In questo articolo ci si riferisce ai server DNS non-authoritative, o DNS pubblici.
{{< /warn >}}

Essendo il DNS un sistema gerarchico e distribuito, **esistono numerosi server DNS pubblici** che si occupano di risolvere i nomi di dominio.

Anche **il router che abbiamo in casa è un server DNS**, che a sua volta contatta altri server DNS esterni, solitamente quelli del proprio <abbr title="Internet Service Provider, l'operatore telefonico">ISP</abbr>.

{{< toc >}}

## Perché cambiarli

- ✅ **Privacy**: i server DNS predefiniti sono quelli del proprio gestore Internet, che ha quindi la possibilità di leggere, analizzare e archiviare la lista completa dei siti web che vengono visitati. La maggior parte dei server DNS alternativi ha politiche sulla privacy più facilmente accessibili e trasparenti di quelle del proprio ISP.
- ✅ **Per aggirare la censura**: i DNS sono spesso usati dagli ISP per attuare provvedimenti di censura di siti web su richiesta delle autorità. Se un sito web è bloccato impedendone la risoluzione DNS, cambiare il server DNS potrebbe permettere di aggirare il blocco.
- ✅ **Per evitare i redirect**: alcuni DNS manipolano le risposte e fanno in modo che venga mostrata una pagina di errore personalizzata (a volte contenente pubblicità) quando si prova a contattare un dominio che non esiste. I DNS menzionati in questo articolo non hanno questo comportamento.
- ❓ **Affidabilità e prestazioni**: i server DNS pubblici di Google e Cloudflare sono una garanzia di affidabilità, mentre per i DNS degli operatori si hanno meno informazioni. A seconda di quanto sono curati o trascurati, potrebbero avere prestazioni eccellenti, nella media, oppure pessime.

{{< green >}}
Esistono degli strumenti gratuiti per eseguire **benchmark** e trovare i server DNS migliori per la propria connessione, tra cui [questo](https://www.grc.com/dns/benchmark.htm) (i DNS del proprio ISP devono essere inseriti manualmente).

In ogni caso, la risoluzione DNS è un processo che impiega **poche decine di millisecondi**, anche nel peggiore dei casi, e i risultati della risoluzione vengono memorizzati in una cache locale potenzialmente per ore. **Il tempo di risoluzione potrebbe quindi essere trascurabile.**
{{< /green >}}

## Perché non cambiarli

Ci sono diversi **falsi miti** sui presunti benefici che deriverebbero dal cambio dei server DNS:

- ❓ **Migliore velocità di risoluzione**: tendenzialmente, un server DNS è più veloce a rispondere se si trova più "vicino" al proprio router. È quindi probabile che il DNS predefinito del proprio ISP, raggiungibile senza nemmeno uscire dalla rete dell'operatore, risponda in tempi inferiori rispetto a un DNS alternativo presente su Internet. Inoltre, il fatto che i DNS degli ISP sono utilizzati da milioni di linee ha l'effetto che le risposte del server possano essere servite direttamente dalla cache, in tempi molto bassi (~1 millisecondo in più rispetto alla latenza di rete).
- ❌ **Ping migliore**: il ping misura il tempo necessario per raggiungere un indirizzo IP e tornare indietro, mentre la risoluzione DNS avviene prima dell'avvio del ping. A parità di risoluzione, il DNS non influisce quindi sul ping.
- ❌ **Download più veloce**: per lo stesso motivo del ping, il DNS non influisce sulla velocità della propria connessione. Anche nel caso in cui vengano usate tecniche di geolocalizzazione per individuare l'indirizzo IP del server più vicino[^anycast], il server DNS di un ISP italiano si trova in Italia e consente quindi una corretta geolocalizzazione.
- ❌ **Risolvere problemi con un sito**: al netto di censura e complotti, i server DNS non hanno ruolo nel caricamento delle pagine web. Problemi di caricamento non possono essere risolti cambiando il server DNS.

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

I server DNS di **Cloudflare** offrono generalmente **prestazioni leggermente migliori** di quelli di Google. Cloudflare ha punti di presenza **sia a Milano che a Roma**, mentre Google solo a Milano. Gli utenti che si trovano nel centro o sud Italia dovrebbero quindi avere una latenza inferiore con Cloudflare.

Dal punto di vista della privacy, Cloudflare non memorizza gli indirizzi IP degli utenti che contattano i server DNS, e in ogni caso rimuove ogni traccia dopo 24 ore.[^privacy-cf]

Google mantiene invece un registro dettagliato per 24-48 ore, dopodiché anonimizza i dati per un paio di settimane e in seguito ne mantiene un piccolo campione in un archivio permanente.[^privacy-google]

[^privacy-cf]: https://developers.cloudflare.com/1.1.1.1/privacy/public-dns-resolver/
[^privacy-google]: https://developers.google.com/speed/public-dns/privacy

{{< footer >}}
