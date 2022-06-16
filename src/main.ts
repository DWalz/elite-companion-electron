import { app, BrowserWindow } from 'electron';
import path from 'path';
import journal from '../../elite-journal-js';

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
  journal({
    cache: path.join(__dirname, '../cache'),
  }).on('journal', (file_path) => {
    console.log('New journal event 👀');
  });
});
