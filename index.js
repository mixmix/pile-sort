var { isArray } = Array

module.exports = function pileSort (records, filters) {
  if (!isArray(records)) throw new Error('pile-sort expected an Array of records to sort')
  if (!isArray(filters) || !filters.length || !filters.every(f => typeof f === 'function')) throw new Error('pile-sort expected an Array of filters')

  var results = new Array(filters.length + 1)
    .fill(0)
    .map(el => ([]))

  records.forEach(record => {
    for (var i = 0; i < filters.length; i++) {
      var filter = filters[i]

      if (filter(record)) {
        results[i].push(record)
        break
      }

      if (i === filters.length - 1) {
        results[i + 1].push(record)
      }
    }
  })

  return results
}
