const fs = require('fs');
const fsPromises = require('fs/promises');
const process = require('process');
let mapTxt = '';

async function findTruesure(mazePath) {
  drawMap(mazePath);
  const dirArray = await fsPromises.readdir(mazePath);
  for (let value of dirArray) {
    if (/chest/.test(value)) {
      openAsyncChest(`${mazePath}\\${value}`);
    }
    else if (/room-[\d]$/.test(value)) {
      findTruesure(`${mazePath}\\${value}`);
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
          drawMap('Above me is Gold');
        }
      } catch (err) {
        console.log(err)
      }
    })
    .catch(err => {
      console.error(err)
    })
}

function drawMap(currentPath) {
  mapTxt += currentPath + '\r\n';
  fs.writeFileSync('./map.txt', mapTxt);
  if (currentPath == 'Above me is Gold') {
    process.exit(1)
  }
}
findTruesure('./maze');