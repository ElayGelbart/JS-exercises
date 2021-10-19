const fs = require('fs');
const path = require('path');
const fsPromises = require('fs/promises');
const mazeFolderDirString = `./maze`;
let mapTxt = '';

async function findTruesure(mazePath) {
  drawMap(mazePath);
  const dirArray = await fsPromises.readdir(mazePath);
  for (let value of dirArray) {
    if (/chest/.test(value)) {
      openAsyncChest(`${mazePath}\\${value}`);
    }
  }
}

async function openAsyncChest(chestPath) {
  console.log('in chest open');
  fsPromises.readFile(chestPath)
    .then(value => {
      try {
        chestObj = JSON.parse(value);
        if (Object.keys(chestObj) == 'clue') {
          findTruesure(chestObj.clue);
        }
        else if (Object.keys(chestObj) == 'treasure') {
          console.log('Found treasure');
          drawMap('Here is Gold');
        }
      } catch (err) {
        console.log(err)
      }
    })
    .catch(err => {
      console.error(err)
    })
}

async function drawMap(currentPath) {
  mapTxt += currentPath + '\r\n';
  fsPromises.writeFile('./map.txt', mapTxt);
}

findTruesure(mazeFolderDirString);