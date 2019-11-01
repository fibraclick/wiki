---
title: "Come consultare le tratte in fibra ottica del piano BUL con il SINFI"
slug: bul-sinfi
date: 2019-10-28T11:32:11+01:00
lastmod: 2019-10-28T15:15:00+01:00
authors: [Matteo]
description: "Come consultare i dati pubblicati dal SINFI per capire quali aree di un comune saranno coperte con fondi pubblici in fibra ottica."
categories: [Piano BUL, FTTH, Copertura]
image: /social/sinfi.jpg
---

Da ottobre 2019 il [SINFI](https://www.sinfi.it) (il catasto nazionale delle infrastrutture) mette a disposizione pubblicamente i **tracciati della fibra ottica** posata nell'ambito del [piano nazionale Banda Ultra Larga]({{< relref "/posts/bul.md" >}}).

I dati sono pubblicati sotto forma di Shapefile ESRI, un formato vettoriale standard per la condivisione di dati georeferenziati, e risultano utili per capire **quali aree di un comune sono coperte** da Open Fiber con fondi pubblici, e con quale **tecnologia (FTTH o FWA)**.

{{% green %}}
I dati sono pubblicati solo per i comuni con progetto esecutivo per la fibra approvato, cioè i comuni che si trovano nello stato "In attesa di autorizzazioni", "In esecuzione", "Lavori completati" o "Terminato".
{{% /green %}}

{{< toc >}}

## Come consultare i dati

I dati comune per comune sono accessibili tramite [questa pagina](https://www.sinfi.it/portal/index.php/35-esecutivi_bul_concessione) del SINFI. Dopo aver scelto la regione, seleziona il comune per scaricare il file ZIP contenente i dati Shapefile.

{{% warn %}}
Per alcuni comuni sono presenti più file ZIP. In tal caso, conviene scaricarli tutti e consultarli poi uno alla volta.
{{% /warn %}}

Per facilitare la consultazione dei dati Shapefile, FibraClick offre una pagina web appositamente realizzata. [Premi qui]({{< relref "/sinfi.md" >}}) per aprire il visualizzatore SINFI, poi premi il tasto "Sfoglia" e seleziona il file ZIP.

Se tutto va bene, sulla mappa verrà mostrato il tracciato della fibra ottica. Premendo su una tratta verranno mostrati i relativi attributi, tra cui il tipo della tratta (aerea, interrata, trincea, ecc.) e la lunghezza.

## Come interpretare i dati

Il tracciato della fibra ottica può dare un'idea delle abitazioni che saranno cablate in fibra ottica (FTTH).

È possibile che la fibra ottica non passi da tutte le vie, però un'abitazione può essere cablata anche se ha un ROE/PTA a una distanza inferiore a 50 metri. Il punto dove si trova il ROE/PTA deve essere quindi "toccato" dal tracciato.

Nella mappa che segue, si riesce anche a intuire che la lunga tratta in fibra ottica che attraversa la ferrovia serve a cablare una BTS (stazione radio base) per la telefonia, che verrà in questo caso utilizzata anche per erogare il segnale FWA di Open Fiber.

{{% fig src="/images/bul-sinfi-fwa.jpg" caption="La tratta in fibra ottica che attraversa la ferrovia serve a cablare la BTS Open Fiber." alt="" %}}

{{< footer >}}
