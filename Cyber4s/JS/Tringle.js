let counter = 0;
function rejects(color) {
  if (counter === 1) {
    console.log("failed on first callback")
  }
  else if (counter === 7) {
    console.log("failed on last callback")
  }
  return console.log("failed with color " + color);
}

function ranNumber() {
  return (Math.floor(Math.random() * 10) + 1)
}

function backgroundColorChange(time, color, callback, reject) {
  setTimeout(() => {
    counter++;
    if (randomNum() < 5) {
      reject();
    }
    else {
      callback();
      document.body.style.backgroundColor = color;
    };
  }, time);
}

backgroundColorChange(1000, "red", () => {
  backgroundColorChange(1000, "orange", () => {
    backgroundColorChange(1000, "yellow", () => {
      backgroundColorChange(1000, "green", () => {
        backgroundColorChange(1000, "black", () => {
          backgroundColorChange(1000, "blue", () => {
            backgroundColorChange(1000, "purple", () => {
            }, () => { rejects(color) })
          }, () => { rejects(color) })
        }, () => { rejects(color) })
      }, () => { rejects(color) })
    }, () => { rejects(color) })
  }, () => { rejects(color) })
}, () => { rejects(color) });