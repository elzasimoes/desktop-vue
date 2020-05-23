const { ipcMain } = require('electron')

const pathsToRows = require('./pathsToRows')

ipcMain.on('process-subtitles', (event, paths) => {

    pathsToRows(paths)
        .then(rows => console.log(rows))
        .then(() => {
            event.reply('process-subtitles', [
                { name: 'you', amount: 900 },
                { name: 'her', amount: 853 },
                { name: 'i', amount: 1222 },
                { name: 'he', amount: 853 },
                { name: 'our', amount: 1222 },
                { name: 'he', amount: 853 },
                { name: 'after', amount: 1222 },
                { name: 'moon', amount: 853 },
                { name: 'house', amount: 1222 }
            ])
        })
})