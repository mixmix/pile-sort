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

const piles = pileSort(records, [
  (record) => record.age < 13,     // isChild
  (record) => record.age < 20      // isTeen
])
// [
//   [
//     { name: 'ziva', age: 2 }    // isChild
//   ],
//   [
//     { name: 'lev', age: 13 }    // isTeen
//   ],
//   [
//     { name: 'alice', age: 34 }, // remainder
//     { name: 'mix', age: 36 }
//   ]
// ]

const [ children, teens, remainder ] = piles
```

## API

```js
pileSort(records, filters) => results
```

where:
- `records` is an Array of items you want to seperate
- `filters` is an Array of `n` filters which will be used to sort into piles. These are applied in order till a match is found (returns `true`). If no match is found, the item will default to a "remainder" pile
- `results` is an Array of `n + 1` Arrays
    - n piles for each of the filters,
    - 1 pile on the end "remainder" (items which didn't match any of the filters)

