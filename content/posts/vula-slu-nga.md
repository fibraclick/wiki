---
title: "Cosa significano VULA, SLU e NGA"
slug: vula-slu-nga
date: 2019-04-18T22:39:45+02:00
lastmod: 2019-04-19
authors: [Matteo]
description: "Le cose da sapere sulle modalità con cui gli operatori telefonici possono rivendere la rete in fibra di TIM, l'operatore dominante in Italia."
categories: [Definizioni, FTTC, FTTH]
image: /social/vula-slu-nga.jpg
---

Con gli acronimi **VULA, SLU e NGA** ci si riferisce ad alcune modalità che gli operatori di rete hanno a disposizione per accedere alla rete di un operatore dominante (*incumbent*), cioè un operatore che possiede gran parte delle infrastrutture di un Paese.

In Italia, l'operatore dominante è l'ex monopolista **TIM/Telecom Italia**, che possiede le centrali telefoniche e soprattutto la **rete in rame**, che raggiunge quasi tutte le abitazioni del Paese. Si tratta del cosiddetto "**ultimo miglio**".

I termini VULA, SLU e NGA si utilizzano nell'ambito delle reti di nuova generazione, e cioè infrastrutture [FTTC e FTTH]({{< relref "/posts/architetture.md" >}}) per la banda larga e ultralarga.

{{< toc >}}

## VULA (Virtual Unbundled Local Access)

Il VULA è una tipologia di accesso che prevede che **l'operatore alternativo sia presente nella centrale TIM** con un apposito kit di consegna. L'operatore affitta l'intera tratta che va dalla centrale (OLT) alle abitazioni dei clienti, indipendentemente dall'architettura (FTTC/FTTH).[^fw]

Il traffico generato dai clienti viene **consegnato all'operatore a livello di centrale**, tramite un kit VULA. Ciascun operatore può avere un suo kit VULA, ma l'interconnessione tra kit e OLT (*Optical Line Terminal*, cioè l'apparato in cui sono collegate le fibre ottiche della rete di accesso) avviene con un collegamento unico di 10 Gbps condivisi tra tutti gli operatori VULA.[^vula]

{{% fig src="/images/vula.png" caption="Schema di accesso VULA per due operatori alternativi (\"OLO\" in gergo) in centrale TIM." %}}

{{% green %}}
L'accesso VULA si definisce **unbundled**, cioè **disaggregato**, perché l'operatore alternativo affitta solo **parte dell'infrastruttura** TIM, in questo caso l'ultimo miglio.

L'accesso è però **virtuale**, perché l'operatore non affitta fisicamente il collegamento e non può quindi usarlo in modo esclusivo. Infatti, sia nel caso di FTTC che FTTH la fibra ottica trasporta il traffico di tutti gli operatori, separato tramite l'uso delle VLAN (Virtual LAN).
{{% /green %}}

In Italia, i principali operatori disponibili in VULA sono **Fastweb, Vodafone, Tiscali e Wind Tre**, in un numero di comuni comunque inferiore rispetto alla copertura completa di TIM. I dati aggiornati sono indicati [su Wikipedia](https://it.wikipedia.org/wiki/VDSL2#Copertura_in_Italia) (si noti che Tiscali rivende il VULA Fastweb, quindi il conteggio include la copertura Fastweb).

A livello di prestazioni, **una linea TIM e una linea VULA sono sostanzialmente identiche**. Talvolta possono però sorgere problemi di saturazione, nello specifico nel caso in cui il kit di consegna dell'operatore sia saturo, oppure nel (raro) caso in cui lo sia il collegamento OLT-switch di 10 Gbps.

## SLU (Sub-Loop Unbundling)

Il termine SLU è utilizzato nell'ambito delle reti FTTC per indicare **l'affitto da parte di un operatore soltanto della tratta in rame** che va dagli armadi TIM alle abitazioni ("sub-loop", cioè la rete secondaria).[^slu]

Questo comporta che l'operatore alternativo duplichi l'infrastruttura di TIM, installando degli **apparati su strada** (**ONU/DSLAM**) e in centrale (OLT).

{{% fig src="/images/slu.png" caption="Schema di accesso SLU per un operatore alternativo (OLO)." %}}

- **OLT** (*Optical Line Terminal*) è la **terminazione a livello di centrale** della rete in fibra ottica;
- **ONU** (*Optical Network Unit*) è la terminazione su strada della rete ottica. In questo caso svolge il ruolo di **DSLAM** (*Digital Subscriber Line Access Multiplexer*), e cioè consente di gestire il **collegamento di molte linee in rame** (ADSL o VDSL). **L'operatore installa un proprio ONU accanto a quello TIM**;
- **ARL** è l'armadio ripartilinea, cioè il punto di raccordo del rame che collega le abitazioni tramite la tratta secondaria. **Tutti gli operatori SLU utilizzano l'ARL TIM**.

I due principali operatori che in Italia hanno installato infrastrutture SLU sono **Fastweb e Vodafone**, entrambi in poco più di 100 comuni. La rete SLU di Vodafone viene talvolta chiamata anche "MAKE".

Altri operatori locali, tra cui il caso notevole di Planetel, hanno realizzato infrastrutture SLU in qualche comune.

{{% fig src="/images/slu.jpg" caption="Da sinistra, ONU Fastweb, ONU Vodafone, colonnina di alimentazione TIM, ARL e ONU TIM e due chiostrine TIM. La fibra ottica degli operatori SLU, proveniente dalla centrale, entra nei rispettivi ONU, e i cavi in rame che ne escono vengono collegati all'armadio TIM. Grazie a Emilio M. per la foto" alt="Strada con marciapiede, sul quale sono posizionati in fila alcuni armadi o box per la FTTC" %}}

La copertura SLU può risultare conveniente all'operatore, ma **non porta quasi nessun beneficio in termini di prestazioni**. Su infrastruttura Fastweb SLU un vantaggio è che i profili di velocità non sono bloccati, e cioè, ad esempio, che l'upload può arrivare anche a 30 Mbps anziché ai classici 20 Mbps.

## NGA (Next Generation Access)

Con l'accesso **NGA**, un operatore può **offrire linee** FTTC/FTTH ai suoi clienti **senza essere necessariamente presente con la propria rete nelle centrali TIM**.

In NGA, la connessione del cliente viene **gestita da TIM**, e il traffico viene raccolto dall'operatore alternativo in un apposito **punto di raccolta**. La raccolta può avvenire sia a livello di area che macroarea, cioè approssimativamente a livello di provincia o di regione.[^fw]

Un accesso NGA è notevolmente più **costoso** per l'operatore alternativo, perché quest'ultimo deve pagare a TIM il passaggio sulla sua rete di trasporto, fino al punto di raccolta.

Inoltre, in NGA **l'operatore perde il controllo sia della rete di accesso che di parte della rete di trasporto**. La risoluzione dei **guasti** deve quindi passare quasi sempre da TIM.

{{% fig src="/images/nga.png" caption="Schema di accesso NGA per un operatore alternativo (OLO)." %}}

{{< footer >}}

[^fw]: https://www.fastweb.it/adsl-fibra-ottica/rete-fibra-ottica/
[^vula]: https://www.wholesale.telecomitalia.com/it/catalogo/-/catalogo_aggregator/article/1027774
[^slu]: https://www.wholesale.telecomitalia.com/it/catalogo/-/catalogo_aggregator/article/31057
