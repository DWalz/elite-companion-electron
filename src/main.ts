import { app, BrowserWindow } from 'electron';
import path from 'path';
import EliteWatcher from './backend/watcher';

function createMainWindow() {
  const window = new BrowserWindow({
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
    //frame: false,
  });

  window.loadFile(path.join(__dirname, '../index.html'));
  window.webContents.openDevTools();
}

app.on('ready', () => {
  createMainWindow();
  const watcher = new EliteWatcher();
});
