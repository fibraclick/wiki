---
title: Cosa significano FTTC, FTTH e FTTS
date: 2019-03-22
lastmod: 2019-03-22
authors: [Matteo]
description: Il significato delle sigle FTTC, FTTH e FTTS, usate per indicare diversi tipi di architetture di rete
categories: [Definizioni, FTTC, FTTH]
---

Le sigle **FTTC** e **FTTH** sono acronimi che indicano diverse architetture di rete. Sono a volte accomunate dal più generico acronimo FTTx, che sta ad indicare tutte le architetture che prevedono l'uso della fibra ottica.

- FTTC è acronimo di *Fiber To The Cabinet*, talvolta detta "fibra mista rame"
- FTTH è acronimo di *Fiber To The Home*, semplicemente "fibra"

{{% fig src="/images/architetture.jpg" caption="Architetture di rete TIM. Premi l'immagine per ingrandire" %}}

## FTTC (Fiber To The Cabinet)

In un'architettura di rete FTTC, la fibra ottica arriva fino al cosiddetto *cabinet*, in italiano *armadio* (anche *armadio ripartilinea*, **ARL**), solitamente lo stesso utilizzato per la rete telefonica e l'ADSL. L'armadio si trova su strada e ha lo scopo di connettere la tratta primaria (quella tra centrale e armadio) e la tratta secondaria (tra armadio e abitazioni).

Nel caso di reti telefoniche in rame, dall'armadio partono centinaia di coppie di cavi intrecciati (i doppini), una per ciascuna linea collegata.

{{% green %}}
Un armadio può collegare **anche 1000 linee**, e la **distanza** tra armadio e abitazioni è nella maggior parte dei casi **inferiore ai 500 metri**.
{{% /green %}}

In corrispondenza dell'armadio deve essere effettuata la conversione del segnale da ottico a elettrico. Questo avviene attraverso un **ONU** (*Optical Network Unit*) con l'ausilio di un **DSLAM** (*Digital Subscriber Line Access Multiplexer*). Si tratta di apparati attivi, cioè che richiedono alimentazione, e nel caso di TIM sono molto spesso inseriti in una scatola installata sopra l'armadio (il cosiddetto [sopralzo](http://www.composititalia.it/it/prodotti/armadi-per-fibra-ottica-msan-sopralzo.html)).

#### Perché adottare la FTTC
Il vantaggio principale della FTTC è che permette di ridurre la lunghezza della tratta secondaria in rame. Le tecnologie DSL infatti funzionano meglio su brevi distanze e permettono in combinazione con le alte frequenze di **raggiungere anche 100 o 200 Mbps in download** (VDSL2).

{{% info %}}
Vedi anche [Cos'è la VDSL]({{< relref "cose-la-vdsl.md" >}}).
{{% /info %}}

La FTTC è una soluzione frequentemente adottata nei Paesi che hanno una rete in rame consolidata, perché permette di ottenere prestazioni generalmente buone con costi di realizzazione bassi. Permette inoltre di coprire rapidamente molte abitazioni.

{{% green %}}
La tecnologia **G.fast** consente in condizioni ottimali di raggiungere anche 1000 Mbps in modalità TDD (significa che la banda è "condivisa e bilanciata" tra download e upload).

In questo caso l'architettura di riferimento non si chiama FTTC ma **FTTDP** (*Fiber To The Distribution Point*), per esplicitare il fatto che il punto di raccordo tra fibra ottica e rame è flessibile e deve necessariamente essere vicino alle abitazioni.

Per approfondimenti, fare riferimento a [[1](https://www.telecomitalia.com/tit/it/notiziariotecnico/edizioni-2016/n-2-2016/capitolo-2/approfondimenti-1.html)], [[2](https://www.telecomitalia.com/content/dam/telecomitalia/it/archivio/documenti/Innovazione/MnisitoNotiziario/2016/2-2016/Notiziario-Tecnico-2-2016.pdf)] e [[3](https://forum.fibra.click/d/1392-sperimentazione-g-fast-tim/18)].
{{% /green %}}

#### Perché la FTTC è criticata
La FTTC sfrutta come tratta secondaria la rete in rame esistente, talvolta posata decine di anni fa. Di conseguenza, il degrado del rame spesso influisce anche in modo pesante sulla qualità della linea fibra mista rame.

Inoltre, l'uso di alte frequenze genera tra i cavi in rame interferenze che non sono trascurabili come avveniva per l'ADSL. Il fenomeno della diafonia riduce infatti la velocità fino al 50%, in base al numero di linee VDSL interferenti.

{{% info %}}
Vedi anche [Cos'è la diafonia]({{< relref "cose-la-diafonia.md" >}}).
{{% /info %}}

Infine, in molti casi la distanza dall'armadio è superiore a 500 metri (o addirittura a un chilometro), con la conseguenza di abbassare notevolmente la velocità ottenibile.

#### Diffusione in Italia

In Italia, l'architettura FTTC è prevalente in confronto a FTTH e ADSL, principalmente per merito degli investimenti messi in atto da TIM a partire dal 2012. Si stima che la copertura in FTTC a fine 2018 riguardi **tra il 60 e l'80% della popolazione**, a seconda della fonte.

A febbraio 2019 TIM dichiara di coprire 2701 comuni. Gli altri operatori telefonici (nazionali e locali) possono rivendere il servizio FTTC di TIM in diverse modalità, in particolare NGA, VULA e SLU.

{{% info %}}
Per approfondire come gli operatori accedono e rivendono la rete TIM (con tutti vantaggi e gli svantaggi), consulta la pagina [Cosa significano VULA, SLU e NGA]({{< relref "cosa-significano-vula-slu-nga.md" >}}).
{{% /info %}}

{{% green %}}
La sigla **FTTS** (*Fiber To The Street*) è equivalente a FTTC. In Italia è utilizzata sostanzialmente solo da Fastweb per indicare la propria infrastruttura SLU.
{{% /green %}}



## FTTH (Fiber To The Home)

FTTH è l'architettura che prevede di portare la **fibra ottica fino a dentro le case**/appartamenti delle utenze.

L'architettura è considerata un modello per quanto riguarda le connessioni Internet, per diversi motivi:

- utilizza un mezzo trasmissivo (la fibra ottica) che **soffre molto lievemente di dispersione**, consentendo quindi di coprire lunghe distanze senza bisogno di rigenerare il segnale;
- supporta **velocità di trasmissione molto alte** e **latenze molto basse** (velocità della luce);
- può funzionare in modo passivo, rimuovendo quindi la necessità di alimentare apparati in strada (approfondimento in [Cos'è e come funziona la GPON]({{< relref "cose-e-come-funziona-la-gpon.md" >}})).

{{% green %}}
La sigla **FTTB** (*Fiber To The Building*) indica una "variante" della FTTH che prevede di terminare la fibra ottica presso un unico apparato attivo presso l'edificio in cui si trovano i clienti finali. È poco usata in Italia.
{{% /green %}}

#### Diffusione in Italia

In Italia, le due infrastrutture FTTH principali sono quelle di **Open Fiber** e **Flash Fiber**, con la stima di raggiungere 270 città entro il 2023.

Esistono anche molti operatori locali che realizzano e vendono reti in fibra ottica (sia per privati che aziende), tra cui ad esempio Isiline, Intred, Unidata.

{{% info %}}
**Per approfondire i temi di questa pagina:**

- Cos'è la VDSL
- Cos'è e come funziona la GPON
- Cosa significano VULA, SLU e NGA
- Cos'è la diafonia
- Cos'è Open Fiber
- Cos'è Flash Fiber
{{% /info %}}
