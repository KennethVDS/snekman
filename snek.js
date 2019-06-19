function Snek() {
    this.x = 0;
    this.y = 0;
    this.xSpeed = scale * 1;
    this.ySpeed = 0;

    this.draw = function() {
        ctx.fillStyle = "#ff5050";
        ctx.fillRect(this.x, this.y, bodySize, bodySize);
    }

    this.update = function() {
        this.x += this.xSpeed;
        this.y += this.ySpeed;
        if (this.x > canvas.width) {
            this.x = 0;
        }
        if (this.y > canvas.height) {
            this.y = 0;
        }
        if (this.x < 0) {
            this.x = canvas.width;
        }
        if (this.y < 0) {
            this.y = canvas.height;
        }
    }

    this.changeDirection = function(direction) {
        switch(direction) {
            case 'Up':
                this.xSpeed = 0;
                this.ySpeed = -scale * 1;
                break;
            case 'Down':
                this.xSpeed = 0;
                this.ySpeed = scale * 1;
                break;
            case 'Left':
                this.xSpeed = -scale * 1;
                this.ySpeed = 0;
                break;
            case 'Right':
                this.xSpeed = scale * 1;
                this.ySpeed = 0;
                break;                                         
        }
    }

    this.eat = function(eten) {
        if (this.x === eten.x && this.y === eten.y) {
            score = score +1;
            document.getElementById("winst").innerHTML = "score: " + score;
            return true;
        }
        return false;
    }
}