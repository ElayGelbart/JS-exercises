const fs = require('fs');
const path = require('path');

const mazeFolderDirString = `${__dirname}\\maze`;
let mapTxtRoad = '';
let lastDirUse = "yay";


function findTreasureSync(roomPath) {
  if (/chest/.test(roomPath)) {
    console.log('chest');
    drawMapSync(roomPath);
    openChestSync(roomPath);
  }
  else if (/room-[\d]$/.test(roomPath)) {
    console.log(roomPath, "roomhere");
    try {
      const chestUrl = fs.readFileSync(`${roomPath}\\chest-1.json`, 'utf8');
      console.log("going in to clues");
      openChestSync(`${roomPath}\\chest-1.json`);
    } catch {
      findTreasureSync(`${roomPath}\\room-0`)
    }
  }
  else {
    findTreasureSync(`${roomPath}\\room-0`)
  }
}

function openChestSync(chestPath) {
  try {
    const dataInsideChest = fs.readFileSync(chestPath, 'utf8');
    const chestObj = JSON.parse(dataInsideChest);
    lastDirUse = chestPath;
    if (Object.keys(chestObj)[0] == 'clue') {
      console.log('made it to clues');
      findTreasureSync(`${__dirname}\\${chestObj.clue.replace(/\//g, "\\")}\\chest-1.json`);
    }
    else if (Object.keys(chestObj)[0] == 'treasure') {
      drawMapSync("Treasure is Here");
      console.log("Found The Treasure");
    }
  } catch (err) {
    console.log(chestPath, 'Failed ELAY ELAY ELAY')
    console.error(err)
  }
}

function drawMapSync(currentRoomPath) {
  mapTxtRoad += `${currentRoomPath.replace(__dirname, '')} \r\n`
  try {
    const data = fs.writeFileSync(`${__dirname}\\map.txt`, mapTxtRoad);
    //file written successfully
  } catch (err) {
    console.error(err)
  }
}
findTreasureSync(mazeFolderDirString);