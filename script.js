const speed = 0.04;
const drift = 0.02;
const minDistance = 50;

let balls = [
    { 
        x: 20, y: 30, 
        vx: (Math.random() - 0.5) * speed, 
        vy: (Math.random() - 0.5) * speed, 
        class: 'ball1' 
    },
    { 
        x: 80, y: 90, 
        vx: (Math.random() - 0.5) * speed, 
        vy: (Math.random() - 0.5) * speed, 
        class: 'ball2' 
    }
];

let elements = [];
let frame;

function move() {
    const dx = balls[0].x - balls[1].x;
    const dy = balls[0].y - balls[1].y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < minDistance) {
        const force = (minDistance - distance) * 0.001;
        balls[0].vx += dx * force;
        balls[0].vy += dy * force;
        balls[1].vx -= dx * force;
        balls[1].vy -= dy * force;
    }

    balls = balls.map((ball, i) => {
        ball.vx += (Math.random() - 0.5) * drift * 0.1;
        ball.vy += (Math.random() - 0.5) * drift * 0.1;

        const currentSpeed = Math.sqrt(ball.vx ** 2 + ball.vy ** 2);
        if (currentSpeed > speed) {
            ball.vx = (ball.vx / currentSpeed) * speed;
            ball.vy = (ball.vy / currentSpeed) * speed;
        }

        ball.x += ball.vx;
        ball.y += ball.vy;
        
        const margin = 5;
        if (ball.x < margin) { ball.x = margin; ball.vx *= -1; }
        if (ball.x > 100 - margin) { ball.x = 100 - margin; ball.vx *= -1; }
        if (ball.y < margin) { ball.y = margin; ball.vy *= -1; }
        if (ball.y > 100 - margin) { ball.y = 100 - margin; ball.vy *= -1; }

        if (elements[i]) {
            elements[i].style.transform = `translate(calc(${ball.x}vw - 50%), calc(${ball.y}vh - 50%))`;
        }
        return ball;
    });

    frame = requestAnimationFrame(move);
}

// Инициализация
function init() {
    elements = document.querySelectorAll('.ball1, .ball2');
    move();
}

// Очистка
function destroy() {
    if (frame) {
        cancelAnimationFrame(frame);
    }
}

// Запуск при загрузке DOM
document.addEventListener('DOMContentLoaded', init);

// Для использования в модулях можно экспортировать как:
// export { init, destroy };
