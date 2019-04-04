---
title: Cosa significano FTTC, FTTS, FTTE, FTTH e FWA
date: 2019-03-22
lastmod: 2019-03-28
authors: [Matteo]
description: Il significato in dettaglio delle sigle FTTC, FTTE, FTTH, FTTS e FWA, usate per indicare diversi tipi di architetture di rete
categories: [Definizioni, FTTC, FTTH, FWA]
---

Le sigle **FTTC**, **FTTS**, **FTTE**, **FTTH**, **FWA** sono acronimi che indicano diverse architetture di rete. I primi quattro sono a volte accomunati dal più generico acronimo FTTx, che sta ad indicare tutte le architetture che prevedono l'uso della fibra ottica.

In sintesi, gli acronimi significano:

- **FTTC** = **Fiber To The Cabinet** (fibra fino all'armadio, o "fibra mista rame" secondo la nomenclatura Agcom)
- **FTTS** = **Fiber To The Street** (equivalente a FTTC)
- **FTTE** = **Fiber To The Exchange** (fibra ottica fino alla centrale, accesso in "rame")
- **FTTH** = **Fiber To The Home** (fibra ottica fino in casa, accesso in "fibra")
- **FWA** = **Fixed Wireless Access** (accesso wireless)

I paragrafi che seguono approfondiscono singolarmente le architetture.

{{< toc >}}

{{% fig src="/images/architetture.jpg" caption="Architetture di rete TIM" alt="Schema delle architetture di rete TIM: ADSL, FTTC, FTTB e FTTH" %}}

## FTTC (Fiber To The Cabinet)

In un'architettura di rete FTTC, la fibra ottica arriva fino al cosiddetto *cabinet*, in italiano *armadio* (più precisamente *armadio ripartilinea*, **ARL**). In Italia l'armadio è lo stesso utilizzato per la rete telefonica e l'ADSL. Si trova su strada e ha lo scopo di connettere la tratta primaria (quella tra centrale e armadio) e la tratta secondaria (tra armadio e abitazioni).

Nel caso di reti telefoniche in rame, dall'armadio partono centinaia di coppie di cavi intrecciati (i doppini), una per ciascuna linea collegata.[^1]

[^1]: pagina 5 http://www.tlc.dii.univpm.it/blog/wp-content/uploads/2013/10/Rete_di_Accesso_TI.pdf

{{% green %}}
Un armadio può collegare **fino a 1200 linee**, e la **distanza** tra armadio e abitazioni è nella maggior parte dei casi **inferiore ai 500 metri**.
{{% /green %}}

In corrispondenza dell'armadio deve essere effettuata la conversione del segnale da ottico a elettrico. Questo avviene attraverso un **ONU** (*Optical Network Unit*) con l'ausilio di un **DSLAM** (*Digital Subscriber Line Access Multiplexer*).[^2] Si tratta di apparati attivi, cioè che richiedono alimentazione, e nel caso di TIM sono molto spesso inseriti in una scatola installata sopra l'armadio (il cosiddetto [sopralzo](http://www.composititalia.it/it/prodotti/armadi-per-fibra-ottica-msan-sopralzo.html)).[^3]

[^2]: pagina 3 https://www.telecomitalia.com/content/dam/telecomitalia/it/archivio/documenti/Innovazione/NotiziarioTecnico/2012/n2-2012/capitolo6.pdf
[^3]: pagina 2 https://www.telecomitalia.com/content/dam/telecomitalia/it/archivio/documenti/Innovazione/NotiziarioTecnico/2012/n2-2012/capitolo10.pdf

#### Perché adottare la FTTC
Il vantaggio principale della FTTC è che permette di ridurre la lunghezza della tratta secondaria in rame. Le tecnologie DSL infatti funzionano meglio su brevi distanze e permettono in combinazione con le alte frequenze di **raggiungere anche 100 o 200 Mbps in download** (VDSL2).[^4]

[^4]: Tabella 6-1 https://www.itu.int/rec/T-REC-G.993.2

{{% green %}}
Si noti che **l'architettura FTTC non implica nessuna tecnologia specifica**. In altre parole, la FTTC può essere potenzialmente utilizzata per erogare anche l'ADSL. In Italia si usa quasi esclusivamente per la VDSL2.
{{% /green %}}

{{% info %}}
Vedi anche [Cos'è la VDSL]({{< relref "vdsl.md" >}}).
{{% /info %}}

La FTTC è una soluzione frequentemente adottata nei Paesi che hanno una rete in rame consolidata, perché permette di ottenere prestazioni generalmente buone con costi di realizzazione bassi. Permette inoltre di coprire rapidamente molte abitazioni.

{{% green %}}
###### La tecnologia G.fast
La tecnologia **G.fast** consente in condizioni ottimali di raggiungere anche 1000 Mbps in modalità TDD (significa che la banda è "condivisa e bilanciata" tra download e upload).

In questo caso l'architettura di riferimento non si chiama FTTC ma **FTTDP** (*Fiber To The Distribution Point*), per esplicitare il fatto che il punto di raccordo tra fibra ottica e rame è flessibile e deve necessariamente essere vicino alle abitazioni.

Per approfondimenti, fare riferimento a [[A]](https://www.telecomitalia.com/tit/it/notiziariotecnico/edizioni-2016/n-2-2016/capitolo-2/approfondimenti-1.html), [[B]](https://www.telecomitalia.com/content/dam/telecomitalia/it/archivio/documenti/Innovazione/MnisitoNotiziario/2016/2-2016/Notiziario-Tecnico-2-2016.pdf) e [[C]](https://forum.fibra.click/d/1392-sperimentazione-g-fast-tim/18).
{{% /green %}}

#### Perché la FTTC è criticata
La FTTC sfrutta come tratta secondaria la rete in rame esistente, talvolta posata decine di anni fa. Di conseguenza, il degrado del rame spesso influisce anche in modo pesante sulla qualità della linea fibra mista rame.

Inoltre, l'uso di alte frequenze genera tra i cavi in rame interferenze che non sono trascurabili come avveniva per l'ADSL. Il fenomeno della diafonia riduce infatti la velocità fino al 50%, in base al numero di linee VDSL interferenti.

{{% info %}}
Vedi anche [Cos'è la diafonia]({{< relref "diafonia.md" >}}).
{{% /info %}}

Infine, in molti casi la distanza dall'armadio è superiore a 500 metri (o addirittura a un chilometro), con la conseguenza di abbassare notevolmente la velocità ottenibile. TIM stima che le linee lunghe sono circa 3,3 milioni.[^14]

[^14]: https://www.wholesale.telecomitalia.com/it/catalogo/-/catalogo_aggregator/article/107983114?p_r_p_564233524_categoryId=109100754&p_r_p_564233524_activePortletId=noportlet

#### Diffusione in Italia

In Italia, l'architettura FTTC è prevalente in confronto a FTTH e ADSL, principalmente per merito degli investimenti messi in atto da TIM a partire dal 2012. Si stima che la copertura in FTTC a fine 2018 riguardi **circa l'80% della popolazione**, a seconda della fonte.[^5][^6][^7]

[^5]: https://maps.agcom.it/
[^6]: https://rete.gruppotim.it/it/numeri/italia/2018/fibra
[^7]: http://publications.europa.eu/webpub/eca/special-reports/broadband-12-2018/en/

A marzo 2019 TIM dichiara di coprire 2714 comuni.[^8] Gli altri operatori telefonici (nazionali e locali) possono rivendere il servizio FTTC di TIM in diverse modalità, in particolare NGA, VULA e SLU.[^9][^10]

[^8]: https://www.tim.it/verifica-copertura
[^9]: https://www.wholesale.telecomitalia.com/it/catalogo/-/catalogo_aggregator/article/1027774?_2_WAR_nwscatalogoportlet_redirect=%2fit%2fcatalogo%2f-%2fcatalogo_aggregator%2farticle%2f31135&_2_WAR_nwscatalogoportlet_resourcePrimKey2=1027774&p_r_p_564233524_activePortletId=noportlet
[^10]: https://www.wholesale.telecomitalia.com/it/catalogo/-/catalogo_aggregator/article/31057

{{% info %}}
Per approfondire come gli operatori accedono alla rete TIM e la rivendono (con tutti i vantaggi e gli svantaggi), consulta la pagina [Cosa significano VULA, SLU e NGA]({{< relref "vula-slu-nga.md" >}}).
{{% /info %}}

## FTTS (Fiber To The Street)

La sigla **FTTS** (*Fiber To The Street*) è [equivalente a FTTC](https://www.fastweb.it/adsl-fibra-ottica/rete-fibra-ottica/). In Italia è utilizzata sostanzialmente solo da Fastweb per indicare la propria infrastruttura FTTC SLU.

## FTTE (Fiber To The Exchange)

Con **FTTE** (*Fiber To The Exchange*) si intende un'architettura in cui la fibra ottica arriva fino alla centrale dell'operatore.

È quasi sempre il caso dell'ADSL, anche se il termine non è molto usato in quel contesto.

Si parla di FTTE soprattutto in caso di linea telefonica su **rete rigida**, ossia una linea collegata **direttamente alla centrale** senza passare da un armadio ripartilinea.[^11]

In questo caso la "fibra" (precisamente VDSL) **viene erogata dalla centrale** e non dall'armadio su strada. In caso di FTTE le prestazioni sono spesso scarse per via della più probabile elevata distanza tra il DSLAM e le abitazioni.

[^11]: pagina 3 http://www.tlc.dii.univpm.it/blog/wp-content/uploads/2013/10/Rete_di_Accesso_TI.pdf

## FTTH (Fiber To The Home)

FTTH è l'architettura che prevede di portare la **fibra ottica fino a dentro le case**/appartamenti delle utenze.

L'architettura è considerata un modello per quanto riguarda le connessioni Internet, per diversi motivi:

- utilizza un mezzo trasmissivo (la fibra ottica) che **soffre molto lievemente di dispersione**, consentendo quindi di coprire lunghe distanze senza bisogno di rigenerare il segnale;
- supporta **velocità di trasmissione molto alte** (1+ Gbps) e **latenze molto basse** (velocità della luce);
- può funzionare in modo passivo, rimuovendo quindi la necessità di alimentare apparati in strada (approfondimento in [Cos'è e come funziona la GPON]({{< relref "gpon.md" >}})).[^12]

[^12]: pagina 9  https://www.telecomitalia.com/content/dam/telecomitalia/it/archivio/documenti/Innovazione/NotiziarioTecnico/2012/n2-2012/capitolo6.pdf

{{% green %}}
###### FTTB

La sigla **FTTB** (*Fiber To The Building*) indica una "variante" della FTTH che prevede di terminare la fibra ottica presso un unico apparato attivo situato nell'edificio in cui si trovano i clienti finali. È poco usata in Italia.
{{% /green %}}

#### Diffusione in Italia

In Italia, le due infrastrutture FTTH principali sono quelle di **Open Fiber** e **Flash Fiber**, con la stima di raggiungere **270 città entro il 2023**.[^13] Gli operatori nazionali solitamente offrono connessioni FTTH in un solo taglio, e cioè **download da 1 Gbps** e upload che varia da 100 a 300 Mbps.

[^13]: https://openfiber.it/it/fibra-ottica/chi-siamo/obiettivi

Esistono anche molti operatori locali che realizzano e vendono reti in fibra ottica (sia per privati che aziende), ad esempio Isiline, Intred, Unidata, ecc.

## FWA (Fixed Wireless Access)

**FWA** indica una connessione per l'accesso a Internet ottenuta tramite tecnologie wireless-senza fili.

Alcuni esempi di operatori FWA e relative tecnologie sono:

- **Eolo** con la tecnologia proprietaria EOLOwave. Nella versione "G" permette di raggiungere fino a 100 Mbps in download
- **Linkem** in LTE (4G)
- **Tiscali** in LTE (4G)

I problemi principali delle connessioni wireless sono la latenza e le (talvolta) scarse prestazioni dei collegamenti radio condivisi.

Con la standardizzazione del 5G, le tecnologie wireless stanno iniziando a diventare una soluzione più praticabile per risolvere situazioni di divario digitale, grazie alle notevoli prestazioni offerte dal 5G in termini di latenza e throughput (velocità).

{{% info %}}
###### Per approfondire i temi di questa pagina:

- [Cos'è la VDSL]({{< relref "vdsl.md" >}})
- [Cos'è e come funziona la GPON]({{< relref "gpon.md" >}})
- [Cosa significano VULA, SLU e NGA]({{< relref "vula-slu-nga.md" >}})
- [Cos'è la diafonia]({{< relref "diafonia.md" >}})
- [Cos'è e cosa fa Open Fiber]({{< relref "openfiber.md" >}})
- [Cos'è e cosa fa Flash Fiber]({{< relref "flashfiber.md" >}})
{{% /info %}}

{{< footer >}}
