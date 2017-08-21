const { app, BrowserWindow } = require('electron');
path = require('path');
url = require('url');

app.on('ready', function() {

    console.log('Starting application!');
    mainWindow = new BrowserWindow({ width: 1280, height: 960 });
    // mainWindow.loadURL(url.format({
    //     pathname: path.join(__dirname, 'dist', 'index.html'),
    //     protocol: 'file:',
    //     slashes: true
    // }));

    
    mainWindow.loadURL(url.format({
            pathname: path.join(__dirname, 'build', 'index.html'),
            protocol: 'file:',
            slashes: true
    }));

    // Opens dev tools
    mainWindow.webContents.openDevTools();
    mainWindow.on('closed', function() {
        mainWindow = null;
    });
});

app.on('window-all-closed', function() {
    app.quit();
});