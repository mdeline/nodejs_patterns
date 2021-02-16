(new Promise((resolve, reject) =>  {})) // fullfills or rejets based on the function given to the promise

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