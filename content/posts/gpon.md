---
title: "Cos'è e come funziona GPON"
slug: gpon
date: 2019-04-04
lastmod: 2019-04-06
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

I contenuti di questa pagina:

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

L'elemento GPON di interesse principale per le utenze finali è però il **ROE** (**Ripartitore Ottico di Edificio**), o in alternativa il **PTE** (**Punto di Terminazione di Edificio**). Il ROE o il PTE vengono installati a pochi metri dalle abitazioni: molto spesso si trovano nel locale contatori dell'edificio, ma possono anche essere montati su una parete esterna, oppure interrati o inseriti in una chiostrina.

In un ROE trova anche posto uno splitter - l'ultimo prima dell'ONT in casa - ma il suo scopo principale è quello di **dare flessibilità alla rete**. In assenza di splitting, si parla invece di PTE all'interno del quale entrano un numero prefissato di fibre ottiche (es. 16, provenienti da uno splitter ottico a monte), e ne escono altrettante, che andranno direttamente alle unità immobiliari (UI) dei clienti finali (tratta *verticale*).

{{< fig src="/images/gpon2.png" caption="Schema della rete FTTH GPON di Flash Fiber. I punti di splitting sono due, rispettivamente i CNO (Centro Nodale Ottico) e i ROE. Il fattore di splitting complessivo è 1:64, mentre per ciascuno splitter è 1:8." >}}

{{< fig src="/images/roe-ff5.jpg" caption="Interno di un ROE Flash Fiber con 16 fibre ottiche. Grazie a \"evilways\" per la foto" alt="Interno di un ROE Flash Fiber che mostra i cavi delle fibre ottiche" >}}

Infine, all'interno delle UI è presente una **borchia ottica e un ONT**, cioè un dispositivo alimentato, concettualmente analogo ad un modem DSL, che comunica a mezzo segnale ottico verso la rete in fibra e vi da accesso tramite un collegamento Ethernet elettrico, adatto per il collegamento a un router. In alcuni casi, l'ONT e il router formano un dispositivo unico, o mediante ONT in forma modulare SFP (una cartuccia metallica da inserire nel router), o mediante ONT totalmente integrato nel router, proprio come io sono i comunissimi modem DSL.

{{< fig src="/images/cavo-fibra.jpg" caption="Cavo di fibra ottica per FTTH con connettore SC" vertical="true" >}}

## GPON in Italia

In Italia le infrastrutture FTTH a livello nazionale sono quelle di **Open Fiber**, **Flash Fiber** (TIM+Fastweb) e **TIM**, e tutte realizzate con **tecnologia PON** (GPON o superiore).

### Open Fiber

Nel caso di Open Fiber, le infrastrutture hanno **caratteristiche diverse a seconda che siano state realizzate con fondi privati o pubblici**. Nel primo caso si tratta delle circa 270 città che Open Fiber ha intenzione di cablare entro il 2023, mentre nel secondo si tratta delle aree cablate tramite il [piano BUL]({{< relref "/posts/bul.md" >}}).

Nelle aree a **investimento privato** l'infrastruttura prevede dei **POP** (*Point Of Presence*) posizionati sul territorio, **nei quali sono presenti gli OLT**. Gli operatori che vogliono utilizzare la rete passiva Open Fiber possono scegliere tre modalità:

- **l'operatore installa i propri OLT nel POP** e i **propri ONT in casa** del cliente, Open Fiber offre solo la "fibra spenta" in uscita dal POP verso gli ONT;[^offibraspenta]
- **Open Fiber offre anche gli OLT** e gli **ONT**, si tratta in questo caso del servizio *Open Stream* di Open Fiber. La consegna del traffico all'operatore può avvenire tramite un apposito kit Ethernet presente nel POP, oppure in un qualsiasi altro POP di Open Fiber o dell'operatore, anche geograficamente distante.[^ofopenstream]
- **Open Fiber offre anche l'interconnessione ad internet e il router**, si tratta in questo caso del servizio *Open Internet* di Open Fiber. La consegna del traffico arriva sino ai nodi di interscambio facenti parte di internet, in questo caso l'operatore (in certi sensi "virtuale") si affida totalmente ad Open Fiber.

**Il fattore di splitting utilizzato è 1:64**, e lo splitting avviene in due diversi livelli, tramite i **PFP** (**Punto di Flessibilità Primario**) e i **PFS** (**Punto di Flessibilità Secondario**).[^ofglossario] Questi punti possono contenere fino a 20 splitter e non devono necessariamente trovarsi in prossimità degli armadi FTTC.

Infine, i **PTE** (*Punto di Terminazione di Edificio*) di Open Fiber generalmente non accolgono al loro interno l'ultimo elemento di splitting, ma fungono soltanto da raccordo.

{{< fig src="/images/gpon-of.jpg" caption="Infrastruttura di rete Open Fiber (cluster A). Fonte: Open Fiber" >}}

{{< fig src="/images/roe-of1.jpg" caption="PTE Open Fiber. Grazie a Edoardo M. per la foto" alt="Scatola di un PTE con l'etichetta Open Fiber" vertical="true" >}}

{{< green >}}
###### La rete Metroweb

Quando **Open Fiber è nata, nel 2016, ha incorporato la rete Metroweb** realizzata nel decennio precedente a Milano, Torino, Bologna e Genova. Anche la rete Metroweb prevede due livelli di splitting, ma uno dei due avviene direttamente all'edificio, in quello che quindi prende il nome di ROE, come nel caso di Flash Fiber.
{{< /green >}}

Nelle aree a **investimento pubblico** (cluster C e D), la differenza fondamentale è che **il fattore di splitting è 1:16**, anziché 1:64. Ciò significa che ad ogni albero possono essere collegati al massimo 16 ONT, che condivideranno la banda 2,5 / 1,25 Gbps prevista da GPON. La scelta è dovuta al fatto che i bandi pubblici del piano BUL richiedono di garantire almeno 100 Mbps in download e 50 in upload per utenza, anche in caso di collegamenti contemporanei.

Va anche tenuto conto del fatto che ad ogni splitting, la potenza del segnale luminoso emesso viene equamente sudddiviso, Pertanto, un minore fattore di splitting consente anche realizzare tratte finali OLT-ONT più lunghe a parità di potenza emessa.

Come conseguenza, il livello di splitting è soltanto uno ed è effettuato nel CNO (**Centro Nodale Ottico**), collegato a un **PCN** (*Punto di Consegna Neutro*), che è l'equivalente del POP ma è quasi sempre condiviso tra più comuni.[^offibraspenta][^pcn]

Un'altra differenza è l'uso dei **PTA** interrati (**Punto di Terminazione Avanzato**) in aggiunta ai **PTE**, per le aree a bassa densità.

{{< fig src="/images/gpon-of-infratel.jpg" caption="Infrastruttura di rete Open Fiber nei cluster C e D (aree bianche). Fonte: Open Fiber" >}}

{{< fig src="/images/gpon-of-infratel2.jpg" caption="Infrastruttura di rete Open Fiber nei cluster C e D. Esempio con comuni multipli connessi allo stesso PCN. Fonte: Open Fiber" >}}

{{< info >}}
Vedi anche [Cos'è e cosa fa Open Fiber]({{< relref "/posts/openfiber.md" >}}).
{{< /info >}}

### Flash Fiber

L'infrastruttura Flash Fiber è particolare, perché comprende in realtà due infrastrutture parzialmente distinte, quella di TIM e quella di Fastweb.

In questo caso, gli OLT di TIM e Fastweb si trovano nelle **centrali TIM**, e **il fattore di splitting è 1:64**. I livelli di splitting sono due e avvengono rispettivamente in un **CNO** (*Centro Nodale Ottico*), posizionato indicativamente in prossimità degli armadi ripartilinea, e nei ROE. Per ciascuno dei due livelli di splitting si applica generalmente un fattore di 1:8 (8 x 8 = 64).

{{< fig src="/images/cno-ff.jpg" caption="CNO Flash Fiber inserito in un box-chiostrina. Grazie a Luca Z. per la foto" alt="Interno di una chiostrina TIM su strada, contenente il CNO" >}}

Nell'infrastruttura Flash Fiber i ROE sono condivisi tra TIM e Fastweb, ma al loro interno vengono effettuati separatamente gli splitting per TIM e per Fastweb. Solitamente quindi un ROE Flash Fiber ha una capacità di 8 linee per TIM e 8 linee per Fastweb.

{{< fig src="/images/roe-ff1.jpg" caption="ROE Flash Fiber. Grazie a Edoardo C. per la foto" alt="Scatola di un ROE con le etichette Flash Fiber, TIM e Fastweb" vertical="true" >}}

Un'altra differenza importante rispetto a Open Fiber è che **gli OLT Flash Fiber sono sempre o di TIM o di Fastweb**. Ciò significa che se un operatore terzo vuole accedere alla rete Flash Fiber non può installare il proprio OLT e i propri ONT ma deve condividere la rete con TIM o Fastweb, ad esempio con modalità come la VULA di TIM, l'analoga Fastweb, o la già citata Open Stream offerta da Open Fiber. 

{{< green >}}
Mentre Open Fiber in Open Stream consente ad ogni singolo operatore di collegarsi ad una porta dedicata da 10 Gbps per la consegna del traffico, TIM con la VULA prevede solo 10 Gbps in totale da condividere tra tutti gli operatori presenti in centrale.[^vula]
{{< /green >}}

{{< info >}}
Vedi anche [Cos'è e cosa fa Flash Fiber]({{< relref "/posts/flashfiber.md" >}}) e [Cosa significano VULA, SLU e NGA]({{< relref "/posts/vula-slu-nga.md" >}}).
{{< /info >}}

[^standard]: https://www.itu.int/rec/T-REC-G.984.1
[^notiziario]: pagina 9 https://www.telecomitalia.com/content/dam/telecomitalia/it/archivio/documenti/Innovazione/NotiziarioTecnico/2012/n2-2012/capitolo6.pdf
[^ofglossario]: https://openfiber.it/it/fibra-ottica/glossario/P
[^offibraspenta]: https://openfiber.it/it/fibra-ottica/area-infratel/servizi-infratel/gpon-ftth-passiva
[^ofopenstream]: https://openfiber.it/it/fibra-ottica/area-infratel/servizi-infratel/open-stream-ftth
[^pcn]: http://www.utesandonatosangiuliano.org/InforMatica/Documentazione/Tecnologie-Open%20Fiber.pdf
[^vula]: https://www.wholesale.telecomitalia.com/it/catalogo/-/catalogo_aggregator/article/1027774?_2_WAR_nwscatalogoportlet_redirect=%2fit%2fcatalogo%2f-%2fcatalogo_aggregator%2farticle%2f31135&_2_WAR_nwscatalogoportlet_resourcePrimKey2=1027774&p_r_p_564233524_activePortletId=noportlet

{{< footer >}}
