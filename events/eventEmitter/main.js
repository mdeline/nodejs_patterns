import { EventEmitter } from 'events'

const emitter = new EventEmitter()

function provoke() {
    console.log("What are you going to do when Hip-Hop goes out?")
}
function serve() {
    console.log("Hip hop is an attitude, it's right here, it's how you feel, it's a style. So, it can't go out.")
}

/** Tapahtumien rekisteröinti */
emitter.on('insecurity', () => {
    provoke()
    emitter.emit('negativity')
})
emitter.on('negativity', () => {
    serve()
})

/** Tapahtuman lähettäminen */
emitter.emit('insecurity')
