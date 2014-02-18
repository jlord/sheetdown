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
  if (err != "null") return showError(err)

  if (!save) return console.log(table)

  fs.writeFile('table.md', table.toString(), function (err) {
    if (err) return console.error(err)

    console.log('table has been created and saved')
  })
})

function showError(err) {
  console.error(err)
  console.error('1. Are you sure this spreadsheet is publicly available, or available to all people with the link? You can change this in "Share settings".')
  console.error('2. Are you sure this spreadsheet is “published to the web”? Click "File" > "Publish to Web" to allow for machine fetches.')
}
