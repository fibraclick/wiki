---
title: "Cosa sono le aree nere, grigie e bianche"
slug: aree-nere-grigie-bianche
date: 2019-04-12T11:45:24+02:00
lastmod: 2021-07-20T21:00:00+02:00
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

Con "banda ultralarga" si intendono reti di tipo NGA (*Next Generation Access*)[^lex], che permettono **velocità in download di almeno 30 Mbps**. Nel contesto italiano si tratta quindi di reti FTTC, FTTH, oppure FWA (ma solo su frequenze licenziate).

Il periodo di riferimento consigliato dalla Commissione Europea è di **tre anni**, ma gli Stati membri possono scegliere periodi più lunghi. Ad esempio in Italia con la [mappatura 2021]({{< relref "/posts/consultazione2021.md" >}}) sono stati raccolti **dati di copertura per 5 anni**, tra 2021 e 2026.

{{< info >}}
Vedi anche [Cosa significano FTTC, FTTS, FTTE, FTTH e FWA]({{< relref "/posts/architetture.md" >}}).
{{< /info >}}

{{< green >}}
###### Reti vs operatori

È importante notare che con l'espressione "due reti" non si intende presenza di due operatori in generale, ma di due infrastrutture di rete. Ad esempio, in Italia, gli operatori che rivendono il servizio FTTC di TIM in modalità [VULA]({{< relref "/posts/vula-slu-nga.md" >}}) non vengono contati come infrastrutture separate. Lo sono invece in caso di presenza di armadi [SLU]({{< relref "/posts/vula-slu-nga.md" >}}) dedicati.
{{< /green >}}

**Le aree sono il riferimento a livello europeo per valutare la possibilità di intervento da parte dello Stato**.

In Italia la classificazione delle aree è un compito che spetta a Infratel, cioè l'azienda controllata dal Ministero dello Sviluppo Economico che ha l'obiettivo di incentivare lo sviluppo delle reti di accesso a Internet.

Infratel aggiorna periodicamente una **mappatura delle aree** tramite delle apposite **consultazioni pubbliche**, a cui gli operatori possono rispondere dichiarando la copertura prevista per i successivi tre anni.

Quando si parla di area, non si intende però il territorio di un comune. La *Strategia per la banda ultralarga* del 2015 ha suddiviso il territorio italiano in 94.645 aree distribuite sui circa 8.000 comuni italiani, ricalcando approssimativamente il concetto di "località" definito da ISTAT e con lo scopo di permettere una raccolta dei dati di copertura più granulare e precisa.[^aree2015] L'esito della consultazione 2015, condotta in due fasi, ha perciò prodotto per ciascuna area una percentuale di unità immobiliari coperte da servizi a banda ultralarga.

[^aree2015]: https://www.camera.it/temiap/t/news/post-OCD15-11885

In vista dell'avvio dei bandi di gara per il [piano BUL aree bianche]({{< relref "/posts/piano-aree-bianche.md" >}}), **nel 2016 la mappatura è stata rifinita** chiedendo agli operatori di dichiarare le **previsioni di copertura per singolo numero civico**, in modo da stabilire con precisione le zone oggetto di intervento pubblico.[^cons2015]

[^cons2015]: https://www.senato.it/application/xmanager/projects/leg17/attachments/dossier/file_internets/000/002/182/2017_07_04_-_Invitalia_-_Analisi_delle_attivit%C3%A0_e_Fasi_previste_dalla_delibera_CIPE_65-2015.pdf

**Dal 2017 in poi**, le consultazioni Infratel per la mappatura della banda ultralarga **si sono sempre svolte a livello di singolo numero civico**.

Di conseguenza, non è propriamente corretto dire che un comune è ad esempio "area bianca", perché dipende dalla copertura dichiarata per singolo indirizzo. È corretto invece dire che un determinato indirizzo appartiene ad esempio alle aree bianche, oppure che un comune è al 90% bianco.

## I cluster

In Italia, spesso si usa il termine cluster per identificare un insieme di aree[^strategia]. Nello specifico:

[^strategia]: *Strategia italiana per la banda ultralarga*, 2015 https://www.mise.gov.it/images/stories/documenti/ITALIA_Strategia_BUL-Piano_di_investimenti_fin.pdf

- **cluster A**: tutte le aree nere;
- **cluster B**: tutte le aree grigie;
- **cluster C e D**: tutte le aree bianche.

La differenza tra cluster C e D sta nell'entità dell'intervento pubblico consentito allo Stato, che nel cluster C si limita al 70% del totale degli investimenti per quel cluster, mentre nel cluster D non ha limiti.[^cipe]

[^cipe]: *Fondo sviluppo e coesione 2014-2020: piano di investimenti per la diffusione della banda ultra larga*, delibera CIPE n. 65/2015 https://www.gazzettaufficiale.it/eli/id/2015/10/14/15A07661/sg

Va notato che **anche nel cluster B è consentito l'intervento dello Stato**, con un limite di investimento pari al 70% del totale.

{{% warn %}}
⚠️ Una versione precedente di questa pagina riportava che i cluster sono definiti in base alla velocità minima offerta (30/100 Mbps). La definizione era errata e basata sul linguaggio ambiguo della delibera CIPE 65/2015.
{{% /warn %}}

## Il piano banda ultralarga

La *Strategia nazionale per la banda ultralarga* (piano BUL) è il progetto avviato nel 2015 con l'obiettivo di soddisfare gli **obiettivi europei di sviluppo e diffusione della banda ultralarga**.

{{< info >}}
Per approfondimenti sul piano BUL, visita [la pagina dedicata]({{< relref "/posts/piano-bul.md" >}}).
{{< /info >}}
