---
title: "Cos'è il vectoring"
slug: vectoring
date: 2019-04-20T11:40:36+02:00
lastmod: 2019-04-20
authors: [Matteo]
description: "Il vectoring è una tecnologia che permette di ridurre i disturbi (diafonia) causati da altre linee VDSL2 (fibra mista rame) i cui cavi si trovano a stretto contatto. Ecco come funziona."
categories: [Definizioni, FTTC]
image: /social/vectoring.jpg
---

L'uso di alte frequenze per offrire connessioni ad **alta velocità** su doppini in rame ([VDSL2]({{< relref "/posts/vdsl.md" >}})) ha lo svantaggio di generare **interferenze elettromagnetiche tra i cavi** che si trovano a stretto contatto.

Questo fenomeno è definito **diafonia** (*crosstalk*), e può ridurre la velocità di trasmissione anche del 50%, a seconda del numero di linee VDSL/2 interferenti.

La diafonia è curabile tramite una tecnica chiamata **vectoring** (*G.993.5*), un **metodo di trasmissione** che **coordina la trasmissione dei segnali** per annullare quasi completamente la diafonia.[^itu2]

{{< toc >}}

## Come funziona

Il processo per la rimozione della diafonia è continuo, e si può dividere in tre fasi:[^vect]

- per ciascuna linea viene **misurato il rumore**, cioè la diafonia che la linea subisce dalle altre, tramite degli appositi messaggi scambiati tra il DSLAM e il modem;
- il DSLAM combina i dati raccolti in modo da ottenere una **misura della diafonia tra ogni linea disturbata-linea disturbante**. Questo calcolo è un'operazione estremamente complessa e richiede un utilizzo elevato della CPU;
- infine, viene generato un **segnale di "anti-rumore"**, che viene applicato al segnale VDSL2 per pre-compensare la diafonia. La diafonia può essere così rimossa **quasi completamente**, a seconda di come è configurato il DSLAM.

{{% fig src="/images/vectoring-fasi.jpg" caption="Le tre fasi del vectoring. Fonte: [Gazzettabyte](http://www.gazettabyte.com/home/2012/11/9/vdsl2-vectoring-explained.html) (CC-BY-ND)" %}}

## Il vectoring in Italia

Una conseguenza del processo di cancellazione del rumore è che per poter funzionare bene deve essere applicato da un **DSLAM che ha il controllo di tutte le linee**.

Questo è il principale motivo per cui **in Italia il vectoring non è ancora stato applicato**, se non in fase sperimentale.

In Italia è infatti consentito che un operatore alternativo a TIM installi i propri DSLAM su strada ([wholesale SLU]({{< relref "/posts/vula-slu-nga.md" >}})). La delibera Agcom 747/13/CONS[^agcom1] prevede quindi l'obbligo di applicare il **Vectoring Multi-Operatore** (MOV), cioè di fare in modo che tutti gli operatori telefonici che operano in SLU si coordino per attivare il vectoring in maniera congiunta.

Nella realtà questo non è spesso fattibile, per via dei vincoli irrealistici richiesti per l'applicazione del MOV.

{{% fig src="/images/agcom-vectoring.png" caption="Vincoli stabiliti da Agcom nel 2013 per l'applicazione del vectoring" %}}

È attesa entro l'estate del 2019 una **nuova delibera di Agcom che aprirà finalmente alla possibilità di vectoring nelle aree in cui lo SLU non è presente (circa il 95%)**.[^agcom2][^fcvect]

{{< footer >}}

[^itu2]: https://www.itu.int/rec/T-REC-G.993.5
[^agcom1]: https://www.agcom.it/visualizza-documento/85ee38d8-8977-4fd6-858f-d58e72d58268
[^vect]: http://www.gazettabyte.com/home/2012/11/9/vdsl2-vectoring-explained.html
[^agcom2]: https://www.agcom.it/visualizza-documento/06a476ac-14de-48d9-8dcf-a615dea621c8
[^fcvect]: https://forum.fibra.click/d/2606-vectoring-e-delibera-agcom-n-613-18-cons-dicembre-2018/72
