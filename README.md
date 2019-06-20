# snekman

A small game where the goal is to eat as much as you can.

## Getting Started

![](screenshot.png)


### Prerequisites

https://kennethvds.github.io/snekman/


## How To

When you open the page the Snekman will automatically start moving.
The other red dot is the food our dot wants to eat.
You can use your arrows on the keyboard to control him and take it all!

### App Code

Explain what these tests test and why

```JS
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
```

```JS
window.addEventListener('keydown', ((evt) => {
    const direction = evt.key.replace('Arrow', '');
    snek.changeDirection(direction);
}))
```

- On the window we put an eventListener for the keys, more defined the arrows wich will execute  by replacing and running the change direction function later explained.

### Snek Code

```JS
function Snek() 
    this.x = 0;
    this.y = 0;
    this.xSpeed = scale * 1;
    this.ySpeed = 0;
```

- First we define a few variables like the x and y position where we want our snake to appear. We also define the speed of our movement wich in this case just means a + 1 every time.

```JS
this.draw = function() {
        ctx.fillStyle = "#ff5050";
        ctx.fillRect(this.x, this.y, scale * 2, scale * 2);
    }
```

- This standard draw function will create a square that is double the size of the scale.

```JS
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
```

- When the function update is called it will execute an acceleration that is the posisition of x + 1 (xSpeed). When the border is reached on all sides it will start again on the other side of the canvas.

```JS
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
```

- When you hit the Arrow keys this code will execute by taking the direction of the arrow and letting the snek follow that route at the same pace.

```JS
this.eat = function(eten) {
        if (this.x === eten.x && this.y === eten.y) {
            return true;
        }
        return false;
    }
}
```
- The eat (aka eten) function will be called when both the x and y values are the same from as well the snek and the food. If so it returns True, if not false.

### Food Code

```JS
function fruit() {
    this.x;
    this.y;
    this.pickLocation = function() {
        this.x = (Math.floor(Math.random() * rows - 1) + 1) * scale;
        this.y = (Math.floor(Math.random() * columns - 1) + 1) * scale;
    }
    this.draw = function() {
        ctx.fillStyle = "#ff3300";
        ctx.fillRect(this.x, this.y, scale * 2, scale * 2)
    }
}
```
- This function will take the x and y points exactly like the snake but on that we put a function pickLocation that will create a random number on the columns (y) and the rows (x) and draw a rectangle that is double the size of the scale on that location inside the canvas.

## Deployment

This should work on any kind of browser.


## Contributing

Loosely based on [Code With Kris](https://www.youtube.com/watch?v=21eSpMtJwrc&t=659s)
 

## Authors

* **Kenneth Van Der Strieckt** - *Initial work* - [Snekman](https://github.com/KennethVDS/snekman)


## Acknowledgments

* Google
* The boys
* etc
