// 1. Default exports
import DorothysLine from './oz.js' // importin uudelleennimeäminen halutunlaiseksi heti tuonnin yhteydessä ilman 'as' avainsanan käyttöä
DorothysLine()

// 2. Named exports
import { scarecrow as scarecrowsline } from './oz.js'
scarecrowsline()

// 3. Namespace import
import * as ozmodule from './oz.js'
ozmodule.cowardly_lion()

// 4. Mixed imports
import Dorothy, { tin_man } from './oz.js'
Dorothy()
tin_man()
