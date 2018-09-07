const genFile = require('../../src')

genFile.genJSON({
    data: require('./test.json'),
    key: 'cc',
    val: 33,
    output: 'new-test.json'
})