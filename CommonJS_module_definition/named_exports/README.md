# Named Exports

Kaikkein yksinkertaisin tapa implementoida ohjelmointirajapinta.

Mallissa julkiset metodit määritellään exports tai module.exports -olion attribuuteiksi. Näin muodostettu objekti toimii funktioiden säiliönä / nimiavaruutena.

***Huom.:***

CommonJS:ssä on mahdollista käyttää ainoastaan exports-muuttujaa metodien julkistamiseen. Tämä tekee Named Exports -mallista ainoan CommonJS:n kanssa yhteensopivan moduulien määrittelymallin.

## Run
```bash
node index.js
```
