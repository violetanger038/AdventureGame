// capture input
function captureInput(x, y, I, scpt) {
    return new Promise((resolve) => {
        const user = document.getElementById('gameInput');
        const output = document.getElementById('outputArea');
        if (!user) return;

        output.innerHTML = scpt || x; // display text

        const handleInput = (event) => {
            if (event.key === 'Enter') {
                const input = user.value.trim();
                user.value = ""; // clear input
                output.innerHTML = " "; // clear output
                user.removeEventListener('keydown', handleInput); // clear
                resolve(input === I); // true or false
            }
        };

        user.addEventListener('keydown', handleInput);
    });
}
let hi = "Hello World"

// game loop
async function runGame() {
    let t = "Please enter Start";
    let o = "Start";
    let g = "laugh";
    let f = "something";

    document.getElementById('outputArea').innerHTML = t;

    // waiting
    let start = await captureInput(t, t, o, null);
    while (start == false){
        if (start == false){
            start=await captureInput(t, t, o, null);
        }
    }
    // Act 1
    for (let i = 0; i = 5; i++) {
        switch (i) {
            case 0:
               choice = await captureInput(g,t,o,null);
               if (choice == false){
                await captureInput(null, null, null,"wrong")
                i++
               }
                break;
            case 1:
               choice = await captureInput(g,t,o,null);
               if (choice == false){
                await captureInput(null, null, null,"wrong")
                i++
               }
                break;
            case 2:
               choice = await captureInput(g,t,o,null);
               if (choice == false){
                await captureInput(null, null, null,"wrong")
                i++
               }
                break;
            case 3:
               choice = await captureInput(g,t,o,null);
               if (choice == false){
                await captureInput(null, null, null,"wrong")
                i++
               }
                break;
            case 4:
               choice = await captureInput(g,t,o,null);
               if (choice == false){
                await captureInput(null, null, null,"wrong")
                i++
               }
                break;
        
            default:
                break;
        }
        
    }
}

runGame();
