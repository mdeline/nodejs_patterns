/** Asynkronisten tapahtumien suorittaminen järjestyksessä vaikka väkisin */
function iterateSeries(collection, iteratorCallback, finalCallback) {
    function asyncOperation (callback, item) {
        process.nextTick(callback, item) // nextTick suorittaa callbackin tapahtumakierron lopussa
     }
    function iterate(index) {
        if (index === collection.length) {
            return asyncOperation(finalCallback) // Lopuksi suoritetaan iteroinnin loppumista merkitsevä funktio, vähän sama idea kuin lähettäisi signaalin tapahtuman valmistumisesta
        }
        asyncOperation(iteratorCallback, collection[index]) 
        iterate(index + 1) // Suoritusjärjestys pidetään kurissa rekursiolla ja nextTickillä
    }
    iterate(0) // Varsinainen rekursion käynnistävä kutsu alkaen indeksistä 0
}

iterateSeries([4, 8, 15], result => console.log(result + 1), () => console.log('Finished'))