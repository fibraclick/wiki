---
title: "Come sezionare l'impianto telefonico di casa"
slug: sezionare-impianto
date: 2019-11-05T18:00:00+01:00
lastmod: 2019-11-05T23:00:00+01:00
authors: [Andrea (Hadx)]
description: "Per ottimizzare le connessioni fibra mista rame è necessario eliminare le derivazioni e sezionare l'impianto. Vi spieghiamo come fare."
categories: [FTTC, Reti]
image: /social/sezionare-impianto.jpg
---

Delle tre tipologie di collegamenti Internet fisici più diffuse in Italia, la [VDSL]({{< relref "/posts/vdsl.md" >}}) è senza dubbio la tecnologia che più di tutte **porta all'estremo il mezzo trasmissivo** usato (il rame) per poter garantire velocità di trasferimento anche molto elevate su di un mezzo non pensato per tale scopo.

L'estremizzazione ha però un costo da pagare: **quando la tratta in rame non è in perfette condizioni si può assistere ad una notevole perdita di velocità**.

Se da una parte su tutto il tratto che va dall'armadio a casa gli utenti possono fare ben poco, dall'altra rimane un tratto altrettanto importante a nostra disposizione, e paradossalmente quello da cui è solitamente possibile guadagnare la maggior fetta di velocità: **l'impianto di casa**.

Questa guida spiega **come sistemare l'impianto domestico per ottenere il massimo dalla connessione ed essere pronti al passaggio alla VDSL**.

{{% warn %}}
Nel caso di attivazioni TIM con intervento del tecnico, il sezionamento dell'impianto con isolamento della presa principale e collegamento del modem viene effettuato in fase di attivazione, mentre l'abilitazione delle altre prese alla fonia è un servizio offerto a pagamento. Con altri operatori l'adeguamento dell'impianto non è solitamente previsto.
{{% /warn %}}

{{< toc >}}

## Obiettivo: eliminare le derivazioni

In Italia la rete telefonica tradizionale prevede, tra i vari elementi, un cavo che si dirama dalla strada (più correttamente dalla chiostrina) per raggiungere l'interno delle abitazioni. Questo cavo viene in gergo chiamato *drop*.

{{% green %}}
Dentro casa, il *drop* può arrivare in una **scatola di derivazione**, oppure, come nel caso di diversi condomini, direttamente alla prima presa, in questo caso chiamata **presa principale**.
{{% /green %}}

Quando in una abitazione si hanno più prese telefoniche, si hanno quelle che vengono comunemente chiamate **derivazioni (interne)** o *stub*. 

**Le derivazioni sono estremamente deleterie** per le velocità che si possono raggiungere in tecnologia fibra mista rame (VDSL), pertanto in questa guida andremo ad analizzare le situazioni più comunemente incontrate nelle abitazioni e vedremo come sistemare l'impianto in modo da ottenere le migliori prestazioni possibili.

{{% green %}}
✅ Tutte le operazioni qui illustrate sono sicure e possono essere effettuate da chiunque.

È sufficiente avere dei **cacciaviti** e dei **mammut** elettrici (si trovano nei negozi di ferramenta, hobbistica, ecc. a meno di 1€). Nel caso li abbiate a disposizione, anche delle **forbici** e del **nastro isolante** possono tornare utili.
{{% /green %}}

## Scollegare le derivazioni

In Italia esistono due situazioni comuni quando in una abitazione si hanno più prese telefoniche. Assumendo che il *drop* arrivi direttamente in una scatola di derivazione (analogamente se arriva in una presa di casa) si può avere che:

- **CASO 1**: al *drop* è collegato un solo doppino che va verso una presa di casa, e da questa presa parte un altro doppino che va ad un'altra presa, e così via.

{{% fig src="/images/sezionare-impianto/01.jpg" caption="Un solo doppino (una coppia di cavi bianco e rosso) collega in cascata le prese telefoniche della casa." %}}

- **CASO 2**: al *drop* sono collegati più doppini che collegano le altre prese della casa.

{{% fig src="/images/sezionare-impianto/02.jpg" caption="Tanti doppini collegano le prese telefoniche della casa." %}}

{{% warn %}}
Si può avere anche un mix dei due casi quando sono presenti molte prese, soprattutto se installate in momenti diversi.
{{% /warn %}}

A questo punto, come possiamo sistemare l'impianto per ottenere il massimo dalla linea? Vogliamo prima di tutto ricondurci a questa situazione, in cui **il doppino arriva direttamente alla presa a cui è collegato il modem**, senza altri doppini collegati.

{{% fig src="/images/sezionare-impianto/03.jpg" vertical="true" %}}

Come arrivare a questa situazione nei due casi sopra esposti?

### Caso 1

Nel caso 1 è necessario **scollegare** il doppino che parte dalla presa a cui vogliamo collegare il modem e che si dirige verso le altre prese di casa.

{{% fig src="/images/sezionare-impianto/04.jpg" %}}

{{% warn %}}
⚠️ Non è sufficiente tagliare il doppino! È necessario che **scolleghiate fisicamente i due cavetti** (se possibile fate due giri di nastro isolante intorno ai cavetti scollegati). Perché? Materia per un altro articolo della wiki 😉
{{% /warn %}}

### Caso 2

Nel caso 2, innanzitutto si vanno a scollegare (fisicamente, come spiegato qua sopra) i vari doppini collegati al drop. Dopodiché si ricollega al drop, tramite il *mammut* elettrico, solamente il doppino che va alla presa a cui vogliamo collegare il modem (nel caso in figura, la presa centrale).

{{% fig src="/images/sezionare-impianto/05.jpg" %}}

A questo punto ve lo starete chiedendo: per un utente medio **non esiste un modo rapido per capire dove vada il singolo doppino**. Se si è in due, una persona può tirare un doppino e l'altra vedere in quale presa il doppino si muove. Altrimenti, bisogna andare a tentativi.

{{% warn %}}
⚠️ Se si è già in VDSL, per [evitare problemi]({{< relref "/posts/snr-sra-sos.md" >}}) si consiglia di attendere almeno 15 minuti tra una accensione del modem e un'altra se dovete fare le prove. Cercate anche di non spegnerlo/accenderlo più di tre/quattro volte al giorno.
{{% /warn %}}

## Ricollegare le prese telefoniche

In molti casi, l'obiettivo che vogliamo raggiungere è collegare il modem ad una presa ma **collegare il telefono fisso ad un'altra presa della casa**.

Una volta completati i passaggi precedenti, ossia una volta che avremo rimosso le derivazioni interne, per poter usare il telefono fisso nelle altre prese bisognerà seguire questo schema:

{{% fig src="/images/sezionare-impianto/06.jpg" %}}

Utilizzando **una presa con due porte RJ11** (la trovate a pochi euro), si collega il doppino proveniente dal *drop* ad una delle due porte della presa, e a questa porta si connette poi il modem.

Alla seconda porta della presa, invece, andremo a collegare un doppino che corre fino ad un'altra presa di casa (quella a cui vogliamo collegare il telefono fisso). 

Una volta fatto ciò, basterà connettere l'uscita TEL del modem con un cavetto RJ11 alla seconda porta della presa, e infine collegare il telefono fisso alla presa scelta.

{{< footer >}}
