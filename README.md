# Elite: Companion

> A worse alternative for EDDiscovery and similar applications.

Full Stack companion app to [Elite Dangerous](https://www.elitedangerous.com) 
with [EDDN](https://github.com/EDCD/EDDN) integration
and a visually appealing interface built with Electron and NodeJS. 
This doesn't aim to be a replacement for any of the high-profile 3rd 
party tools for *Elite Dangerous* but an easy to operate all-round 
tool for beginners to use since Elite isn't the most beginner
friendly game out there. It is built on top of Electron and runs with
a NodeJS back-end so don't expect it to be especially fast when it comes
to the number crunching (trade routes and the likes) but it will do a lot
of stuff that can be helpful to new players like suggesting next steps
and giving them the opportunity to set goals and track them.

#### TL;DR:

❌ This is **not**:
 - A replacement for performant route planners
 - An expert's tool
 - Associated in any way with Frontier Developments

✅ This is:
 - A tool for beginners having a hard time
 - Looking good (hopefully)
 - A companion to Elite Dangerous with a broad feature set


## Installation

Currently, there are no builds for the companion app, you'll habe to 
run it in your local NodeJS environment or build it yourself


## Usage

After cloning the repository, run
```sh
npm install
```
to install all dependencies and run the project with
```sh
npm start
```


## Build

To build the app, build the typescript application with
```sh
npm build
```
then build a native Electron app. Refer to 
[Application Distribution](https://www.electronjs.org/docs/latest/tutorial/application-distribution) 
for more information
