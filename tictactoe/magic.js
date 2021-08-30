'use strict'
let turn = 1;
let finishGame = false;
const leftTop = document.getElementById('leftTop');
const centerTop = document.getElementById('centerTop');
const rightTop = document.getElementById('rightTop');
const leftCenter = document.getElementById('leftCenter');
const centerCenter = document.getElementById('centerCenter');
const rightCenter = document.getElementById('rightCenter');
const leftBottom = document.getElementById('leftBottom');
const centerBottom = document.getElementById('centerBottom');
const rightBottom = document.getElementById('rightBottom');
const elms =
    [
        leftTop,
        centerTop,
        rightTop,
        leftCenter,
        centerCenter,
        rightCenter,
        leftBottom,
        centerBottom,
        rightBottom,
    ]

const board = [
    [leftTop, centerTop, rightTop],
    [leftCenter, centerCenter, rightCenter],
    [leftBottom, centerBottom, rightBottom]
]


function addclick(id) {
    if (document.getElementById(id).innerHTML == '' && finishGame == false) {
        if (turn == 1) {
            document.getElementById(id).innerHTML = '<h4>x</h4>';
            turn = 0;
        }
        else {
            document.getElementById(id).innerHTML = '<h4>o</h4>';
            turn = 1;
        }
        checkWin();
    }
}
const extractInnerText = (elems) => elems.map(e => e.innerText)

const checkArr = (arr, direction) => {
    const extractedArr = extractInnerText(arr)
    let winner = true
    extractedArr.forEach(symbol => {
        if (!winner) return
        if (!symbol) return winner = false
        if (typeof winner === "string") {
            if (winner !== symbol) {
                winner = false
            }
        } else {
            winner = symbol
        }
    })
    if (winner) {
        alert(winner)
        arr.forEach(elm => elm.classList.add(direction))
    }
    return winner
}


const checkWin = () => {
    // ROWS
    [
        board[0],
        board[1],
        board[2]
    ].forEach(arr => checkArr(arr, "row"))
    // COLUMNS 
    [
        [board[0][0], board[1][0], board[2][0]],
        [board[0][1], board[1][1], board[2][1]],
        [board[0][2], board[1][2], board[2][2]]
    ].forEach(arr => checkArr(arr, "column"))

    // DIAGONAL
    [
        [board[0][0], board[1][1], board[2][2]],
        [board[0][2], board[1][1], board[2][0]]
    ].forEach((arr, i) => checkArr(arr, `diagonal-${i % 2 === 0 ? "right" : "left"}`))

}

function resetGame() {
    elems.forEach(elm => elm.innerHTML = "")
    finishGame = false;
    turn = 1;
}



leftTop.addEventListener("click", function () { addclick('leftTop') });
centerTop.addEventListener("click", function () { addclick('centerTop') });
rightTop.addEventListener("click", function () { addclick('rightTop') });
leftCenter.addEventListener("click", function () { addclick('leftCenter') });
centerCenter.addEventListener("click", function () { addclick('centerCenter') });
rightCenter.addEventListener("click", function () { addclick('rightCenter') });
leftBottom.addEventListener("click", function () { addclick('leftBottom') });
centerBottom.addEventListener("click", function () { addclick('centerBottom') });
rightBottom.addEventListener("click", function () { addclick('rightBottom') });
document.getElementById('resetAction').addEventListener("click", resetGame);