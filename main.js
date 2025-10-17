const { app, BrowserWindow, ipcMain, shell } = require('electron');
const { spawn } = require('child_process');
const url = require('url');
const path = require('path');
const fs = require('fs');

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
      devTools: true,
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

  ipcMain.on('open-folder', (event, folderPath) => {
    shell.openPath(folderPath);
  });

  ipcMain.on('open-git-bash', (event, repoPath) => {
    try {
      const gitBashPath = findGitBashPath();
      console.log('🔍 Git Bash localizado em:', gitBashPath);

      spawn(`"${gitBashPath}"`, ['--cd=' + path.resolve(repoPath)], {
        shell: true,
        detached: true,
        stdio: 'ignore',
      }).unref();
    } catch (err) {
      console.error('❌ Erro ao abrir Git Bash:', err);
    }
  });

  ipcMain.on('open-intellij', (event, projectPath) => {
    try {
      const ideaPath = findIntelliJPath();
      console.log('🚀 Abrindo IntelliJ em:', projectPath);

      spawn(`"${ideaPath}"`, [path.resolve(projectPath)], {
        shell: true,
        detached: true,
        stdio: 'ignore',
      }).unref();
    } catch (err) {
      console.error('❌ Erro ao abrir IntelliJ:', err);
    }
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

function findGitBashPath() {
  try {
    // Tenta encontrar o executável automaticamente via comando do Windows
    const gitBashPath = execSync('where git-bash.exe').toString().trim().split('\n')[0];
    if (fs.existsSync(gitBashPath)) {
      return gitBashPath;
    }
  } catch (e) {
    console.warn('Git Bash não encontrado via "where git-bash.exe".');
  }

  // Tentativas padrão caso o comando acima falhe
  const commonPaths = [
    'C:\\Program Files\\Git\\git-bash.exe',
    'C:\\Program Files (x86)\\Git\\git-bash.exe',
    path.join(process.env.USERPROFILE || '', 'AppData\\Local\\Programs\\Git\\git-bash.exe'),
  ];

  for (const p of commonPaths) {
    if (fs.existsSync(p)) {
      return p;
    }
  }

  throw new Error('Git Bash não encontrado em nenhum dos locais comuns.');
}

function findIntelliJPath() {
  try {
    // Primeiro tenta achar o IntelliJ via comando do Windows
    const ideaPath = execSync('where idea64.exe').toString().trim().split('\n')[0];
    if (fs.existsSync(ideaPath)) {
      return ideaPath;
    }
  } catch (e) {
    console.warn('IntelliJ não encontrado via "where idea64.exe".');
  }

  //TODO: DISPONIBILIZAR QUE O USUÁRIO DEFINA O CAMINHO DA IDE
  const possiblePaths = [
    'C:\\Program Files\\JetBrains\\IntelliJ IDEA Community Edition 2025.1.3\\bin\\idea64.exe',
    'C:\\Program Files\\JetBrains\\IntelliJ IDEA Ultimate 2024.2\\bin\\idea64.exe',
    path.join(
      process.env.USERPROFILE || '',
      'AppData\\Local\\JetBrains\\Toolbox\\apps\\IDEA-U\\ch-0\\',
      'bin\\idea64.exe'
    ),
    path.join(
      process.env.USERPROFILE || '',
      'AppData\\Local\\JetBrains\\Toolbox\\apps\\IDEA-C\\ch-0\\',
      'bin\\idea64.exe'
    ),
  ];

  for (const p of possiblePaths) {
    if (fs.existsSync(p)) {
      return p;
    }
  }

  throw new Error('IntelliJ IDEA não encontrado no sistema.');
}
