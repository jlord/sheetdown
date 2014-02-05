# sheetdown

Convert a Google Spreadsheet into a table in Markdown. A [node.js](http://www.nodejs.org) module, available here and [NPM](http://www.npmjs.org/sheetdown).

## To Use

You'll need [Node.js](http://www.nodejs.org) (and [NPM](http://www.npmjs.org/sheetdown), which in most comes with Node.js).

#### Install

```bash
npm install -g sheetdown
````

#### Make Tables

Prints to terminal:

```bash
sheetdown SPREADSHEETKEY
````

Copies:

```bash
sheetdown SPREADSHEETKEY | pbcopy
````

#### Save Table as Markdown file

It will save the file in the current working directory, so if you want it to be somewhere specific, navigate yourself there.

```bash
sheetdown SPREADSHEETKEY --save
````

