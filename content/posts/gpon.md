---
title: "Cos'è e come funziona GPON"
slug: gpon
date: 2019-04-04
lastmod: 2021-03-01T11:30:00+01:00
authors: [Matteo]
description: Come funziona e quali sono gli elementi di una rete GPON, una tecnologia che permette di realizzare reti passive in fibra ottica Fiber To The Home.
categories: [Definizioni, FTTH]
image: /social/gpon.jpg
---

**GPON** (*Gigabit-capable Passive Optical Network*) è una tecnologia comunemente utilizzata per realizzare reti [**FTTH**]({{< relref "/posts/architetture.md" >}}) (*Fiber To The Home*), in cui la connessione a Internet di una abitazione avviene portando la fibra ottica fino a dentro casa.

GPON fa parte di un insieme di standard *PON*, i quali si differenziano in base alla velocità massima raggiungibile per ciascun albero ottico, una struttura spesso condivisa anche con 64 utenze (il significato di albero ottico è spiegato in dettaglio sotto).

Nel caso di GPON, **la velocità massima è di circa 2,5 Gbps in download e 1,25 Gbps in upload, condivisa però con un numero fisso di utenze**, che può arrivare fino a 128.[^standard] Ciascuna delle linee collegate avrà poi una velocità massima nominale fissata dall'operatore, ad esempio 1 Gbps in download.

{{< fig src="/images/pon.png" caption="Differenze tra gli standard PON. Fonte: Open Fiber." alt="GPON: 2,5 Gigabit in download e 1,25 Gigabit in upload. XG-PON: 10 Gigabit in download e 2,5 Gigabit in upload. XGS-PON: 10 Gigabit in download e 10 Gigabit in upload. NG-PON2: 40 Gigabit in download e 2,5 Gigabit in upload" >}}

La caratteristica fondamentale che rende GPON la soluzione più frequentemente adottata per la FTTH è il fatto che **la rete ottica è passiva**, e cioè che tra i due estremi della rete (centrale e abitazioni) non sono presenti punti alimentati. Questo è un importante vantaggio della tecnologia, perché riduce i costi e la possibilità di guasti. Se in una città di grandi dimensioni coperta in FTTC sono presenti centinaia di apparati attivi (ONU) sparsi sulle strade, in FTTH-GPON gli unici elementi che l'operatore si deve preoccupare di alimentare sono le centrali/POP.

**GPON è la tecnologia attualmente utilizzata in Italia per realizzare reti FTTH.**

{{< toc >}}

## Gli elementi di una rete ottica passiva

Una rete ottica passiva (come la GPON) è di tipo **punto-multipunto**. Il "punto" è un apparato dell'operatore (**OLT**, *Optical Line Terminal*), che spesso si trova nella centrale locale, mentre i "multipunto" sono dei dispositivi installati all'interno delle abitazioni dei clienti (**ONT** oppure *ONU*, rispettivamente *Optical Network Terminal* e *Optical Network Unit*).

Nel caso di GPON, un singolo OLT è in grado di collegare per ciascun cavo in fibra ottica in uscita **un numero di utenze che può arrivare al massimo a 128**. Questo numero determina il *fattore di splitting* (o *fattore di diramazione*, in italiano).

Un OLT può avere anche centinaia di porte[^notiziario], e ciascuna di queste realizza un **albero ottico** alla cui estremità è collegato un numero di utenze pari al fattore di splitting. **La velocità di 2,5 / 1,25 Gbps prevista da GPON è condivisa tra tutte le utenze che fanno capo allo stesso albero**.

Per questo motivo, nella pratica il fattore di splitting non è quasi mai 128 ma 64 o anche meno.[^notiziario]

{{< info >}}
Vedi la sezione *GPON in Italia* più in basso per i dettagli sui fattori di splitting usati in Italia.
{{< /info >}}

Nelle reti PON lo **splitting** della fibra ottica avviene **in modo passivo**, e cioè a livello fisico senza bisogno di apparati alimentati. I dispositivi che si occupano di effettuare lo splitting si chiamano **splitter ottici** (o *diramatori ottici*, in italiano).

{{< fig src="/images/gpon1.png" caption="Schema di una rete GPON con fattore di splitting 1:16. Ogni fibra ottica in uscita dall'OLT realizza un albero. Lo splitter divide la fibra ottica in 16 fibre, ciascuna delle quali connette un ONT." >}}

In una rete GPON ci possono essere diversi livelli di splitting, ma spesso sono due. Questi punti si possono trovare in armadi posizionati sulla strada oppure interrati o sospesi.

Per fare un esempio, Open Fiber in Italia applica due livelli di splitting, il primo presso un *PFP* (*Punto di Flessibilità Primario*) e il secondo presso un *PFS* (*Punto di Flessibilità Secondario*).[^ofglossario]

{{< green >}}
###### Come funziona uno splitter ottico?

Uno splitter ottico riceve in ingresso (lato OLT) una singola fibra ottica e **produce in uscita N segnali su N fibre ottiche** (fattore di splitting 1:N).

In direzione **downstream** (OLT -> ONT) lo splitter "copia" la luce in ingresso sulle fibre ottiche in uscita, dividendo però così la potenza della luce per N. Per questo motivo una rete GPON ha un limite massimo di estensione, che è di 20 km (tra OLT e ONT più lontano).

Da questo comportamento segue anche il fatto che **ciascun ONT riceve anche il traffico destinato agli altri ONT**. Si rende quindi necessario l'uso di tecniche di crittografia per proteggere le informazioni, che vengono scartate a livello di ONT se destinate a un altro ONT.

In direzione **upstream** (ONT -> OLT) lo splitter si occupa di **sommare i contributi di luce portati dalle N fibre ottiche**. Considerato che più ONT possono trasmettere in contemporanea, gli OLT prevedono dei meccanismi di sincronizzazione per fare in modo che la trasmissione sia coordinata e non sovrapposta.
{{< /green >}}

L'elemento GPON di interesse principale per le utenze finali è però il **ROE** (**Ripartitore Ottico di Edificio**), o in alternativa il **PTE** (**Punto di Terminazione di Edificio**). Il ROE/PTE viene solitamente installato a pochi metri dalle abitazioni: molto spesso si trova nel locale contatori dell'edificio, ma può anche essere montato su una parete esterna, oppure interrato o inserito in una chiostrina.

ROE e PTE si distinguono principalmente in base alla **presenza o meno di uno splitter** al loro interno. Infatti, mentre il ROE si occupa anche di fare lo splitting della fibra ottica, il PTE serve solo a **dare flessibilità alla rete**. All'interno di un PTE entra un numero prefissato di fibre ottiche (es. 16, provenienti da uno splitter ottico a monte), e ne escono altrettante, che andranno direttamente alle unità immobiliari (UI) dei clienti finali (tratta *verticale*).

{{< fig src="/images/gpon2.png" caption="Schema della rete FTTH GPON di Flash Fiber. I punti di splitting sono due, rispettivamente i CNO (Centro Nodale Ottico) e i ROE. Il fattore di splitting complessivo è 1:64, mentre per ciascuno splitter è 1:8." >}}

{{< fig src="/images/roe-ff5.jpg" caption="Interno di un ROE Flash Fiber con 16 fibre ottiche. Grazie a \"evilways\" per la foto" alt="Interno di un ROE Flash Fiber che mostra i cavi delle fibre ottiche" >}}

Infine, all'interno delle abitazioni sono presenti una **borchia ottica e un ONT**. Un ONT è un dispositivo alimentato, concettualmente analogo ad un modem DSL, che **riceve e decifra** (e viceversa) **il segnale ottico**, e lo converte in un segnale elettrico (tramite un'uscita Ethernet), adatto per il collegamento a un router.

Non sempre l'ONT è un dispositivo a sé stante: può anche essere incorporato all'interno di un router, oppure essere fornito come modulo **SFP**, una cartuccia metallica che va inserita in un router o in un convertitore.

{{< fig src="/images/cavo-fibra.jpg" caption="Cavo di fibra ottica per FTTH con connettore SC" vertical="true" >}}

## GPON in Italia

In Italia le infrastrutture FTTH a livello nazionale sono quelle di **Open Fiber**, **Flash Fiber** (TIM+Fastweb) e **TIM/FiberCop**, tutte realizzate con **tecnologia GPON**.

### Open Fiber

Nel caso di Open Fiber, le infrastrutture hanno **caratteristiche diverse a seconda che siano state realizzate con fondi privati o pubblici**. Nel primo caso si tratta delle circa 270 grandi città che Open Fiber ha intenzione di cablare entro il 2023, mentre nel secondo si tratta delle aree bianche cablate tramite il [piano BUL]({{< relref "/posts/piano-aree-bianche.md" >}}).

Nelle aree a **investimento privato** l'infrastruttura prevede dei **POP** (*Point Of Presence*) posizionati sul territorio, **nei quali sono presenti gli OLT**.

**Il fattore di splitting utilizzato è 1:64**, e lo splitting avviene in due diversi livelli, tramite i **PFP** (**Punto di Flessibilità Primario**) e i **PFS** (**Punto di Flessibilità Secondario**).[^ofglossario] Questi punti possono contenere fino a 20 splitter e non devono necessariamente trovarsi in prossimità degli armadi di TIM.

Infine, nei pressi delle abitazioni Open Fiber installa dei **PTE**, chiamati anche **PTA** (*Punto di Terminazione Arretrato*) se sono interrati.

{{< fig src="/images/gpon-of.jpg" caption="Infrastruttura di rete Open Fiber (cluster A). Fonte: Open Fiber" >}}

{{< fig src="/images/roe-of1.jpg" caption="PTE Open Fiber. Grazie a Edoardo M. per la foto" alt="Scatola di un PTE con l'etichetta Open Fiber" vertical="true" >}}

{{< green >}}
###### La rete Metroweb

Quando **Open Fiber è nata, nel 2016, ha incorporato la rete Metroweb** realizzata nel decennio precedente a Milano, Torino, Bologna e Genova. Anche la rete Metroweb prevede due livelli di splitting, ma uno dei due avviene direttamente all'edificio (nei ROE), come nel caso di Flash Fiber.
{{< /green >}}

Nelle aree a **investimento pubblico** (cluster C e D), la differenza fondamentale è che **il fattore di splitting è 1:16**, anziché 1:64. Ciò significa che ad ogni albero possono essere collegati al massimo 16 ONT, che condivideranno la banda 2,5 / 1,25 Gbps prevista da GPON. La scelta è dovuta al fatto che i bandi pubblici del piano BUL richiedono di garantire almeno 100 Mbps in download e 50 in upload per utenza, anche in caso di collegamenti contemporanei.

Come conseguenza, il livello di splitting è soltanto uno ed è effettuato nel CNO (**Centro Nodale Ottico**), collegato a un **PCN** (*Punto di Consegna Neutro*), che è l'equivalente del POP ma è quasi sempre condiviso tra più comuni.[^pcn]

La scelta di un fattore di splitting inferiore consente inoltre di avere delle **tratte OLT-ONT più lunghe**, in considerazione del fatto che ogni splitting ripartisce la potenza del segnale luminoso tra i rami dell'albero.

Nelle aree a investimento pubblico viene inoltre fatto ampio uso dei **PTA** interrati, in aggiunta ai **PTE**, soprattutto per le aree a bassa densità.

{{< fig src="/images/gpon-of-infratel.jpg" caption="Infrastruttura di rete Open Fiber nei cluster C e D (aree bianche). Fonte: Open Fiber" >}}

{{< fig src="/images/gpon-of-infratel2.jpg" caption="Infrastruttura di rete Open Fiber nei cluster C e D. Esempio con comuni multipli connessi allo stesso PCN. Fonte: Open Fiber" >}}

Gli operatori che vogliono utilizzare la rete di accesso di Open Fiber possono scegliere principalmente tre modalità[^ofservizi]:

- **l'operatore può installare i propri OLT nel POP** e fornire anche gli **ONT** ai propri clienti. In questo caso Open Fiber offre solo la "fibra spenta" in uscita dal POP verso gli ONT. Per confronto, è l'equivalente dell'*ULL* di TIM;
- **Open Fiber offre sia OLT che ONT**, e si tratta in questo caso del servizio *Open Stream*. La consegna del traffico all'operatore può avvenire tramite un apposito kit Ethernet presente nel POP, oppure in un qualsiasi altro POP di Open Fiber o dell'operatore, anche geograficamente distante. Nel primo caso è l'equivalente del *VULA* di TIM, nel secondo caso del *Bitstream NGA*;
- infine, **Open Fiber può offrire anche l'interconnessione con la rete Internet**. Questo servizio si chiama *Open Internet* e permette a un operatore di offrire connessioni a Internet senza nessun investimento in infrastrutture di rete. L'operatore (che è in un certo senso un operatore "virtuale") si affida quindi completamente a Open Fiber, che fornisce anche il router ai clienti. È simile al servizio *Easy IP NGA* di TIM.

{{< info >}}
Vedi anche [Come funziona la rete Internet]({{< relref "/posts/internet.md" >}}) e [Cos'è e cosa fa Open Fiber]({{< relref "/posts/openfiber.md" >}}).
{{< /info >}}

### Flash Fiber

L'infrastruttura Flash Fiber è particolare, perché comprende in realtà due infrastrutture parzialmente distinte, quella di TIM e quella di Fastweb.

In questo caso, gli OLT di TIM e Fastweb si trovano nelle **centrali TIM**, e **il fattore di splitting è 1:64**. I livelli di splitting sono due e avvengono rispettivamente in un **CNO** (*Centro Nodale Ottico*), posizionato indicativamente in prossimità degli armadi ripartilinea, e nei ROE. Per ciascuno dei due livelli di splitting si applica generalmente un fattore di 1:8 (8 x 8 = 64).

{{< fig src="/images/cno-ff.jpg" caption="CNO Flash Fiber inserito in un box-chiostrina. Grazie a Luca Z. per la foto" alt="Interno di una chiostrina TIM su strada, contenente il CNO" >}}

Nell'infrastruttura Flash Fiber i ROE sono condivisi tra TIM e Fastweb, ma al loro interno vengono effettuati separatamente gli splitting per TIM e per Fastweb. Solitamente quindi un ROE Flash Fiber ha una capacità di 8 linee per TIM e 8 linee per Fastweb.

{{< fig src="/images/roe-ff1.jpg" caption="ROE Flash Fiber. Grazie a Edoardo C. per la foto" alt="Scatola di un ROE con le etichette Flash Fiber, TIM e Fastweb" vertical="true" >}}

Un'altra differenza importante rispetto a Open Fiber è che **gli OLT Flash Fiber sono sempre o di TIM o di Fastweb**. Ciò significa che se un operatore terzo vuole accedere alla rete Flash Fiber non può installare i propri OLT e ONT ma deve condividere la rete con TIM o Fastweb, ad esempio con la modalità VULA di TIM o l'analoga di Fastweb.

Inoltre, mentre Open Fiber in Open Stream consente ad ogni operatore di collegarsi ad una porta dedicata da 10 Gbps per la consegna del traffico, TIM in VULA prevede solo 10 Gbps totali da condividere tra tutti gli operatori presenti in centrale.[^vula]

{{< info >}}
Vedi anche [Cos'è e cosa fa Flash Fiber]({{< relref "/posts/flashfiber.md" >}}) e [Cosa significano VULA, SLU e NGA]({{< relref "/posts/vula-slu-nga.md" >}}).
{{< /info >}}

### FiberCop

La rete [FiberCop]({{< relref "/posts/fibercop.md" >}}) è basata su GPON con un **fattore di splitting complessivo 1:64**, realizzato tramite **due livelli di splitting 1:4 e 1:16**.

Entrambi i livelli di splitting si trovano in un singolo armadio, chiamato armadio ripartilinea ottico (ARLO) oppure **cabinet ripartilinea ottico (CRO)**, generalmente posizionato in prossimità degli armadi ripartilinea esistenti (dove termina anche la rete primaria in fibra ottica per la FTTC, già posata).[^fibercop]

Ciascun armadio ottico serve **al massimo 384 unità immobiliari**, ciascuna delle quali connessa con una fibra ottica punto-punto. Di conseguenza, si può rendere necessaria l'installazione di più di un CRO per un armadio ripartilinea.

[^fibercop]: https://wdc.wholesale.telecomitalia.it/fibercop/servizi/semi-gpon-e-full-gpon/

{{< fig src="/images/fibercop-cro2.jpg" caption="Interno di un CRO. In alto, i 384 connettori per la rete secondaria punto-punto. Al centro, lo spazio per i 14 splitter GPON primari 1:4 (inizialmente ne viene installato solo uno). In basso, lo spazio per 24 splitter secondari 1:16. In basso a destra si vedono i cavi di fibre ottiche primarie in arrivo dalla centrale. Grazie ad @ag23900 per la foto." >}}

{{< fig src="/images/fibercop-cro3.jpg" vertical="true" caption="Le uscite di uno splitter primario 1:4 (in alto, si vedono i 4 connettori), e di uno splitter secondario 1:16 (in basso, con 16 connettori). Grazie ad @ag23900 per la foto." >}}

Un'altra conseguenza del fatto che gli splitter sono concentrati nell'armadio ottico è che si rende più **agevole il passaggio di un cliente tra un operatore e l'altro**: non è infatti necessario un intervento sul ROE che si trova presso l'abitazione, come nel caso di Flash Fiber.

Il PTE svolge quindi solo il ruolo di raccordo e non contiene splitter.

{{< fig src="/images/fibercop-pte1.jpg" caption="Un PTE FiberCop montato su un palo della rete telefonica di TIM. Grazie ad @ag23900 per la foto." alt="Primo piano di una scatola rettangolare di plastica con i loghi TIM e FiberCop, montata su un palo di legno." >}}

Gli operatori che vogliono acquisire servizi da FiberCop hanno diverse strade:[^fibercop2]

[^fibercop2]: Offerta di Coinvestimento FiberCop https://storage.googleapis.com/tim_media_prod/2021/01/Proposta_Impegni_Coinvestimento_TIM.zip

- richiedere da TIM o altri operatori il servizio [**VULA**]({{< relref "/posts/vula-slu-nga.md#vula-virtual-unbundled-local-access" >}}) o [**Bitstream**]({{< relref "/posts/vula-slu-nga.md#nga-next-generation-access" >}}). In questo caso l'investimento dell'operatore non riguarda in alcun modo la rete di accesso;
- richiedere il **servizio Full-GPON**, che comprende l'intera rete di accesso ad esclusione dell'OLT, che deve essere invece installato dall'operatore nella centrale di riferimento;
- richiedere il **servizio Semi-GPON**, che consiste nell'acquisizione della sola parte di rete GPON che va dall'armadio ottico alle abitazioni dei clienti. In questo caso il punto di consegna dell'operatore è all'ingresso del CRO, e l'operatore deve quindi dotarsi in autonomia della rete primaria, posandola o acquisendola da TIM o altro operatore.

Negli ultimi due casi, FiberCop si occuperà di installare gli splitter primari e secondari anche per gli altri operatori, come avviene con i servizi passivi di Open Fiber.

{{< fig src="/images/fibercop-wholesale.jpg" >}}

{{< info >}}
Vedi anche [Cos'è e cosa fa FiberCop]({{< relref "/posts/fibercop.md" >}}).
{{< /info >}}

{{< footer >}}

[^standard]: *G.984.1 : Gigabit-capable passive optical networks (GPON): General characteristics* https://www.itu.int/rec/T-REC-G.984.1
[^notiziario]: *Notiziario tecnico Telecom Italia n. 2/2012*, pagina 64 https://www.gruppotim.it/content/dam/telecomitalia/it/archivio/documenti/Innovazione/MnisitoNotiziario/archivio/numeri%20vecchi/2-2012.pdf
[^ofglossario]: https://openfiber.it/glossario/p/
[^ofservizi]: https://openfiber.it/area-infratel/servizi/commercializzazione-aree-bianche/
[^pcn]: http://www.utesandonatosangiuliano.org/InforMatica/Documentazione/Tecnologie-Open%20Fiber.pdf
[^vula]: https://www.wholesale.telecomitalia.com/it/catalogo/-/catalogo_aggregator/article/120434490?p_r_p_564233524_categoryId=120410924&p_r_p_564233524_activePortletId=noportlet
