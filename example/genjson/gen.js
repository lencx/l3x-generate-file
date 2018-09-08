const {genJSON} = require('../../src')


genJSON({a: 1, b: 2}) // ouputFile: default.json

// genJSON({a: 1, b: 2}, 'a/b.json') // ouputFile: rootPath/a/b.json

// genJSON(require('./test.json')) // ouputFile: default.json

// genJSON(require('./test.json'), 'a/b.json') // ouputFile: rootPath/a/b.json

// // ouputFile: default.json
// genJSON(require('./test.json'), {
//     key: 'c',
//     val: 3
// })

// // ouputFile: rootPath/a/b.json
// genJSON(require('./test.json'), {
//     key: 'c',
//     val: 3,
//     output: 'a/b.json'
// })

// // ouputFile: rootPath/a/b.json
// // Override the value of the source file property
// genJSON(require('./../../a/b.json'), {
//     key: 'c',
//     val: 4,
//     output: 'a/b.json', // default: default.json
//     cover: true // default: false
// })