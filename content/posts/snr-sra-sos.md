---
title: "Cosa indicano SNR, SRA e SOS in VDSL2"
slug: snr-sra-sos
date: 2019-08-22T13:22:09+02:00
lastmod: 2020-01-14T18:00:00+01:00
authors: [Andrea (Hadx) e Matteo]
description: "In VDSL2 il margine di rumore e le tecniche SRA e SOS assumono maggiore importanza. Una spiegazione semplificata del loro significato."
categories: [Definizioni, FTTC]
---

[VDSL2]({{< relref "/posts/vdsl.md" >}}) è la tecnologia che sfrutta la tratta secondaria in rame per fornire accessi ad alta velocità. Trattandosi di un'**evoluzione dell'ADSL**, molti concetti come il significato dell'attenuazione o del margine di rumore restano invariati.

Tuttavia, a differenza dell'ADSL, la VDSL2 utilizza frequenze molto più alte e maggiormente suscettibili a interferenze. Di conseguenza, assumono maggiore importanza concetti come il **margine SNR** e le tecniche **SRA (Seamless Rate Adaption)** e **SOS (Save Our Showtime)**.

{{< green >}}
Questo articolo è un'introduzione volutamente semplificata a questi tre concetti. Se ti interessa approfondire, puoi tentare di leggere lo standard VDSL2 ([G.993.2](https://www.itu.int/rec/T-REC-G.993.2)) oppure aprire una discussione [sul forum](https://forum.fibra.click) menzionando @Hadx.
{{< /green >}}

{{< toc >}}

## Il margine SNR

Il primo passo per comprendere le tecniche SRA e SOS è avere chiaro il significato di margine SNR, che viene spesso confuso con l'SNR stesso.

L'**SNR** (**Signal to Noise Ratio**) indica il rapporto tra la potenza del segnale utile e il rumore. Con "segnale" qua si intendono le informazioni trasmesse sulla linea, mentre con "rumore" qualsiasi disturbo o interferenza elettromagnetica che va a sovrapporsi al segnale utile e quindi a degradarlo.

L'SNR si esprime solitamente in decibel (dB), dove 0 dB significa che segnale e rumore sono equivalenti (in termini di potenza elettrica), mentre un SNR maggiore di zero indica che il segnale è più "forte" del rumore e quindi dei segnali interferenti.

Nelle linee ADSL o VDSL esiste un valore minimo accettabile che l'SNR deve assumere per consentire la sincronizzazione della linea. **Il margine SNR determina quanto l'SNR effettivo si discosta dall'SNR minimo**. Maggiore è il margine, maggiore è la "garanzia" che la linea sia stabile, grazie alla distanza dal valore limite. Un margine vicino a zero risulta invece "pericoloso" per la stabilità della linea.

Sui modem il margine di rumore viene indicato in diversi modi, tra cui "SNR margin", "Noise margin", o a volte anche solo "SNR", imprecisamente. Tra amici viene a volte chiamato anche "SNRm".

La variazione dell'SNR ha la conseguenza di determinare anche la **velocità della linea**. Un SNR più alto permette di avere più stabilità a discapito della velocità della linea, mentre un SNR più basso sacrifica (potenzialmente) la stabilità della linea per una maggiore velocità di allineamento.

## SRA (Seamless Rate Adaption)

L'**SRA** è una tecnica che permette di innescare un **adattamento del margine SNR** quando questo si discosta troppo dal _target_, un valore configurato dal proprietario della rete sui propri DSLAM, e che viene valutato come un ideale compromesso tra velocità di allineamento e stabilità.

Per capire meglio quando e come interviene l'SRA, vediamo un esempio (mettiti comodo). Supponiamo di partire da una situazione in cui il margine SNR sia di **6 dB**, che è il valore _target_ impostato da TIM sui suoi DSLAM VDSL2.

Supponiamo anche che **ogni notte** da mezzanotte alle 6 di mattina **ci sia un'interferenza** esterna che disturba il segnale della linea. L'aumento del rumore causa una riduzione del rapporto segnale-rumore (SNR) e di conseguenza del margine, che potrebbe quindi scendere, ipotizziamo, a 5,5 dB.

**L'SRA in questo caso non interviene**, perché un margine di questo tipo è comunque molto buono per la VDSL2, e la linea continuerà quindi a funzionare correttamente per tutta la notte.

Supponiamo ora che il giorno successivo il vicino di casa parta per le vacanze, e che prima di uscire di casa decida di spegnere il modem. In questo modo, l'assenza delle interferenze causate dalla sua linea (diafonia) porterà a una riduzione del rumore e quindi all'aumento del margine SNR, che immaginiamo possa salire da 6 dB a 6,8 dB.

In questo caso non ci sono rischi per la stabilità della linea, però stiamo sacrificando qualche Mbps di velocità perché **il margine SNR potrebbe essere più basso**. Anche in questo caso, però, **l'SRA non interviene**, perché reputa il margine SNR ancora sufficientemente accettabile. Decidiamo quindi di riavviare il modem per forzare la ri-negoziazione della portante, riportando il margine al _target_ di 6 dB e guadagnando qualche Mbps di velocità.

Un paio di settimane dopo, una notte, mentre il margine di rumore è a 5,5 dB, il vicino di casa torna dalle vacanze e per prima cosa **accende il modem**. L'accensione della linea provoca **nuove interferenze elettromagnetiche**, che causano la riduzione del margine SNR a 4,7 dB.

Nonostante una linea con margine 4,7 dB possa essere perfettamente stabile, in questo caso **interviene l'SRA**, che riporta il margine a 6 dB in modo _seamless_ (senza interruzioni), a discapito di qualche Mbps di velocità.

Nel caso di linee erogate da TIM (anche [VULA/NGA]({{< relref "/posts/vula-slu-nga.md" >}})), l'SRA interviene approssimativamente **quando il margine scende a 5,1 - 5,2 dB o sale a circa 7 dB**, con l'obiettivo di riportarlo al _target_ di 6 dB e regolando di conseguenza la velocità della linea.

## Il margine a 12 dB

Il valore _target_ di 6 dB menzionato in precedenza vale per gran parte delle linee VDSL2 in Italia. Tuttavia, ci sono dei casi in cui una linea particolarmente instabile con **frequenti disconnessioni** può essere riconfigurata per avere come _target_ un **margine SNR di 12 dB**.

Avere il margine a 12 dB porta un vantaggio e uno svantaggio:

- **la linea è più stabile**, e cioè è meno suscettibile al rumore. Per fare un esempio, se un'improvvisa interferenza causata da un apparato elettronico causa una perdita di 3 dB di margine, il rischio di perdere la connessione è molto più alto con un margine di 3 dB rispetto ad averlo a 9 dB. In altre parole, con un _target_ a 12 dB viene aumentato il "cuscinetto" che permette di attutire gli effetti del rumore;
- **la linea perde qualche Mbps di velocità**, perché è possibile allocare un numero inferiore di bit per tono rispetto ad un SNR più basso.

## SOS (Save Our Showtime)

Un'altra tecnica per il controllo del margine di rumore è l'**SOS** (Save Our Showtime). Semplificando, l'**SOS** può essere visto come una versione **più veloce** e aggressiva dell'SRA. Il principio che sta alla base dell'SOS è che **un forte rumore può colpire la linea in ogni momento**, anche in modo improvviso e repentino. Se il rumore è di notevole entità, la probabilità di "caduta" della linea è alta.

L'SOS permette quindi di reagire rapidamente a disturbi inaspettati, senza dover necessariamente ricorrere alla modifica del _target_ SNR a 12 dB. Ci si può accorgere che l'SOS è attivo controllando sul proprio modem il valore "INP" e verificando se si aggira intorno a 100 piuttosto che a 60.

Va notato a questo punto che **12 dB e SOS non sono direttamente collegati**. I due meccanismi vengono abilitati in modo indipendente a discrezione dell'operatore, anche se è possibile che le due cose spesso coincidano.

{{< info >}}
Alcuni dettagli tecnici sull'SOS sono disponibili in fondo a [questo messaggio](https://forum.fibra.click/d/3481-profilo-sos-e-seccature-varie/9), da cui questo articolo è estratto.
{{< /info >}}

{{< footer >}}
