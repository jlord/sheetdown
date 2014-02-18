#!/usr/bin/env node

var makeTable = require('./makeTable.js')
var fs = require('fs')

var key = process.argv[2]

var save = false

if (process.argv[3] && process.argv[3].match("--save")) {
  save = true
}

if (!key) {
  return console.log("To use: `$ sheetdown SPREADSHEETKEY --save`\n" +
                     "Or: `$ sheetdown SPREADSHEETKEY | pbcopy")
}

makeTable(key, function callback(err, table) {
  if (err != "null") return console.error(err)

  if (!save) return console.log(table)

  fs.writeFile('table.md', table.toString(), function (err) {
    if (err) return console.error(err)

    console.log('table has been created and saved')
  })
})
