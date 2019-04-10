---
title: "Cos'è e come funziona GPON"
date: 2019-04-04
lastmod: 2019-04-06
authors: [Matteo]
description: "Una panoramica sul funzionamento e sugli elementi di una rete GPON, tecnologia che permette di realizzare reti passive in fibra ottica per infrastrutture FTTH."
categories: [Definizioni, FTTH]
---

**GPON** (*Gigabit-capable Passive Optical Network*) è una tecnologia comunemente utilizzata per realizzare reti [**FTTH**]({{< relref "architetture.md" >}}) (*Fiber To The Home*), cioè un'architettura in cui la connessione a Internet di una abitazione avviene portando la fibra ottica fino a dentro casa.

GPON fa parte di un insieme di standard *PON*, i quali si differenziano in base alla velocità massima raggiungibile per ciascun albero ottico, una struttura spesso condivisa anche con 64 utenze (il significato di albero ottico è spiegato in dettaglio sotto).

Nel caso di GPON, **la velocità massima è di circa 2,5 Gbps in download e 1,25 Gbps in upload, condivisa però con un numero fisso di utenze**, che può arrivare fino a 128.[^standard] Ciascuna delle linee collegate avrà poi una velocità massima nominale fissata dall'operatore, ad esempio 1 Gbps in download.

{{% fig src="/images/pon.png" caption="Differenze tra gli standard PON. Fonte: Open Fiber." alt="GPON: 2,5 Gigabit in download e 1,25 Gigabit in upload. XG-PON: 10 Gigabit in download e 2,5 Gigabit in upload. XGS-PON: 10 Gigabit in download e 10 Gigabit in upload. NG-PON2: 40 Gigabit in download e 2,5 Gigabit in upload" %}}

La caratteristica fondamentale che rende GPON la soluzione più frequentemente adottata per la FTTH è il fatto che **la rete ottica è passiva**, e cioè che tra i due estremi della rete (centrale e abitazioni) non sono presenti punti alimentati. Questo è un importante vantaggio della tecnologia, perché riduce i costi e la possibilità di guasti. Se in una città di grandi dimensioni coperta in FTTC sono presenti centinaia di apparati attivi (ONU) sparsi sulle strade, in FTTH-GPON gli unici elementi che l'operatore si deve preoccupare di alimentare sono le centrali/POP.

**GPON è la tecnologia attualmente utilizzata in Italia per realizzare reti FTTH.**

I contenuti di questa pagina:

{{< toc >}}

## Gli elementi di una rete ottica passiva

Una rete ottica passiva (come la GPON) è di tipo **punto-multipunto**. Il "punto" è un apparato dell'operatore (**OLT**, *Optical Line Terminal*), che spesso si trova nella centrale locale, mentre i "multipunto" sono dei dispositivi installati all'interno delle abitazioni dei clienti (**ONT** oppure *ONU*, rispettivamente *Optical Network Terminal* e *Optical Network Unit*).

Nel caso di GPON, un singolo OLT è in grado di collegare per ciascun cavo in fibra ottica in uscita **un numero di utenze che può arrivare al massimo a 128**. Questo numero determina il *fattore di splitting* (o *fattore di diramazione*, in italiano).

Un OLT può avere anche centinaia di porte[^notiziario], e ciascuna di queste realizza un **albero ottico** alla cui estremità è collegato un numero di utenze pari al fattore di splitting. **La velocità di 2,5 / 1,25 Gbps prevista da GPON è condivisa tra tutte le utenze che fanno capo allo stesso albero**.

Per questo motivo, nella pratica il fattore di splitting non è quasi mai 128 ma 64 o anche meno.[^notiziario]

{{% info %}}
Vedi la sezione *GPON in Italia* più in basso per i dettagli sui fattori di splitting usati in Italia.
{{% /info %}}

{{% green %}}
###### Ricapitolando...

Da un OLT di proprietà dell'operatore esce un certo numero di fibre ottiche, e ciascuna di queste viene *splittata* in un numero di fibre ottiche determinato dal fattore di splitting. Ciascuna fibra risultante collega una linea Internet.
{{% /green %}}

Nelle reti PON lo **splitting** della fibra ottica avviene **in modo passivo**, e cioè a livello fisico senza bisogno di apparati alimentati. I dispositivi che si occupano di effettuare lo splitting si chiamano **splitter ottici** (o *diramatori ottici*, in italiano).

In una rete GPON ci possono essere diversi livelli di splitting, ma spesso sono due.

Ad esempio, Open Fiber in Italia applica due livelli di splitting, il primo presso un *PFP* (*Punto di Flessibilità Primario*) e il secondo presso un *PFS* (*Punto di Flessibilità Secondario*).[^ofglossario] Questi punti si possono trovare in armadi posizionati sulla strada oppure interrati o sospesi.

{{% green %}}
###### Come funziona uno splitter ottico?

Uno splitter ottico riceve in ingresso (lato OLT) una singola fibra ottica e **produce in uscita N segnali su N fibre ottiche** (fattore di splitting 1:N).

In direzione **downstream** (OLT -> ONT) lo splitter "copia" la luce in ingresso sulle fibre ottiche in uscita, dividendo però così la potenza della luce per N. Per questo motivo una rete GPON ha un limite massimo di estensione, che è di 20 km (tra OLT e ONT più lontano).

Da questo comportamento segue anche il fatto che **ciascun ONT riceve anche il traffico destinato agli altri ONT**. Si rende quindi necessario l'uso di tecniche di crittografia per proteggere le informazioni, che vengono scartate a livello di ONT se destinate a un altro ONT.

In direzione **upstream** (ONT -> OLT) lo splitter si occupa di **sommare i contributi di luce portati dalle N fibre ottiche**. Considerato che più ONT possono trasmettere in contemporanea, gli OLT prevedono dei meccanismi di sincronizzazione per fare in modo che la trasmissione sia coordinata e non sovrapposta.
{{% /green %}}

L'elemento GPON di interesse principale per le utenze finali è però il **ROE** (**Ripartitore Ottico di Edificio**), talvolta chiamato anche **PTE** (**Punto di Terminazione di Edificio**). Il ROE viene installato a pochi metri dalle abitazioni: molto spesso si trova nel locale contatori dell'edificio, ma può anche essere montato su una parete esterna, oppure interrato o inserito in una chiostrina.

Il ROE può opzionalmente agire da splitter, ma il suo scopo principale è quello di **dare flessibilità alla rete**. In assenza di splitting, in un ROE entra un numero prefissato di fibre ottiche (es. 16, provenienti da uno splitter ottico), e ne escono altrettante, che andranno direttamente alle unità immobiliari (UI) dei clienti finali (tratta *verticale*).

Infine, all'interno delle UI è presente una **borchia ottica e un ONT**, cioè un dispositivo alimentato che demodula e decifra il segnale trasmesso sulla fibra ottica e lo converte in un segnale elettrico (uscita Ethernet), adatto per il collegamento a un router.

## GPON in Italia

In Italia le infrastrutture FTTH a livello nazionale sono quelle di **Open Fiber e Flash Fiber (TIM+Fastweb)**, e sono entrambe **realizzate utilizzando GPON** come tecnologia.

### Open Fiber

Nel caso di Open Fiber, le infrastrutture hanno **caratteristiche diverse a seconda che siano state realizzate con fondi privati o pubblici**. Nel primo caso si tratta delle circa 270 città che Open Fiber ha intenzione di cablare entro il 2023, mentre nel secondo si tratta delle aree cablate tramite il [piano BUL]({{< relref "bul.md" >}}).

Nelle aree a **investimento privato** l'infrastruttura prevede dei **POP** (*Point Of Presence*) posizionati sul territorio, **nei quali sono presenti gli OLT**. Gli operatori che vogliono utilizzare la rete Open Fiber possono scegliere principalmente due modalità:

- **l'operatore installa i propri OLT nel POP** e Open Fiber offre solo la "fibra spenta" in uscita dal POP verso gli ONT;[^offibraspenta]
- **Open Fiber offre gli OLT** e si tratta in questo caso di FTTH *Open Stream*. La consegna del traffico all'operatore può avvenire tramite un apposito kit Ethernet presente nel POP, oppure in un qualsiasi altro POP di Open Fiber o dell'operatore, anche geograficamente distante.[^ofopenstream]

**Il fattore di splitting utilizzato è 1:64**, e lo splitting avviene in due diversi livelli, tramite i **PFP** (**Punto di Flessibilità Primario**) e i **PFS** (**Punto di Flessibilità Secondario**).[^ofglossario] Questi punti possono contenere fino a 20 splitter e non devono necessariamente trovarsi in prossimità degli armadi FTTC.

Infine, i ROE di Open Fiber vengono frequentemente chiamati **PTE** (*Punto di Terminazione di Edificio*) e non svolgono mai la funzione di splitting ma soltanto di raccordo.

{{% green %}}
###### La rete Metroweb

Quando **Open Fiber è nata, nel 2016, ha incorporato la rete Metroweb** realizzata nel decennio precedente a Milano e in poche altre città italiane. Anche la rete Metroweb prevede due livelli di splitting, ma uno dei due avviene direttamente nel ROE, come nel caso di Flash Fiber.
{{% /green %}}

Nelle aree a **investimento pubblico** (cluster C e D), la differenza fondamentale è che **il fattore di splitting è 1:16**, anziché 1:64. Ciò significa che ad ogni albero possono essere collegati al massimo 16 ONT, che condivideranno la banda 2,5 / 1,25 Gbps prevista da GPON. La scelta è dovuta al fatto che i bandi pubblici del piano BUL richiedono di garantire almeno 100 Mbps in download e 50 in upload anche in caso di collegamenti contemporanei.

Come conseguenza, il livello di splitting è soltanto uno ed è effettuato nel CNO (**Centro Nodale Ottico**), collegato a un **PCN** (*Punto di Consegna Neutro*), che è l'equivalente del POP ma è quasi sempre condiviso tra più comuni.[^offibraspenta][^pcn]

Un'altra differenza è l'uso dei **PTA** interrati (**Punto di Terminazione Avanzato**) in aggiunta ai **PTE**, per le aree a bassa densità.

{{% info %}}
Vedi anche [Cos'è e cosa fa Open Fiber]({{< relref "openfiber.md" >}}).
{{% /info %}}

### Flash Fiber

L'infrastruttura Flash Fiber è particolare, perché comprende in realtà due infrastrutture parzialmente distinte, quella di TIM e quella di Fastweb.

In questo caso, gli OLT di TIM e Fastweb si trovano nelle **centrali TIM**, e **il fattore di splitting è 1:64**. I livelli di splitting sono due e avvengono rispettivamente in un **CNO** (*Centro Nodale Ottico*), posizionato indicativamente in prossimità degli armadi ripartilinea, e nei ROE. Per ciascuno dei due livelli di splitting si applica generalmente un fattore di 1:8 (8 x 8 = 64).

Nell'infrastruttura Flash Fiber i ROE TIM e Fastweb sono gli stessi, ma al loro interno vengono effettuati separatamente gli splitting per TIM e per Fastweb. Solitamente quindi un ROE Flash Fiber ha una capacità di 8 linee per TIM e 8 linee per Fastweb.

{{% fig src="/images/roe-ff1.jpg" caption="ROE Flash Fiber. Grazie a Edoardo C. per la foto" alt="Scatola di un ROE con le etichette Flash Fiber, TIM e Fastweb" vertical="true" %}}

Un'altra differenza importante rispetto a Open Fiber è che **gli OLT Flash Fiber sono sempre di TIM oppure di Fastweb**. Ciò significa che se un operatore terzo vuole accedere alla rete Flash Fiber non può installare il proprio OLT ma deve condividere la rete con TIM o Fastweb, ad esempio in modalità VULA. Inoltre, mentre Open Fiber in *Open Stream* consente ad ogni operatore di collegarsi con 10 Gbps per la consegna del traffico, con TIM il kit VULA prevede 10 Gbps condivisi tra tutti gli operatori VULA presenti in centrale.[^vula]

{{% info %}}
Vedi anche [Cos'è e cosa fa Flash Fiber]({{< relref "flashfiber.md" >}}) e [Cosa significano VULA, SLU e NGA]({{< relref "vula-slu-nga.md" >}}).
{{% /info %}}

[^standard]: https://www.itu.int/rec/T-REC-G.984.1
[^notiziario]: pagina 9 https://www.telecomitalia.com/content/dam/telecomitalia/it/archivio/documenti/Innovazione/NotiziarioTecnico/2012/n2-2012/capitolo6.pdf
[^ofglossario]: https://openfiber.it/it/fibra-ottica/glossario/P
[^offibraspenta]: https://openfiber.it/it/fibra-ottica/area-infratel/servizi-infratel/gpon-ftth-passiva
[^ofopenstream]: https://openfiber.it/it/fibra-ottica/area-infratel/servizi-infratel/open-stream-ftth
[^pcn]: http://www.utesandonatosangiuliano.org/InforMatica/Documentazione/Tecnologie-Open%20Fiber.pdf
[^vula]: https://www.wholesale.telecomitalia.com/it/catalogo/-/catalogo_aggregator/article/1027774?_2_WAR_nwscatalogoportlet_redirect=%2fit%2fcatalogo%2f-%2fcatalogo_aggregator%2farticle%2f31135&_2_WAR_nwscatalogoportlet_resourcePrimKey2=1027774&p_r_p_564233524_activePortletId=noportlet

{{< footer >}}
