/**
  The instance will be cached and each file that requires the Replica module
  will refer to the cached module first. However, please note that there is no
  guarantee that the cache will not change in the future.

  If the cache has been reset the module will be re-initialized and the state
  will be lost.
**/
class Replica {
  constructor (original) {
    this.count = 0
    this.original = original
  }

  copy() {
    this.count++
    console.log(`
      New copy of ${this.original} produced succesfully.
      Current count: ${this.count}
      `)
  }

  getCount() {
    console.log(this.count)
  }
}

module.exports = new Replica('Rachael') // Exporting an instance instead of a whole class
