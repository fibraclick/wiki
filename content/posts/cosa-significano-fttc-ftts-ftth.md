---
title: Cosa significano FTTC, FTTH e FTTS
date: 2019-03-22T18:38:46+01:00
lastmod: 2019-03-22T18:38:46+01:00
authors: [Matteo]
description: Il significato delle sigle FTTC, FTTH e FTTS, usate per indicare diversi tipi di architetture di rete
categories: [Definizioni, FTTC, FTTH]
---

Le sigle **FTTC** e **FTTH** sono acronimi che indicano diverse architetture di rete. Sono spesso accomunate dal più generico acronimo FTTx, che sta ad indicare tutte le architetture che prevedono l'uso della fibra ottica.

FTTC e FTTH sono acronimi rispettivamente di *Fiber To The Cabinet* e *Fiber To The Home*.

{{% fig src="/images/architetture.jpg" caption="Architetture di rete TIM. Premi l'immagine per ingrandire" %}}

## FTTC

In un'architettura di rete FTTC, la fibra ottica arriva fino al cosiddetto *cabinet*, in italiano *armadio*. L'armadio si trova su strada e ha lo scopo di collegare la tratta primaria (quella tra la centrale e l'armadio) e la tratta secondaria (tra l'armadio e le abitazioni).

{{% info %}}
Nell'ambito delle reti telefoniche in rame, l'armadio viene più precisamente chiamato *armadio ripartilinea* (ARL).
{{% /info %}}

Nel caso di reti telefoniche in rame, dall'armadio partono centinaia di coppie di cavi intrecciati (i doppini), uno per ciascuna linea collegata.

{{% warn %}}
Un armadio può collegare **anche 1000 linee**, ma la **distanza** tra armadio e abitazioni è nella maggior parte dei casi **inferiore ai 500 metri**.
{{% /warn %}}

In FTTC, l'armadio diventa il luogo di "connessione" tra la fibra ottica in arrivo dalla centrale e i cavi in rame che vanno verso le abitazioni.

La conversione del segnale da ottico a elettrico avviene attraverso un **ONU** e con l'aiuto di un **DSLAM**. Si tratta di apparati attivi (cioè richiedono alimentazione), e nel caso di TIM sono molto spesso inseriti in una scatola installata sopra l'armadio.

{{% green %}}
##### Perché usare la FTTC
Il vantaggio principale della FTTC è che permette di ridurre la lunghezza della tratta secondaria in rame. Le tecnologie DSL infatti funzionano meglio su brevi distanze e permettono su alte frequenze e brevi distanze di raggiungere anche 200 o 300 Mbps in download.

Agli operatori telefonici la FTTC piace perché è una soluzione cablata generalmente con buone prestazioni e costi di realizzazione sostenibili su larga scala. Permette inoltre di coprire rapidamente molte abitazioni.

**Vedi anche [Cos'è la VDSL]({{< relref "cose-la-vdsl.md" >}}).**
{{% /green %}}

{{% green %}}
##### Perché la FTTC è criticata
La FTTC sfrutta come tratta secondaria la rete in rame esistente, talvolta stesa più di mezzo secolo fa. Di conseguenza, il degrado del rame spesso influisce anche in modo pesante sulla qualità della linea FTTC.

Inoltre, l'uso di alte frequenze genera tra i cavi in rame interferenze che non sono trascurabili come avveniva per l'ADSL. Il fenomeno della diafonia riduce infatti la velocità fino al 50%, in base al numero di linee VDSL interferenti.

**Vedi anche [Cos'è la diafonia]({{< relref "cose-la-diafonia.md" >}}).**

Infine, in molti casi la distanza dall'armadio è superiore a 500 metri (o addirittura a un chilometro), con la conseguenza di abbassare notevolmente la velocità ottenibile.
{{% /green %}}

In Italia, l'architettura FTTC è prevalente in confronto a FTTH e ADSL, principalmente per merito degli investimenti messi in atto da TIM a partire dal 2012. Si stima che la copertura in FTTC a fine 2018 riguardi tra il 60 e l'80% della popolazione.

{{% warn %}}
La sigla **FTTS** (*Fiber To The Street*) è equivalente a FTTC. In Italia è utilizzata sostanzialmente solo da Fastweb per indicare la propria infrastruttura SLU.
{{% /warn %}}

{{% info %}}
Vedi anche [Cosa significano VULA, SLU e NGA]({{< relref "cosa-significano-vula-slu-nga.md" >}}), le modalità con cui gli operatori possono accedere alla rete TIM ed estenderla.
{{% /info %}}

## FTTH

*Fiber To The Home* è l'architettura che prevede di portare la **fibra ottica fino a dentro le case**/appartamenti delle utenze.

L'architettura è considerata un modello per quanto riguarda le connessioni Internet, per diversi motivi:

- utilizza un mezzo trasmissivo (la fibra ottica) che **soffre molto lievemente di dispersione**, consentendo quindi di coprire lunghe distanze senza bisogno di rigenerare il segnale;
- supporta **velocità di trasmissione molto alte** e **latenze molto bassa** (velocità della luce);
- può funzionare in modo passivo, rimuovendo quindi la necessità di alimentare apparati in strada (vedi [Cos'è e come funziona la GPON]({{< relref "cose-e-come-funziona-la-gpon.md" >}})).

{{% warn %}}
La sigla **FTTB** (*Fiber To The Building*) indica una "variante" della FTTH che prevede di terminare la fibra ottica presso un unico apparato attivo presso l'edificio in cui si trovano i clienti finali. È poco usata in Italia.
{{% /warn %}}

In Italia, le due infrastrutture FTTH principali sono quelle di **Open Fiber** e **Flash Fiber**, con la stima di raggiungere 270 città entro il 2023. Esistono anche molti operatori locali che realizzano reti in fibra ottica, soprattutto con target aziendale.

{{% info %}}
**Vedi anche**:

- Cos'è la VDSL
- Cos'è e come funziona la GPON
- Cosa significano VULA, SLU e NGA
- Cos'è la diafonia
- Cos'è Open Fiber
- Cos'è Flash Fiber
{{% /info %}}
