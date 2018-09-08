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
genJSON(data [, outputPath|options])
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
genJSON({a: 1, b: 2}) // ouputFile: default.json
genJSON({a: 1, b: 2}, 'a/b.json') // ouputFile: rootPath/a/b.json
genJSON(require('./test.json')) // ouputFile: default.json
genJSON(require('./test.json'), 'a/b.json') // ouputFile: rootPath/a/b.json
// ouputFile: default.json
genJSON(require('./test.json'), {
    key: 'c',
    val: 3
})
// ouputFile: rootPath/a/b.json
genJSON(require('./test.json'), {
    key: 'c',
    val: 3,
    output: 'a/b.json'
})
// ouputFile: rootPath/a/b.json
// Override the value of the source file property
genJSON(require('a/b.json'), {
    key: 'c',
    val: 3,
    output: 'a/b.json', // default: default.json
    cover: true // default: false
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