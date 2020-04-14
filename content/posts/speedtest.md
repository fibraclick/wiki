---
title: "Come fare uno speedtest da terminale"
slug: speedtest
date: 2020-04-13T21:00:00+02:00
lastmod: 2020-04-14T12:00:00+02:00
authors: [Matteo]
description: "Eseguire gli speedtest tramte il browser non è sempre un metodo affidabile. Questa guida spiega come eseguirli tramite terminale, su Windows e macOS"
categories: [Reti]
image: /social/speedtest.jpg
---

Eseguire gli speedtest tramite il browser, ad esempio tramite i siti web Speedtest.net, Fast.com o SpeedOf.me, è un metodo **non sempre affidabile, specialmente con alte velocità**.

Infatti, il codice che esegue lo speedtest può incorrere in certi **limiti di prestazioni** dovuti al browser, che fa da tramite per le operazioni di rete.[^limiti]

[^limiti]: Ad esempio, il browser potrebbe essere ancora occupato con il caricamento e rendering della pagina o della pubblicità, oppure attuare una sorta di "risparmio energetico" per ridurre l'uso di CPU, ecc.

Fortunatamente è possibile eseguire gli speedtest **tramite il terminale** (o console), cioè avviando sul proprio computer un piccolo programma che è in grado di **aggirare le limitazioni principali dei browser** ed eseguire lo speedtest. I risultati più precisi solitamente si ottengono proprio utilizzando questo metodo.

In questo articolo mostriamo come usare **Speedtest CLI**, che è la versione per terminale del noto sito Speedtest.net (Ookla).

{{< green >}}
###### Cos'è una CLI?

**CLI** sta per **Command Line Interface**, cioè interfaccia a riga di comando. È un modo per impartire comandi al sistema operativo, scrivendoli appunto riga per riga.

Con una semplificazione la CLI viene a volte chiamata anche *shell* (guscio), proprio perché fa da tramite tra l'utente e il sistema operativo. Anche l'interfaccia grafica del sistema operativo è una shell (la GUI).

Ma torniamo in tema...
{{< /green >}}

{{< toc >}}

## Prima di iniziare

Se il tuo obiettivo è testare la **velocità massima** della linea devi utilizzare una connessione cablata, collegando quindi il computer al router tramite un **cavo Ethernet**.

Assicurati di usare il computer più recente che hai a disposizione, perché la **velocità del processore** può influire in modo significativo sui risultati.

Le istruzioni variano a seconda del sistema operativo. Di seguito trovi quelle per Windows e macOS.

## Windows

Prima di iniziare, devi sapere che Speedtest CLI funziona solo su **processori con architettura a 64 bit**. Tutti i computer degli ultimi anni sono a 64 bit, ma se il tuo è un po' vecchiotto è meglio verificare prima. Trovi le istruzioni [qua](https://support.microsoft.com/it-it/help/15056/windows-32-64-bit-faq).

Per scaricare Speedtest CLI, vai su [questa pagina](https://www.speedtest.net/it/apps/cli), scorri verso il fondo e premi il pulsante *Download per Windows*. Salva il file ZIP e poi estrailo (tasto destro => *Estrai tutto*).

Nella cartella in cui hai estratto i file, clicca sulla barra dell'indirizzo che trovi in alto, scrivi `cmd` e premi *Invio* sulla tastiera:

{{< fig src="/images/speedtest/windows-1.gif" >}}

Si aprirà un prompt dei comandi, cioè la shell di Windows.

Per avviare uno speedtest, scrivi semplicemente `speedtest` e premi *Invio*. La prima volta ti chiederà di accettare i termini del servizio. Scrivi **YES** per confermare.

{{< fig src="/images/speedtest/windows-2.png" >}}

Dopo qualche secondo verrà mostrato il risultato:

{{< fig src="/images/speedtest/windows-3.png" >}}

È anche possibile selezionare un server specifico, di cui bisogna però conoscere l'identificativo numerico. Per ottenere una lista dei server più "vicini", scrivi `speedtest -L`, e nella prima colonna troverai l'ID dei server.

Puoi ora specificare l'ID con l'opzione `-s`. Ad esempio:
- per il server Vodafone di Milano: `speedtest -s 4302`
- per il server EOLO di Milano: `speedtest -s 3997`

{{< info >}}
Trovi la lista completa dei server di Speedtest.net in [questa pagina XML](https://www.speedtest.net/speedtest-servers.php), da cui puoi estrarre l'ID del server.
{{< /info >}}

Per mostrare tutte le opzioni di Speedtest CLI puoi scrivere `speedtest -h`.

## macOS

Per poter installare Speedtest CLI su macOS, è prima necessario installare uno strumento chiamato **Homebrew**, che serve a facilitare l'installazione e l'aggiornamento di alcuni software.

Per prima cosa devi aprire una finestra del terminale. Per farlo, apri il Launchpad e scrivi "terminale", poi clicca su **Terminale**.

Recati ora sul [sito ufficiale di Homebrew](https://brew.sh/index_it) e copia la riga di comando che trovi al centro dello schermo. Incollala nel terminale, e premi *Invio* sulla tastiera.

Ti verrà chiesto di premere *Invio* per continuare, e poi di inserire la password del tuo utente macOS:

{{< fig src="/images/speedtest/macos-1.jpg" >}}

Dopo qualche secondo il comando terminerà l'installazione, e potrai quindi procedere con l'installazione di Speedtest CLI, eseguendo questi tre comandi, uno dopo l'altro[^speedtestcli]:

[^speedtestcli]: https://www.speedtest.net/apps/cli

<pre>
brew tap teamookla/speedtest
brew update
brew install speedtest --force
</pre>

A questo punto potrai eseguire Speedtest CLI scrivendo semplicemente `speedtest`. La prima volta ti chiederà di accettare i termini del servizio. Scrivi **YES** due volte per confermare.

{{< fig src="/images/speedtest/macos-2.jpg" >}}

Dopo qualche secondo verrà mostrato il risultato:

{{< fig src="/images/speedtest/macos-3.jpg" >}}

È anche possibile selezionare un server specifico, di cui bisogna però conoscere l'identificativo numerico. Per ottenere una lista dei server più "vicini", scrivi `speedtest -L`, e nella prima colonna troverai l'ID dei server.

Puoi ora specificare l'ID con l'opzione `-s`. Ad esempio:
- per il server Vodafone di Milano: `speedtest -s 4302`
- per il server EOLO di Milano: `speedtest -s 3997`

{{< info >}}
Trovi la lista completa dei server di Speedtest.net in [questa pagina XML](https://www.speedtest.net/speedtest-servers.php), da cui puoi estrarre l'ID del server.
{{< /info >}}

Per mostrare tutte le opzioni di Speedtest CLI puoi scrivere `speedtest -h`.

Le volte successive che vorrai eseguire uno speedtest potrai semplicemente aprire il terminale e scrivere `speedtest`.

{{< footer >}}
