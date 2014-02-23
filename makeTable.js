var request = require('request')
var csv = require('binary-csv')
var concat = require('concat-stream')

module.exports = function makeTable(key, callback) {
  var base = 'https://docs.google.com/spreadsheet/pub?hl=en_US&hl=en_US&key='
  var query = '&single=true&gid=0&output=csv'
  var URL = base + key + query

  var csvParser = csv({json: true})

  request(URL, function(error, response, body) {
    // console.log("stat", response.statusCode)
    if (response.statusCode.toString() === "404") {
      // console.log("FOUR OH FOUR")
      body = ""
      return callback(new Error("Spreadsheet not found.\n"
        + "Please double check your spreadsheet key is correct."))
    }
    if (response.req._header.match('ServiceLogin?')) {
      body = ""
      return callback(new Error("Cannot access spreadsheet.\n"
        + "Be sure you 'Publish to the Web' and turn the share settings to public on your spreadsheet."))
    }
  }).pipe(csvParser).pipe(concat(rows))

  function rows(data) {
    console.log("Data", data)
    if (data.toString() === "" || data.toString().match("<!DOCTYPE html>")) return
    var table = '|'
    var headers = Object.keys(data[0])
    var underHeaders = ''
    headers.map(function(key) {
      table += key + '|'
      underHeaders += ' ------ |'
    })

    table += '\n|' + underHeaders + '\n'
    data.map(function(row) {
      var values = headers.map(function(h) { return row[h] })
      table += '|' + values.join('|') + '|\n'
    })
    return callback("null", table)
  }
}
