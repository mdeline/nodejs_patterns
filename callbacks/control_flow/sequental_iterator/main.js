// Kokoelman iterointi asynkronisesti
function iterateSeries(collection, iteratorCallback, finalCallback) {
    function asyncOperation (callback, item) {
        process.nextTick(callback, item)
     }
    function iterate(index) {
        if (index === collection.length) {
            return asyncOperation(finalCallback) 
        }
        asyncOperation(iteratorCallback, collection[index])
        iterate(index + 1)
    }
    iterate(0)
}

iterateSeries([4, 8, 15], result => console.log(result + 1), () => console.log('Finished'))