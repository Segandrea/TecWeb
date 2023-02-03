# Progetto del corso di Tecnologie Web

## Dipendenze

Le dipendenze per l'applicazione sono:

* **Npm e Node** per l'installazione delle dipendenze per le varie parti
 dell'applicazione e l'esecuzione di queste.
* **MongoDB** per la gestione dei dati persistenti.

Ogni parte dell'applicazione contiene un file `README.md` che indica i comandi
necessari al building e all'esecuzione.
Nei vari file `package.json` si trovano le dipendenze locali e gli script
utilizzati per l'esecuzione, il linting e il fromatting.

## Struttura

* L'applicazione e' tripartita:
    1. **front-office:** applicazione per i clienti. (**Svelte/SvelteKit**)
        - Mobile first
        - Chiaraezza
        - Semplicita'
    2. **back-office:** applicazione per gli impiegati. (**Vue**)
        - Flessibilita'
        - Velocita'
    3. **managment dashboard:** applicazione per manager. (**Javascript vanilla**)
        - Overview di statistiche aziendali
        - cit. dalle slides "Sofisticazione e visualizzazione sono importanti"

* scelta a piacere degli oggetti da noleggiare

## Situazioni da gestire

* entita' da gestire nell'applicazione:
    **NB. il trattamento dei dati personali e' soggetto a specifiche che ignoreremo**
    1. anagrafica dei dipendenti
        - username
        - password
        - ruolo (funzionario | manager | _opzionali:_ eventuali ruoli inventati da noi)
    2. anagrafica dei clienti
        - username
        - password
        - _opzionali:_ indirizzo, avatar, preferenze di noleggio, ecc.
    3. inventario dei beni da noleggiare
    4. calendario dei noleggi (gestione esplicita di storico e futuro)
    5. fatturazione e statistiche

* attivita' del funzionario (back-office) relative al trattamento dei dati personali:
    1. aggiunta/rimozione clienti
    2. modifica dati dei clienti

* attivita' del cliente (front-office) relative al trattamento dei dati personali:
    1. aggiornamento dei propri dati
    2. _opzionale:_ la registrazione diretta da parte dei visitatori

* attivita' dell'amministratore (back-office) relative ai prodotti:
    1. aggiunta dei prodotti da noleggiare
    2. modifica delle proprieta' (prezzo, condizioni, ecc) di un oggetto
    3. modifica della disponibilita' di un oggetto
    4. rimozione di un oggetto mai noleggiato (se noleggiato almeno una volta, al massimo puo' essere `non disponibile`)
    5. decisione delle `tariffe` (**vedi sotto la voce "Prezzo finale"**)
    6. **NB.** ogni attivita' di noleggio e' associata a una coppia (`cliente`, `funzionario`)

* prezzo finale:
    1. `tariffe`:
        - costo fisso per l'oggetto
        - costo variabile calcolato in base alla `durata` (**vedi sotto la voce "durata del noleggio"**)
        - eventuali penali per ritardi
    2. sconti:
        - Punti fedelta'
        - Kit noleggiati insieme
        - Periodi di saldi
        - ecc.

* durata noleggio:
    1. `durata`:
        - puo' essere in: minuti, ore, giorni, anni, ecc.
        - puo' dipendere dagli oggetti noleggiati
        - puo' essere istantaneo (da adesso a ...)
        - puo' essere una prenotazione (da ... a ...)
        - va valutata la disponibilita' dell' oggetto al momento del calcolo della durata del noleggio
        - nell'effettuare una prenotazione si suppone che i tempi degli altri noleggi siano rispettati

* riconsegna di un oggetto:
    1. viene registrata nello storico dal back-office
    2. viene calcolato il prezzo finale
    3. **si puo' retrodatare per semplificare sviluppo e debug (va evidenziata nell'interazione con l' utente)**

## Operazioni relative agli utenti

* cliente **non autenticato**:
    1. operazioni relative all'anagrafica:
        - Registrarsi
        - fare login se registrato
    2. operazioni relative all'inventario:
        - esaminare il catalogo con prezzi corretti ma senza sapere i periodi di disponibilita'
        - visualizzare una singola opzione per prodotto (se ci sono N monopoli, l'utente ne vede solo 1)
    3. operazioni relative ai noleggi:
        - _opzionale:_ fare ipotesi di noleggio con prezzi ma **senza date di disponibilita'**

* cliente **autenticato**:
    1. operazioni relative all'anagrafica:
        - cambiare le proprie informazioni (mai le info degli altri)
    2. operazioni relative all'inventario:
        - cercare sul catalogo senza le limitazioni del cliente non autenticato
        - filtrare per categoria, prezzo, disponibilita', ecc.
        - _opzionale:_ visualizzare gli "ultimi arrivi" (in relazione all'ultima visita/l'ultimo noleggio/gli ultimi giorni/ecc)
        - _opzionale:_ marcare alcuni oggetti come preferiti, dandogli priorita' nella visualizzazione
        - _opzionale:_ attivare le notifiche di disponibilita' per un prodotto
        - _opzionale:_ prenotarsi per noleggi ripetuti di alcuni oggetti
    3. operazioni relative ai noleggi:
        - noleggiare o prenotare un noleggio per il futuro
        - ottenere una fattura per i noleggi conclusi
        - visualizzare i noleggi attivi e quelli prenotati
        - modificare o cancellare noleggi futuri (**quelli attivi/conclusi non sono modificabili**)
        - visualizzare lo storico dei noleggi conclusi
        - ottenere le fatture degli ordini conclusi

* funzionario **non autenticato**:
    1. operazioni relative all'anagrafica dei clienti:
        - fare login se registrato
    2. operazioni relative all' inventario:
        - _opzionale:_ esaminare il catalogo degli oggetti individuali disponibili con i prezzi corretti e con le date di disponibilita'
    3. operazioni relative ai noleggi:
        - _opzionale:_ fare ipotesi di noleggio con prezzi e date di disponibilita'

* funzionario **autenticato**:
    1. operazioni relative all'anagrafica dei clienti:
        - visualizzare i dati (tranne le password) dei clienti
        - visualizzare lo storico dei noleggi di un cliente (con annotazioni e costi)
        - cambiare le informazioni (tranne le password) dei clienti
        - rimuovere clienti (**solo se non ci sono noleggi attivi o prenotati**)
        - _opzionale:_ aggiungere annotazioni a testo libero e/o checkbox per catalogare il cliente (**Informazioni non visibili al cliente**)
    2. operazioni relative all'inventario:
        - aggiungere/rimuovere oggetti da noleggiare
        - modificare le caratteristiche(prezzo, condizioni fisiche, condizioni di disponibilita') degli oggetti
        - rendere un oggetto non disponibile a tempo indeterminato
        - _opzionale:_ rendere un oggetto non disponibile per un tempo **determinato**
    3. operazioni relative ai noleggi:
        - creare noleggi nel presente e nel futuro (**e nel passato per motivi di sviluppo/debug**)
        - certificare l'avvenuto noleggio
        - certificare l'avvenuta restituzione
        - visualizzare tutti i noleggi attivi e quelli prenotati
        - modificare o cancellare ogni noleggio futuro (**mai quelli attivi o conclusi**)
        - visualizzare lo storico dei noleggi conclusi, con accesso alle fatture relative
        - _opzionale:_ specificare con delle note lo stato di restituzione

* manager **non autenticato**:
    1. operazioni relative ai dipendenti: fare login
    2. operazioni relative ai clienti: fare login
    3. operazioni relative all' inventario: fare login
    4. operazioni relative ai noleggi: fare login

* manager **autenticato**:
    1. operazioni relative ai dipendenti:
        - _opzionale:_ visualizzare i dati dei dipendenti (tranne la password)
        - _opzionale:_ visualizzare lo storico dei noleggi effettuati dal dipendente (con annotazioni e ricavi)
        - _opzionale:_ fare statistiche e grafici sui dipendenti per fatturato/numero noleggi
    2. operazioni relative ai clienti:
        - fare statistiche e grafici su clienti per fatturato e numero noleggi
        - _opzionale:_ fare statistiche e grafici su clienti per numero di danni
    3. operazioni relative all' inventario:
        - fare statistiche e grafici sulle categorie di oggetti per fatturato, numero noleggi o numero oggetti
        - fare statistiche e grafici sui singoli oggetti per fatturato, numero noleggi o condizioni
    4. operazioni relative ai noleggi:
        - fare statistiche e grafici su noleggi per fatturato o data
        - _opzionale:_ fare statistiche e grafici su noleggi per conclusione
            (esempio:
                - "noleggio prenotato ma mai effettuato",
                - "prenotato e concluso ma non pagato",
                - "prenotato e concluso ma oggetto danneggiato",
                - ecc...
            )

    **inoltre puo' eseguire tutti i compiti del funzionario autenticato**

## Use case

**fare ALMENO 5 use case in cui ci sono comportamenti NON LINEARI da gestire**
* esempio 1:
    - sconto per un periodi in cui ci sono pochi noleggi (esempio delle ruspe nei weekend)
* esempio 2:
    - sconto su prodotti vecchi o malandati
    - eventuale trasparenza all' utente durante la prenotazione per categoria
        (esempio Bepi che ha noleggiato la ruspa vecchia tutti i martedi per 6 mesi e quindi
            - noleggio ruspa lun-mer => ruspa nuova => prezzo++
            - noleggio ruspa mer-ven => ruspa vecchia => prezzo--
        )
* esempio 3:
    - accordi in caso di prenotazione insoddisfacibile per prodotto inutilizzabile/non restituito in tempo

**NB.**
    **- Gli use case devono essere adattati al contesto**
    **- Gli use case devono essere gestiti (automaticamente o manualmente) dal nostro "sistema"**
    **- Il sistema deve dare una spiegazione CHIARA (e anonima rispetto agli utenti) ai comportamenti non lineari**
    **- Alcuni degli use case devono essere gia' presenti tra le situaizoni precaricate**

## Estensioni opzionali

**Specifiche poco vincolanti per favorire la personalizzazione**
* servizi _opzionali_:
    - suggerimenti di alternative
    - suggerimenti di estensioni o altri oggetti inerenti da noleggiare
    - recensioni
    - gestione dei clienti abituali
    - suggerimenti di noleggi di oggetti correlati ("spesso noleggiati insieme" esempio: cd musicale + dvd live)
    - ecc.
