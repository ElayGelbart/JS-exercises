'use strict'
let turn = 1;
const leftTop = document.getElementById("leftTop");
const centerTop = document.getElementById("centerTop");
const rightTop = document.getElementById("rightTop");
const leftCenter = document.getElementById("leftCenter");
const centerCenter = document.getElementById("centerCenter");
const rightCenter = document.getElementById("rightCenter");
const leftBottom = document.getElementById("leftBottom");
const centerBottom = document.getElementById("centerBottom");
const rightBottom = document.getElementById("rightBottom");
let gameArray = [leftTop, centerTop, rightTop, leftCenter, centerCenter, rightCenter, leftBottom, centerBottom, rightBottom];
const addMark = (sqareId) => {
    if (document.getElementById(sqareId).innerText === "") {
        if (turn === 1) {
            document.getElementById(sqareId).innerText = "X";
            turn = 0;
            checkWin();
        }
        else if (turn === 0) {
            document.getElementById(sqareId).innerText = "O";
            turn = 1;
            checkWin();
        }
    }
}
const checkWin = () => {
    let markCheck;
    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let keys of winningConditions) {
        if (gameArray[keys[1]].innerText != '') {
            if (gameArray[keys[0]].innerText == gameArray[keys[1]].innerText && gameArray[keys[1]].innerText == gameArray[keys[2]].innerText) {
                gameArray[keys[0]].classList.add("victorySelect");
                gameArray[keys[1]].classList.add("victorySelect");
                gameArray[keys[2]].classList.add("victorySelect");
                turn = 2;
            }
        }
    }
}
const resetGame = () => {
    turn = 1;
    gameArray.forEach(elem => elem.innerText = '');
    gameArray.forEach(elem => elem.classList.remove("victorySelect"));
}
document.getElementById("resetAction").addEventListener("click", resetGame)