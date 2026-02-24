/*
const canvas = document.getElementById('gameCanvas')
const ctx = canvas.getContext('2d')
// defining character
class Character{
    constructor(x,y,color,size){
        this.x = x;
        this.y = y;
        this.color = color;
        this.size = size;
        this.speedX = 0;
        this.speedY = 0;
    }
    draw() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.size, this.size);
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        // Basic boundary checks (optional)
        if (this.x > canvas.width - this.size) {
            this.speedX = -1;
        }
        if(this.x<0){
            this.speedX=1
        }
        if (this.y < 0 ) {
            this.speedX=1
        }
        if(this.y > canvas.height - this.size) {
            this.speedY = -1;
        }
    }
}
// Instantiate the player character
const player = new Character(0, 140, 'red', 10);

// Handle keyboard input for movement
document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowUp':
            player.speedY = -2;
            break;
        case 'ArrowDown':
            player.speedY = 2;
            break;
        case 'ArrowLeft':
            player.speedX = -2;
            break;
        case 'ArrowRight':
            player.speedX = 2;
            break;
    }
});

document.addEventListener('keyup', (event) => {
    switch (event.key) {
        case 'ArrowUp':
        case 'ArrowDown':
            player.speedY = 0;
            break;
        case 'ArrowLeft':
        case 'ArrowRight':
            player.speedX = 0;
            break;
    }
});

// The game loop
function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas
    player.update(); // Update character position
    player.draw(); // Draw character
    requestAnimationFrame(gameLoop); // Continue the loop
}

// Start the game loop
gameLoop();
*/
function captureInput(){
    const user = document.getElementById('gameInput');
    const input = user.value;
    return input

    
}
function trigger(){
    document.addEventListener('keypress', (event)=>{
        if (event.key == 'Enter'){
           let choice = captureInput()
            return choice
        }
    });
};
let ans = trigger()
document.getElementById('gameOutput').innerHTML = "Enter Start";
if (ans =="Start"){
    document.getElementById('gameOutput').innerHTML = "Welcome";
}