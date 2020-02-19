var test = require('tape')
var pileSort = require('./')

test('simple case', t => {
  var records = [
    { name: 'alice', age: 34 },
    { name: 'mix', age: 36 },
    { name: 'ziva', age: 2 },
    { name: 'lev', age: 15 }
  ]

  var results = pileSort(records, [
    function isChild (record) { return record.age < 13 },
    function isTeen (record) { return record.age < 20 }
  ])

  var expected = [
    [{ name: 'ziva', age: 2 }],
    [{ name: 'lev', age: 15 }],
    [{ name: 'alice', age: 34 }, { name: 'mix', age: 36 }]
  ]

  t.deepEqual(results, expected, 'works')

  t.end()
})
