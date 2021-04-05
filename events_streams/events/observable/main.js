import { EventEmitter } from 'events'
import { readFile } from 'fs'

/** Minkä tahansa luokan muuntaminen observableksi jatkamalla EventEmitteri-luokkaa */
class darksoulsWiki extends EventEmitter  {
    constructor () {
        super() // super():n avulla peritään EventEmitterin metodit
        this.pages = []
    }

    addPage(page) {
        this.pages.push(page)
        return this // mahdollistaa ketjuttamisen
    }

    find(regex) {
        for (const page of this.pages) {
            readFile(page, 'utf8', (err, content) => {
                if (err) {
                    return this.emit('error', err)
                }
                this.emit('pageread', page)
                const match = content.match(regex)
                if (match) {
                    match.forEach(elem => this.emit('found', page, elem))
                } 
            })
        }
        return this
    }

}

const dsWiki = new darksoulsWiki()
dsWiki
    .addPage('./crystal_sage.txt')
    .addPage('./pontiff.txt')
    .find(/outrider/i)
    .on('pageread', page => console.log(`Read ${page}`))
    .on('found', (file, match) => console.log(`Matched "${match}" in file ${file}`))
    .on('error', err => console.error(`Error emitted ${err.message}`))

