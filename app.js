const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
const scale = 10;
const rows = canvas.height / scale;
const columns = canvas.width / scale;
const bodySize = scale * 2;
var score = 0;
var snek;

(function setup() {
    snek = new Snek();
    eten = new fruit();
    eten.pickLocation();

    window.setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        eten.draw();
        snek.update();
        snek.draw();

        if (snek.eat(eten)) {
            eten.pickLocation();
        }
    }, 100);
}());

window.addEventListener('keydown', ((evt) => {
    const direction = evt.key.replace('Arrow', '');
    snek.changeDirection(direction);
}))