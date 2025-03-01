const gameContainer = document.getElementById('game-container');
const basket = document.getElementById('basket');

let basketX = gameContainer.clientWidth / 2 - basket.clientWidth / 2;
let score = 0;

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft' && basketX > 0) {
        basketX -= 20;
    } else if (e.key === 'ArrowRight' && basketX < gameContainer.clientWidth - basket.clientWidth) {
        basketX += 20;
    }
    basket.style.left = `${basketX}px`;
});

function createBall() {
    const ball = document.createElement('div');
    ball.classList.add('ball');
    ball.style.left = `${Math.random() * (gameContainer.clientWidth - 20)}px`;
    gameContainer.appendChild(ball);

    let fallInterval = setInterval(() => {
        let ballTop = parseInt(getComputedStyle(ball).top) || 0;
        if (ballTop > gameContainer.clientHeight - 40 && 
            ball.offsetLeft > basketX && 
            ball.offsetLeft < basketX + basket.clientWidth) {
            score++;
            clearInterval(fallInterval);
            ball.remove();
        } else if (ballTop > gameContainer.clientHeight) {
            clearInterval(fallInterval);
            ball.remove();
        } else {
            ball.style.top = `${ballTop + 5}px`;
        }
    }, 50);
}

setInterval(createBall, 1000);
