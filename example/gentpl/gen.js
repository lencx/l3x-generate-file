const genFile = require('../../src')

genFile.genTpl(require('./tpl'))

genFile.genTpl({
    css: {
        tpl: `body {background: pink;}`,
        output: 'tpl/css/main.css'
    },
    // ...
})