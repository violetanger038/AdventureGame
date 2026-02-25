
function captureInput(x, y, i) {
    const user = document.getElementById('gameInput');
    if (!user) return; 

    user.addEventListener('keydown', (event) => { 
        if (event.key === 'Enter') {
            const input = user.value; 
            if (input == i) {
                document.getElementById('outputArea').innerHTML = x;
                
            } else {
                document.getElementById('outputArea').innerHTML = y;
            }
            user.value = "";
        };
        
    });
} 
let u = "Welcome"
let t ="Please enter Start"
let o ="Start"
document.getElementById('outputArea').innerHTML = t;
captureInput(u, t, o);
document.getElementById('outputArea').innerHTML = t;
