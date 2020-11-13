# Moduulien määrittelymallit

### Nimetyt exportit
Julkaistavat metodit asetetaan exports- tai module.exports -muuttujan attribuuteiksi.

### Funktioiden vieminen toisin sanoen substack-malli
Module.exports -muuttujan arvoksi määritellään yksittäinen funktio. Funktiota voidaan tarvittaessa laajentaa toisilla funktioilla. Tällöin alkuperäinen funktio toimii muun toiminnallisuuden lisäksi uusien funktioiden nimiavaruutena.

### Luokan vieminen
Samankaltainen toimintatapa kuin exporting a function -mallissa sillä erotuksella, että luokasta voi luoda konstruktorin avulla uusia instansseja.

### Instanssin vieminen
Muistuttaa Singleton-mallia require()-funktion välimuistiin tallennusmekanismin ansiosta. Malli ei kuitenkaan takaa, että muodostettu instanssi olisi uniikki koko ohjelmiston tasolla, toisin kuin Singleton. Tämä johtuu Node.js:n riippuvuuksia hallitsevasta  ratkaisualgoritmista, joka saattaa ladata saman moduulin useampaan otteeseen ohjelman sisällä. Useat lataukset tarkoittavat luonnollisesti useita instansseja ja useita eri tiloja.

### Monkey patching
Globaalin nimiavaruuden sekä toisten moduulien muokkaaminen muun muassa testitarkoituksissa. Ei kannata käyttää jos ei tiedä mitä tekee.
