# l3x-generate-file

> Generate File

## Installation

```bash
npm install l3x-generate-file
```

## Usage

```js
const {genTpl, genJSON} = require('l3x-generate-file')
genTpl(data)
genJSON(data)
```

## Methods

* [genTpl](./doc/gentpl.md)
* [genJSON](./doc/genjson.md)

## Example

```js
const {genTpl, genJSON} = require('l3x-generate-file')

// genTpl
genTpl(require('./tpl'))
// or
genTpl({
    css: {
        tpl: `body {background: pink;}`,
        output: 'tpl/css/main.css'
    },
    // ...
})

// ------------------------------------------

genJSON({
    data: require('./test.json'), // object
    key: 'cc',
    val: 33,
    output: 'new-test.json',
    cover: false  // default: false
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