## ESM (tai ECMAScript / ES) -moduulien määrittelymallit

Huom! Node.js olettaa moduulien noudattavan CommonJS -konventiota ellei toisin määritellä. Jos CommonJS:n sijasta halutaankin käyttää ESM:ää, niin tiedostot pitää joko nimetä .mjs -päätteisiksi tai package.jsoniin pitää lisätä rivi "type":"module".

ESM-moduulit täytyy tuoda tiedostopäätteineen `import './irony.js'` CommonJS-moduuleita voi tuoda tiedostopäätteellä tai ilman.

### ESM-moduulien määrittelymallit

#### Default import
```javascript
import A from './y.js'
```

#### Named import
```javascript
import { b } from './y.js'
```

#### Namespace imports
```javascript
import * as moduleY from './y.js'
```

#### Mixed imports
```javascript
// mm. Reactin moduuleissa käytetään default & named tuontia sekaisin
import A, { b } from './y.js'
```

#### Dynamic importing
```javascript
import('./y.js') 
    .then((moduleY) => {
        moduleY.b()
    })
```