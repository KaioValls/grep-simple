const { app, BrowserWindow, ipcMain } = require('electron');
const url = require('url');
const path = require('path');
let mainWindow;
function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1300,
    height: 800,
    minWidth: 1000,
    minHeight: 600,
    frame: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false,
      contextIsolation: true,
      devTools: true
    },
    autoHideMenuBar: true,
  });
  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, `/dist/electron-grep-rtb/browser/index.html`),
      protocol: 'file:',
      slashes: true,
    })
  );

  ipcMain.on('minimizeApp', () => {
    mainWindow.minimize();
  });

  ipcMain.on('maximizeApp', () => {
    if (mainWindow.isMaximized()) {
      mainWindow.unmaximize();
    } else {
      mainWindow.maximize();
    }
  });

  ipcMain.on('closeApp', () => {
    mainWindow.close();
  });

  mainWindow.on('closed', function () {
    mainWindow = null;
  });

}


app.on('ready', createWindow);
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});
app.on('activate', function () {
  if (mainWindow === null) createWindow();
});



