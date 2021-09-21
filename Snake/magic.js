'use strict'
const cubes = document.getElementsByClassName("cube");
let timemove; // this will be the interval varible 
let score = 0;

const ramdomizeApple = () => {
    const randomnumber = Math.floor(Math.random() * 100);
    cubes[randomnumber].classList.add("apple")
}

const movetheSnake = (number) => {
    const cubes = document.getElementsByClassName("cube");
    let firstbool = true, lastbool = true;
    for (let i = 0; i < cubes.length; i++) {
        if (cubes[i] == document.getElementById("firstS") && firstbool) {
            firstbool = false;
            if (cubes[i + number] === undefined || cubes[i + number].classList.contains("snake")) {
                this.clearInterval(timemove);
                document.getElementById("Reset").id = "ResetNow";
                return;
            }
            if (cubes[i + number].classList.contains("apple")) {
                score++;
                postScore();
                cubes[i + number].classList.remove("apple");
                ramdomizeApple();
                cubes[i + number].classList.add("moreS");
            }
            cubes[i].id = "";
            cubes[i].classList.add(number);
            cubes[i + number].classList.add("snake");
            cubes[i + number].id = "firstS";
        }
        if (cubes[i] == document.getElementById("lastS") && lastbool) {
            lastbool = false;
            cubes[i].classList.remove("snake");
            cubes[i].id = "";
            lastSnakeMove(i);
        }
    }
}

const lastSnakeMove = (i) => {
    if (cubes[i].classList.contains("moreS")) {
        cubes[i].id = "lastS";
        cubes[i].classList.remove("moreS");
        return;
    }
    if (cubes[i].classList.contains("10")) {
        cubes[i + 10].id = "lastS";
        cubes[i].classList.remove("10");
    }
    else if (cubes[i].classList.contains("1")) {
        cubes[i + 1].id = "lastS";
        cubes[i].classList.remove("1");
    }
    else if (cubes[i].classList.contains("-10")) {
        cubes[i - 10].id = "lastS";
        cubes[i].classList.remove("-10");
    }
    else if (cubes[i].classList.contains("-1")) {
        cubes[i - 1].id = "lastS";
        cubes[i].classList.remove("-1");
    }
}

const randomizeSnake = () => {
    const randomnumber = Math.floor(Math.random() * 80) + 10;
    cubes[randomnumber].classList.add("snake");
    cubes[randomnumber].id = "firstS";
    if (randomnumber > 30) {
        cubes[randomnumber - 10].classList.add("snake", "10");
        cubes[randomnumber - 20].classList.add("snake", "10");
        cubes[randomnumber - 20].id = "lastS"
    }
    else {
        cubes[randomnumber + 10].classList.add("snake", "-10");
        cubes[randomnumber + 20].classList.add("snake", "-10");
        cubes[randomnumber + 20].id = "lastS"
    }
}

const resetGame = () => {
    for (let cube of cubes) {
        cube.className = "cube";
        cube.id = "";
    }
    document.getElementById("ResetNow").id = "Reset";
    randomizeGame();
}

const randomizeGame = () => {
    score = 0;
    randomizeSnake();
    ramdomizeApple();
    ramdomizeApple();
    postScore();
}

const postScore = () => {
    document.getElementById('Score').innerHTML = `Score : ${score}`
}

window.addEventListener("keydown", function (e) {
    this.clearInterval(timemove)
    if (e.key === 'ArrowUp') {
        timemove = setInterval(movetheSnake, 250, -10);
    }
    else if (e.key === 'ArrowDown') {
        timemove = setInterval(movetheSnake, 250, 10);
    }
    else if (e.key === 'ArrowLeft') {
        timemove = setInterval(movetheSnake, 250, -1);
    }
    else if (e.key === 'ArrowRight') {
        timemove = setInterval(movetheSnake, 250, 1);
    }
});

document.getElementById("Reset").addEventListener("click", resetGame);
randomizeGame();
