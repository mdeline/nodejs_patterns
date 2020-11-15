// fs-module is needed in order to access the underlying operating system and its file system.
const fs = require('fs')

/*
  Creates a function expression by manually wrapping the file's code alongside
  with the declarations into a template string.
*/
function execute(filename) {
  const wrapperSrc =
    `(function() {
      ${fs.readFileSync(filename, 'utf8')}
    })()`
  eval(wrapperSrc)
}

execute('./print_quote.js')
