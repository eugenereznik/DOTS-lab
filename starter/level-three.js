/*
 * DOTS: Level Three
 *
 */
let score = 0;
let elements = document.querySelectorAll('.js-ball');
let scoreDisplay = document.querySelector('.js-score');
let levelWinner = document.querySelector('.level-winner');

for (let i = 0; i < elements.length; i++){
    elements[i].addEventListener('click', function() {
        let incrementValue = elements[i].getAttribute('data-increment');
        score += parseInt(incrementValue);
        scoreDisplay.innerText = score;
        if (score >= 100){
            levelWinner.style.opacity = 1;
        }
        else {
        };
    })
}