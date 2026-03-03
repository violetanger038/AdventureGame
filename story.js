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
const Ch2B ="You decide to break the door. You start from the opposite side and ram the door as hard as you can. To your surprise you go right through the door with ease. Simon: 'Your strength is admirable.' ";
const Ch2A ="You decided to see if you can unlock the door. Rules never visible before light up as you touch the lock. It is in this light that something outside your cell catches your eye. A prison guard was caught in a prison trap. Do you: A ask the guard for the combination of rules B continue trying to solve the lock";
const Ch2Bs ="You whirl around to see where the voice came from. In front you stand a huge prisoner, the type of man that makes your instincts scream run, and next to him is a creature staring at you with dead eyes , something so withered that it looked like it was sitting on the edge of life and death. Do you: A run B: wait to hear what he has to say"
const Ch3AB="You step out in the eerily lit hallway. Blue light rules glow along each side of the hallway.As you try to think on what to do next you get interrupted by the sound of something struggling.You remember the guard caught in the trap. Do you A: Help the guard out of the trapB: Leave him so he doesn't put you back in your cell."
const savguard="You decide to help the guard despite the risk. After all he might be your only map out of here.You walk up to the guard. You: How do you deactivate the trap?Guard: that rule pad. He points to the rule pad a few steps away. You ask the guard for the combination. He shrugs explaining that it is different with every trap and he isn't from this sector."
const chguard="You decide to try the same code as your cell. It works. You wonder if it is a master code. Your thoughts break off as you start to decide how to approach the guard. Do you A) Threaten him to show you the way out.  B) Ask him if he knows the way out."
const thguard =" ";
const askguard=" ";
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
    for (i = 0; i<=8;i++)   
        switch (i) {
            case 0:
                await captureInput(null,null,null,Intro2)// Intro 
                choice=await captureInput(Ch1,null,g,null)// choice wehter to break or unlock door
                if (choice ==false){
                    i++
                }
                break;
            case 1:// you decided to unlock the door
                choice=await captureInput(Ch2A,null,g,null)//choice whether to ask guard or not
                if (choice ==false){
                    i+=2
                }
                else{
                    i+=1
                }
                break;
            case 2:// you decided to break door
                await captureInput(null, null,null,Ch2B)
                choice=await captureInput(Ch2Bs,null,g,null)// choice wether to run or
                if (choice ==false){
                    i+=2
                }
                else{
                    i+=3
                }
                break;
            case 3:// you decide to ask the guard
                await captureInput(null,null,null,hi)
                choice=await captureInput(Ch3AB,null,g,null)// whether to save guard or not
                if (choice ==false){
                    i+=3
                }
                else{
                    i+=4
                }
                break;
            case 4:// you decided to figurr the lock out
                await captureInput(null,null,null,scptCh2B)
                choice=await captureInput(Ch3AB,null,g,null)//whether to save guard
                if (choice ==false){
                    i=7
                }
                else{
                    i=6
                }
                break;
            case 5:// you run
                await captureInput(null,null,null,scptCh2B)
                choice=await captureInput(Ch2Bs,null,g,null)
                if (choice ==false){
                    i++
                }
                break;
            case 6://you stay
                await captureInput(null,null,null,f)
                choice=await captureInput(null,null,o,null)
                if (choice ==false){
                    i++
                }
                break;
            case 7:
                await captureInput(null,null,null,savguard)
                choice=await captureInput(chguard,null,o,null)
                if (choice ==false){
                    i++
                }
                break;
            case 8:
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
