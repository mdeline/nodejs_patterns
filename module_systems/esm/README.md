## __ESM (tai ECMAScript / ES) -moduulien määrittelymallit__

Huom! Node.js olettaa moduulien noudattavan CommonJS -konventiota ellei toisin määritellä. Jos CommonJS:n sijasta halutaankin käyttää ESM:ää, niin tiedostot pitää joko nimetä .mjs -päätteisiksi tai package.jsoniin pitää lisätä rivi "type":"module".

ESM-moduulit täytyy tuoda tiedostopäätteineen, esim. `import './irony.js'` (CommonJS-moduuleita voi tuoda tiedostopäätteellä tai ilman).

### __Tiivistelmät eri ESM-moduulien määrittelymalleista__

```javascript
// Default exports
import A from './y.js'
```

```javascript
// Named exports
import { b } from './y.js'
```

```javascript
// Namespace imports
import * as moduleY from './y.js'
```

```javascript
// Mixed imports (mm. Reactin moduuleissa käytetään default & named exportsia sekaisin)
import A, { b } from './y.js'
```

```javascript
// Dynamic importing
    import('./y.js')
        then((moduleY) => {
            moduleY.b()
        })

```