---
title: "Come controllare la presenza di intervento pubblico o privato"
slug: bul-verifica-per-indirizzo
date: 2019-03-26
lastmod: 2019-04-12
authors: [Matteo]
description: Il sito BUL del Governo permette di controllare le previsioni future per la banda ultralarga al proprio indirizzo. La guida per interpretarlo.
categories: [Copertura, FTTH, FWA, FTTC, Piano BUL]
image: /social/piano-bul.jpg
draft: true
---

Il sito **Banda Ultralarga** del Governo italiano permette di verificare indirizzo per indirizzo le previsioni di copertura per i prossimi anni.

I dati mostrati sono quelli raccolti tramite le consultazioni Infratel, che hanno lo scopo di identificare le cosiddette aree bianche o a fallimento di mercato. Gli interventi pubblici dello Stato mirati alla riduzione del digital divide si basano sui risultati delle consultazioni.

Puoi inserire il tuo indirizzo di casa [qua](http://bandaultralarga.italia.it/verifica-indirizzo/), e poi seguire i paragrafi di questa pagina per decifrarne il risultato.

{{< toc >}}

## Sfondo blu

Congratulazioni. Salvo imprevisti significa che l'indirizzo sarà coperto tramite **intervento dello Stato con fondi pubblici**.

{{% info %}}
Consulta [Cos'è il piano BUL]({{< relref "/posts/bul.md" >}}) per un approfondimento dettagliato sulla nascita e l'evoluzione del piano per portare la banda ultralarga (BUL) nelle aree svantaggiate del Paese.
{{% /info %}}

{{% warn %}}
⚠ I bandi pubblici prevedono a volte una percentuale di **copertura facoltativa**, che viene decisa in fase di progettazione della rete. Purtroppo non è chiaro se e come il sito BUL gestisca questi casi, e bisogna quindi evitare di prendere le informazioni come una certezza assoluta.
{{% /warn %}}

Si distinguono ora ulteriori casi, in base alla scritta che vedi sul sito.

{{% green %}}
Decifrare l'intervento pubblico non è sempre facile. Se hai bisogno di aiuto, chiedi pure sul [forum di FibraClick](https://forum.fibra.click) e ti aiuteremo.
{{% /green %}}

{{% fig src="/images/sitobul1.png" caption="Intervento pubblico 30 / 100 Mbps" alt="Scritta bianca su sfondo blu che dice intervento pubblico 30 o 100 Mbps" %}}

Significa che l'indirizzo sarà coperto nell'ambito del piano BUL 2015-2020, ma non è ancora stata stabilita la tecnologia che verrà utilizzata per la copertura. Nell'ambito del piano, **con 30 Mbps si intende copertura wireless (FWA), mentre con 100 Mbps FTTH** fino a 1 Gbps.

{{% info %}}
Se non conosci gli acronimi FWA e FTTH, leggi [Cosa significano FTTC, FTTS, FTTE, FTTH e FWA]({{< relref "/posts/architetture.md" >}}) per una spiegazione delle differenze tra le architetture.
{{% /info %}}

Leggi anche i paragrafi sull'intervento pubblico 100 Mbps e 30 Mbps qua sotto, per ulteriori informazioni sulla copertura e le tecnologie utilizzate 👇.

{{% green %}}
###### FTTH o FWA?

In alcuni casi è possibile **stimare la probabilità che la copertura venga fatta in FTTH** analizzando i dati forniti da Open Fiber [sul suo sito nella sezione Infratel](https://openfiber.it/it/fibra-ottica/area-infratel/piano-copertura-infratel).

Per molti comuni è infatti presente il numero di unità immobiliari che saranno coperte in FTTH e FWA, ed è quindi possibile studiare la proporzione tra i due numeri in relazione con le caratteristiche e la morfologia del territorio comunale.
{{% /green %}}

{{% fig src="/images/sitobul2.png" caption="Intervento pubblico 100 Mbps" alt="Scritta bianca su sfondo blu che dice intervento pubblico 100 Mbps" %}}

Significa che l'indirizzo sarà coperto **in FTTH** tramite il [piano BUL]({{< relref "/posts/bul.md" >}}). La velocità di accesso della connessione varierà **tra 100 Mbps e 1 Gbps** (1000 Mbps), a seconda del taglio offerto dall'operatore di linea fissa scelto.

La copertura sarà coordinata da Infratel e **realizzata da Open Fiber**, l’azienda specializzata in reti in fibra ottica che ha vinto i tre bandi pubblici del piano BUL 2015-2020.

{{% fig src="/images/pozzetto-bul1.jpg" caption="Pozzetto realizzato da Open Fiber in un'area bianca coperta in FTTH" alt="Chiusino di un pozzetto, con la scritta BUL rete pubblica" %}}

{{% info %}}
Consulta [Cos'è e cosa fa Open Fiber]({{< relref "/posts/openfiber.md" >}}) e [Cos'è il piano BUL]({{< relref "/posts/bul.md" >}}) per approfondimenti.
{{% /info %}}

{{% fig src="/images/sitobul3.png" caption="Intervento pubblico 30 Mbps" alt="Scritta bianca su sfondo blu che dice intervento pubblico 30 Mbps" %}}

Può avere due significati:

- in alcune regioni indica una **copertura realizzata da TIM in FTTC** utilizzando fondi pubblici. È un caso frequente in Sardegna, dove Infratel e la regione hanno firmato un accordo speciale con TIM. Per approfondimenti visita il sito [Sardegna Digital](http://www.sardegnadigital.it/banda-ultra-larga-sardegna-vdsl-fibra-ottica/). In questo caso la copertura FTTC può in realtà arrivare a 100 o anche 200 Mbps, a seconda della distanza dall'armadio TIM e altri fattori;
- nell'ambito del piano BUL 2015-2020 indica la **copertura realizzata da Open Fiber in FWA** (*Fixed Wireless Access*), cioè una tecnologia wireless in grado di garantire *almeno* 30 Mbps in download. Non è ancora noto il tipo di tecnologia adottata da Open Fiber per il FWA, ma si sa che l'obiettivo è avere un numero elevato di BTS/SRB (*Stazioni Radio Base*) per ridurre la distanza tra antenne dell'operatore e le abitazioni.

## Sfondo arancione

Lo sfondo arancione indica la presenza o la pianificazione di **copertura da parte di uno o più operatori con fondi privati**.

Utilizza i pulsanti con le frecce per spostarti tra gli anni, e tieni presente che **le consultazioni prendono come riferimento il mese di marzo di ogni anno**. Ad esempio, con 2019 si intende marzo 2019.

In seguito riportiamo alcuni esempi con relativa spiegazione del loro significato.

{{% fig src="/images/sitobul4.png" caption="Intervento privato 30 Mbps, un operatore" alt="Schema che dice intervento privato 30 Mbps con un operatore" %}}

Questa è la situazione più comune, e indica che un operatore ha intenzione di realizzare un'infrastruttura che garantisca almeno 30 Mbps in download.

Nella pratica, la presenza di un operatore indica sostanzialmente sempre **TIM con la sua FTTC**, che in casi ottimali può offrire **fino a 100 o 200 Mbps in download e 20 Mbps in upload**.

In rari casi l'operatore può essere un operatore locale che investe in FTTC SLU (ad esempio Planetel). Si tratta, sintetizzando, di una rete proprietaria indipendente da TIM ad eccezione della tratta secondaria in rame tra armadio ripartilinea e abitazioni. Le prestazioni sono quasi identiche rispetto a un eventuale copertura TIM con la stessa architettura e tecnologia.

**Gli operatori wireless (ad esempio Eolo e Linkem) non sono contati come operatore a 30 Mbps** (e nemmeno 100 Mbps).

{{% fig src="/images/fttc-tim1.jpg" caption="Armadio TIM (a sinistra) con sopralzo ONU-DSLAM (sopra). A destra, la colonnina di alimentazione contenente un trasformatore e un contatore Enel." alt="A sinistra, un armadio ripartilinea TIM con sopra una scatola con il tetto rosso, a destra, una colonnina stretta e alta con il tetto rosso." %}}

{{% info %}}
Vedi anche [Cosa significano FTTC, FTTS, FTTE, FTTH e FWA]({{< relref "/posts/architetture.md" >}}) e [Cosa significano VULA, SLU e NGA]({{< relref "/posts/vula-slu-nga.md" >}}).
{{% /info %}}

Se il sito indica un operatore 30 Mbps ma sai che l'indirizzo **non è coperto**, ci possono essere diversi motivi:

- la copertura potrebbe essere in ritardo;
- l'indirizzo potrebbe trovarsi in un'**ex area bianca**, ossia una zona dove TIM aveva inizialmente dichiarato di non voler coprire in FTTC, ma poi l'ha fatto. **Questi interventi sono illegali e sono stati in molti casi sospesi dalle autorità**, per consentire invece la copertura pubblica tramite il [piano BUL]({{< relref "/posts/bul.md" >}}). Il sito BUL non viene aggiornato in caso di sospensione della copertura.

{{% fig src="/images/sitobul5.png" caption="Intervento privato 30 Mbps, due operatori" alt="Schema che dice intervento privato 30 Mbps con due operatori" %}}

Questo caso è un'"evoluzione" del precedente e **indica la presenza di una seconda infrastruttura per la FTTC**.

Si faccia attenzione al fatto che "due infrastrutture" non è la stessa cosa di dire "due operatori". Un operatore può rivendere il servizio FTTC di TIM utilizzando l'infrastruttura TIM già esistente, e in questo caso non comparirebbe come secondo operatore sul sito BUL.

Soltanto se un secondo operatore installa la sua infrastruttura SLU (e quindi un armadio su strada), comparirà come secondo operatore.

In Italia, **gli operatori che operano in SLU a livello nazionale sono Fastweb ("FTTS") e Vodafone ("MAKE")**, entrambi in poco più di 100 comuni italiani.

Altri operatori locali, tra cui il caso notevole di Planetel, hanno realizzato infrastrutture SLU in qualche comune.

{{% fig src="/images/slu.jpg" caption="Da sinistra, ONU SLU Fastweb, ONU SLU Vodafone, colonnina di alimentazione TIM, ARL e ONU TIM e due chiostrine TIM. Grazie a Emilio M. per la foto" alt="Strada con marciapiede, sul quale sono posizionati in fila alcuni armadi o box per la FTTC" %}}

{{% info %}}
Per approfondire, leggi [Cosa significano FTTC, FTTS, FTTE, FTTH e FWA]({{< relref "/posts/architetture.md" >}}) e [Cosa significano VULA, SLU e NGA]({{< relref "/posts/vula-slu-nga.md" >}}).
{{% /info %}}

{{% fig src="/images/sitobul6.png" caption="Intervento privato 100 Mbps, un operatore" alt="Schema che dice intervento privato 100 Mbps con un operatore" %}}

Indica che è previsto un operatore a 100 Mbps, che **equivale sempre a una infrastruttura FTTH, quasi sempre con velocità nominale fino a 1 Gbps**.

Si tratta molto spesso di copertura da parte di **Open Fiber**, ma non sempre. In alcuni casi potrebbe trattarsi di un **operatore locale**, come ad esempio Isiline, Intred, Unidata, ecc., oppure della rete **TIM realizzata precedentemente alla nascita di Flash Fiber** (2016).

{{% info %}}
Vedi anche le pagine [Open Fiber]({{< relref "/posts/openfiber.md" >}}) e [Flash Fiber]({{ relref "/posts/flashiber.md" }}) per altre informazioni.
{{% /info %}}

Puoi verificare la presenza effettiva di un operatore utilizzando i siti web ufficiali, oppure cercando gli apparati per la FTTH sui muri esterni dell'edificio o nel locale contatori/TIM.

{{% fig src="/images/roe-of1.jpg" caption="ROE Open Fiber. Grazie a Edoardo M. per la foto" alt="Scatola di un ROE con l'etichetta Open Fiber" vertical="true" %}}

{{% warn %}}
⚠ Esistono dei casi in cui **un operatore può aver dichiarato la presenza dell'infrastruttura con molto anticipo (anche di anni)**. In questi casi purtroppo non è possibile sapere qual è l'operatore, né richiedere maggiori informazioni sullo stato della copertura.
{{% /warn %}}

{{% fig src="/images/sitobul7.png" caption="Intervento privato 100 Mbps, tre operatori" alt="Schema che dice intervento privato 100 Mbps con tre operatori" %}}

Indica la presenza di **tre infrastrutture FTTH**, con una velocità che può andare **da 100 a 1000 Mbps (1 Gbps)** in download, e almeno 50 Mbps in upload.

Si tratta frequentemente di copertura **Flash Fiber**, una **joint venture tra TIM e Fastweb**. L'infrastruttura Flash Fiber viene contata tre volte perché Flash Fiber, TIM e Fastweb hanno partecipato separatamente alla consultazione, dichiarando ciascuno la presenza della stessa infrastruttura.

{{% fig src="/images/roe-ff1.jpg" caption="ROE Flash Fiber. Grazie a Edoardo C. per la foto" alt="Scatola di un ROE con le etichette Flash Fiber, TIM e Fastweb" vertical="true" %}}

{{% fig src="/images/roe-ff4.jpg" caption="Contenitore di ROE Flash Fiber da interno. Grazie a \"Augmentin\" per la foto" alt="Scatola di un ROE larga e bassa, fissata su una parete, con le etichette Flash Fiber e TIM" %}}

{{% warn %}}
⚠ Flash Fiber è presente in 29 città italiane, in cui non compare però la città di Milano. **A Milano Flash Fiber non è presente**: TIM ha la sua rete FTTH, mentre Fastweb utilizza la rete Open Fiber dopo che quest'ultima ha incorporato Metroweb (di cui Fastweb era principale sostenitrice).

Se per un indirizzo di Milano risultano tre operatori, è molto probabile che si tratti di Open Fiber e TIM, mentre **il terzo operatore si ipotizza possa essere l'infrastruttura Metroweb. La stessa situazione potrebbe ripetersi in altre città con copertura Metroweb.**

{{% fig src="/images/roe-of-mw-telecom.jpg" caption="Scatole contenenti i ROE in un condominio di Milano. Dall'alto: Metroweb, TIM e Open Fiber. Grazie a \"Irenicusss\" per la foto." alt="Tre scatole fissate sul muro di un locale contatori" vertical="true" %}}
{{% /warn %}}

{{% info %}}
Visita la pagina [Flash Fiber]({{ relref "/posts/flashiber.md" }}) per approfondimenti.
{{% /info %}}

{{% fig src="/images/sitobul8.png" caption="Intervento privato 100 Mbps, quattro operatori" alt="Schema che dice intervento privato 100 Mbps con quattro operatori" %}}

Significa che sono previste **quattro infrastrutture FTTH**, con una velocità che può andare **da 100 a 1000 Mbps (1 Gbps)** in download, e almeno 50 Mbps in upload.

Indica in realtà molto spesso la presenza di due infrastrutture: **Open Fiber** e **Flash Fiber**. Quest'ultima è una **joint venture tra TIM e Fastweb**, e viene contatata tre volte perché Flash Fiber, TIM e Fastweb hanno partecipato separatamente alla consultazione, dichiarando ciascuno la presenza della stessa infrastruttura.

{{% info %}}
Visita le pagine [Open Fiber]({{< relref "/posts/openfiber.md" >}}) e [Flash Fiber]({{< relref "/posts/flashfiber.md" >}}) per altre informazioni.
{{% /info %}}

{{% fig src="/images/roe-ff-of.jpg" caption="ROE Flash Fiber (in alto) e doppio ROE Open Fiber. Grazie a Luca Z. per la foto" alt="Tre scatole di ROE attaccate al muro di una casa" vertical="true" %}}

{{< footer >}}
