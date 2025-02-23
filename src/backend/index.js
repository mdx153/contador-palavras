const {ipcMain} = require('electron');
const pathToRows = require('./pathToRows')
const groupedWords = require('./groupWords')

ipcMain.on('processFiles' , (event, paths, separator) => {
    pathToRows(paths, separator)
        .then(words => {return groupedWords(words)}) //precisa retornar para usar no reply
        .then(groupedWords => {
            event.reply('processFiles', groupedWords)
        })
})