---
title: "Cos'è e come funziona GPON"
date: 2019-04-04
lastmod: 2019-04-04
authors: [Matteo]
description: "Una panoramica sul funzionamento e sugli elementi di una rete GPON, tecnologia che permette di realizzare reti passive in fibra ottica per infrastrutture FTTH."
categories: [Definizioni, FTTH]
---

**GPON** (_**G**igabit-capable **P**assive **O**ptical **N**etwork_) è una tecnologia comunemente utilizzata per realizzare reti [**FTTH**]({{< relref "architetture.md" >}}) (_**F**iber **T**o **T**he **H**ome_), cioè un'architettura in cui la connessione a Internet di una abitazione avviene portando la fibra ottica fino a dentro casa.

GPON fa parte di un insieme di standard *PON*, i quali si differenziano in base alla velocità massima raggiungibile per ciascun albero ottico, una struttura spesso condivisa anche con 64 utenze (il significato di albero ottico è spiegato in dettaglio sotto).

Nel caso di GPON, **la velocità massima è di circa 2,5 Gbps in download e 1,25 Gbps in upload, condivisa però con un numero fisso di utenze**, che può arrivare fino a 128.[^standard] Ciascuna delle linee collegate avrà poi una velocità massima nominale fissata dall'operatore, ad esempio 1 Gbps in download.

{{% fig src="/images/pon.png" caption="Differenze tra gli standard PON. Fonte: Open Fiber." alt="GPON: 2,5 Gigabit in download e 1,25 Gigabit in upload. XG-PON: 10 Gigabit in download e 2,5 Gigabit in upload. XGS-PON: 10 Gigabit in download e 10 Gigabit in upload. NG-PON2: 40 Gigabit in download e 2,5 Gigabit in upload" %}}

La caratteristica fondamentale che rende GPON la soluzione più frequentemente adottata per la FTTH è il fatto che **la rete ottica è passiva**, e cioè che tra i due estremi della rete (centrale e abitazioni) non sono presenti punti alimentati.

GPON è la tecnologia attualmente utilizzata in Italia per realizzare reti FTTH.

I contenuti di questa pagina:

{{< toc >}}

## Gli elementi di una rete ottica passiva

Una rete ottica passiva (come la GPON) è di tipo **punto-multipunto**. Il "punto" è un apparato dell'operatore telefonico (*OLT*, _**O**ptical **L**ine **T**erminal_), che solitamente si trova nella centrale locale, mentre i "multipunto" sono dei dispositivi installati all'interno delle abitazioni dei clienti (*ONT* oppure *ONU*, rispettivamente _**O**ptical **N**etwork **T**erminal_ e _**O**ptical **N**etwork **U**nit_).

Nel caso di GPON, un singolo OLT presso la centrale dell'operatore è in grado di collegare per ciascun cavo in fibra ottica uscente **un numero di utenze che può arrivare al massimo a 128**. Questo numero è detto *fattore di splitting* (o *fattore di diramazione*, in italiano).

Un OLT può avere anche centinaia di porte[^notiziario], e ciascuna di queste realizza un **albero ottico** alla cui estremità è collegato un numero di utenze pari al fattore di splitting. **La velocità di 2,5 / 1,25 Gbps prevista da GPON è condivisa tra tutte le utenze che fanno capo allo stesso albero**.

Per questo motivo, nella pratica il fattore di splitting non è quasi mai 128 ma 64 o anche meno.[^notiziario]

{{% info %}}
Vedi la sezione *GPON in Italia* più in basso per i dettagli sui fattori di splitting usati in Italia.
{{% /info %}}

{{% green %}}
###### Ricapitolando...

Da un OLT di proprietà dell'operatore esce un certo numero di fibre ottiche, e ciascuna di queste viene *splittata* in un numero di fibre ottiche determinato dal fattore di splitting. Ciascuna fibra risultante collega una linea Internet.
{{% /green %}}

Nelle reti PON lo **splitting** della fibra ottica avviene **in modo passivo**, e cioè a livello fisico senza bisogno di apparati alimentati. I dispositivi che si occupano di effettuare lo splitting si chiamano *splitter ottici* (o *diramatori ottici*, in italiano).

In una rete GPON ci possono essere diversi livelli di splitting, ma solitamente sono due.

Ad esempio, Open Fiber in Italia applica due livelli di splitting, il primo presso un *PFP* (_**P**unto di **F**lessibilità **P**rimario_) e il secondo presso un *PFS* (_**P**unto di **F**lessibilità **S**econdario_).[^ofglossario] Questi punti si possono trovare in armadi posizionati sulla strada oppure interrati o sospesi.

{{% green %}}
###### Come funziona uno splitter ottico?

Uno splitter ottico riceve in ingresso (lato OLT) una singola fibra ottica e **produce in uscita N segnali su N fibre ottiche** (fattore di splitting 1:N).

In direzione **downstream** (OLT -> ONT) lo splitter "copia" la luce in ingresso sulle fibre ottiche in uscita, dividendo però così la potenza della luce per N. Per questo motivo una rete GPON ha un limite massimo di estensione, che è di 20 km (tra OLT e ONT più lontano).

Da questo comportamento segue anche il fatto che **ciascun ONT riceve anche il traffico destinato agli altri ONT**. Si rende quindi necessario l'uso di tecniche di crittografia per proteggere le informazioni, che vengono scartate a livello di ONT se destinate a un altro ONT.

In direzione **upstream** (ONT -> OLT) lo splitter si occupa di **sommare i contributi di luce portati dalle N fibre ottiche**. Considerato che più ONT possono trasmettere in contemporanea, gli OLT prevedono dei meccanismi di sincronizzazione per fare in modo che la trasmissione sia coordinata e non sovrapposta.
{{% /green %}}

L'elemento GPON di interesse principale per le utenze finali è però il **ROE** (_**R**ipartitore **O**ttico di **E**dificio_), talvolta chiamato anche **PTE** (_**P**unto di **T**erminazione di **E**dificio_). Il ROE viene installato a pochi metri dalle abitazioni: molto spesso si trova nel locale contatori dell'edificio, ma può anche essere montato su una parete esterna, oppure interrato o inserito in una chiostrina.

Il ROE può opzionalmente agire da splitter, ma il suo scopo principale è quello di **dare flessibilità alla rete**. In assenza di splitting, in un ROE entra un numero prefissato di fibre ottiche (es. 16, provenienti da uno splitter ottico), e ne escono altrettante, che andranno direttamente alle unità immobiliari (UI) dei clienti finali (tratta *verticale*).

Infine, all'interno delle UI è presente una **borchia ottica e un ONT**, cioè un dispositivo alimentato che demodula e decifra il segnale trasmesso sulla fibra ottica e lo converte in un segnale elettrico (uscita Ethernet), adatto per il collegamento a un router.

## GPON in Italia

In Italia le infrastrutture FTTH a livello nazionale sono quelle di **Open Fiber e Flash Fiber (TIM+Fastweb)**, e sono entrambe **realizzate utilizzando GPON**.

### Open Fiber

Nel caso di Open Fiber, le infrastrutture hanno **caratteristiche diverse a seconda che siano state realizzate con fondi privati e pubblici**. Nel primo caso si tratta delle circa 270 città che Open Fiber ha intenzione di cablare entro il 2023, mentre nel secondo si tratta delle aree cablate tramite il [piano BUL]({{< relref "bul.md" >}}).

Nelle aree a investimento privato l'infrastruttura prevede dei POP posizionati sul territorio, nei quali sono presenti gli OLT degli operatori. **Il fattore di splitting per ciascuna porta è di 1:64**, ed è effettuato in due diversi livelli tramite i *PFP* (_**P**unto di **F**lessibilità **P**rimario_) e i *PFS* (_**P**unto di **F**lessibilità **S**econdario_).[^ofglossario] I ROE di Open Fiber sono solitamente chiamati **PTE** e non svolgono mai la funzione di splitting ma soltanto di raccordo.

Nelle aree a investimento pubblico (aree bianche), la differenza fondamentale è che **il fattore di splitting è 1:16**, anziché 1:64. Ciò significa che ad ogni albero possono essere collegati al massimo 16 ONT, che condivideranno la banda 2,5 / 1,25 Gbps prevista da GPON. Il livello di splitting è soltanto uno ed è effettuato nel CNO (_**C**entro **N**odale **O**ttico_).[^ofinfratel]

{{% info %}}
Vedi anche [Cos'è e cosa fa Open Fiber]({{< relref "openfiber.md" >}}).
{{% /info %}}

### Flash Fiber

L'infrastruttura Flash Fiber è particolare, perché comprende in realtà due infrastrutture parzialmente distinte, quella di TIM e quella di Fastweb.

In questo caso, gli OLT di TIM e Fastweb si trovano nelle **centrali TIM**, e **il fattore di splitting è 1:64**. I livelli di splitting sono due e avvengono rispettivamente in un **CNO**, posizionato indicativamente in prossimità degli armadi ripartilinea, e nei ROE. Per ciascuno dei due livelli di splitting si applica generalmente un fattore di 1:8 (una fibra ottica viene suddivisa in 8 fibre).

Nell'infrastruttura Flash Fiber i ROE TIM e Fastweb sono gli stessi, ma al loro interno vengono effettuati separatamente gli splitting per TIM e per Fastweb. Solitamente quindi un ROE Flash Fiber ha una capacità di 8 linee per TIM e 8 linee per Fastweb.

{{% info %}}
Vedi anche [Cos'è e cosa fa Flash Fiber]({{< relref "flashfiber.md" >}}).
{{% /info %}}

[^standard]: https://www.itu.int/rec/T-REC-G.984.1
[^notiziario]: pagina 9 https://www.telecomitalia.com/content/dam/telecomitalia/it/archivio/documenti/Innovazione/NotiziarioTecnico/2012/n2-2012/capitolo6.pdf
[^ofglossario]: https://openfiber.it/it/fibra-ottica/glossario/P
[^ofinfratel]: https://openfiber.it/it/fibra-ottica/area-infratel/servizi-infratel/gpon-ftth-passiva

{{< footer >}}
