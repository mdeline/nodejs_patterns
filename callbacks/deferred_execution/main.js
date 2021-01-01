import { readFile } from 'fs'

const cache = new Map()

function readAsync (filename, callback) {
    if (cache.has(filename)) {
        process.nextTick(() => callback(cache.get(filename))) // map.get on synkroninen
    } else {
        readFile(filename, 'utf8', (err, data) => { // readFile() on asynkroninen
            if (err) {
                callback(err) 
            } else {
                cache.set(filename, data)
                callback(data)
            }
        })
    }
}

console.log(cache, '\n')
readAsync('./secret.txt', data => console.log(data, '\n'))
setTimeout(() => { // Pakko käyttää asyncia tulostukseen, koska tiedostonluku on niin hidasta
    console.log(cache, '\n')
}, 100)

readAsync('./thisFileDoesNotExist.txt', err => console.log(err, '\n'))
