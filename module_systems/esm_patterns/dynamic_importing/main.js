// Yksinkertainen komentorivisovellus, joka lataa oikean kielimoduulin käyttäjän syötteen perusteella
const SUPPORTED_LANGUAGES = ['fr', 'jp', 'en']
const selectedLanguage =  process.argv[2]

if (!SUPPORTED_LANGUAGES.includes(selectedLanguage)) {
    console.error('The specified langauge is not supported.')
    process.exit(1)
}

const translationModule = `./${selectedLanguage}_lang.js`

// ESM-moduuleja voidaan ladata myös asynkronisesti import()-funktion avulla
import(translationModule)
    .then((module) => {
        console.log(module.REQUEST)
    })

