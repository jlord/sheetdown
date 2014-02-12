#!/usr/bin/env node

var makeTable = require('./makeTable.js')
var fs = require('fs')

var KEY = process.argv[2]

var save = false

if (process.argv[3] && process.argv[3].match("--save")) {
  save = true
}

if (KEY && !save) {
  makeTable(KEY, function callback(err, table) {
    if (err != "null") return console.log(err)

    console.log(table)
  })
}

if (KEY && save) {
  makeTable(KEY, function callback(err, table) {
    if (err != "null") return console.log(err)

    fs.writeFile('table.md', table.toString(), function (err) {
      if (err) return console.log(err)
    })
    console.log('table has been created and saved')
  })
}

if (!KEY) {
  return console.log("To use: `$ sheetdown SPREADSHEET KEY --save`\n" +
                     "Or: `$ sheetdown SPREADSHEETKEY | pbcopy")
}
