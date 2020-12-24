const replicator_A = require('./replica.js')
const replicator_B = require('./replica.js')

// Run replicator 'A' first then switch over to replicator 'B'.
replicator_A.replicate()
replicator_A.replicate()
replicator_A.replicate()
replicator_B.replicate()
replicator_B.replicate() // By now the count should be 5 for both 'A' and 'B'.

// Verification
replicator_A.getCopyCount() // 5
replicator_B.getCopyCount() // 5
