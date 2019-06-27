---
title: "A cosa serve cambiare i DNS"
slug: dns
date: 2019-06-26T19:38:28+02:00
lastmod: 2019-06-27T10:23:00+02:00
authors: [Matteo]
description: "Chiariamo definitivamente i casi in cui ha senso cambiare i server DNS per la risoluzione dei nomi e quelli in cui non ha tecnicamente senso farlo"
categories: [Reti]
---

I server <abbr title="Domain Name System">DNS</abbr> hanno lo scopo di effettuare la "conversione" (più precisamente **risoluzione**) dei nomi di dominio nei relativi indirizzi IP.

Ad esempio, per caricare il sito `https://fibra.click` viene prima contattato un server DNS per trovare l'indirizzo IP del server che ospita il sito di FibraClick, cioè `116.203.133.130`.

{{% warn %}}
I server DNS possono essere *authoritative* ("autorevoli") oppure *non-authoritative*. La differenza è che i primi danno informazioni solo per i domini che sono sotto il loro controllo, mentre i secondi "danno una mano" facendo da intermediari per i server authoritative.

In questo articolo ci si riferisce ai server DNS non-authoritative, o DNS pubblici.
{{% /warn %}}

Essendo il DNS un sistema gerarchico e distribuito, **esistono numerosi server DNS pubblici** che si occupano di risolvere i nomi di dominio.

Anche **il router che abbiamo in casa è un server DNS**, che a sua volta contatta altri server DNS esterni, solitamente quelli del proprio <abbr title="Internet Service Provider, il gestore della connessione">ISP</abbr>.

{{% toc %}}

## Perché cambiarli

- ✅ **Privacy**: i server DNS predefiniti sono quelli del proprio gestore Internet, che ha quindi la possibilità di leggere, analizzare e archiviare la lista completa dei siti web che vengono visitati. La maggior parte dei server DNS alternativi ha politiche sulla privacy più facilmente accessibili e trasparenti di quelle del proprio ISP.
- ✅ **Per aggirare la censura**: i DNS sono spesso usati dagli ISP per attuare provvedimenti di censura di siti web su richiesta delle autorità. Se un sito web è bloccato impedendone la risoluzione DNS, cambiare il server DNS potrebbe permettere di aggirare il blocco.
- ❓ **Affidabilità e prestazioni**: i server DNS pubblici di Google e CloudFlare sono una garanzia di affidabilità, mentre per i DNS degli operatori si hanno meno informazioni. A seconda di quanto sono curati o trascurati, potrebbero avere prestazioni eccellenti, nella media, oppure pessime.

{{% green %}}
In ogni caso, la risoluzione DNS è un processo che impiega **pochi decine di millisecondi**, anche nel peggiore dei casi, e i risultati della risoluzione vengono memorizzati in una cache locale potenzialmente per ore. **Il tempo di risoluzione potrebbe quindi essere trascurabile.**
{{% /green %}}

## Perché non cambiarli

Ci sono diversi **falsi miti** sui presunti benefici che deriverebbero dal cambio dei server DNS:

- ❓ **Migliore velocità di risoluzione**: tendenzialmente, un server DNS è più veloce a rispondere se si trova più "vicino" al proprio router. È quindi probabile che il DNS predefinito del proprio ISP, raggiungibile senza nemmeno uscire dalla rete dell'operatore, risponda in tempi inferiori rispetto a un DNS alternativo presente su Internet.
- ❌ **Ping migliore**: il ping misura il tempo necessario per raggiungere un indirizzo IP e tornare indietro, mentre la risoluzione DNS avviene prima dell'avvio del ping. A parità di risoluzione, il DNS non influisce quindi sul ping.
- ❌ **Download più veloce**: per lo stesso motivo del ping, il DNS non influisce sulla velocità della propria connessione. Anche nel caso in cui vengano usate tecniche di geolocalizzazione per individuare l'indirizzo IP del server più vicino[^anycast], il server DNS di un ISP italiano si trova in Italia e consente quindi una corretta geolocalizzazione.
- ❌ **Risolvere problemi con un sito**: al netto di censura e complotti, i server DNS non hanno ruolo nel caricamento delle pagine web. Problemi di caricamento non possono essere risolti cambiando il server DNS.

[^anycast]: IP Anycast https://www.cloudflare.com/learning/cdn/glossary/anycast-network/

## I server DNS alternativi

I server DNS pubblici più popolari sono quelli di Google[^g] e di CloudFlare[^cf], che corrispondono a questi indirizzi IP:

- Google: `8.8.8.8` e `8.8.4.4`
- CloudFlare: `1.1.1.1` e `1.0.0.1`

[^g]: https://developers.google.com/speed/public-dns/
[^cf]: https://1.1.1.1/

Ce ne sono due per ciascun servizio perché è possibile fare in modo che se il server DNS primario non risponde venga contattato quello secondario.

{{% green %}}
È comunque consigliabile **scegliere due server DNS di fornitori diversi**, ad esempio uno di CloudFlare e uno di Google, in modo da escludere disservizi generalizzati di uno dei due servizi.
{{% /green %}}

## Quale scegliere

I server DNS di **CloudFlare** offrono generalmente **prestazioni leggermente migliori** di quelli di Google. CloudFlare ha punti di presenza **sia a Milano che a Roma**, mentre Google solo a Milano. Gli utenti che si trovano nel centro o sud Italia dovrebbero quindi avere una latenza inferiore con CloudFlare.

Dal punto di vista della privacy, CloudFlare non memorizza gli indirizzi IP degli utenti che contattano i server DNS, e in ogni caso rimuove ogni traccia dopo 24 ore.[^privacy-cf]

Google mantiene invece un registro dettagliato per 24-48 ore, dopodiché anonimizza i dati per un paio di settimane e in seguito ne mantiene un piccolo campione in un archivio permanente.[^privacy-google]

[^privacy-cf]: https://developers.cloudflare.com/1.1.1.1/commitment-to-privacy/
[^privacy-google]: https://developers.google.com/speed/public-dns/privacy

{{% footer %}}
