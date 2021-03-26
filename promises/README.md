## Promiset

Promise on olio, joka kuljettaa sen sisältämän asynkronisen funktion tila- ja tulostietoa mukanaan. Promise-olioiden käyttö helpottaa erityisesti peräkkäisten kontrollirakenteiden muodostamista. Yhdessä async ja await -rakenteiden kanssa promiset mahdollistavat helpohkon tavan suorittaa asynkronista koodia "synkronisesti". Promiseja käytetään takaisinkutsujen sijasta (engl. callback), tosin pellin alla myös promiset käyttää takaisinkutsuja.

__Promise-olion tilat:__
* Pending: asynkroninen operaatio on kesken
* Fulfilled: operaatio onnistui, tällöin puhutaan että operaatio on 'Settled'
* Rejected: operaatio aiheutti virhetilanteen, myös tällöin operaatio on 'Settled'

Promise/A+ -standardilla rakennettuja olioita, joilla on .then -metodi kutsutaan thenableiksi ja näiden olioiden odotetaan käyttäytyvän promisenomaisesti. Standardi ja thenable-oliot mahdollistavat eri promise-implementaatioiden (esim. eri kirjastojen palauttamien olioiden) ketjuttamisen yhteen.

Rinnakkainen suoritus on mahdollista Promise.all() -funktion avulla. Jos eri promiset eivät ole kytköksissä keskenään, niin ne suoritetaan automaattisest rinnakkain.

```JavaScript
// Esimerkki uuden Promise-olion luomisesta
new Promise((resolve, reject) =>  {}) // Promise fullfills or rejects based on the function given to the promise.
```