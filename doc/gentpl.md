# genTpl(object)

> Generate template

## Example

```js
const genFile = require('l3x-generate-file')

genFile.genTpl(require('./tpl'))

// or

genFile.genTpl({
    css: {
        tpl: `body {background: pink;}`,
        output: 'tpl/css/main.css'
    },
    // ...
})
```

> `tpl.js`

```js
let pugTpl = `h1 hello
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
