/**
 * Status of the Game
 */
export interface GameStatus extends JournalEvent {
  // == GAME INFORMATION

  /** The language of the game */
  language: string;
  /** The version of the game */
  gameversion: string;
  /** The build of the game */
  build: string;
  /** Indicates, whether the game is an Horizons instance */
  Horizons: boolean;
  /** Indicates, whether the game is an Odyssey instance */
  Odyssey: boolean;
  /** The game mode */ // TODO: Extract into type
  GameMode: string;

  // == COMMANDER INFORMATION ==

  /** Commander ID */
  FID: string;
  /** Commander name */
  Commander: string;
  /** The amount of credits the commander currently has */
  Credits: number;
  /** The amount of credits the commander has currently loaned */
  Loan: number;

  // == SHIP INFORMATION ==

  /** Ship type */
  Ship: string;
  /** Ship id */
  ShipID: number;
  /** Ship name, as given by the commander */
  ShipName: string;
  /** ? */ // TODO: find usage
  ShipIdent: string;
  /** The current fuel level of the ship */
  FuelLevel: number;
  /** The maximum fuel capacity of the ship */
  FuelCapacity: number;
}

/** A JSON Journal event entry */
export interface JournalEvent {
  /** Timestamp of the event */
  timestamp: string;
  /** The event type */
  event: JournalEventType;
}

export enum JournalEventType {
  Cargo = 'Cargo',
  Commander = 'Commander',
  Docked = 'Docked',
  DockingGranted = 'DockingGranted',
  DockingRequested = 'DockingRequested',
  EngineerProgress = 'EngineerProgress',
  Fileheader = 'Fileheader',
  FSDJump = 'FSDJump',
  FSDTarget = 'FSDTarget',
  FSSSignalDiscovered = 'FSSSignalDiscovered',
  LoadGame = 'LoadGame',
  Loadout = 'Loadout',
  Location = 'Location',
  Market = 'Market',
  Materials = 'Materials',
  Missions = 'Missions',
  Music = 'Music',
  Progress = 'Progress',
  Rank = 'Rank',
  ReceiveText = 'ReceiveText',
  RefuelAll = 'RefuelAll',
  RepairAll = 'RepairAll',
  Reputation = 'Reputation',
  Scan = 'Scan',
  ShipLocker = 'ShipLocker',
  ShipTargeted = 'ShipTargeted',
  Shutdown = 'Shutdown',
  StartJump = 'StartJump',
  Statistics = 'Statistics',
  SupercruiseExit = 'SupercruiseExit',
  Undocked = 'Undocked',
}
