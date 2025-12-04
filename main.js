var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;
var img1 = new Image();
img1.src = 'cactus.png';
var img2 = new Image();
img2.src = 'dinosaur.png'
var dino = {
    x: 10,
    y: 200,
    width: 50,
    height: 50,
    draw() {
        ctx.fillStyle = 'green';
        // ctx.fillRect(this.x, this.y, this.width, this.height); // 히트박스
        ctx.drawImage(img2, this.x, this.y, this.width, this.height);

    }
}

dino.draw();

class Cactus {
    constructor() {
        this.x = 500;
        this.y = 200;
        this.width = 50;
        this.height = 50;
    }
    draw() {
        ctx.fillStyle = 'red';
        // ctx.fillRect(this.x, this.y, this.width, this.height); // 히트박스
        ctx.drawImage(img1, this.x, this.y, this.width, this.height);
    }
}
var cactus = new Cactus();
cactus.draw();

var timer = 0;
var cactus여러개 = [];
var 점프중 = false;
document.addEventListener('keydown', function (e) {
    if (e.code === 'Space') {
        점프중 = true;
    }
})
var 점프timer = 0;
var animaion;

function 프레임마다실행할거() {
    animation = requestAnimationFrame(프레임마다실행할거)
    timer++;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (timer % 180 === 0) {
        console.log('cactus 생성');
        var cactus = new Cactus();
        cactus여러개.push(cactus);
    }
    for (let i = cactus여러개.length - 1; i >= 0; i--) {
        let a = cactus여러개[i];
        a.x--;
        충돌하냐(dino, a);
        a.draw();
        if (a.x < -50) {
            cactus여러개.splice(i, 1);
        }

    }
    // 점프기능
    if (점프중 == true) {
        dino.y -= 1;
        점프timer++;
    }
    if (점프timer > 100) {
        점프중 = false;
    }
    if (점프중 == false) {
        if (dino.y < 200) {
            dino.y += 1;
            점프timer = 0;
        }
    }
    dino.draw();
}

프레임마다실행할거();

// 충돌확인

function 충돌하냐(dino, cactus) {
    var x축차이 = cactus.x - (dino.x + dino.width);
    var y축차이 = cactus.y - (dino.y + dino.height);
    if (x축차이 < 0 && y축차이 < 0) {
        cancelAnimationFrame(animation);
    }
}