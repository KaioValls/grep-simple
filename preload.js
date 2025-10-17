const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  closeApp: () => ipcRenderer.send('closeApp'),
  minimizeApp: () => ipcRenderer.send('minimizeApp'),
  maximizeApp: () => ipcRenderer.send('maximizeApp'),
  openFolder: (path) => ipcRenderer.send('open-folder', path),
  openGitBash: (path) => ipcRenderer.send('open-git-bash', path),
  openIntelliJ: (path) => ipcRenderer.send('open-intellij', path)
});


