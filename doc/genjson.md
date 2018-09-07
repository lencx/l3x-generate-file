# genJSON(object)

> Generate JSON

## Example

```js
const genFile = require('l3x-generate-file')

genFile.genJSON({
    data: require('./test.json'), // object
    key: 'cc',
    val: 33,
    output: 'new-test.json',
    cover: false  // default: false
})
```
