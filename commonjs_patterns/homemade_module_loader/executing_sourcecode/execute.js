const fs = require('fs')

function execute(filename) {
  const wrapperSrc =
    `(function() {
      ${fs.readFileSync(filename, 'utf8')}
    })()`
  eval(wrapperSrc)
}

execute('./print_quote.js')
