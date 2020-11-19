/** Do Androids Dream of Electric Sheep? **/
class Replica {
  constructor (original) {
    this.original = original
    this.copyCount = 0
  }

  /*
    The difference between copying and replicating is that replication imitates
    the original process (e.g. creates a copy of the original painting by using
    the same methods).

    Here, we are building a new Android by by using the same assembly line.
  */
  replicate() {
    this.copyCount++
    console.log(`
      New copy of ${this.original} produced succesfully.
      Current count: ${this.copyCount}
      `)
  }

  getCopyCount() {
    console.log(this.copyCount)
  }
}
/**
  The instance of the class Replica will be cached and each constant that requires
  the module will refer to the cached module first. Please note that there is no
  guarantee that the cache will not change in the future.

  If the cache has been reset the module will be re-initialized and the state
  will be lost.
**/
module.exports = new Replica('Rachael') // Exporting an instance instead of a whole class
