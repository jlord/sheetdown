var request = require('request')
var csv = require('binary-csv')
var concat = require('concat-stream')
var parser = require('google-spreadsheets-key-parser')

module.exports = function makeTable(fullURL, callback) {
  var newBase = 'https://docs.google.com/spreadsheets/d/'
  var newQuery = '/export?gid=0&format=csv'
  var oldBase = 'https://docs.google.com/spreadsheet/pub?hl=en_US&hl=en_US&key='
  var oldQuery = '&single=true&gid=0&output=csv'

  var formattedURL = ''
  var parsed = parser(fullURL)
  // returns:
  // { key: '',
  //  isNewSheets: true }

  if (parsed.isNewSheets) {
    formattedURL = newBase + parsed.key + newQuery
  } else {
    formattedURL = oldBase + parsed.key + oldQuery
  }

  var csvParser = csv({json: true})
  var req = request(formattedURL)

  req.on('response', function (response){
    if (response.statusCode.toString() === "404") {
      return callback(new Error("HI Spreadsheet not found.\n"
        + "Please double check your spreadsheet key is correct."))
    }
    if (response.req._header.match('ServiceLogin?')) {
      return callback(new Error("Cannot access spreadsheet.\n"
        + "Be sure you 'Publish to the Web' and turn the share settings to public on your spreadsheet."))
    }
    req.pipe(csvParser).pipe(concat(rows))
  })

  function rows(data) {
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
