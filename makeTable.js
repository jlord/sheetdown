var request = require('request')

module.exports = function makeTable(KEY, callback) {
  var base = 'https://docs.google.com/spreadsheet/pub?hl=en_US&hl=en_US&key=' 
  var query = '&single=true&gid=0&output=csv'
  var URL = base + KEY + query

  request( URL, function (error, response, body) {
    if (error) return callback(err)
    if (!error && response.statusCode == 200) {
      var array = body.split('\n')
      var headers = array.shift()
      makeMdTable(headers, array, callback)
    }
  })
}

function makeMdTable(headers, bodyArray, callback) {  
  var headerCount = (headers.split(',').length) + 1
  var comma = /\,/g
  var tableHeaders = '|' + headers.replace(comma, '|') + '|'
  var tableBody = addNLandBar(bodyArray)
  var underHeaders = makeHeaderUnders(headerCount)
  var nl = '\n'
  var mdTable = tableHeaders + nl + underHeaders + nl + tableBody
  return callback("null", mdTable)
}

function makeHeaderUnders(headerCount) {
  var underHeaders = ""
  for (i = 1; i <= headerCount; i++) {
    if (i === 1) underHeaders += "| ------ |"
    else underHeaders += " ------ |"
  }
  return underHeaders
}

function addNLandBar(array) {
  var edit = []
  var comma = /\,/g
  array.forEach(function (item) {
    item = '|' + item.replace(comma, '|') + '|'
    item += "\n"
    edit.push(item)
  })
  return edit.toString().replace(comma, '')
}