const fs = require('fs');
const path = require('path');

const mazeFolderDirString = `${__dirname}\\maze\\chest-1.json`;
const chestRegex = /chest/;
const roomRegex = /room/;
let mapTxtRoad = '';
let lastDirUse = "yay";

function findTreasureSync(roomPath) {
  // if (!fs.access(roomPath)) {
  //   return findTreasureSync(lastDirUse/*add more to link*/)
  // }
  if (roomPath) {
    drawMapSync(roomPath);
    openChestSync(roomPath);
  }
}

function openChestSync(chestPath) {
  try {
    console.log(1);
    const dataInsideChest = fs.readFileSync(chestPath, 'utf8');
    const chestObj = JSON.parse(dataInsideChest);
    lastDirUse = chestPath;
    if (Object.keys(chestObj)[0] == 'clue') {
      chestObj.clue = chestObj.clue.replace(/\./, '');
      findTreasureSync(`${__dirname}\\${chestObj.clue.replace(/\//g, "\\")}\\chest-1.json`);
    }
    else if (Object.keys(chestObj)[0] == 'treasure') {
      drawMapSync("Treasure is Here");
      console.log("Found The Treasure");
    }
  } catch (err) {
    console.log(chestPath)
    console.error(err)
  }
}

function drawMapSync(currentRoomPath) {
  mapTxtRoad += `${currentRoomPath} \r\n`
  try {
    const data = fs.writeFileSync(`${__dirname}\\map.txt`, mapTxtRoad);
    //file written successfully
  } catch (err) {
    console.error(err)
  }
}
findTreasureSync(mazeFolderDirString);