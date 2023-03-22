/*
 * DOTS: Level One
 *
 */
let score = 0;
let ballOne = document.querySelector('.js-ball');
let scoreDisplay = document.querySelector('.js-score');
let levelWinner = document.querySelector('.level-winner')

ballOne.addEventListener('click',function(){
    score += 10;
    scoreDisplay.innerText = score;
    if (score >= 100){
        levelWinner.style.opacity = 1;
    }
    else {
    }  
})

