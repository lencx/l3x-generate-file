const fs = require('fs-extra')
const { green } = require('chalk')

const writeFile = (filename, data) => {
    fs.outputJSON(filename, data, {spaces: 4}, err => {
        if (err) return console.error(err)
        console.log(green(`${filename} file successfully written!`))
    })
}

/**
 * Generate JSON file
 * @param object opts - data | key | val | cover? | output?
 */
exports.genJSON = opts => {
    const { data, key, val, output = 'default.json', cover = false } = opts
    let _d = data
    let _dataKeys = Object.keys(data)
    const tmp = () => {
        _d = Object.assign(data, {
            [key]: val
        })
        writeFile(output, _d)
    }
    if(!_dataKeys.includes(key)) tmp()
    else if(cover && _d[key] !== val) tmp()
}