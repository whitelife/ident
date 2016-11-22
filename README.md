
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
Ident.setAlgorithm('sha256');
```

## Ident.identifier()

```javascript
const id = Ident.identifier();
console.log(id);
```
