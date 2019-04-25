---
title: "Cos'è la VDSL"
slug: vdsl
date: 2019-04-19T15:22:37+02:00
lastmod: 2019-04-19
authors: [Matteo]
description: "La VDSL2 è la tecnologia più utilizzata per realizzare reti FTTC (fibra mista rame). Scopri come funziona, cosa sono i profili, e quanto è diffusa in Italia."
categories: [Definizioni, FTTC]
image: /social/vdsl.jpg
---

La **VDSL2** (*Very high speed Digital Subscriber Line 2*) è una tecnologia di accesso che sfrutta le **linee telefoniche in rame esistenti** per realizzare reti [FTTC]({{< relref "/posts/architetture.md" >}}) con velocità di trasmissione **fino a 300 Mbps** in download.[^itu]

La tecnologia è un'**evoluzione dell'ADSL**, e permette di raggiungere velocità così alte utilizzando un intervallo di frequenze più largo rispetto alle altre tecnologie.

Lo svantaggio è che **la velocità diminuisce rapidamente** con l'aumentare della lunghezza dei cavi in rame. Per questo motivo, solitamente la VDSL2 viene erogata tramite punti di distribuzione posizionati su strada, vicino agli armadi ripartilinea. Questi punti si trovano in media a una distanza di 300 metri rispetto alle abitazioni.[^telecom]

{{% fig src="/images/architetture-fttc.png" caption="Architettura di rete FTTC/VDSL2" %}}

L'erogazione di una linea VDSL2 avviene tramite un **apparato attivo**, cioè alimentato, chiamato **DSLAM** (*Digital Subscriber Line Access Multiplexer*). Il DLSAM (o ONU) viene spesso collocato all'interno di un sopralzo, installato sull'armadio ripartilinea di TIM.

{{% fig src="/images/fttc-tim1.jpg" caption="Armadio TIM (a sinistra) con sopralzo ONU-DSLAM (sopra). A destra, la colonnina di alimentazione contenente un trasformatore e un contatore Enel." alt="A sinistra, un armadio ripartilinea TIM con sopra una scatola con il tetto rosso, a destra, una colonnina stretta e alta con il tetto rosso." %}}

## I profili VDSL2

Il DSLAM può essere configurato per erogare diversi **profili**. Il profilo definisce tra i vari parametri l'intervallo di frequenze da utilizzare e la potenza di trasmissione, e di conseguenza la **velocità massima raggiungibile** dalla connessione.

I due profili più usati sono:

- **17a** (17 MHz di banda): velocità massima di **100 Mbps** in download e 50 in upload;
- **35b** (35 MHZ di banda): velocità massima di **300 Mbps** in download e 100 in upload.[^itu] \(nella realtà, la velocità è limitata a 200 Mbps)

{{% fig src="/images/vdsl.png" caption="Grafico che mostra la relazione approssimata tra distanza dall'armadio (e quindi lunghezza del doppino telefonico) e la velocità in download. Oltre i 500 metri, i due profili sono equivalenti. Nel mondo reale, la velocità effettiva dipende da molti fattori e potrebbe discostarsi di molto da quanto mostrato nel grafico. Grafico realizzato con [dati Vodafone](https://www.vodafone.it/portal/Privati/Tariffe-e-Prodotti/Fibra--ADSL-e-telefono/fibra-ottica-vodafone)." %}}

## Attenuazione del segnale

Come mostrato, la distanza dall'armadio influisce sull'**attenuazione** del segnale, e riduce di conseguenza la velocità di trasmissione.

L'attenuazione è influenzata anche da altri fattori, ad esempio dalla qualità o dallo stato di **degrado della tratta in rame**. In alcuni casi, anche l'umidità o la pioggia possono temporaneamente influire in modo negativo sulla qualità della linea.

## Diafonia e vectoring

L'uso di alte frequenze per offrire alte velocità ha un altro svantaggio, cioè la creazione di **interferenze elettromagnetiche tra i cavi** che si trovano a stretto contatto.

Questo fenomeno è definito **diafonia** (*crosstalk*), e può ridurre la velocità della connessione anche del 50%, a seconda del numero di linee VDSL/2 interferenti.

{{% info %}}
Gli effetti della diafonia sono quasi annullabili con l'utilizzo del **vectoring**. [Leggi di più qua]({{< relref "/posts/vectoring.md" >}}).
{{% /info %}}

## VDSL2 in Italia

La diffusione della VDSL2 in Italia è iniziata **a partire dal 2012** per opera di Telecom Italia. I profili di velocità sono stati aumentati gradualmente nel tempo, partendo da 30 / 3 Mbps, passando per 50 / 10 e 100 / 20 per arrivare a **200 / 20 Mbps** durante il 2017.

La copertura TIM raggiunge nel 2019 circa **3000 comuni**, cioè circa l'80% delle case italiane, attraverso ~108mila armadi.[^rete1][^rete2]

La copertura FTTC-VDSL2 è accessibile anche agli operatori non dominanti (Vodafone, Fastweb, ecc.), in particolare tramite le modalità [VULA e NGA]({{< relref "/posts/vula-slu-nga.md" >}}).

{{< footer >}}

[^itu]: https://www.itu.int/rec/T-REC-G.993.2
[^telecom]: pagina 5 http://www.tlc.dii.univpm.it/blog/wp-content/uploads/2013/10/Rete_di_Accesso_TI.pdf
[^rete1]: https://rete.gruppotim.it/it
[^rete2]: https://rete.gruppotim.it/it/numeri/italia/2018/fibra
