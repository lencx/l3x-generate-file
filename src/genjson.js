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
 * @param object data - data object or require json file
 * @param string|object output?|opts? - key | val | cover? | output?
 * default output => default.json
 */
exports.genJSON = (data, opts) => {
    let defOutput = 'default.json'

    if(opts === undefined) {
        writeFile(defOutput, data)
    } else if (typeof opts === 'string') {
        writeFile(opts, data)
    } else {
        if (Object.prototype.toString.call(opts) !== '[object Object]') {
            return console.log(red(`genJSON(data [, outputPath|options])\noptions object: key | val | cover? | output?`))
        }
        const { key, val, output = defOutput, cover = false } = opts
        let _d = {}
        let _dataKeys = Object.keys(data)
        const tmp = () => {
            _d = Object.assign(data, {
                [key]: val
            })
            writeFile(output, _d)
        }
        if(!_dataKeys.includes(key.toString())) tmp()
        else if(cover && _d[key] !== val) tmp()
    }
}