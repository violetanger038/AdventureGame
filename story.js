// importing dialogue
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
const Intro ="You jolt up from your stone bed(one of the only things that furnish your 8X8 cell ). You look out the bars to see some prisioners run down the hall. You can't beleive your eyes; there has never been a riot in this prision. That is when he spoke.\n(Press Enter) ";
const Intro2 = " DM: 'I will grant freedom but you will have find three things: Justice,Mercy,and who you are.'\nYou: 'Who are you?'\nDM:'...'"
const Ch1 ="With no answer from the mysterious voice you decide to try to get out of your cell. You observe the cell in which you notice that the magical law above the door that previously made the door unopenable from the inside was gone.\nDo you: \n A: Inspect the lock\nB: Break down the door.";
const scptCh2A =" ";
const scptCh2B ="You decide not to trust the guard and solve the lock yourself. You start by looking at the rules you understand; shifting the tiles in various directions till you fall back stumped. Law pops inside your head, one typically used for sealing royal confidential letters. You get up and doubtfully try the combination. The door grinds on it hinges. You did it. ";
const Ch2B ="You decide to break the door. You start from the opposite side and ram the door as hard as you can. To your surprise you go right through the door with ease. Simon: 'Your strength is admirable.' You whirl around to see where the voice came from. In front you stand a huge prisoner, the type of man that makes your instincts scream run, and next to him is a creature staring at you with dead eyes , something so withered that it looked like it was sitting on the edge of life and death. Do you: A run B: wait to hear what he has to say";
const Ch2A ="You decided to see if you can unlock the door. Rules never visible before light up as you touch the lock. It is in this light that something outside your cell catches your eye. A prison guard was caught in a prison trap. Do you: A ask the guard for the combination of rules B continue trying to solve the lock";
const Ch3AB="You step out in the eerily lit hallway. Blue light rules glow along each side of the hallway.As you try to think on what to do next you get interrupted by the sound of something struggling.You remember the guard caught in the trap. Do you A: Help the guard out of the trapB: Leave him so he doesn't put you back in your cell."
const uy =" ";
const A =" ";
const po =" ";
const h =" ";

// game loop
async function runGame() {
    let t = "Please enter Start";
    let o = "Start";
    let g = "A";
    let f = "B";
    let choice =" "
    let frame = 0

    document.getElementById('outputArea').innerHTML = t;

    // waiting
    let start = await captureInput(t, t, o, null);
    while (start == false){
        if (start == false){
            start=await captureInput(t, t, o, null);
        }
    }
    // Act 1
    await captureInput(null,null,null,Intro)
    for (i = 0; i<=5;i++)   
        switch (i) {
            case 0:
                await captureInput(null,null,null,Intro2)
                choice=await captureInput(Ch1,null,g,null)
                if (choice ==false){
                    i++
                }
                break;
            case 1:
                choice=await captureInput(Ch2A,null,g,null)
                if (choice ==false){
                    i+=2
                }
                else{
                    i+=1
                }
                break;
            case 2:
                choice=await captureInput(Ch2B,null,g,null)
                if (choice ==false){
                    i++
                }
                break;
            case 3:
                await captureInput(null,null,null,hi)
                choice=await captureInput(null,null,o,null)
                if (choice ==false){
                    i++
                }
                break;
            case 4:
                await captureInput(null,null,null,scptCh2B)
                choice=await captureInput(Ch3AB,null,o,null)
                if (choice ==false){
                    i++
                }
                break;
            case 5:
                await captureInput(null,null,null,f)
                choice=await captureInput(null,null,o,null)
                if (choice ==false){
                    i++
                }
                break;
        
            default:
                break;
        }



   

}
        


runGame();
