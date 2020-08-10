---
title: "Cos'è il vectoring"
slug: vectoring
date: 2019-04-20T11:40:36+02:00
lastmod: 2020-06-21T12:00:00+02:00
authors: [Matteo]
description: Il vectoring è una tecnologia che permette di migliorare la qualità delle linee fibra misto rame. Come funziona e a che punto siamo in Italia.
categories: [Definizioni, FTTC]
image: /social/vectoring.jpg
---

L'uso di alte frequenze per offrire connessioni ad **alta velocità** su doppini in rame ([VDSL2]({{< relref "/posts/vdsl.md" >}})) ha lo svantaggio di generare **interferenze elettromagnetiche tra i cavi** che si trovano a stretto contatto.

Questo fenomeno è definito **diafonia** (*crosstalk*), e può ridurre la velocità di trasmissione anche del 50%, a seconda del numero di linee VDSL/2 interferenti.

La diafonia è curabile tramite una tecnica chiamata **vectoring** (*G.993.5*), un **metodo di trasmissione** che **coordina la trasmissione dei segnali** per annullare quasi completamente la diafonia.[^itu2]

Il vectoring riduce il problema della diafonia ma **non risolve le limitazioni delle linee in rame**: la lunghezza della tratta in rame resta infatti il principale fattore che determina la velocità della linea. Il vectoring è d'aiuto in presenza di sintomi che fanno pensare alla diafonia, cioè la perdita di velocità con il passare del tempo senza aumento dell'attenuazione del segnale.

{{< toc >}}

## Come funziona

Il processo per la rimozione della diafonia è continuo, e si può dividere in tre fasi:[^vect]

- per ciascuna linea viene **misurato il rumore**, cioè la diafonia che la linea subisce dalle altre, tramite degli appositi messaggi scambiati tra il DSLAM e il modem;
- il DSLAM combina i dati raccolti in modo da ottenere una **misura della diafonia tra ogni linea disturbata-linea disturbante**. Questo calcolo è un'operazione estremamente complessa e richiede un utilizzo elevato della CPU;
- infine, viene generato un **segnale di "anti-rumore"**, che viene applicato al segnale VDSL2 per pre-compensare la diafonia. La diafonia può essere così rimossa **quasi completamente**, a seconda di come è configurato il DSLAM.

{{< fig src="/images/vectoring-fasi.jpg" caption="Le tre fasi del vectoring. Fonte: [Gazzettabyte](http://www.gazettabyte.com/home/2012/11/9/vdsl2-vectoring-explained.html) (CC-BY-ND)" >}}

## Il vectoring in Italia

Una conseguenza del processo di cancellazione del rumore è che per poter funzionare bene deve essere applicato da un **DSLAM che ha il controllo di tutte le linee**.

Questo è il principale motivo per cui **in Italia il vectoring non è stato applicato per anni**, se non in fase sperimentale. In Italia è infatti consentito che un operatore alternativo a TIM possa installare i propri DSLAM su strada ([wholesale SLU]({{< relref "/posts/vula-slu-nga.md" >}})). La delibera Agcom 747/13/CONS[^agcom1] prevede quindi l'obbligo di applicare il **Vectoring Multi-Operatore** (MOV), cioè di fare in modo che tutti gli operatori telefonici che operano in SLU si coordino per attivare il vectoring in maniera congiunta. Nella realtà questo non è spesso fattibile, per via dei vincoli irrealistici richiesti per l'applicazione del MOV.

La delibera Agcom 348/19/CONS[^agcom2] del 18 luglio 2019 **apre finalmente alla possibilità di utilizzare il vectoring** senza MOV nelle aree in cui lo SLU non è presente, cioè circa il 95% dei comuni.[^slu] Prevede anche che in presenza di SLU gli operatori possano procedere con l'attivazione del vectoring anche in assenza di un accordo, una voltra trascorsi 2 mesi dalla proposta.[^fcvect]

Durante il 2019 TIM ha avviato una sperimentazione del vectoring molto ristretta e solo in alcune aree geografiche[^piemonte], mentre **da maggio 2020 risulta in fase di attivazione su molti DSLAM**, soprattutto nelle [aree bianche]({{< relref "/posts/aree.md" >}}).[^deployment1][^deployment2]

{{< footer >}}

[^itu2]: *G.993.5 : Self-FEXT cancellation (vectoring) for use with VDSL2 transceivers* https://www.itu.int/rec/T-REC-G.993.5
[^agcom1]: *Delibera n. 747/13/CONS*, 19 dicembre 2013 https://www.agcom.it/visualizza-documento/85ee38d8-8977-4fd6-858f-d58e72d58268
[^vect]: *VDSL2 vectoring explained* http://www.gazettabyte.com/home/2012/11/9/vdsl2-vectoring-explained.html
[^agcom2]: *Delibera n. 348/19/CONS*, 18 luglio 2019 https://www.agcom.it/visualizza-documento/1fe1fd57-1b27-4755-bfd6-89455e12ce09
[^fcvect]: https://forum.fibra.click/d/3450-agcom-via-libera-al-vectoring
[^slu]: https://it.wikipedia.org/wiki/VDSL2#Copertura_in_Italia
[^piemonte]: *TIM avvia la sperimentazione del vectoring in Piemonte!*, 26 gennaio 2019 https://www.ilpuntotecnico.com/tim-avvia-la-sperimentazione-del-vectoring-in-piemonte/
[^deployment1]: https://forum.fibra.click/d/7439-vectoring-attivo-in-area-bianca
[^deployment2]: https://forum.fibra.click/d/8158-stasera-si-e-attivato-il-vectoring-dslam-nokia
