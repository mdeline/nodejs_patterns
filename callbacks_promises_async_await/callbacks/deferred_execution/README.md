## Deferred Execution

Synkronisia funktioita voidaan tarvittaessa suorittaa asynkronisesti skeduloimalla
funkkarin suoritus tulevaisuuteen process.nextTick() -metodin avulla. Process.nextTick():lla
ajettavia funkkareita kutsutaan mikrotaskeiksi, koska nämä ajetaan heti kun suorituksessa
oleva tapahtuma on saatu käsiteltyä.

Jos nextTick():n käyttö aiheuttaa I/O -tapahtumien nälkiintymistä, niin funktio voidaan
tarvittaessa korvata myös setImmediate():lla, missä callback ajetaan vasta kun jonossa olevat
I/O -prosessit on saatu suoritettua.

Alla olevassa esimerkissä käytetään nextTick():ia map.get():n synkronisuuden yliajamiseksi.
Noin niin kuin yleisesti ottaen ei ole hyvää tyyliä sekoittaa synkronista ja asynkronista
toiminnallisuutta sekaisin saman funktion sisällä.

## Run
```bash
node main.js
```