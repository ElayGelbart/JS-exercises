const fs = require('fs');
const path = require('path');
// const fsPromises = require('fs/promises');
const mazeFolderDirString = `${__dirname}\\maze`;
let mapTxtRoad = '';


function findTruesureCB(roomPath, cb) {
  if (/chest/.test(roomPath)) {
    console.log('chest');
    drawMap(roomPath, cb3);
    openChest(roomPath, cb2);
  }

  else if (/room-[\d]$/.test(roomPath)) {
    console.log(roomPath, "roomhere");
    fs.readFile(`${roomPath}\\chest-1.json`, 'utf8', (err, data) => {
      if (!err) {
        console.log("going in to clues");
        return openChest(`${roomPath}\\chest-1.json`, cb2);
      }
      findTruesureCB(`${roomPath}\\room-0`, cb);
    }
    );
  }

  else {
    findTruesureCB(`${roomPath}\\room-0`, cb);
  }
}

function openChest(chestPath, cb) {
  fs.readFile(chestPath, 'utf8', cb);
}

function drawMap(currentRoomPath, cb3) {
  mapTxtRoad += `${currentRoomPath.replace(__dirname, '')} \r\n`
  fs.writeFile(`${__dirname}\\map.txt`, mapTxtRoad, cb3);
}

const cb1 = (err, data) => { //cb
  if (!err) {
    console.log("going in to clues");
    return openChest(`${roomPath}\\chest-1.json`, cb2);
  }
  return findTruesureCB(`${roomPath}\\room-0`, cb1);
}

const cb2 = (err, data) => {
  if (!err) {
    const chestObj = JSON.parse(data);
    if (Object.keys(chestObj)[0] == 'clue') {
      console.log('made it to clues');
      fs.access(Object.values(chestObj)[0], (err, data) => {
        if (!err) {
          findTruesureCB(`${__dirname}\\${chestObj.clue.replace(/\//g, "\\")}\\chest-1.json`, cb1);
        } else {
          throw (err);
        }
      });
    }
    else if (Object.keys(chestObj)[0] == 'treasure') {
      console.log("Found The Treasure");
      return drawMap("Treasure is Here", cb3);
    }

  }
  else {
    console.log(chestPath, 'Failed ELAY ELAY ELAY')
    console.error(err)
  }
}

const cb3 = (err, data) => {
  if (err) {
    console.error(err)
  }
}

findTruesureCB(mazeFolderDirString, cb1);