import { randomBytes } from 'crypto'
import * as p from './promisification.js' // In the real world you should use the promisify() function of the util-package instead

const randomBytesPromisified = p.promisify(randomBytes)

randomBytesPromisified(20)
    .then(buffer => {
        console.log(`Random bytes: ${buffer.toString()}`) // Note: Not all bytes are printable characters
    })
