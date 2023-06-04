---
title: "Come funziona e come si configura il VoIP"
slug: voip
date: 2023-06-04T12:00:00+02:00
lastmod: 2023-06-04T12:00:00+02:00
authors: [kmorwath]
description: Il VoIP è la tecnologia usata per fare e ricevere chiamate tramite la rete ed è molto usato sulle connessioni di rete fissa. Ecco come funziona.
categories: [Protocolli]
---

**VoIP** (**V**oice **o**ver **I**nternet **P**rotocol) è l’acronimo sotto il quale sono raccolte le tecnologie usate per **effettuare chiamate audio** usando per il trasporto e la gestione delle connessioni la suite di protocolli TCP/IP, sulla quale sono basate le comuni reti locali e Internet.

In questo articolo approfondiremo il **funzionamento generale** del VoIP, i principali **protocolli** utilizzati e gli aspetti da tenere in considerazione quando si **configura un sistema VoIP**. La comprensione di questo articolo richiede alcune conoscenze tecniche del funzionamento delle reti e dei protocolli di Internet più comuni.

{{< toc >}}

## Funzionamento

Come abbiamo detto, il VoIP è basato sui protocolli della suite TCP/IP. Questo significa che le telefonate viaggiano su una connessione a **commutazione di pacchetto**, invece di commutazione di circuito come accadeva con le vecchie connessioni analogiche.

Ciò implica che i pacchetti audio sono soggetti alla **latenza** della connessione che, se eccessiva, può causare una cattiva qualità della chiamata. La banda utilizzata invece dipende dal _codec_ (vedi sotto) usato e può variare da poche decine di kilobit/secondo a qualche centinaio.

{{< green >}}
##### Commutazione di pacchetto vs circuito
In una rete a **commutazione di circuito** per ogni utente è creato un canale dedicato per il suo traffico. Con la **commutazione di pacchetto** il traffico di ogni utente è invece suddiviso in pacchetti che viaggiano su canali condivisi.

La **vecchia rete telefonica analogica** con i suoi apparati elettromeccanici che di volta in volta creavano un circuito tra due telefoni è un esempio tipico di rete a commutazione di circuito. **LAN e Internet (TCP/IP)** sono esempi di rete a commutazione di pacchetto.
{{< /green >}}

**VoIP non usa un singolo protocollo come il web**, assomiglia di più alla posta elettronica dove sono usati assieme diversi protocolli (SMTP, IMAP, POP) per implementare il servizio. Al contrario di web e posta elettronica, però, le connessioni non sono sempre e solo iniziate dal client. 

In caso di **chiamata in ingresso**, è il server remoto che inizia la connessione verso il sistema di destinazione, perciò è necessario che questo sia sempre in ascolto e accessibile dall’esterno.

VoIP può essere usato direttamente tramite dispositivi in grado di connettersi via TCP/IP e gestire direttamente i protocolli, ad esempio **telefoni/basi DECT VoIP** connessi via Ethernet o WiFi, oppure tramite *"softphone"* (applicazioni VoIP installate su PC, tablet o smartphone), o anche usando "normali" telefoni analogici connessi a dispositivi di conversione chiamati **ATA** (Analog Telephone Adapter), che possono essere anche integrati in dispositivi all-in-one come i classici "router internet" destinati alle installazioni domestiche o in piccole aziende. 

L’ATA funziona da una parte come telefono VoIP, e dall’altra come fosse una mini-centrale telefonica analogica. Esistono anche centralini (PBX) VoIP e sistemi misti per connettere più dispositivi sia VoIP che analogici.

## Protocolli utilizzati

I protocolli utilizzati sono **SIP** (Session Initiation Protocol), **RTP** (Realtime Transport Protocol) e **RTCP** (RTP Control Protocol). Vediamoli uno ad uno più in dettaglio.

### SIP

**SIP** è utilizzato per la **gestione delle connessioni e delle chiamate.**  Tramite questo protocollo il sistema VoIP si registra con i server remoti, sono inviate e ricevute le richieste di chiamata, di termine della chiamata ed altre richieste e informazioni.

SIP può essere utilizzato sia via **TCP** che **UDP**, quest’ultimo è più comunemente usato. Ogni connessione VoIP deve utilizzare una porta specifica, di solito a partire dalla 5060. 

Il protocollo SIP assomiglia un po' ad HTTP e nei suoi header trasporta le informazioni necessarie per le connessioni e le chiamate, compresi *purtroppo* l’IP e le porte da utilizzare, così come visti dal sistema VoIP. 

Questo causa non pochi problemi quando il sistema è dietro NAT, in quanto di default vengono usati gli IP e le porte visibili solo dalla LAN e non quelli visibili in WAN. Sono pertanto necessarie configurazioni specifiche <!-- SIP ALG? --> per risolvere questo problema.

### RTP

**RTP** è utilizzato per **trasportare i dati audio** veri e propri. Tramite SIP le due parti si accordano sulla destinazione della connessione RTP, porte, *codec* e altri parametri di connessione (usando il formato SDP, Session Description Protocol), infine instaurano la connessione RTP per la sessione audio.

L'audio viene **digitalizzato** tramite appositi _codec_, suddiviso in pacchetti (che contengono dai 20 ai 30 ms di audio) ed inviato via RTP.

A livello di trasporto viene utilizzato il **protocollo UDP** per **minimizzare la latenza**, non essendo necessaria alcuna conferma di ricezione né ritrasmissione in caso di errore. È un protocollo molto generico progettato non solo per il trasporto di dati audio; nel caso del VoIP può essere utilizzato anche per trasportare specifici messaggi (come i toni DTMF) così che il suono del tono non dipenda dalla qualità del codec.

Non sono definite porte standard per RTP ma spesso si usano **le porte a partire dalla 16384**. La porta viene scelta **dinamicamente** quando viene stabilita la connessione ed è necessaria una porta per ogni chiamata contemporanea. La porta di partenza deve essere una porta pari, perché la successiva porta dispari sarà automaticamente usata per RTCP.

### RTCP

**RTCP** è un protocollo usato **in accoppiata con RTP** per gestire separatamente la **qualità della connessione RTP**.

Trasporta informazioni quali il numero di byte ricevuti, latenza, pacchetti persi, ecc. che possono essere usati per gestire automaticamente la qualità della chiamata. Funziona via **UDP** e usa automaticamente la porta di numero dispari successiva alla porta RTP usata per la chiamata.

{{< fig src="/images/voip/message-exchange.png" caption="Tipica sequenza di una chiamata VoIP" >}}

## Configurazione di un sistema VoIP

La configurazione di un sistema VoIP è composta da due passi separati.

Innanzitutto, la **configurazione del sistema locale** per la connessione ai server del fornitore del servizio.

Successivamente, se il sistema VoIP non è direttamente esposto su Internet, la **configurazione di router e firewall per far passare correttamente il traffico** (specialmente quello in ingresso), pena il malfunzionamento del sistema.

La configurazione del sistema VoIP locale dipende strettamente dal dispositivo usato e dai parametri scelti dal fornitore del servizio. SIP purtroppo offre un gran numero di parametri per adattarsi a differenti realtà preesistenti e questo può rendere le configurazioni non semplicissime.

Vediamo più in dettaglio quali sono i principali aspetti e parametri da considerare durante la configurazione.

### Configurazione del networking

Il sistema VoIP deve ovviamente avere un IP e un gateway per **raggiungere Internet**. Alcuni ISP richiedono che il traffico VoIP sia su una VLAN differente dal traffico dati, richiedendo apparati di reti capaci di gestire VLAN separate.

Particolare attenzione va fatta ai **server DNS**: molti ISP permettono di risolvere i record DNS necessari per far funzionare il proprio VoIP **solo usando i propri DNS** perciò usando server generici (Google, Cloudflare, ecc.) il VoIP non funzionerà[^loc-dns].

È sconsigliabile risolvere a mano gli indirizzi IP e inserirli direttamente nella configurazione VoIP perché, nel caso l'ISP li cambi, il VoIP cesserà di funzionare fino a che non si re-inseriranno a mano gli indirizzi corretti.

Alcuni ISP (es. TIM e Vodafone) usano record di tipo **SRV** o **NAPTR** che permettono una **maggiore flessibilità e robustezza** nella designazione dei server VoIP da usare. In questi casi il sistema VoIP deve supportarli. Fornitori di servizi VoIP commerciali in genere funzionano con qualsiasi DNS.

Spesso sono anche indicati i parametri di QoS da usare, come impostazioni **Ethernet 802.1p** o valori **DSCP TCP/IP**. Impostati correttamente, possono essere utili per gestire la latenza. In genere la latenza end-to-end di una chiamata VoIP deve essere inferiore a 300 ms perché sia accettabile[^max-lat].

[^loc-dns]: Usando server DNS locali che lo permettono, è possibile configurare l’inoltro delle richieste DNS a server diversi a seconda del dominio (conditional forwarding).

[^max-lat]: *Raccomandazione ITU G.114*.

### Configurazione della registrazione SIP e dei server proxy

La **registrazione** è necessaria per **dichiarare la propria presenza** e disponibilità al sistema VoIP remoto.

Per registrarsi correttamente vanno indicate le credenziali necessarie (fornite dall’ISP, incluso il numero di telefono assegnato) e i parametri per la connessione su cui, purtroppo, c’è una certa variabilità e non tutti i sistemi usano lo stesso nome.

A seconda del tipo di **risoluzione dei nomi** usato, del setup VoIP del **provider**, e del **client** usato, occorrono uno o più dei seguenti parametri:
- il **Dominio/Realm SIP** (es. `telecomitalia.it`)
- il **Registrar**, il server che si occupa della registrazione (se separato dal *Proxy*)
- il **Proxy SIP** (da non confondersi con i proxy HTTP), il server che gestisce le chiamate (es. `voip.windtre.it`)
- il **Outbound Proxy**, il proxy da contattare direttamente anche se non quello indicato nel *Request-URI* della chiamata (es. `voip.it.isp.sky`)

{{< green >}}
I **proxy SIP** sono i server che gestiscono le chiamate “per conto” (“proxy”) dei client, risolvendo l’indirizzo finale della chiamata e instradandola verso la destinazione richiesta, magari attraverso altri proxy e gateway VoIP.
{{< /green >}}

In genere, se il fornitore usa record di tipo SRV/NAPTR, occorre solo il **Dominio/Realm** e tutto il resto è ottenuto dinamicamente. In tutti gli altri casi va inserito il nome host del *Proxy* e, se richiesto, dell’*Outbound Proxy* e/o del *Registrar*.

Può essere che sia necessario inserire gli stessi dati in più campi, ad esempio se un client VoIP richiede **Registrar** e **Proxy** separatamente, ma il provider usa lo stesso host, va inserito lo stesso dato in entrambi.

{{< green >}}
##### Registrazioni multiple
Alcuni fornitori supportano **registrazioni di dispositivi multipli** ma, nel caso di VoIP fornito dagli ISP, è comune che sia ammessa una singola registrazione. Nel caso si voglia quindi collegare direttamente più dispositivi VoIP (telefoni, ATA, ecc.), è necessario un centralino (PBX).

Una singola registrazione può comunque permettere più di una chiamata contemporanea, a seconda del provider, anche se per sfruttare le possibilità più avanzate è necessario un PBX VoIP.
{{</ green >}}

{{< warn >}}
Purtroppo non tutti i sistemi usano una nomenclatura coerente, né supportano tutti i tipi, perciò va consultata la documentazione. 
{{</ warn >}}

### Intervallo di registrazione SIP

Una registrazione SIP non dura all’infinito, ma **scade dopo un certo periodo di tempo**.

Bisogna quindi impostare il tempo dopo il quale va effettuata una nuova registrazione. Di solito questo parametri è dato dal proprio fornitore, alcuni richiedono intervalli di un’ora, altri anche più lunghi (es. per TIM 1 giorno).

Alcuni server non gradiscono richieste frequenti e mettono in **blacklist** la sorgente per un po’ di tempo nel caso di tentativi di registrazione troppo ravvicinati.

### Configurazione del NAT traversal

Questa configurazione è necessaria **se il dispositivo VoIP è a valle di un NAT**. Va fatta in accoppiata con quella fatta sul router e occorre quando il dispositivo VoIP non è integrato nel router o non ha IP pubblico.

Quando il sistema VoIP è integrato nel router, e il router ha IP pubblico, in generale l’IP e le porte sono gestite automaticamente come necessario. Nel caso di router in cascata rimane la necessità di configurare il NAT traversal.

Ci sono diversi modi per risolvere il problema del NAT:

- **ALG (*Application Layer Gateway*, o *passthrough*) VoIP attivo sul router**: questo è il sistema più semplice che non richiede alcuna impostazione sull’apparato VoIP. Il router ha una specifica funzione in grado di **intercettare il traffico SIP**, modificare i parametri necessari e **aprire automaticamente le porte** selezionate. Ci sono però casi nei quali non è in grado di farlo correttamente, creando malfunzionamenti. Alcuni dispositivi possono usare *UPnP*, se attivo sul router, per ottenere un effetto simile. Sono in grado in tal caso di identificare l’IP pubblico da usare e aprire automaticamente le porte, senza quindi alcuna necessità di manipolazione del traffico.

- **Apertura manuale delle porte sul router**: affinché funzionino le chiamate in entrata, è necessario che il dispositivo VoIP sia **in ascolto sulla porta SIP selezionata** e che questa sia raggiungibile dall’esterno. Si può quindi fare **forwarding delle porte** necessarie sul router verso il dispositivo VoIP. Di solito bisogna solo aprire le porte SIP necessarie, ma se la connessione RTP è iniziata anche dall’esterno (ad esempio il server non supporta Symmetric RTP, RFC 4961[^rfc-4961], per riusare la connessione del client) è necessario aprire anche queste (ricordando anche la porta RTCP), pena audio monodirezionale.

- **NAT keep-alive**: quando viene stabilita una connessione, un router che fa NAT crea una **mappatura nella tabella di NAT** (`IP:porta pubblici <-> IP:porta privati`) per gestire i pacchetti di ritorno in ingresso in modo da ricevere dati dall’esterno. La durata di questa mappatura dipende dal router e dal protocollo (TCP o UDP). È possibile inviare ad intervalli regolari pacchetti di **keep-alive** per evitare che la mappatura scada e sia eliminata. Questa funzione ha appunto il nome “NAT keep-alive” o simile. Non richiede particolari impostazioni sul router ma è necessario avere un’idea della durata delle mappature per impostare correttamente l’intervallo di keep-alive. Lo svantaggio di questa modalità è che crea traffico “inutile”, e l’intervallo va pertanto regolato con un po’ di attenzione.

L’apertura manuale delle porte e il keep-alive dipendono però dalla **corretta individuazione dell’IP e della porta pubblici** per permettere le chiamate in ingresso. Se si ha un IP pubblico statico è spesso possibile inserirlo nel dispositivo come IP WAN, così da poterlo utilizzare direttamente nei messaggi SIP inviati.

{{< warn >}}
##### VoIP e firewall
Apire manualmente le porte vuol dire che **il dispositivo VoIP è direttamente visibile su Internet** su porte standard.

Se si sceglie questa soluzione è meglio implementare misure di protezione a livello di firewall perché c’è chi effettua scansioni per trovarli e cercare di comprometterli per effettuare chiamate non autorizzate e per spam. Alcuni dispositivi hanno un’opzione che permette di ammettere chiamate solo dal server con il quale sono registrati.
{{</ warn >}}

I server remoti possono anche essere in grado di usare IP e porta che vedono direttamente nei pacchetti TCP/IP ricevuti, se esistono i corretti header `VIA` nei messaggi SIP (con i parametri *received* e *rport*[^sip-via]), ma questo dipende dalla configurazione del server e il dispositivo VoIP deve inserire gli appositi parametri nelle sue richieste.

In alternativa, è possibile usare un server **STUN** (*Session Traversal Utilities for NAT*) che implementa uno specifico protocollo che permette ai dispositivi che lo interrogano di sapere quali sono l’IP e porta così come visti dall’esterno in modo da poterli inserire direttamente negli header SIP.

STUN non funziona con router che usano NAT simmetrico (es. gli Asus, di default), perché in quel caso il mapping `IP:porta pubblici` è valido solo per la singola connessione che l’ha creato. Con altri tipi di NAT (es. *full-cone*), lo stesso mapping è usabile anche da altre connessioni.

Senza sapere esattamente qual è il server VoIP remoto e come è configurato, è difficile sapere a priori quale combinazione funzionerà perciò **spesso è necessario procedere a tentativi**.

{{< green >}}
##### IPv6
Se sia il client che il server VoIP supportano (e usano) il protocollo **IPv6**, tutti i problemi relativi al NAT non si applicano. È comunque consigliato applicare sul proprio firewall regole che limitino l'accesso agli IP autorizzati.
{{</ green >}}

[^rfc-4961]: *RFC 4962, Symmetric RTP / RTP Control Protocol (RTCP)* https://datatracker.ietf.org/doc/html/rfc4961

[^sip-via]: Vedi ad esempio: https://thanhloi2603.wordpress.com/2017/05/02/lets-play-sip-received-and-rport/

### Codec supportati 

I codec (*coder-decoder*) sono gli algoritmi che effettuano la **digitalizzazione dell’audio** (e il processo inverso). VoIP non prescrive specifici codec lasciando ai sistemi la decisione di quale codec usare per una chiamata.

Durante la fase di configurazione della chiamata, **le due parti si scambiano informazioni sui codec supportati** e ne selezionano uno comune in base alle **priorità** configurate. La selezione del codec ha effetto sulla qualità della chiamata e sulla banda usata.

- **G.711** (chiamato anche PCM). Esiste in due versioni, *A-law* e *μ-law* (mu). Quest’ultimo è usato in Nord America, il resto del mondo usa la versione A.
È un codec “narrowband”, cioè campiona una limitata banda audio per ridurre la quantità di dati da trasmettere. Inoltre non applica compressione e fornisce una **qualità audio paragonabile a quella delle chiamate analogiche**. Richiede circa **64-80 kb/s** di banda.[^g711]
- **G.729** è un codec “narrowband” che richiede solo circa **8 kb/s di banda** grazie alla compressione, al prezzo di una **qualità audio inferiore** al G.711. Può introdurre delle distorsioni che ad esempio impediscono ai toni DTMF trasportati come audio di funzionare correttamente con gli IVR.[^g729]
- **G.722** è un codec “wideband” (campiona una banda audio più ampia) con una **qualità audio più elevata**. Grazie alla compressione usa circa la stessa banda di G.711 ma al momento è offerto solo da pochi provider (es. TIM).[^g722]

I dispositivi VoIP possono supportare **molti altri codec** ma è spesso possibile usarli solo in LAN perché non sono supportati dagli ISP o dai fornitori di servizi VoIP. La scelta spesso è dettata, oltre dalla banda utilizzata, dalle **necessità computazionali dei codec**, per poter essere utilizzati anche su dispositivi con hardware poco performante.

G.711 offre un buon compromesso fra qualità audio e banda, G.729 è da utilizzare quando ogni kilobit risparmiato è utile. 

Se non si hanno problemi di banda e/o latenza, il consiglio è quello di **selezionare i codec di qualità migliore a priorità più alta.**

[^g711]: *G.711* https://en.wikipedia.org/wiki/G.711

[^g729]: *G.729* https://en.wikipedia.org/wiki/G.729

[^g722]: *G.722* https://en.wikipedia.org/wiki/G.722

### Impostazione dei toni DTMF

I toni emessi alla pressione dei tasti possono essere trasportati in modalità diverse (le più comuni sono le prime due):

- **In-band**: sono trasportati come toni audio direttamente nel flusso audio. Con certi codec è possibile che la qualità sia abbastanza bassa da non venire riconosciuti dagli IVR;
- **RTP payload (RFC 2833)**: sono trasportati come specifico tipo di dato nei pacchetti RTP;
- **SIP DTMF Events**: sono trasportati separatamente via SIP.

### Packetization time

Il **packetization time** è la durata dell’audio nei singoli pacchetti RTP. Va impostata a quella richiesta, se non lo è già, **di solito è 20 ms.** 

Di solito è anche richiesto di disabilitare *Voice Activation Detection*, la funzione che riduce l’utilizzo di banda trasmettendo solo se qualcuno sta effettivamente parlando.

### Altre impostazioni

Il fornitore del servizio può richiedere una serie di **impostazioni opzionali**, ad esempio il supporto ai messaggi di tipo `100 REL PRACK`, `UPDATE`, ecc.

Se richieste e supportate dal proprio dispositivo è meglio attivarle, altrimenti si potrebbero avere malfunzionamenti. Ad esempio se con TIM non viene abilitato `100 REL PRACK` ci sono problemi con le chiamate in ingresso.

### ATA analogici

Quando si configura un ATA può essere necessario configurare molte altre impostazioni per **emulare al meglio le linee tradizionali** alle quali siamo abituati, ad esempio i toni inviati al telefono nelle varie situazioni (libero, occupato, ecc.), le suonerie, il formato del caller-id, e perfino alcuni parametri elettrici della linea che storicamente variano da nazione a nazione.

{{< footer >}}
