import { randomBytes } from 'crypto'
import { promisify } from './promisification.js' // In the real world you should use the promisify() function of the util-package instead

const randomBytesPromisified = promisify(randomBytes) // randomBytes is normally callback-based

randomBytesPromisified(20)
    .then(buffer => {
        console.log(`Random bytes: ${buffer.toString()}`) // Note: Not all bytes are printable characters
    })
