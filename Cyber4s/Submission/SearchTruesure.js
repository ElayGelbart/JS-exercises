const fs = require('fs');
const path = require('path');
const fsPromises = require('fs/promises');

const mazeFolderDirString = `${__dirname}\\maze`;
let mapTxtRoad = '';
let lastDirUse = "yay";


async function findTreasureSync(roomPath) {
  if (/chest/.test(roomPath)) {
    console.log('chest');
    drawMapSync(roomPath);
    openChestSync(roomPath);
  }
  else if (/room-[\d]$/.test(roomPath)) {
    console.log(roomPath, "roomhere");
    try {
      await fsPromises.readFile(`${roomPath}\\chest-1.json`, 'utf8');
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

async function openChestSync(chestPath) {
  try {
    const dataInsideChest = await fsPromises.readFile(chestPath, 'utf8');
    const chestObj = JSON.parse(dataInsideChest);

    if (Object.keys(chestObj)[0] == 'clue') {
      console.log('made it to clues');
      try {
        lastDirUse = chestPath;
        fs.accessSync(Object.values(chestObj)[0]);
        findTreasureSync(`${__dirname}\\${chestObj.clue.replace(/\//g, "\\")}\\chest-1.json`);
      } catch (error) {
        throw error
      }
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

async function drawMapSync(currentRoomPath) {
  mapTxtRoad += `${currentRoomPath.replace(__dirname, '')} \r\n`
  try {
    const data = await fsPromises.writeFile(`${__dirname}\\map.txt`, mapTxtRoad);
    //file written successfully
  } catch (err) {
    console.error(err)
  }
}
findTreasureSync(mazeFolderDirString);