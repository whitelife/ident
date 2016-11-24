
# ident

create identifier

## Installation

```
npm install ident
```

# API

## Ident.setAlgorithm(algorithm)

- algorithm: hash algorithm (default: sha1)

```javascript
const Ident = require('ident');
Ident.setAlgorithm('sha256');
```

## Ident.identifier()

```javascript
const Ident = require('ident');
const id = Ident.identifier();
console.log(id);
```
