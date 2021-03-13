import { evaluate, re } from 'mathjs'

// Example of creating a new promise
(new Promise((resolve, reject) =>  {})) // Promise fullfills or rejects based on the function given to the promise


// example 1.
function whistle_after(milliseconds) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("fiyyy")
        }, milliseconds)
    })
}

whistle_after(2000)
    .then(sound => {
        console.log(sound)
    })

// example 2.
function cast(a_spell) {
    return new Promise((resolve, reject) => {
        resolve(evaluate(a_spell))
    })
}

cast(18000 * 1.07 + 18000 * 1.07 + 18000 * 1.07)
    .then(result => {
        console.log(result)
    })
