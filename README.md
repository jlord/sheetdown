# sheetdown

Convert a Google Spreadsheet into a table in Markdown. A [node.js](http://www.nodejs.org) module, available here and [NPM](http://www.npmjs.org/sheetdown).

## To Use

You'll need [Node.js](http://www.nodejs.org) (and [NPM](http://www.npmjs.org/sheetdown), which in most comes with Node.js).

#### Install

```bash
npm install -g sheetdown
```

#### Make Tables

Prints to terminal:

```bash
sheetdown SPREADSHEET
```

Where `SPREADSHEET` is either a full Google Docs/Drive URL or just the key portion (see below).

Copies:

```bash
sheetdown SPREADSHEET | pbcopy
```

#### Save Table as Markdown file

It will save the file in the current working directory, so if you want it to be somewhere specific, navigate yourself there.

```bash
sheetdown SPREADSHEET --save
```

#### To Build

```bash
git clone https://github.com/jlord/sheetdown.git
cd sheetdown
npm install
```

### Get a Spreadsheet Key

You'll need an accessible Google Spreadsheet:

- From your Google Spreadsheet click File > Publish to Web (this makes it so the data can be fetched). Click Start Publishing.
- It will return a url in the dialogue box, copy the portion that is your key.

The URL

```bash
https://docs.google.com/a/github.com/spreadsheet/ccc?key=0Ao5u1U6KYND7dGN5QngweVJUWE16bTRob0d2a3dCbnc#gid=0
```

The Key

`0Ao5u1U6KYND7dGN5QngweVJUWE16bTRob0d2a3dCbnc`

![key](https://raw.github.com/jllord/sheetsee-cache/master/img/key.png)`
