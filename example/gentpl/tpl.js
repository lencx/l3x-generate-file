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