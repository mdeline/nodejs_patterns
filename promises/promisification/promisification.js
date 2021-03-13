export function promisify(callbackBasedAPI) {
    return function promisified(...args) {
        return new Promise((resolve, reject) => {
            const newArgs = [
                ...args,
                function(err, result) {
                    if (err) {
                        return reject(err) // promisen tila
                    }
                    resolve(result)
                }
            ]
            callbackBasedAPI(...newArgs)
        })
    }
}