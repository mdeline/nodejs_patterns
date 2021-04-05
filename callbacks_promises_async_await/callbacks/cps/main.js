/** Direct Style */
function add(a, b) {
    return a + b
}

/** Continuation Passing Style (vaihtoehto arvojen palauttamiselle suoraan kutsujalle) */
// Synkroninen cps-funktio
function addCps(a, b, callback) {
    callback(a + b)
}
// Asynkroninen cps-funktio
function addCpsAsync(a, b, callback) { 
    setTimeout(() => {
        callback(a + b)
    }, 100);
}

console.log('Direct style result', add(1, 1)) // direct style
addCps(2, 2, syncResult => console.log(`AddCps result: ${syncResult}`)) // synkroninen cps
addCpsAsync(4, 4, asyncResult => console.log(`addCpsAsync result: ${asyncResult}`)) // asynkroninen cps
