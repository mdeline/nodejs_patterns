/** 
 * Esimerkit tapahtumankuuntelijoiden lisäämisestä ja tapahtuman 
 * lähettämisestä kuuntelijoille.
 * */

import { EventEmitter } from 'events'

const emitter = new EventEmitter()

// Tapahtuman rekisteröinti tapahtumankuuntelijalle
emitter.on('The Ballad of John and Yoko', () => {
    console.log(`
    Finally made the plane into Paris
    Honeymooning down by the Seine
    Peter Brown called to say
    "You can make it OK
    You can get married in Gibraltar near Spain"`)
})

// Tapahtuman lähettäminen tapahtumankuuntelijalle
emitter.emit('The Ballad of John and Yoko')
