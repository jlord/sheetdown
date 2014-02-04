var request = require('request')

module.exports = function makeTable(KEY) {
  

  
}


var URL = 'https://docs.google.com/spreadsheet/pub?hl=en_US&hl=en_US&key=0Ao5u1U6KYND7dGN5QngweVJUWE16bTRob0d2a3dCbnc&single=true&gid=0&output=csv'
var URL1 = 'https://spreadsheets.google.com/feeds/download/spreadsheets/Export?key=0Ao5u1U6KYND7dGN5QngweVJUWE16bTRob0d2a3dCbnc&hl&exportFormat=csv'

request( URL, function (error, response, body) {
  if (error) console.log(error)
  if (!error && response.statusCode == 200) {
    var array = body.split('\n')
    var headers = array.shift()
    // console.log("new array", array)
    makeMdTable(headers, array)
  }
})

function makeMdTable(headers, bodyArray) {  
  var headerCount = (headers.split(',').length) + 1
  var comma = /\,/g
  var tableHeaders = '|' + headers.replace(comma, '|') + '|'
  var tableBody = addNLandBar(bodyArray)
  var underHeaders = makeHeaderUnders(headerCount)
  var nl = '\n'
  var mdTable = tableHeaders + nl + underHeaders + nl + tableBody
  console.log(mdTable)
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