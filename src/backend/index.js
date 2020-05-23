const { ipcMain } = require('electron')

ipcMain.on('process-subtitles', (event, paths) => {
    console.log(paths)

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