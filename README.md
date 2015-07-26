# sheetdown

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
[![travis](https://travis-ci.org/jlord/sheetdown.svg)](https://travis-ci.org/jlord/sheetdown)

Convert a Google Spreadsheet into a table in Markdown. A [node.js](http://www.nodejs.org) module, available here and [NPM](http://www.npmjs.org/sheetdown).

_Works with both old and new Google Spreadsheets._

## To Use

You'll need [Node.js](http://www.nodejs.org) (and [NPM](http://www.npmjs.org/sheetdown), which in most cases comes bundled with Node.js). To get Node.js (for running JavaScript on servers (and in this case your computer is one)), go to [nodejs.org](http://www.nodejs.org) and click the icon that corresponds to your operating system. Install. When it's done, open Terminal (in Mac) or Command Prompt (Win) and proceed:

### Install sheetdown

Globally `-g` install it so that you can use it anywhere.

```bash
npm install -g sheetdown
```

### Get your Table

Use your Spreadsheet url and either run one of these commands to either print the table out to your console, copy it to your computer's clipboard or save it to a file named `table.md` in the current directory.

**Prints to terminal:**

```bash
sheetdown SPREADSHEETURL
```

**Copies the output (and then you can paste it):**

```bash
sheetdown SPREADSHEETURL | pbcopy
```

**Save Table as Markdown file**

It will save the file `table.md` in the current working directory, so if you want it to be somewhere specific, navigate yourself there in your terminal.

```bash
sheetdown SPREADSHEETURL --save
```

## About your Spreadsheet

You'll need an accessible (settings that allow its data to be read) Google Spreadsheet:

- From your Google Spreadsheet click File > Publish to Web (this makes it so the data can be fetched). Click Start Publishing.
- From the Share button on the top right, have it set at least to 'Anyone who has the link can view'

## To Build and Hack on

```bash
git clone https://github.com/jlord/sheetdown.git
cd sheetdown
npm install
```
