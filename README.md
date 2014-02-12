# sheetdown

Convert a Google Spreadsheet into a table in Markdown. A [node.js](http://www.nodejs.org) module, available here and [NPM](http://www.npmjs.org/sheetdown).

## To Use

You'll need [Node.js](http://www.nodejs.org) (and [NPM](http://www.npmjs.org/sheetdown), which in most cases comes bundled with Node.js). To get Node.js (for running JavaScript on servers (and in this case your computer is one)), go to [nodejs.org](http://www.nodejs.org) and click the icon that corresponds to your operating system. Install. When it's done, open Terminal (in Mac) or Command Prompt (Win) and proceed:

#### Install sheetdown

Globally `-g` install it so that you can use it anywhere.

```bash
npm install -g sheetdown
```

#### Make Tables

Use your Spreadsheet key (see below)

Prints to terminal:

```bash
sheetdown SPREADSHEETKEY
```

Copies the output (and then you can paste it):

```bash
sheetdown SPREADSHEETKEY | pbcopy
```

#### Save Table as Markdown file

It will save the file in the current working directory, so if you want it to be somewhere specific, navigate yourself there in your terminal.

```bash
sheetdown SPREADSHEETKEY --save
```

#### To Build

```bash
git clone https://github.com/jlord/sheetdown.git
cd sheetdown
npm install
```

### Get a Spreadsheet Key

You'll need an accessible* Google Spreadsheet:

- From your Google Spreadsheet click File > Publish to Web (this makes it so the data can be fetched). Click Start Publishing.
- It will return a url in the dialogue box, copy the portion that is your key.

The URL

```bash
https://docs.google.com/a/github.com/spreadsheet/ccc?key=0Ao5u1U6KYND7dGN5QngweVJUWE16bTRob0d2a3dCbnc#gid=0
```

The Key

```bash
0Ao5u1U6KYND7dGN5QngweVJUWE16bTRob0d2a3dCbnc
```

![key](https://raw.github.com/jllord/sheetsee-cache/master/img/key.png)

*Accessible Google Spreadsheets are those with Share settings set to either 'Public on the Web' or 'Anyone who has the link can view'. Spreadsheets set to 'Shared Private' cannot be reached because they're private, so they won't work.
