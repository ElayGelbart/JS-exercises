'use strict'
let turn =1;
let finishGame = false;
const leftTop=document.getElementById('leftTop');
const centerTop=document.getElementById('centerTop');
const rightTop=document.getElementById('rightTop');
const leftCenter=document.getElementById('leftCenter');
const centerCenter=document.getElementById('centerCenter');
const rightCenter=document.getElementById('rightCenter');
const leftBottom=document.getElementById('leftBottom');
const centerBottom=document.getElementById('centerBottom');
const rightBottom=document.getElementById('rightBottom');
const elms=   
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
    [ leftBottom, centerBottom, rightBottom]
]


function addclick(id){
   if(document.getElementById(id).innerHTML==''&&finishGame == false){
    if(turn == 1){
       document.getElementById(id).innerHTML = '<h4>x</h4>';
       turn = 0;
    }
    else{
        document.getElementById(id).innerHTML = '<h4>o</h4>';
        turn = 1;
    }
    checkWin();
}
}
// function checkWin(){
//     let countxrow1=0;
//     let countxrow2=0;
//     let countxrow3=0;
//     let countorow1=0;
//     let countorow2=0;
//     let countorow3=0;
//     let countxcolumn1=0;
//     let countxcolumn2=0;
//     let countxcolumn3=0;
//     let countocolumn1=0;
//     let countocolumn2=0;
//     let countocolumn3=0;
//     let countxdiagonal1=0;
//     let countxdiagonal2=0;
//     let countodiagonal1=0;
//     let countodiagonal2=0;

//     if(leftTop.innerHTML == '<h4>x</h4>'){
//         countxrow1++;
//         countxcolumn1++;
//         countxdiagonal1++;
//     }
//     if(leftTop.innerHTML == '<h4>o</h4>'){
//         countorow1++;
//         countocolumn1++;
//         countodiagonal1++;
//     }
//     if(centerTop.innerHTML == '<h4>x</h4>'){
//         countxrow1++;
//         countxcolumn2++;
//     }
//     if(centerTop.innerHTML == '<h4>o</h4>'){
//         countorow1++;
//         countocolumn2++;
//     }
//     if(rightTop.innerHTML == '<h4>x</h4>'){
//         countxrow1++;
//         countxcolumn3++;
//         countxdiagonal2++;
//     }
//     if(rightTop.innerHTML == '<h4>o</h4>'){
//         countorow1++;
//         countocolumn3++;
//         countodiagonal2++;
//     }
//     if(leftCenter.innerHTML == '<h4>x</h4>'){
//         countxrow2++;
//         countxcolumn1++;
//     }
//     if(leftCenter.innerHTML == '<h4>o</h4>'){
//         countorow2++;
//         countocolumn1++;
//     }
//     if(centerCenter.innerHTML == '<h4>x</h4>'){
//         countxrow2++;
//         countxcolumn2++;
//         countxdiagonal1++;
//         countxdiagonal2++;
//     }
//     if(centerCenter.innerHTML == '<h4>o</h4>'){
//         countorow2++;
//         countocolumn2++;
//         countodiagonal1++;
//         countodiagonal2++;
//     }
//     if(rightCenter.innerHTML == '<h4>x</h4>'){
//         countxrow2++;
//         countxcolumn3++;
//     }
//     if(rightCenter.innerHTML == '<h4>o</h4>'){
//         countorow2++;
//         countocolumn3++;
//     }
//     if(leftBottom.innerHTML == '<h4>x</h4>'){
//         countxrow3++;
//         countxcolumn1++;
//         countxdiagonal2++;
//     }
//     if(leftBottom.innerHTML == '<h4>o</h4>'){
//         countorow3++;
//         countocolumn1++;
//         countodiagonal2++;
//     }
//     if(centerBottom.innerHTML == '<h4>x</h4>'){
//         countxrow3++;
//         countxcolumn2++;
//     }
//     if(centerBottom.innerHTML == '<h4>o</h4>'){
//         countorow3++;
//         countocolumn2++;
//     }
//     if(rightBottom.innerHTML == '<h4>x</h4>'){
//         countxrow3++;
//         countxcolumn3++;
//         countxdiagonal1++;
//     }
//     if(rightBottom.innerHTML == '<h4>o</h4>'){
//         countorow3++;
//         countocolumn3++;
//         countodiagonal1++;
//     }

//     if(countxrow1==3||countxrow2==3||countxrow3==3||countxcolumn1==3||countxcolumn2==3||countxcolumn3==3||countxdiagonal1==3||countxdiagonal2==3){
//         alert('X wins');
//         finishGame= true;
//         }
//     if(countorow1==3||countorow2==3||countorow3==3||countocolumn1==3||countocolumn2==3||countocolumn3==3||countodiagonal1==3||countodiagonal2==3){
//         alert('O wins');
//         finishGame = true;
//     }
// }
function resetGame(){
    elems.forEach(elm=>elm.innerHTML="")
    // leftTop.innerHTML = '';
    // centerTop.innerHTML = '';
    // rightTop.innerHTML = '';
    // leftCenter.innerHTML = '';
    // centerCenter.innerHTML = '';
    // rightCenter.innerHTML = '';
    // leftBottom.innerHTML = '';
    // centerBottom.innerHTML = '';
    // rightBottom.innerHTML = '';
    finishGame = false;
    turn =1;
}



leftTop.addEventListener("click",function (){addclick('leftTop')});
centerTop.addEventListener("click",function (){addclick('centerTop')});
rightTop.addEventListener("click",function (){addclick('rightTop')});
leftCenter.addEventListener("click",function (){addclick('leftCenter')});
centerCenter.addEventListener("click",function (){addclick('centerCenter')});
rightCenter.addEventListener("click",function (){addclick('rightCenter')});
leftBottom.addEventListener("click",function (){addclick('leftBottom')});
centerBottom.addEventListener("click",function (){addclick('centerBottom')});
rightBottom.addEventListener("click",function (){addclick('rightBottom')});
document.getElementById('resetAction').addEventListener("click",resetGame);