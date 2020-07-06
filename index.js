const { app, BrowserWindow } = require('electron')


app.on('window-all-closed', function() {
    if (process.platform != 'darwin')
        app.quit();
});


function createWindow () {
    // Create the browser window.
    let win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    })
    // let login = new BrowserWindow({
    //     width: 200,
    //     height: 100,
    //     webPreferences: {
    //         nodeIntegration: true
    //     }
    // })
    // login.show()
win.setMenu(null)
    win.maximize()
    // and load the index.html of the app.
    win.loadFile('index.html');
    win.on('closed', function() {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        win = null;
    });
}

app.whenReady().then(createWindow)
