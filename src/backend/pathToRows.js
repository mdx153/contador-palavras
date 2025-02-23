const fs = require('fs')
const getSeparator = require('./enum/separatorEnum')

module.exports = (paths, separator) => {
    return new Promise((resolver, reject) => {
        try {
            const fullText = paths
                .map(path => fs.readFileSync(path).toString('utf-8'))
                .reduce((fullText, fileText) => `${fullText}\n${fileText}`)
            
            const rows = getSeparator(separator, fullText)
            console.log()
            resolver(rows)
        } catch (e) { reject(e) }
    })
}