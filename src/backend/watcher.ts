import fs, { FSWatcher, WatchEventType, StatWatcher } from 'fs';
import path from 'path';
import os from 'os';

import EliteStatus from './elite-status';
import { GameStatus, JournalEvent, JournalEventType } from './event-status';
import { Stats } from 'original-fs';

export default class EliteWatcher {
  eliteDataPath: string;
  directoryWatcher: FSWatcher;

  journalFile?: string;
  journalWatcher?: StatWatcher;
  eventsCache: string[] = [];

  status?: EliteStatus;

  constructor() {
    console.log(`Creating watcher...`);

    this.eliteDataPath = path.join(
      os.homedir(),
      './Saved Games/Frontier Developments/Elite Dangerous'
    );
    console.log(`Path: ${this.eliteDataPath}`);

    this.directoryWatcher = fs.watch(this.eliteDataPath, (event, fileChanged) =>
      this.handleDirectoryChange(event, fileChanged)
    );
    console.log(`Created watcher in: ${this.eliteDataPath}`);
  }

  handleDirectoryChange(event: WatchEventType, fileChanged: string) {
    if (event == 'rename' && fileChanged.startsWith('Journal')) {
      console.log('New Journal file created, setting up watcher');
      this.journalFile = fileChanged;
      this.journalWatcher = fs.watchFile(
        path.join(this.eliteDataPath, fileChanged),
        (cur, pre) => this.handleJournalChange(cur, pre)
      );
      console.log(`Created journal watcher for file ${fileChanged}`);
    }

    if (
      event == 'change' &&
      fileChanged.startsWith('Journal') &&
      !this.journalWatcher
    ) {
      console.log(
        'Journal file has been changed but no journal watcher present...'
      );
      this.journalFile = fileChanged;
      this.journalWatcher = fs.watchFile(
        path.join(this.eliteDataPath, fileChanged),
        (cur, pre) => this.handleJournalChange(cur, pre)
      );
      console.log(`Created journal watcher for file ${fileChanged}`);
    }
  }

  handleJournalChange(cur: Stats, pre: Stats) {
    const journal_events: JournalEvent[] = [];
    fs.readFileSync(path.join(this.eliteDataPath, this.journalFile!))
      .toString()
      .split('\n')
      .forEach((event_text) => {
        if (event_text == '') return;
        const event = JSON.parse(event_text);
        const event_timestamp = new Date((event as JournalEvent).timestamp);
        if (event_timestamp <= cur.mtime && event_timestamp > pre.mtime) {
          journal_events.push(event);
        }
      });

    journal_events.forEach((event) => {
      console.log(`New event of type: ${event.event}`);
      switch (event.event) {
        case JournalEventType.LoadGame:
          {
            const status = event as GameStatus;
            console.log(status.Commander);
          }
          break;
      }
    });
  }
}
