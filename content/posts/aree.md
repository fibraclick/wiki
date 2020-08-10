---
title: "Cosa sono le aree nere, grigie e bianche"
slug: aree-nere-grigie-bianche
date: 2019-04-12T11:45:24+02:00
lastmod: 2020-06-23T18:00:00+02:00
authors: [Matteo]
description: La distinzione tra aree nere, grigie e bianche serve per classificare il grado di investimenti per la banda ultralarga presenti sul territorio.
categories: [Definizioni, Copertura, Piano BUL]
image: /social/aree-nere-grigie-bianche.jpg
---

Le **aree nere, grigie e bianche** sono una classificazione del territorio stabilita dalla Commissione Europea per misurare il livello di investimenti privati per quanto riguarda le reti a banda ultralarga.

{{< toc >}}

## Le aree

In dettaglio, le aree si definiscono così[^lex]:

[^lex]: *Comunicazione della Commissione — Orientamenti dell’Unione europea per l’applicazione delle norme in materia di aiuti di Stato in relazione allo sviluppo rapido di reti a banda larga* https://eur-lex.europa.eu/legal-content/IT/TXT/?uri=CELEX%3A52013XC0126%2801%29

- **aree nere**: presenza nei prossimi tre anni di almeno due reti a banda ultralarga di operatori diversi;
- **aree grigie**: presenza nei prossimi tre anni di una sola rete a banda ultralarga;
- **aree bianche**: nessuna previsione di investimento privato per banda ultralarga nei prossimi tre anni.

Con "banda ultralarga" si intendono reti di tipo NGA (*Next Generation Access*)[^lex], che permettono velocità in download superiori a 30 Mbps. Nel contesto italiano si tratta quindi di reti FTTC, FTTH, oppure FWA su frequenze licenziate.

{{< info >}}
Vedi anche [Cosa significano FTTC, FTTS, FTTE, FTTH e FWA]({{< relref "/posts/architetture.md" >}}).
{{< /info >}}

{{< green >}}
###### Aree vs comuni
Quando si parla di area, non si intende il territorio di un comune. Ogni comune è suddiviso in più aree, che ricalcano approssimativamente il concetto di "località" definito da ISTAT. In Italia sono state definite 94˙645 aree, su circa 8˙000 comuni, e ciascuna area viene classificata come nera, grigia o bianca per mezzo delle consultazioni svolte annualmente da Infratel.
{{< /green >}}

È importante notare che con l'espressione "due reti" non si intende presenza di due operatori in generale, ma di due infrastrutture di rete. Ad esempio, in Italia, gli operatori che rivendono il servizio FTTC di TIM in modalità [VULA]({{< relref "/posts/vula-slu-nga.md" >}}) non vengono contati come infrastrutture separate. Lo sono invece in caso di presenza di armadi [SLU]({{< relref "/posts/vula-slu-nga.md" >}}) dedicati, come nella foto che segue.

{{< fig src="/images/slu.jpg" caption="Armadi per la FTTC di Fastweb, Vodafone e TIM. La zona coperta dagli armadi è un'area nera. Grazie a Emilio M. per la foto" alt="Strada con marciapiede, sul quale sono posizionati in fila alcuni armadi o box per la FTTC" >}}

**Le aree sono il riferimento a livello europeo per valutare la possibilità di intervento da parte dello Stato**.

In Italia la classificazione delle aree è un compito che spetta a Infratel, cioè l'azienda controllata dal Ministero dello Sviluppo Economico che ha l'obiettivo di incentivare lo sviluppo delle reti di accesso a Internet.

Infratel aggiorna periodicamente una **mappatura delle aree** tramite delle apposite **consultazioni pubbliche**, a cui gli operatori possono rispondere dichiarando la copertura prevista per i prossimi tre anni.

{{< info >}}
I dati delle consultazioni sono consultabili tramite il sito istituzionale "BUL". Leggi [Come controllare la presenza di intervento pubblico o privato]({{< relref "/posts/sitobul2019.md" >}}) per approfondimenti.
{{< /info >}}

## I cluster

In Italia, spesso si usa il termine cluster per identificare un insieme di aree[^strategia]. Nello specifico:

[^strategia]: *Strategia italiana per la banda ultralarga*, 2015 https://www.mise.gov.it/images/stories/documenti/ITALIA_Strategia_BUL-Piano_di_investimenti_fin.pdf

- **cluster A**: tutte le aree nere
- **cluster B**: tutte le aree grigie
- **cluster C e D**: tutte le aree bianche

La differenza tra cluster C e D sta nell'entità dell'intervento pubblico consentito allo Stato, che nel cluster C si limita al 70% del totale degli investimenti per quel cluster, mentre nel cluster D non ha limiti.[^cipe]

[^cipe]: *Fondo sviluppo e coesione 2014-2020: piano di investimenti per la diffusione della banda ultra larga*, delibera CIPE n. 65/2015 https://www.gazzettaufficiale.it/eli/id/2015/10/14/15A07661/sg

Va notato che **anche nel cluster B è consentito l'intervento dello Stato**, con un limite di investimento pari al 70% del totale.

{{% warn %}}
⚠️ Una versione precedente di questa pagina riportava che i cluster sono definiti in base alla velocità minima offerta (30/100 Mbps). La definizione era errata e basata sul linguaggio ambiguo della delibera CIPE 65/2015.
{{% /warn %}}

## Il piano BUL

La *Strategia nazionale per la banda ultralarga* (piano BUL) è il progetto avviato nel 2015 con l'obiettivo di coprire tutte le aree bianche del paese (cluster C e D), riguardanti circa il 25% della popolazione. Si tratta quindi di tutte le abitazioni non coperte da reti NGA (>30 Mbps).

Il piano prevede un [intervento diretto]({{< relref "/posts/pubblico-privato.md" >}}) per la realizzazione di una rete in fibra ottica, che resterà di proprietà pubblica ma sarà data in concessione a [Open Fiber]({{< relref "/posts/openfiber.md" >}}) per vent'anni.

{{< info >}}
Per approfondimenti sul piano BUL, visita [la pagina dedicata]({{< relref "/posts/bul.md" >}}).
{{< /info >}}
