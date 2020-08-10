---
title: "Come controllare la presenza di intervento pubblico o privato"
slug: bul-verifica-per-indirizzo
date: 2019-03-26
lastmod: 2020-01-15T21:00:00+01:00
authors: [Matteo]
description: Il sito BUL del Governo permette di controllare le previsioni future per la banda ultralarga al proprio indirizzo. La guida per interpretarlo.
categories: [Copertura, FTTH, FWA, FTTC, Piano BUL]
image: /social/piano-bul.jpg
---

{{< warn >}}
⚠ **Il sito BUL è stato aggiornato a metà giugno 2020, per cui questa guida fa temporaneamente riferimento alla vecchia versione. I concetti sono molto simili anche nella nuova versione, ma ci sono alcune differenze.**

**Questo articolo sarà aggiornato dopo l'estate 2020, quando sul sito BUL saranno pubblicati i nuovi dati risultanti dalla [consultazione 2020]({{< relref "/posts/consultazione2020.md" >}}).**
{{< /warn >}}

Il sito **Banda Ultra Larga** del Governo italiano permette di verificare indirizzo per indirizzo le previsioni di copertura della banda larga per i prossimi anni.

I dati mostrati sono quelli raccolti tramite le consultazioni Infratel, e costituiscono la base per gli interventi pubblici dello Stato mirati alla riduzione del digital divide.

Puoi inserire il tuo indirizzo di casa [qua](https://bandaultralarga.italia.it/indirizzo/), e poi seguire i paragrafi di questa pagina per comprenderne il risultato.

{{< warn >}}
⚠ Il sito BUL mostra i risultati delle consultazioni ma **non tiene in considerazione le fasi successive di realizzazione e approvazione dei progetti di copertura**. Le informazioni sono quindi da prendere con le pinze. Se qualcosa non ti torna, chiedi sul [forum di FibraClick](https://forum.fibra.click) e proveremo ad aiutarti.
{{< /warn >}}

{{< toc >}}

## Sfondo blu

{{< fig src="/images/sitobul-pubblico.png" caption="Intervento pubblico" alt="Scritta bianca su sfondo blu che dice intervento pubblico" >}}

Significa che l'indirizzo è classificato come [area bianca]({{< relref "/posts/aree.md" >}}) e potrebbe essere coperto tramite **intervento dello Stato con fondi pubblici**. Può essere indicata anche una velocità minima prevista per il cablaggio, e in particolare:

- **100 Mbps**: copertura in <abbr title="Fiber To The Home, fibra fino a casa">**FTTH**</abbr> con velocità in download tra i 100 Mbps e i 1000 Mbps (1 Gbps), a seconda del taglio offerto dall'operatore scelto;
- **30 Mbps**: copertura in <abbr title="Fixed Wireless Access">**FWA**</abbr>, cioè **wireless**, con una tecnologia che possa garantire almeno 30 Mbps in download e 15 in upload. In alcuni casi la scritta 30 Mbps indica copertura realizzata da TIM in FTTC utilizzando fondi pubblici. È un caso frequente in [Sardegna](http://www.sardegnadigital.it/banda-ultra-larga-sardegna-vdsl-fibra-ottica/), Abruzzo, Puglia e Calabria[^bulfttn]. In questo caso la copertura FTTC può in realtà arrivare a 100 o anche 200 Mbps, a seconda della distanza dall'armadio TIM e [altri fattori]({{< relref "/posts/vdsl.md" >}}).

[^bulfttn]: La lista dei comuni è disponibile in questa pagina: http://www.infratelitalia.it/operatori/

La copertura FTTH/FWA con intervento pubblico avviene nell'ambito del [piano BUL]({{< relref "/posts/bul.md" >}}) 2020, che prevede un intervento diretto dello Stato con modello a concessione. Significa che **la rete sarà realizzata e gestita da [Open Fiber]({{< relref "/posts/openfiber.md" >}})**, l'azienda che ha vinto i tre bandi pubblici, ma resterà di **proprietà dello Stato**.

Per avere la certezza della tecnologia con cui il proprio indirizzo sarà coperto, conviene **contattare il proprio comune**, anche scrivendo all'<abbr title="Ufficio Relazioni con il Pubblico">URP</abbr> oppure all'assessore con delega ai lavori pubblici o alle reti. In alcuni casi è possibile ricevere risposta anche scrivendo a [Infratel](http://www.infratelitalia.it/).

Lo stato della realizzazione può essere verificato nella pagina del comune sul [sito BUL](http://bandaultralarga.italia.it/), oppure nell'[area Infratel](https://openfiber.it/it/fibra-ottica/area-infratel/piano-copertura-infratel) del sito Open Fiber. Una volta terminati i lavori, la rete sarà messa a disposizione di tutti gli operatori telefonici, a cui i clienti dovranno rivolgersi per poter attivare una linea.

Se il comune si trova nello stato "In attesa di autorizzazioni" o "In esecuzione", è anche possibile [consultare il catasto delle infrastrutture]({{< relref "/posts/bul-sinfi.md" >}}) (SINFI) per vedere le tratte in fibra ottica che saranno posate sul territorio.

{{< info >}}
Per approfondire:

- [Cos'è il piano BUL]({{< relref "/posts/bul.md" >}})
- [Cos'è e cosa fa Open Fiber]({{< relref "/posts/openfiber.md" >}})
- [Come riconoscere la rete pubblica BUL]({{< relref "/posts/rete-bul.md" >}})
- [Come consultare le tratte in fibra ottica del piano BUL con il SINFI]({{< relref "/posts/bul-sinfi.md" >}})
- [Cosa sono le aree nere, grigie e bianche]({{< relref "/posts/aree.md" >}})
- [Cosa cambia tra intervento pubblico e privato]({{< relref "/posts/pubblico-privato.md" >}})
- [Cosa significano FTTC, FTTS, FTTE, FTTH e FWA]({{< relref "/posts/architetture.md" >}})
{{< /info >}}

{{< fig src="/images/pozzetto-bul1.jpg" caption="Pozzetto realizzato da Open Fiber in un'area bianca coperta in FTTH" alt="Chiusino di un pozzetto, con la scritta BUL rete pubblica" >}}

## Sfondo arancione

{{< fig src="/images/sitobul-privato.png" caption="Intervento privato con 3 operatori NGA di cui 1 NGA-VHCN" alt="Pagina web con due caselle che indicano il numero 3 in corrispondenza della sigla NGA e il numero 1 in corrispondenza di NGA-VHCN" >}}

Lo sfondo arancione indica la presenza o la pianificazione di **copertura da parte di uno o più operatori con fondi privati**.

Utilizza i pulsanti con le frecce per spostarti tra gli anni, e tieni presente che **le consultazioni prendono come riferimento il 31 dicembre di ogni anno**. Ad esempio, con 2020 si intende 31 dicembre 2020.

Il significato delle due sigle è:

- <abbr title="Next Generation Access">**NGA**</abbr>: connessioni che offrono almeno 30 Mbps in download, cioè <abbr title="Fiber To The Cabinet">FTTC</abbr>, <abbr title="Fixed Wireless Access">FWA</abbr>[^cons2019] e <abbr title="Fiber To The Home">FTTH</abbr>;
- **NGA-**<abbr title="Very High Capacity Networks">**VHCN**</abbr>: solo connessioni FTTH, che possono offrire velocità notevolmente superiori a 100 Mbps e fino a 1 Gbps.[^cons2019][^vhcn]

[^cons2019]: *Esito Consultazione Aree Grigie e Nere 2019*, pagina 10 https://www.infratelitalia.it/archivio-documenti/documenti/-/media/Infratel/Documents/2019/06/consultazione-2019-Maggio-2019-def_v3.pdf
[^vhcn]: *Comunicazione della Commissione Europea sulla Gigabit Society*, pagina 43 https://ec.europa.eu/newsroom/dae/document.cfm?doc_id=17183

{{< green >}}
###### Cosa indicano i numeri
I numeri indicano il **numero di infrastrutture** installate o previste. Si tenga però presente che "due infrastrutture" non è la stessa cosa di dire "due operatori". Ad esempio:

- un operatore può rivendere il servizio FTTC di TIM utilizzando l'infrastruttura TIM già esistente, e in questo caso non comparirebbe come secondo operatore. Soltanto se installasse la sua infrastruttura [SLU]({{< relref "/posts/vula-slu-nga.md" >}}) (e quindi un armadio su strada) comparirebbe come secondo operatore;
- un operatore può utilizzare la rete in fibra ottica di Open Fiber ma non per questo comparirebbe come secondo operatore, perché l'infrastruttura è la stessa.
{{< /green >}}

A questo punto, se risulta un numero **maggiore di 0** nella casella **NGA-VHCN** si possono seguire queste linee guida per interpretare il risultato:

- **1 VHCN** equivale molto spesso a copertura da parte di **[Open Fiber]({{< relref "/posts/openfiber.md" >}})**, ma non sempre. Potrebbe anche trattarsi di un **operatore locale**, come ad esempio Isiline, Lenfiber, Intred, MyNet, Unidata, ecc., oppure della rete **TIM** realizzata precedentemente alla nascita di Flash Fiber (2016) o tramite i bandi Eurosud;
- **3 VHCN** corrisponde frequentemente alla copertura **[Flash Fiber]({{< relref "/posts/flashfiber.md" >}})**, una **joint venture tra TIM e Fastweb**. L'infrastruttura Flash Fiber viene contata tre volte perché Flash Fiber, TIM e Fastweb hanno partecipato separatamente alla consultazione, dichiarando ciascuno la presenza della stessa infrastruttura;
- **combinazioni**  dei due punti sopra, tenendo presente che non esiste un modo per sapere realmente quali operatori hanno dichiarato la copertura, e che in alcuni casi un operatore potrebbe aver dichiarato la presenza dell'infrastruttura anche con molto anticipo.

{{< warn >}}
⚠ **A Milano Flash Fiber non è presente**: se risultano tre operatori, è possibile che si tratti di Open Fiber, TIM, e la "vecchia" infrastruttura Metroweb. La stessa situazione potrebbe ripetersi in altre città con copertura Metroweb.

{{< fig src="/images/roe-of-mw-telecom.jpg" caption="Scatole contenenti i ROE in un condominio di Milano. Dall'alto: Metroweb, TIM e Open Fiber. Grazie a \"Irenicusss\" per la foto." alt="Tre scatole fissate sul muro di un locale contatori" vertical="true" >}}
{{< /warn >}}

Se ti risulta un numero maggiore di 0 nella casella NGA:

- questo numero **include anche le reti NGA-VHCN**;
- comprende la **FTTC di TIM**, anche se in rete rigida e anche se a distanza elevata con velocità basse;
- comprende la **[FTTC SLU]({{< relref "/posts/vula-slu-nga.md" >}})** di Fastweb (FTTS), Planetel e altri operatori locali, esclusa la rete Vodafone MAKE;
- comprende le connessioni **FWA** come Eolo, Linkem o Fastweb.

{{< info >}}
La **fase 2** del piano nazionale **Banda Ultra Larga** (piano "aree grigie") prevede la copertura con reti ad alta capacità (VHCN) delle aree che ne sono sprovviste. [Scopri di più sul piano BUL]({{% relref "/posts/bul.md" %}}).
{{< /info >}}

{{< info >}}
Per approfondire:

- [Cos'è e cosa fa Open Fiber]({{< relref "/posts/openfiber.md" >}})
- [Cos'è e cosa fa Flash Fiber]({{< relref "/posts/flashfiber.md" >}})
- [Cosa significano VULA, SLU e NGA]({{< relref "/posts/vula-slu-nga.md" >}})
- [Cosa significano FTTC, FTTS, FTTE, FTTH e FWA]({{< relref "/posts/architetture.md" >}})
{{< /info >}}

### Foto

{{< fig src="/images/fttc-tim1.jpg" caption="Armadio TIM (a sinistra) con sopralzo ONU-DSLAM (sopra). A destra, la colonnina di alimentazione contenente un trasformatore e un contatore Enel." alt="A sinistra, un armadio ripartilinea TIM con sopra una scatola con il tetto rosso, a destra, una colonnina stretta e alta con il tetto rosso." >}}

{{< fig src="/images/slu.jpg" caption="Da sinistra, ONU SLU Fastweb, ONU SLU Vodafone, colonnina di alimentazione TIM, ARL e ONU TIM e due chiostrine TIM. Grazie a Emilio M. per la foto" alt="Strada con marciapiede, sul quale sono posizionati in fila alcuni armadi o box per la FTTC" >}}

{{< fig src="/images/roe-of1.jpg" caption="ROE Open Fiber. Grazie a Edoardo M. per la foto" alt="Scatola di un ROE con l'etichetta Open Fiber" vertical="true" >}}

{{< fig src="/images/roe-ff1.jpg" caption="ROE Flash Fiber. Grazie a Edoardo C. per la foto" alt="Scatola di un ROE con le etichette Flash Fiber, TIM e Fastweb" vertical="true" >}}

{{< fig src="/images/roe-timsud.jpg" caption="ROE TIM realizzato tramite bandi Eurosud. Grazie a \"Gatsu\" per la foto" alt="Scatola di un ROE con le etichette TIM e Eurosud, con il logo dell'unione europea" vertical="true" >}}

{{< footer >}}
