

function captureInput(x,y,I,scpt){
    const user = document.getElementById(`gameInput`);
    if (!user) return;
    if (scpt == null){
        user.addEventListener(`keydown`, (event) => {
            if (event.key == `Enter`){
                const input = user.value;
                if (input == I){
                    document.getElementById(`outputArea`).innerHTML = x;
                    user.addEventListener(`keydown`, (event) => {
                        if (event.key == `Enter`){
                            document.getElementById(`outputArea`).innerHTML = " ";
                            return true 
                        }
                    });
                }
                else{
                    document.getElementById(`outputArea`).innerHTML = x;
                    user.addEventListener(`keydown`, (event) => {
                        if (event.key == `Enter`){
                            document.getElementById(`outputArea`).innerHTML = " ";
                            return true 
                        }
                    });
                }
                user.value = " ";
            };
        });
    }
    else{
        document.getElementById(`outputArea`).innerHTML = scpt;
        user.addEventListener(`keydown`, (event) => {
            if (event.key == 'Enter'){
                document.getElementById(`outputArea`).innerHTML = " ";
            }
        });
    }
}
// game start variables
let u = "Welcome"
let t ="Please enter Start"
let o ="Start"
// Dm variables

// Game Over Tracker
let gameOver = false;
// dialogue variables
let f = "somthing"
let g = "laugh"
let h = "fifty"
let b = "script"
document.getElementById('outputArea').innerHTML = t;
captureInput(u,t,o,null)
// Act 1 sequence
for (i=0; i===16;i++){
    switch (i) {
        case 0:
            let choice = captureInput(g,h,f,null)
            if (choice == true){
                i++
            }
            break;
        case 1:
            choice = captureInput(g,h,f,null)
            if (choice == true){
                i++
            }
            
            break;
        case 2:
            choice = captureInput(g,h,f,null)
            if (choice == true){
                i++
            }
            
            break;
        case 3:
            
            break;
        case 4:
            
            break;
        case 5:
            
            break;
        case 6:
            
            break;
        case 7:
            
            break;
        case 8:
            
            break;
        case 9:
            
            break;
        case 10:
            
            break;
        case 12:
            
            break;
        case 13:
            
            break;
        case 14:
            
            break;
        case 15:
            
            break;
        case 16:
            
            break;
    
        default:
            break;
    }
}



