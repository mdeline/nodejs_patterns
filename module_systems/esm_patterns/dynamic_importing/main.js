/** 
 * Yksinkertainen komentorivisovellus, joka lataa oikean ESM-kielimoduulin käyttäjän valinnan perusteella.
 * 
 * Taustatietoa:
 * ESM-moduulit on staattisia, mutta moduuleja voidaan tarvittaessa ladata myös asynkronisesti 
 * import()-funktion avulla. Näin dynaamiseen moduulien lataamiseen ei välttämättä tarvitse käyttää 
 * CommonJS:ää.
 * 
 * Käyttötapaukset:
 * Tilanteet, joissa moduuli on erityisen raskas ladattavaksi synkronisesti, ladattava 
 * moduuli on käyttöjärjestelmäriippuvainen tai kuten alla: ladattava moduuli riippuu käyttäjän
 * kielivalinnasta.
*/

const SUPPORTED_LANGUAGES = ['fr', 'jp', 'en']
const selectedLanguage =  process.argv[2]

if (!SUPPORTED_LANGUAGES.includes(selectedLanguage)) {
    console.error('The specified language is not supported.')
    process.exit(1)
}

const translationModule = `./${selectedLanguage}_lang.js`

import(translationModule)
    .then((module) => {
        console.log(module.REQUEST)
    }
)

