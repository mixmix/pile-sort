# pile-sort

split an array into several chunks by sorting it into "piles".

## Example

```js
var pileSort = require('pile-sort')

var records = [
  { name: 'alice', age: 34 },
  { name: 'mix', age: 36 },
  { name: 'ziva', age: 2 },
  { name: 'lev', age: 15 }
]

pileSort(records, [
  (record) => record.age < 13,    // isChild
  (record) => record.age < 20     // isTeen
])
// => [
//   [{ name: 'ziva', age: 2 }],  // children
//   [{ name: 'lev', age: 13 }],  // teens
//   [{ name: 'alice', age: 34 }, { name: 'mix', age: 36 }],
// ]
```

## API

```
pileSort(records, filters) => results
```

where:
- `records` is an Array of items you want to seperate
- `filters` is an Array of `n` filters which will be used to sort into piles. These are applied in order till a match is found (returns `true`). If not match is found the item will default to "remainders"
- `results` is an Array of `n + 1` Arrays - one "pile" for each of the filters, plus an extra for the "remainder"

