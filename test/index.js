var test = require('tape')
var sheetdown = require('../makeTable.js')

test('Convert spreadsheets to markdown table', function (t) {
  var csvPath = './test/spreadsheet.csv'
  sheetdown(csvPath, function (err, table) {
    if (err) t.error(err)
    var HTMLindex = table.indexOf('[Link](http://twitter.com/jllord/status/605920854153658370)') > -1
    t.ok(HTMLindex, 'Turns HTML into Markdown')
    t.end()
  })
})
