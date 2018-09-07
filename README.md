# l3x-generate-file

> Generate File

## Installation

```bash
npm install l3x-generate-file
```

## Usage

```js
const genFile = require('l3x-generate-file')
genFile.genTpl(data)
genFile.genJSON(data)
```

## Methods

* [genTpl](./doc/gentpl.md)
* [genJSON](./doc/genjson.md)

## Example

```js
const genFile = require('l3x-generate-file')

// genTpl
genFile.genTpl(require('./tpl'))
// or
genFile.genTpl({
    css: {
        tpl: `body {background: pink;}`,
        output: 'tpl/css/main.css'
    },
    // ...
})

// ------------------------------------------

genFile.genJSON({
    data: require('./test.json'), // object
    key: 'cc',
    val: 33,
    output: 'new-test.json'
})
```

> require('tpl')

```js
/** tpl.js **/
let pugTpl = `h1 Hello
`
let jsTpl = `let str = 'JS Template'
console.log(str)
`
// ...
module.exports = {
    pug: {
        tpl: pugTpl,
        output: 'tpl/view/test.pug'
    },
    js: {
        tpl: jsTpl,
        output: 'tpl/js/test.js'
    },
    // ...
}
```