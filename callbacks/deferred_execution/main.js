import { readFile } from 'fs'

// simuloi välimuistia
const cache = new Map()

function readAsync (filename, callback) {
    if (cache.has(filename)) {
        process.nextTick(() => callback(cache.get(filename))) // cache.get on synkroninen
    } else {
        // readfile on asynkroninen
        readFile(filename, 'utf8', (err, data) => {
            if (err) {
                callback(err) 
            } else {
                cache.set(filename, data)
                callback(data)
            }
        })
    }
}

console.log(cache)
readAsync('./secret.txt', data => console.log(data))

setTimeout(() => { // Pakko käyttää asyncia tulostukseen, koska yllä oleva tiedostonluku on niin hidasta
    console.log(cache)
}, 100)

// Virheenkäsittelyn testaamista
readAsync('./thisFileDoesNotExist.txt', data => console.log(data))
