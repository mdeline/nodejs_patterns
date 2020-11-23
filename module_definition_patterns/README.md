# Moduulien määrittelymallit

### Named Exports
Julkaistavat metodit asetetaan exports- tai module.exports -muuttujan attribuuteiksi.

### Exporting a Function aka substack-model
Module.exports -muuttujan arvoksi määritellään yksittäinen funktio. Funktiota voidaan tarvittaessa laajentaa toisilla funktioilla. Tällöin alkuperäinen funktio toimii muun toiminnallisuuden ohella uusien funktioiden nimiavaruutena.

### Exporting a Class
Samankaltainen toimintatapa kuin exporting a function -mallissa sillä erotuksella, että luokasta voi luoda konstruktorin avulla uusia instansseja.

### Exporting an Instance
Muistuttaa Singleton-mallia require()-funktion välimuistiin tallennusmekanismin ansiosta. Malli ei kuitenkaan takaa, että muodostettu instanssi olisi uniikki koko ohjelmiston tasolla, toisin kuin Singleton. Tämä johtuu Node.js:n riippuvuuksia hallitsevasta  ratkaisualgoritmista, joka saattaa ladata saman moduulin useampaan otteeseen ohjelman sisällä. Useat lataukset tarkoittavat luonnollisesti useita instansseja ja useita eri tiloja.

### Monkey patching
Globaalin nimiavaruuden sekä toisten moduulien muokkaaminen muun muassa testitarkoituksissa. Ei kannata käyttää jos ei tiedä mitä tekee.
