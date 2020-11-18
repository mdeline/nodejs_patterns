const replicator_A = require('./replica.js')
const replicator_B = require('./replica.js')

// Run replicator 'A' fist, then switch over to replicator 'B'.
replicator_A.copy()
replicator_A.copy()
replicator_A.copy()
replicator_B.copy()
replicator_B.copy() // By now the count should be 5 for both 'A' and 'B'.

// Verification
replicator_A.getCount()
replicator_B.getCount()
