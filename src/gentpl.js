const fs = require('fs-extra')
const { red, yellow, green } = require('chalk')

/**
 * Generate template
 * @param object tpls
 */
exports.genTpl = tpls => {
    if(tpls === undefined) {
        console.log('Please specify a template file, doc: https://github.com/lencx/l3x-gentpl')
        return
    }
    Object.keys(tpls).forEach(key => {
        let _tpl = tpls[key]
        fs.pathExists(_tpl.output)
            .then(exist => {
                if(!exist) {
                    fs.outputFile(_tpl.output, _tpl.tpl, err => {
                        // console.log(err)
                    })
                    console.log(yellow(_tpl.output), green('File successfully written!'))
                } else console.log(yellow(_tpl.output), red('File already exists!'))
            })
    })
}