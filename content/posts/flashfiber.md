---
title: "Cos'è e cosa fa Flash Fiber"
slug: flashfiber
date: 2019-04-05
lastmod: 2020-06-16T18:00:00+02:00
authors: [Matteo]
description: Flash Fiber è la joint venture di TIM e Fastweb che prevede la copertura in fibra ottica di 29 grandi città italiane entro il 2020.
categories: [Definizioni, Copertura, FTTH]
image: /social/flashfiber.jpg
---

**Flash Fiber** è un'azienda partecipata all'**80% da TIM e al 20% da Fastweb**, nata nel 2016 con l'obiettivo di realizzare o completare reti in [FTTH]({{< relref "/posts/architetture.md" >}}) in **29 città italiane entro il 2020**.[^ff1]

Flash Fiber è un operatore *wholesale-only*, e cioè di vendita all'ingrosso. Per poter attivare una linea su rete Flash Fiber bisogna quindi rivolgersi a un operatore al dettaglio come **TIM, Fastweb o altri operatori che ne rivendono la rete**.

L'infrastruttura FTTH è realizzata con la tecnologia [GPON]({{< relref "/posts/gpon.md" >}}), che consente di fornire connessioni con velocità di **1 Gbps in download**. La velocità offerta (nominale ed effettiva) dipende però dall'operatore scelto.

La lista delle 29 città in corso di copertura è Ancona, Bari, Bergamo, Bologna, Brescia, Catania, Firenze, Genova, Messina, Modena, Monza, Napoli, Padova, Palermo, Parma, Perugia, Pescara, Prato, Reggio Calabria, Reggio Emilia, Roma, Salerno, Siena, Torino, Trento, Trieste, Venezia, Verona, Vicenza.[^ff3]

{{< warn >}}
⚠ **Nella città di Milano Flash Fiber non è presente**, ma esistono invece le infrastrutture separate di **TIM** (dai tempi di Telecom Italia) e **Metroweb**. Metroweb ha realizzato per quasi 20 anni la rete FTTH utilizzata da Fastweb, per poi essere fusa con Open Fiber. Oggi, Fastweb continua a utilizzare e ad attivare utenze sulla ex rete Metroweb.
{{< /warn >}}

{{< toc >}}

## Lavori di copertura

La copertura FTTH prevede l'**installazione di un ROE** (_Ripartitore Ottico di Edificio_), una scatola che viene montata nel locale contatori del palazzo o su una parete esterna dell'edificio.

Nel caso di un condominio, Flash Fiber chiederà l'autorizzazione per procedere all'amministratore, che però per legge non può opporsi (vedi nota).[^legge]

{{< fig src="/images/ffcartello.jpg" caption="Avviso che anticipa l'intervento di Flash Fiber in un condominio" alt="Foglio di carta appeso con il logo Flash Fiber, che dice \"stiamo posando la fibra ottica\"" >}}

## Verifica copertura

Salvo imprevisti, dopo circa 2-3 mesi dall'installazione del ROE il numero civico risulterà come coperto sulla [pagina di verifica copertura](https://www.flashfiber.it/copertura/) del sito Flash Fiber.[^ff4]

Si può procedere quindi al controllo anche sui siti **TIM, Fastweb e Tiscali**. Quest'ultimo è l'unico operatore nazionale che rivende la rete Flash Fiber.

In particolare:

- per **TIM**, conviene prima verificare se la FTTH risulta pianificata/attiva sul sito [Fibermap.it](https://fibermap.it). Se non è indicata come "disponibile" o "a breve", significa che bisogna attendere. Si può restare in questa fase anche per mesi o talvolta anni. La pagina di verifica copertura di TIM si trova [qua](https://www.tim.it/verifica-copertura), ma in caso di esito negativo è consigliabile fare un controllo anche sul sito [TIM Business](https://timbusiness.it/), per escludere bug del sito TIM, che ogni tanto "capitano"
- per **Fastweb**, si può verificare la copertura [sul sito ufficiale](https://www.fastweb.it/) nelle pagine delle offerte
- per **Tiscali**, la copertura è disponibile sia su rete TIM (nelle centrali abilitate al VULA) che su rete Fastweb.[^forum] La copertura si verifica [sul sito ufficiale](https://casa.tiscali.it/)

## Tecnologia

La rete FTTH di Flash Fiber è realizzata esclusivamente utilizzando la **tecnologia GPON**, che ha la peculiarità di non richiedere elementi di rete attivi (alimentati) tra la centrale e l'abitazione del cliente.

{{< info >}}
I dettagli della rete Flash Fiber sono illustrati nell'apposita sezione nella pagina [Cos'è e come funziona la GPON]({{< relref "/posts/gpon.md#flash-fiber" >}}).
{{< /info >}}

## Foto

{{< fig src="/images/roe-ff1.jpg" caption="ROE Flash Fiber. Grazie a Edoardo C. per la foto" alt="Scatola di un ROE con le etichette Flash Fiber, TIM e Fastweb" >}}

{{< fig src="/images/roe-ff2.jpg" caption="CNO Flash Fiber esterno. Grazie a Francesco B. per la foto" alt="Scatola di un CNO legata a un palo della rete TIM" >}}

{{< fig src="/images/cno-ff.jpg" caption="CNO Flash Fiber inserito in un box-chiostrina. Grazie a Luca Z. per la foto" alt="Interno di una chiostrina TIM su strada, contenente il CNO" >}}

{{< fig src="/images/roe-ff5.jpg" caption="Interno di un ROE Flash Fiber con 16 fibre ottiche. Grazie a \"evilways\" per la foto" alt="Interno di un ROE Flash Fiber che mostra i cavi delle fibre ottiche" >}}

{{< fig src="/images/roe-ff3.jpg" caption="ROE Flash Fiber esterno. Grazie a Manuel M. per la foto" alt="Scatola di un ROE fissata su una parete esterna di una casa" >}}

{{< fig src="/images/roe-ff4.jpg" caption="Contenitore di ROE Flash Fiber da interno. Grazie a Augmentin per la foto" alt="Scatola di un ROE larga e bassa, fissata su una parete, con le etichette Flash Fiber e TIM" >}}

{{< fig src="/images/muffola-ff.jpg" vertical="true" caption="Muffola compatta, da non confondere con il ROE, con lo scopo di fare da giunto per collegare più ROE. Grazie a @DDR per la foto" >}}

[^ff1]: https://www.flashfiber.it/chi-siamo/lazienda/
[^ff3]: https://www.flashfiber.it/verifica-copertura/
[^ff4]: https://www.flashfiber.it/le-nostre-soluzioni/larrivo-di-flash-fiber-nel-tuo-edificio/
[^legge]: *DECRETO LEGISLATIVO 15 febbraio 2016, n. 33*, art. 8 https://www.gazzettaufficiale.it/eli/id/2016/03/09/16G00041/sg
[^forum]: https://forum.fibra.click/d/2552-tiscali-espansione-sulla-rete-open-fiber-e-non-solo/6

{{< footer >}}
