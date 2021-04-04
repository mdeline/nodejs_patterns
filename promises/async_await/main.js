function oven_is_hot() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(notify(`Oven is hot.`))
        }, 1500)
    })
}

function dough_has_risen() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(notify(`Dough has risen.`))
        }, 1500)
    })
}

function pizza_is_baked() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(notify(`Your pizza is ready.`))
        }, 1500)
    })
}

function eat() {
    return new Promise((resolve, reject) => {
        resolve(notify('There’s very little in my world that a foot massage and a thin-crust pizza won’t set right.'))
    })
}

function notify(message) {
    console.log(message)
}

/* 
Async await ei toimi takaisinkutsujen kanssa, koska toiminnallisuus on rakennettu Promise-olioiden päälle syntaktiseksi helpotukseksi.
Jos async awaitia halutaan käyttää callbackien kanssa, niin callback täytyy ensin muuttaa promiseksi promisify-funktion avulla.
*/
async function cook_pizza() {
    await oven_is_hot()
    await dough_has_risen()
    await pizza_is_baked()
}

cook_pizza().then(eat)