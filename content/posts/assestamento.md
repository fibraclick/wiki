---
title: "Le linee Internet hanno bisogno di «assestarsi»?"
slug: assestamento
date: 2019-07-05T12:03:00+02:00
lastmod: 2019-07-05T12:03:00+02:00
authors: [Matteo, Andrea (Hadx)]
description: "Leggende narrano che dopo l'attivazione di una nuova linea ci sia da attendere che si «assesti». Non è vero, e vi spieghiamo perché."
categories: [FTTC, FTTH]
---

**No**. La velocità non migliora nei giorni o nelle settimane successive all'attivazione di una connessione a Internet.

Nel caso di una **linea <abbr title="Fiber To The Cabinet">FTTC</abbr>** ([VDSL]({{< relref "/posts/vdsl.md" >}})), **la velocità viene negoziata** tra modem e DSLAM, cioè l'apparato che si trova vicino all'armadio ripartilinea su strada, **in base alle caratteristiche della linea**. La velocità può poi migliorare o peggiorare in base alla presenza di interferenze, variazioni dello stato di degrado del doppino o altri interventi. Non esiste però un periodo di assestamento. **Il processo di negoziazione è lo stesso dal primo minuto di vita della linea.**

Nel caso di una **linea <abbr title="Fiber To The Home">FTTH</abbr>** ([GPON]({{< relref "/posts/gpon.md" >}})), a meno di guasti la velocità negoziata è sempre il massimo supportato dalla tecnologia GPON, cioè 2,5 Gbps in download e 1,25 in upload. La velocità viene poi limitata dall'operatore in base al profilo del proprio contratto, e quella effettiva può [dipendere da molti altri fattori]({{< relref "/posts/ftth-1000.md" >}}). Non esiste comunque un periodo di assestamento.

{{< info >}}
Vedi anche:

- [Cosa significano FTTC, FTTS, FTTE, FTTH e FWA]({{< relref "/posts/architetture.md" >}})
- [Cos'è la VDSL]({{< relref "/posts/vdsl.md" >}})
- [Cos'è e come funziona GPON]({{< relref "/posts/gpon.md" >}})
- [Perché la FTTH non va a 1000 Mbps?]({{< relref "/posts/ftth-1000.md" >}})
{{< /info >}}

{{< footer >}}
