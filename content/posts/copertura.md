---
title: "Mancata Copertura FTTH: cause e soluzioni"
slug: copertura
date: 2026-09-08
lastmod: 2026-09-08T10:00:00+02:00
authors: [LeoVentu]
description: "Guida per comprendere le cause della mancata copertura FTTH rispetto ai vicini e le differenze tra bonifica e censimento."
categories: [Copertura, FTTH, Piano BUL, PI1G]
---

Capita spesso di domandarsi: *"come mai il mio vicino risulta coperto da [FTTH]({{< relref "/posts/architetture.md" >}}) mentre io no?"*. Questa pagina della wiki si pone l'obiettivo di fornire una spiegazione sulla terminologia e sulle diverse casistiche in cui ci si può imbattere ponendosi una domanda di questo tipo.

Il punto di partenza è che **la copertura riguarda il singolo numero civico e non l'intera via**: è quindi del tutto normale che due edifici affiancati abbiano stati di copertura diversi, perché possono ricadere in piani differenti oppure essere attestati su elementi di rete divers.

{{< toc >}}

## Terminologia: Bonifica vs. Censimento

Come primo punto, è necessario fare un po' di chiarezza sulla terminologia, in particolare distinguendo due termini che vengono spesso usati come sinonimi o in maniera impropria: **bonifica** e **censimento**.

- **Bonifica:** si intende l'operazione volta a sanare una situazione in cui il civico è fisicamente raggiunto dall'infrastruttura, ma nei sistemi di copertura degli operatori tale copertura non risulta. Il civico è quindi presente a sistema, ma non gli sono state assegnate le risorse corrette. Nella maggior parte dei casi si tratta di un intervento sui database, ma può comportare anche una lavorazione in campo, come il rilegamento di una scala non collegata.
- **Censimento:** si intende l'operazione tramite cui viene richiesto all'operatore di riconoscere un civico e di inserirlo all'interno dei database. In questo caso, il civico non è presente nei sistemi degli operatori ed è quindi necessario effettuare tutte le procedure previste (anche sul campo) per la sua inclusione.

In estrema sintesi: se il civico esiste per l'operatore ma è "sbagliato", serve una bonifica; se per l'operatore il civico non esiste affatto, serve un censimento.

## Prima di pensare a un errore

Molte segnalazioni di copertura mancante non nascono da un'anomalia, ma da tre situazioni più semplici che conviene escludere prima di rivolgersi a un operatore.

### Il vicino potrebbe essere su un'altra rete

In Italia convivono più reti FTTH sovrapposte e **non tutti gli operatori vendono su tutte le reti**. Se il vicino è coperto da [FiberCop]({{< relref "/posts/fibercop.md" >}}) e la verifica viene fatta sul sito di [Open Fiber]({{< relref "/posts/openfiber.md" >}}) (o viceversa) il risultato sarà negativo anche in totale assenza di errori. Conviene quindi controllare il proprio indirizzo su entrambi i portali di verifica degli operatori[^coperturaof][^coperturafc], e non solo sul sito dell'operatore a cui si è interessati che potrebbe non vedere su entrambe le reti.

### I lavori potrebbero essere ancora in corso

La copertura in alcuni non viene rilasciata su tutto il comune, come invece succede in [BUL]({{< relref "/posts/piano-aree-bianche.md" >}}), nello stesso momento, ma **per aree via via completate**: è normale che una parte della via risulti già vendibile e un'altra no per settimane o mesi. In questo caso l'unica cosa che si può fare è attendere la fine dei lavori con il conseguente rilasccio della vendibilità. 

## Analisi della situazione: Bandi Pubblici e Investimenti Privati

Fornita una breve panoramica di questi due termini, possiamo analizzare la situazione nel dettaglio.

Spesso si pensa che la copertura di un solo lato della via, o esclusivamente del proprio vicino di casa, comporti automaticamente un errore, ma non è sempre così. Occorre infatti fare delle distinzioni importanti. Come sappiamo, la copertura FTTH in Italia è realizzata tramite bandi pubblici oppure finanziamenti privati: ed è qui che nasce la prima distinzione fondamentale.

### Bandi Pubblici

Nel caso di bandi pubblici, bisogna innanzitutto verificare di essere stati inseriti all'interno del bando stesso e deve risultare dichiarata la copertura per FTTH per il civico. Vi sono casi in cui civici in [area bianca]({{< relref "/posts/aree.md#le-aree" >}}) non sono stati inclusi nel piano FTTH del comune, oppure civici in area grigia non risultano coperti dal Piano Italia 1 Gbps perché dichiarati già coperti da altri operatori o inesistenti.

Queste situazioni vanno gestite in maniera diversa a seconda del piano.

#### Piano aree bianche (BUL)

Nel [piano aree bianche]({{< relref "/posts/piano-aree-bianche.md" >}}), realizzato da Open Fiber per conto di Infratel Italia, si ha una maggiore flessibilità. Se ci si trova ad una distanza (rispetto al confine della proprietà) di 30 metri dal [ROE]({{< relref "/posts/gpon.md#gli-elementi-di-una-rete-ottica-passiva" >}}) più vicino, risulta possibile richiedere a Open Fiber, tramite un operatore, la verifica per l'ampliamento della copertura. Si ricorda che la richiesta non garantisce sempre un esito positivo e in molti casi la risposta richiede parecchi mesi.

#### Piano Italia 1 Gbps (PI1G)

Nel caso del [Piano Italia 1 Gbps]({{< relref "/posts/piano-italia-1-gbps.md" >}}) la situazione è abbastanza complessa, anche perché i 15 lotti del bando sono divisi tra **Open Fiber e TIM/FiberCop**, quindi bisogna differenziare la valutazione delle situazioni.

Qualora il civico rientri tra quelli scartati perché privo di Unità Immobiliari (UI) o inesistente, l'unica cosa che si può fare è segnalare accuratamente l'errore a Infratel Italia, fornendo tutte le informazioni del caso.
Se, invece, ci si trova vicino ad un civico coperto da infrastruttura PI1G ma il proprio non risulta inserito nel bando, la richiesta di espansione inoltrata dall'operatore riceverà, in genere, esito negativo. Si è tuttavia riscontrato che per le nuove costruzioni o per i civici esclusi ma a bando, se adiacenti a un'infrastruttura PI1G, le richieste possono venire accettate, seppur con tempistiche lunghe.

{{< warn >}}
Un civico può essere stato escluso dai piani pubblici **proprio perché vicino a un'infrastruttura esistente**: nelle mappature di Infratel Italia i civici distanti meno di **50 metri** da una rete già realizzata vengono considerati raggiungibili con un'estensione a carico del proprietario dell'infrastruttura, e per questo non finanziati.[^adiacenti]
{{< /warn >}}


### Investimenti Privati (Cluster A e B)

In tutte quelle situazioni in cui ci si trova in una zona soggetta a investimento privato, cioè in [aree nere o grigie]({{< relref "/posts/aree.md" >}}), le dinamiche variano a seconda dell'operatore *wholesale*, tenendo in considerazione le due infrastrutture principali.

#### Open Fiber

In questo caso, qualora ci trovassimo in [cluster AB]({{< relref "/posts/aree.md#i-cluster" >}}), possiamo trovarci di fronte a due situazioni:

1. civico non coperto ma con il ROE di un edificio vicino a breve distanza;
2. ROE installato ma copertura assente a sistema.

In entrambi i casi la situazione va analizzata nel dettaglio tramite un operatore che inoltrerà l'opportuna richiesta a Open Fiber. Ovviamente, non si garantisce una risposta positiva.

#### FiberCop

Per FiberCop la situazione è, in generale, più facile da comprendere. Nella stesura della sua rete FTTH, FiberCop cerca di replicare i percorsi della preesistente rete in rame, con l'armadio ottico installato in prossimità dell'armadio ripartilinea esistente.[^architettura] Pertanto, non basta che il vicino sia coperto: bisogna anche verificare che entrambi gli stabili siano collegati alla stessa chiostrina in rame, cioè allo stesso punto di distribuzione della rete secondaria.

Nel caso in cui fossimo collegati alla medesima chiostrina del vicino coperto, o nella nostra chiostrina fosse fisicamente presente un [PTE]({{< relref "/posts/fibercop.md#lavori-di-copertura" >}}) senza però risultare coperti a sistema, è possibile chiedere una **bonifica** tramite un operatore.

---

## Domande Frequenti (FAQ)

> **D: Il mio vicino ha copertura FTTH mentre il mio civico no. Si tratta di un censimento?**  
> **R:** No. Essendo il tuo civico già inserito all'interno del database, nel caso in cui fosse presente un errore (rispetto a quanto spiegato sopra) l'operatore dovrà richiedere una *bonifica*.

> **D: Risulto coperto sul sito di OpenFiber o Fibercop, ma il mio operatore mi dice che non sono coperto. Chi ha ragione?**  
> **R:** Entrambi. La copertura *tecnica* indica che l'infrastruttura è presente e attivabile, mentre la copertura *commerciale* dipende dall'operatore, che potrebbe non vendere su quella rete. In questo caso non serve alcuna bonifica: è sufficiente rivolgersi a un operatore che venda su quella infrastruttura.

> **D: Il mio vicino è coperto da FiberCop, ma nella mia chiostrina non è presente il PTE e non ho copertura. Cosa posso fare?**  
> **R:** In queste situazioni non è possibile richiedere una bonifica tramite operatore in quanto non è presente l'infrastruttura fisica. Di conseguenza, la mancanza di copertura commerciale è corretta. Non resta che attendere un'estensione della rete, verificando periodicamente la mappa dei cantieri in corso[^cantieri].

> **D: Risulto coperto in FTTH ma non è stato installato il PTE nel mio palazzo, cosa posso fare?**  
> **R:** In questo caso la situazione va attenzionata in modo particolare, perché una richiesta di attivazione rischia di trasformarsi in un ordine sospeso per mesi o la copertura rimossa. Affidati a un venditore o a un operatore che sappia seguirti. Verifica inoltre che in passato il condominio o il proprietario dello stabile non abbiano negato i permessi per l'installazione: in quel caso la strada passa prima dall'amministratore e poi dall'operatore.

> **D: Sono a pochi metri da un pozzetto o da un armadio ottico. Perché non vengo coperto?**  
> **R:** Vicinanza all'infrastruttura non indica necessariamente copertura. Quel pozzetto potrebbe essere un semplice pozzetto rompi-tratta mentre l'armadio potrebbe servire una zona diversa. 

> **D: La mia abitazione è in fase di costruzione oppure è stata appena ultimata, mi è stato assegnato il numero civico ma non compare sui siti degli operatori. Cosa posso fare?**  
> **R:** In questo caso è necessario effettuare il *censimento*. Il costruttore avrebbe dovuto, tramite il portale imprese di FiberCop, richiedere la lottizzazione, pagare il preventivo per il sopralluogo e i successivi lavori. In alcune situazioni è possibile richiedere il censimento direttamente tramite un operatore, ma non è la prassi standard.

> **D: Tutti i civici pari della via sono coperti mentre i dispari no. Come mai?**  
> **R:** Come indicato prima, la copertura riguarda il *singolo civico* e non l'intera via. I due lati della strada possono essere attestati su armadi o chiostrine differenti, ricadere in piani diversi. In queste situazioni non si può fare altro che attendere.

> **D: A chi devo rivolgermi per risolvere un problema?**  
> **R:** Non direttamente all'operatore wholesale come Open Fiber e FiberCop, loro non vendono ai clienti finali e in genere rimandano ai propri operatori partner. La segnalazione va quindi aperta tramite l'operatore con cui si vuole attivare la linea, che ha possibilità di comunicare con l'operatore *wholesale*.


--- 
{{< warn >}}
In tutti i casi, l'assistenza fornita dall'operatore o dal venditore fa la differenza tra il successo dell'operazione e l'insuccesso. Per questo il consiglio rimane quello di affidarsi ad operatori che sappiano attenzionare correttamente il problema.
{{< /warn >}}

[^coperturaof]: **Verifica copertura Open Fiber** https://openfiber.it/verifica-copertura/
[^coperturafc]: **Verifica copertura FiberCop** https://copertura.fibercop.com/
[^cantieri]: **Cantieri in corso FiberCop** https://www.fibercop.com/cantieri-in-corso/
[^adiacenti]: **Infratel Italia – Relazione sulla mappatura 2025 delle reti fisse** https://www.infratelitalia.it/sites/infratel.mise.gov.it/files/Relazione%20mappatura%20rete%20fissa%202025_feb26.pdf
[^architettura]: Per i dettagli sull'infrastruttura si veda la sezione [Architettura]({{< relref "/posts/fibercop.md#architettura" >}}) della pagina dedicata a FiberCop.

{{< footer >}}
