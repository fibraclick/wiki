---
title: Cosa significano FTTC, FTTS, FTTE, FTTH e FWA
slug: architetture
date: 2019-03-22
lastmod: 2021-10-05T21:30:00+02:00
authors: [Matteo]
description: Le sigle indicano diversi tipi di architetture di rete, in particolare in base all'estensione della tratta in fibra ottica della connessione.
categories: [Definizioni, FTTC, FTTH, FWA]
image: /social/architetture.jpg
---

Le sigle **FTTC**, **FTTS**, **FTTE**, **FTTH**, **FWA** sono acronimi che indicano diverse architetture di rete. I primi quattro sono a volte accomunati dal più generico acronimo FTTx, che sta ad indicare tutte le architetture che prevedono l'uso della fibra ottica.

In sintesi, gli acronimi significano:

- **FTTC** = **Fiber To The Cabinet** (fibra fino all'armadio, o "fibra mista rame" secondo la nomenclatura AGCOM)
- **FTTS** = **Fiber To The Street** (equivalente a FTTC)
- **FTTE** = **Fiber To The Exchange** (fibra ottica fino alla centrale, accesso di tipo "rame")
- **FTTH** = **Fiber To The Home** (fibra ottica fino in casa, accesso di tipo "fibra")
- **FWA** = **Fixed Wireless Access** (accesso wireless)

I paragrafi che seguono approfondiscono singolarmente le architetture.

{{< toc >}}

{{< fig src="/images/architetture.jpg" caption="Architetture di rete. Fonte: TIM" alt="Schema delle architetture di rete TIM: ADSL, FTTC, FTTB e FTTH" >}}

## FTTC (Fiber To The Cabinet)

In un'architettura di rete FTTC, **la fibra ottica termina presso un armadio ripartilinea** (ARL), posizionato in media a poche centinaia di metri dalle abitazioni. L'ARL viene spesso chiamato semplicemente *armadio* o *cabinet*, e in Italia è lo stesso utilizzato per la rete telefonica e l'ADSL.

Dall'armadio partono **centinaia di doppini** (coppie di cavi intrecciati), che collegano le abitazioni finali dei clienti. La tratta tra la centrale e l'armadio si definisce **tratta primaria**, mentre quella tra l'armadio e le abitazioni è la **tratta secondaria**.[^1]

[^1]: *Notiziario tecnico Telecom Italia n. 1 / 2004*, pagina 78 http://www.claudiocancelli.it/tutorial/rete_di_accesso_di_ti.pdf

{{< fig src="/images/architetture-fttc.png" caption="Architettura di rete FTTC/VDSL2" >}}

{{< green >}}
Un armadio può collegare **fino a 1200 linee**, e la **distanza** tra armadio e abitazioni è nella maggior parte dei casi **inferiore ai 500 metri**. In FTTC la distanza conta molto, perché ad alte frequenze il segnale elettrico si degrada rapidamente con il crescere della distanza, riducendo le prestazioni.
{{< /green >}}

In corrispondenza dell'armadio deve essere effettuata la conversione del segnale da ottico a elettrico. Questa avviene attraverso un **ONU** (*Optical Network Unit*) con l'ausilio di un **DSLAM** (*Digital Subscriber Line Access Multiplexer*). Si tratta di un apparato attivo, cioè che richiede alimentazione, e nel caso di TIM è molto spesso inserito in una scatola installata sopra l'armadio (il cosiddetto [sopralzo](http://www.composititalia.it/it/prodotti/armadi-per-fibra-ottica-msan-sopralzo.html)).[^2]

[^2]: *Notiziario tecnico Telecom Italia n. 2 / 2012*, pagine 58 e 117 https://www.gruppotim.it/content/dam/telecomitalia/it/archivio/documenti/Innovazione/MnisitoNotiziario/archivio/numeri%20vecchi/2-2012.pdf

{{< fig src="/images/fttc-tim1.jpg" caption="Armadio TIM (a sinistra) con sopralzo ONU-DSLAM (sopra). A destra, la colonnina di alimentazione contenente un trasformatore e un contatore Enel." alt="A sinistra, un armadio ripartilinea TIM con sopra una scatola con il tetto rosso, a destra, una colonnina stretta e alta con il tetto rosso." >}}

#### Perché sfruttare la FTTC
Il vantaggio principale della FTTC è che permette di ridurre la lunghezza della tratta secondaria in rame. Le tecnologie xDSL infatti funzionano meglio su brevi distanze e permettono in combinazione con le alte frequenze di **raggiungere anche 100 o 200 Mbps in download** (VDSL2).[^4]

[^4]: *G.993.2 : Very high speed digital subscriber line transceivers 2 (VDSL2)*, tabella 6-1 https://www.itu.int/rec/T-REC-G.993.2

{{< green >}}
Si noti che **l'architettura FTTC non implica nessuna tecnologia specifica**. In altre parole, la FTTC può essere potenzialmente utilizzata per erogare anche l'ADSL. In Italia si usa quasi esclusivamente per la VDSL2.
{{< /green >}}

{{< info >}}
Vedi anche [Cos'è la VDSL]({{< relref "/posts/vdsl.md" >}}).
{{< /info >}}

La FTTC è una soluzione frequentemente adottata nei Paesi che hanno una rete in rame consolidata, perché permette di ottenere prestazioni generalmente buone con costi di realizzazione bassi. Permette inoltre di coprire rapidamente molte abitazioni.

{{< green >}}
###### La tecnologia G.fast
La tecnologia **G.fast** consente in condizioni ottimali di raggiungere anche 1000 Mbps in modalità TDD (significa che la banda è "condivisa e bilanciata" tra download e upload).

In questo caso l'architettura di riferimento non si chiama FTTC ma **FTTDP** (*Fiber To The Distribution Point*), per esplicitare il fatto che il punto di raccordo tra fibra ottica e rame è flessibile e deve necessariamente essere vicino alle abitazioni.

Per approfondimenti, fare riferimento a [[A]](https://www.telecomitalia.com/tit/it/notiziariotecnico/edizioni-2016/n-2-2016/capitolo-2/approfondimenti-1.html), [[B]](https://www.telecomitalia.com/content/dam/telecomitalia/it/archivio/documenti/Innovazione/MnisitoNotiziario/2016/2-2016/Notiziario-Tecnico-2-2016.pdf) e [[C]](https://forum.fibra.click/d/1392-sperimentazione-g-fast-tim/18).
{{< /green >}}

#### Perché la FTTC è criticata
La FTTC sfrutta come tratta secondaria la rete in rame esistente, talvolta posata decine di anni fa. Di conseguenza, il **degrado del rame** spesso influisce anche in modo pesante sulla qualità della linea fibra mista rame.

Inoltre, l'uso di alte frequenze genera tra i cavi delle interferenze, che non sono più trascurabili come avveniva per l'ADSL. Il fenomeno della **diafonia** può infatti ridurre la velocità della connessione anche del 50%, in base al numero di linee VDSL interferenti.

{{< info >}}
Vedi anche [Cos'è il vectoring]({{< relref "/posts/vectoring.md" >}}), la tecnologia che cura la diafonia.
{{< /info >}}

Infine, in molti casi la distanza dall'armadio è superiore a 500 metri (o addirittura a un chilometro), con la conseguenza di abbassare notevolmente la velocità ottenibile. TIM stima che le linee lunghe siano circa 3,3 milioni.[^14]

[^14]: https://www.wholesale.telecomitalia.com/it/catalogo/-/catalogo_aggregator/article/107983114?p_r_p_564233524_categoryId=109100754&p_r_p_564233524_activePortletId=noportlet

#### Diffusione in Italia

In Italia, l'architettura FTTC è prevalente in confronto a FTTH e ADSL, principalmente per gli investimenti di TIM avviati nel 2012. Si stima che la copertura in FTTC al 2021 riguardi **quasi il 90% della popolazione**, ma solo il 55% riesce ad ottenere una velocità di 100 Mbps o superiore.[^5][^6]

[^5]: https://maps.agcom.it/
[^6]: https://rete.gruppotim.it/it/numeri/italia/2020/fibra

{{< info >}}
Per approfondire come gli operatori accedono alla rete TIM e la rivendono (con tutti i vantaggi e gli svantaggi), consulta la pagina [Cosa significano VULA, SLU e NGA]({{< relref "/posts/vula-slu-nga.md" >}}).
{{< /info >}}

## FTTS (Fiber To The Street)

La sigla **FTTS** (*Fiber To The Street*) è [equivalente a FTTC](https://www.fastweb.it/adsl-fibra-ottica/rete-fibra-ottica/). In Italia è utilizzata sostanzialmente solo da Fastweb per indicare la propria infrastruttura FTTC SLU.

## FTTE (Fiber To The Exchange)

Con **FTTE** (*Fiber To The Exchange*) si intende un'architettura in cui la fibra ottica arriva fino alla centrale dell'operatore.

È quasi sempre il caso dell'ADSL, anche se il termine non è molto usato in quel contesto.

Si parla di FTTE soprattutto in caso di linea telefonica su **rete rigida**, ossia una linea collegata **direttamente alla centrale** senza passare da un armadio ripartilinea.[^11]

In questo caso la VDSL **viene erogata dalla centrale** e non dall'armadio su strada, con prestazioni spesso inferiori rispetto alla FTTC per via della più probabile elevata distanza tra il DSLAM e le abitazioni.

[^11]: *Notiziario tecnico Telecom Italia n. 1 / 2004*, pagina 76 http://www.claudiocancelli.it/tutorial/rete_di_accesso_di_ti.pdf

{{< fig src="/images/architetture-ftte.png" caption="Architettura di rete FTTE con erogazione da centrale" >}}

## FTTH (Fiber To The Home)

FTTH è l'architettura che prevede di portare la **fibra ottica fino a dentro le case**/appartamenti delle utenze.

L'architettura è considerata un modello per quanto riguarda le connessioni Internet, per diversi motivi:

- utilizza un mezzo trasmissivo (la fibra ottica) che **soffre molto lievemente di dispersione**, consentendo quindi di coprire lunghe distanze senza bisogno di rigenerare il segnale;
- supporta **velocità di trasmissione molto alte** (anche superiori a 1 Gbps) e **latenze generalmente molto basse**;
- può funzionare in modo passivo, cioè rimuovendo la necessità di alimentare apparati in strada come nel caso della FTTC.[^12]

[^12]: *Notiziario tecnico Telecom Italia n. 2 / 2012*, pagina 64 https://www.gruppotim.it/content/dam/telecomitalia/it/archivio/documenti/Innovazione/MnisitoNotiziario/archivio/numeri%20vecchi/2-2012.pdf

{{< info >}}
Per approfondire il funzionamento della tecnologia utilizzata in Italia per realizzare reti FTTH, leggi: [Cos'è e come funziona GPON]({{< relref "/posts/gpon.md" >}}).
{{< /info >}}

{{< fig src="/images/architetture-ftth.png" caption="Schema generale di una rete FTTH. Le abitazioni sono collegate in fibra ottica" >}}

{{< green >}}
###### FTTB

La sigla **FTTB** (*Fiber To The Building*) indica una "variante" della FTTH che prevede di terminare la fibra ottica presso un unico apparato attivo situato nell'edificio in cui si trovano i clienti finali. È poco usata in Italia.
{{< /green >}}

{{< fig src="/images/roe-ff1.jpg" caption="Un ROE Flash Fiber, elemento passivo (non alimentato) delle reti FTTH-GPON. Viene installato nel locale contatori dell'edificio da cablare, oppure su una parete esterna, e ha il ruolo o di \"raccordo\" o di *splitting* della fibra ottica. Grazie a Edoardo C. per la foto." alt="Scatola di un ROE con le etichette Flash Fiber, TIM e Fastweb" vertical="true" >}}

#### Diffusione in Italia

In Italia, le infrastrutture FTTH principali sono quelle di **Open Fiber**, **Flash Fiber** e **FiberCop** (TIM), con la stima di raggiungere una larghissima parte della popolazione entro il 2026. Gli operatori nazionali solitamente offrono connessioni FTTH in un solo taglio, e cioè **1 Gbps in download** e upload tra 100 e 300 Mbps.

Esistono anche molti operatori locali che realizzano e vendono reti in fibra ottica (sia per privati che aziende).

{{< info >}}
Per approfondire:
- [Cos'è e cosa fa Open Fiber]({{< relref "/posts/openfiber.md" >}})
- [Cos'è e cosa fa FiberCop]({{< relref "/posts/fibercop.md" >}})
- [Cos'è e cosa fa Flash Fiber]({{< relref "/posts/flashfiber.md" >}})
{{< /info >}}

## FWA (Fixed Wireless Access)

**FWA** indica una connessione per l'accesso a Internet ottenuta tramite tecnologie wireless (senza fili).

Una classificazione grossolana delle connessioni FWA può essere fatta in base alle frequenze che vengono utilizzate, dalle quali dipende la qualità del servizio:

- **Frequenze 4G**: in questo caso il servizio FWA è ottenuto tramite una normale SIM telefonica abilitata al consumo di dati, e la qualità della connessione è quindi la stessa della rete mobile 3G/4G a cui si affida. È il caso dei servizi TIM FWA, Vodafone FWA, ecc., che spesso non richiedono nemmeno l'installazione di un'antenna esterna. È anche il caso delle FWA Linkem e Tiscali, che hanno però realizzato una propria rete 4G sul territorio.
- **Frequenze FWA libere**: l'operatore sfrutta delle frequenze libere non licenziate (come quelle del Wi-Fi) per diffondere il segnale da delle stazioni radio base distanti al massimo qualche chilometro dalle abitazioni da coprire. L'installazione richiede un'antenna esterna e la velocità raggiungibile è in genere di 30 Mbps, ma può anche avvicinarsi a 100 Mbps. Il principale svantaggio è che le frequenze libere non sono dedicate a un singolo servizio e possono quindi essere occupate da più operatori, degradando la qualità e la stabilità della connessione. Questo tipo di servizio è offerto da moltissimi operatori locali (WISP) e da EOLO (tecnologia EOLOwave a 30 Mbps).
- **Frequenze FWA licenziate**: le frequenze utilizzate sono ad uso esclusivo di un operatore, e con l'uso della giusta tecnologia consentono di ottenere prestazioni elevate e costanti. Rientrano in questa categoria il servizio EOLO a 100 Mbps (tecnologia EOLOwave G), FWA Open Fiber a 100 Mbps e Fastweb NeXXt a 1 Gbps (5G FWA).

{{< footer >}}
