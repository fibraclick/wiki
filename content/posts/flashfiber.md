---
title: "Cos'è e cosa fa Flash Fiber"
date: 2019-04-05
lastmod: 2019-04-05
authors: [Matteo]
description: "Flash Fiber è la joint venture di TIM e Fastweb per la copertura in FTTH delle principali città italiane. Tutte le informazioni sulla copertura e le caratteristiche tecniche della rete."
categories: [Definizioni, Copertura, FTTH]
---

**Flash Fiber** è un'azienda partecipata all'**80% da TIM e al 20% da Fastweb**, nata nel 2016 con l'obiettivo di realizzare o completare reti in [FTTH]({{< relref "architetture.md" >}}) in **29 città italiane entro il 2020**.[^ff1][^ff2]

Flash Fiber non è un operatore di vendita al dettaglio, e cioè non vende abbonamenti direttamente ai clienti. Bisogna invece rivolgersi a TIM, Fastweb o altri operatori che rivendono la rete per poter attivare una linea FTTH Flash Fiber.

La lista delle 29 città in corso di copertura è Ancona, Bari, Bergamo, Bologna, Brescia, Catania, Firenze, Genova, Messina, Modena, Monza, Napoli, Padova, Palermo, Parma, Perugia, Pescara, Prato, Reggio Calabria, Reggio Emilia, Roma, Salerno, Siena, Torino, Trento, Trieste, Venezia, Verona, Vicenza.[^ff3]

{{< toc >}}

## Lavori di copertura

La copertura prevede l'**installazione di un ROE** (_Ripartitore Ottico di Edificio_), una scatola che viene montata o nel locale contatori del palazzo o su una parete esterna.

Nel caso di un condominio, Flash Fiber chiederà l'autorizzazione per procedere all'amministratore, che però per legge non può opporsi (vedi nota).[^legge]

{{% fig src="/images/ffcartello.jpg" caption="Avviso che anticipa l'intervento di Flash Fiber in un condominio" alt="Foglio di carta appeso con il logo Flash Fiber, che dice \"stiamo posando la fibra ottica\"" %}}

## Verifica copertura

Salvo imprevisti, dopo circa 2-3 mesi dall'installazione del ROE il numero civico risulterà come coperto sulla [pagina di verifica copertura](https://www.flashfiber.it/copertura/) del sito Flash Fiber.[^ff4]

Si può procedere quindi al controllo anche sui siti TIM, Fastweb e Tiscali, che è l'unico operatore nazionale che rivende la rete Flash Fiber. In particolare:

- per **TIM**, conviene prima controllare se la FTTH risulta pianificata/attiva sul sito [Fibermap.it](https://fibermap.it). Se non è indicata come "disponibile" o "a breve", significa che bisogna attendere. Si può restare in questa fase anche per mesi o talvolta anni. La pagina di verifica copertura di TIM si trova [qua](https://www.tim.it/verifica-copertura), ma in caso negativo conviene fare un controllo anche sul sito [TIM Business](https://timbusiness.it/), per escludere bug del sito TIM che ogni tanto "capitano"
- per **Fastweb**, si può verificare la copertura [sul sito ufficiale](https://www.fastweb.it/) nelle pagine delle offerte
- per **Tiscali**, la copertura è disponibile su rete TIM (nelle centrali abilitate al VULA) oppure su rete Fastweb.[^forum]

## Tecnologia

La rete FTTH di Flash Fiber è realizzata esclusivamente utilizzando la **tecnologia GPON**, che ha la peculiarità di non richiedere elementi di rete attivi (alimentati) tra la centrale e l'abitazione del cliente.

{{% info %}}
Se non conosci la terminologia della GPON, visita la pagina [Cos'è e come funziona GPON]({{< relref "gpon.md" >}}).
{{% /info %}}

Nella rete Flash Fiber lo **splitting** della fibra ottica avviene in due livelli: il primo in un **CNO** (_Centro Nodale Ottico_), solitamente dislocato in prossimità degli armadi ripartilinea di TIM, mentre il secondo nel **ROE**. Il fattore di splitting in entrambi i casi è di 1:8, per un **fattore complessivo di 1:64** per albero.

Va tenuto presente il fatto che Flash Fiber è in realtà un'infrastruttura che **ingloba le due infrastrutture di TIM e Fastweb**. Ad esempio, ad un ROE Flash Fiber arriva la fibra ottica sia di TIM che di Fastweb, e viene quindi effettuato uno splitting indipendente per ciascun operatore (1:8 a testa). Anche gli OLT in centrale sono separati per i due operatori.

{{% fig src="/images/roe-ff1.jpg" caption="ROE Flash Fiber. Grazie a Edoardo C. per la foto" alt="Scatola di un ROE con le etichette Flash Fiber, TIM e Fastweb" vertical="true" %}}

{{% fig src="/images/roe-ff2.jpg" caption="ROE Flash Fiber esterno. Grazie a Francesco B. per la foto" alt="Scatola di un ROE legata a un palo della rete TIM" vertical="true" %}}

{{% fig src="/images/roe-ff3.jpg" caption="ROE Flash Fiber esterno. Grazie a Manuel M. per la foto" alt="Scatola di un ROE fissata su una parete esterna di una casa" vertical="true" %}}

[^ff1]: https://www.flashfiber.it/chi-siamo/lazienda/
[^ff2]: https://www.flashfiber.it/chi-siamo/
[^ff3]: https://www.flashfiber.it/verifica-copertura/
[^ff4]: https://www.flashfiber.it/larrivo-di-flash-fiber-nel-tuo-edificio/
[^legge]: Decreto legislativo 33 / 2016, articolo 91, comma 2 https://www.gazzettaufficiale.it/eli/id/2016/03/09/16G00041/sg
[^forum]: https://forum.fibra.click/d/2552-tiscali-espansione-sulla-rete-open-fiber-e-non-solo/6

{{< footer >}}
