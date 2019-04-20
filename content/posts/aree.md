---
title: "Cosa sono le aree nere, grigie, e bianche"
slug: aree-nere-grigie-bianche
date: 2019-04-12T11:45:24+02:00
lastmod: 2019-04-12
authors: [Matteo]
description: "La distinzione tra aree nere, grigie e bianche serve a classificare il grado di investimenti per la banda larga presenti sul territorio. Ma come sono definite le aree? E cosa sono i cluster?"
categories: [Definizioni, Copertura, Piano BUL]
---

Le **aree nere, grigie e bianche** sono una distinzione stabilita dalla Commissione Europea per determinare il livello di concorrenza per quanto riguarda le reti a banda larga e ultralarga sui territori.

## Le aree

In dettaglio, le aree si definiscono così[^lex]:

- **aree nere**: presenza nei prossimi tre anni di almeno due reti a banda larga di operatori diversi
- **aree grigie**: presenza nei prossimi tre anni di una sola rete a banda larga
- **aree bianche**: nessuna previsione di investimento privato per banda larga nei prossimi tre anni

{{% green %}}
###### Aree vs comuni
Quando si parla di area, non si intende il territorio di un comune. Ogni comune può essere suddiviso in più aree, in modo da distinguere ad esempio tra aree grigie e bianche all'interno dello stesso comune. In Italia sono state definite 94˙645 aree su circa 8˙000 comuni.
{{% /green %}}

È importante notare che con l'espressione "due reti" non si intende presenza di due operatori in generale, ma di due infrastrutture di rete. Ad esempio, in Italia, gli operatori che rivendono il servizio FTTC di TIM in modalità [VULA]({{< relref "/posts/vula-slu-nga.md" >}}) non vengono contati come infrastrutture separate. Lo sono invece in caso di presenza di armadi [SLU]({{< relref "/posts/vula-slu-nga.md" >}}) dedicati, come nella foto che segue.

{{% fig src="/images/slu.jpg" caption="Armadi per la FTTC di Fastweb, Vodafone e TIM. La zona coperta dagli armadi è un'area nera. Grazie a Emilio M. per la foto" alt="Strada con marciapiede, sul quale sono posizionati in fila alcuni armadi o box per la FTTC" %}}

**Le aree sono il riferimento a livello europeo per valutare la possibilità di intervento da parte dello Stato in materia di banda larga e ultralarga**.

In Italia la delimitazione delle aree è un compito che spetta a Infratel, l'azienda controllata dal Ministero dello Sviluppo Economico che ha l'obiettivo di incentivare lo sviluppo delle reti di accesso a Internet.

Infratel aggiorna periodicamente una **mappatura delle aree** tramite delle apposite **consultazioni pubbliche**, a cui gli operatori possono rispondere dichiarando la copertura prevista per i prossimi tre anni.

{{% green %}}
###### Il piano BUL

La *Strategia nazionale per la banda ultralarga* (piano BUL) è il progetto avviato nel 2015 con l'obiettivo di coprire tutte le aree bianche del paese, riguardanti circa il 25% della popolazione. Si tratta quindi di tutte le abitazioni coperte da ADSL, wireless o tecnologia inferiore.

Il piano prevede un [intervento diretto]({{< relref "/posts/pubblico-privato.md" >}}) per la realizzazione di una rete in fibra ottica, che resterà di proprietà pubblica ma sarà data in concessione a [Open Fiber]({{< relref "/posts/openfiber.md" >}}) per vent'anni.

Per approfondimenti, visita [Cos'è il piano BUL]({{< relref "/posts/bul.md" >}}).
{{% /green %}}

{{% info %}}
I dati delle consultazioni sono consultabili tramite il sito istituzionale "BUL". Leggi [Come controllare la presenza di intervento pubblico o privato]({{< relref "/posts/sitobul.md" >}}) per approfondimenti.
{{% /info %}}

## I cluster

La **distinzione in aree** è utile ma ha un difetto, quello di considerare il numero di infrastrutture presenti ma **non il livello di qualità offerto**.

Per questo motivo, l'Italia ha definito un'ulteriore distinzione[^notiziario], basata sui **cluster A, B, C e D**. I cluster sono definiti in base alle infrastrutture presenti nei successivi tre anni:

- **cluster A**: aree in cui sarà presente almeno un'infrastruttura che garantisca almeno 100 Mbps in download (in Italia equivale a **FTTH**)
- **cluster B**: aree in cui sarà presente almeno un'infrastruttura che garantisca almeno 30 Mbps in download (in Italia equivale a **FTTC**, **le connessioni wireless non vengono considerate**)
- **cluster C e D**: aree in cui non saranno previste connessioni >30 Mbps

La differenza tra cluster C e D sta nell'entità dell'intervento pubblico consentito allo Stato, che nel cluster C si limita al 70% del totale degli investimenti per quel cluster, mentre nel cluster D non ha limiti.

{{% green %}}
Le **aree bianche** equivalgono ai cluster C e D, che sono quindi l'oggetto del piano BUL 2015-2020.
{{% /green %}}

Va notato che **anche nel cluster B è consentito l'intervento dello Stato**, con un limite di investimento pari al 70% del totale. Questa regola è infatti la base per la fase 2 del piano pubblico per la banda ultralarga, che prevede la copertura in FTTH delle abitazioni coperte in FTTC (cluster B).

{{% info %}}
Per approfondimenti sul piano BUL, visita [la pagina dedicata]({{< relref "/posts/bul.md" >}}).
{{% /info %}}

[^lex]: https://eur-lex.europa.eu/legal-content/IT/TXT/?uri=CELEX%3A52013XC0126%2801%29
[^notiziario]: https://www.telecomitalia.com/tit/it/notiziariotecnico/edizioni-2016/n-2-2016/capitolo-3/approfondimenti-2.html
