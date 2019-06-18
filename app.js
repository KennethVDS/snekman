const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
const scale = 11;
const rows = canvas.height / scale;
const columns = canvas.width / scale;

var snek;

(function setup() {
    snek = new Snek();
    window.setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        snek.update();
        snek.draw();
    }, 100);
}());

window.addEventListener('keydown', ((evt) => {
    const direction = evt.key.replace('Arrow', '');
    snek.changeDirection(direction);
}))