import { promisify } from 'util'

/* 
Async await ei toimi takaisinkutsujen kanssa, koska toiminnallisuus on rakennettu Promise-olioiden päälle syntaktiseksi helpotukseksi.
Jos async awaitia halutaan käyttää callbackien kanssa, niin callback täytyy ensin muuttaa promiseksi promisify-funktion avulla.
*/
const sleep = promisify(setTimeout)

async function oven_is_hot() {
    await sleep(1000)
    return new Promise((resolve, reject) => {
        resolve(notify("Oven is hot."))
    })
}

async function dough_has_risen() {
    await sleep(1000)
    return new Promise((resolve, reject) => {
        resolve(notify(`Dough has risen.`))
    })
}

async function pizza_is_baked() {
    await sleep(1000)
    return new Promise((resolve, reject) => {
        resolve(notify(`Your pizza is ready.`))
    })
}

async function eat() {
    await sleep(1000)
    return new Promise((resolve, reject) => {
        resolve(notify('There’s very little in my world that a foot massage and a thin-crust pizza won’t set right.'))
    })
}

function notify(message) {
    console.log(message)
}

async function cook_pizza() {
    await oven_is_hot()
    await dough_has_risen()
    await pizza_is_baked()
}

/* --- */
cook_pizza().then(eat)