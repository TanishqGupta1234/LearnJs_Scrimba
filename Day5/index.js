let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function() {
    // Challenge:
    // When the user clicks on the "Pick Fighters" button, pick two random 
    // emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.
    let randomIndex = Math.floor(Math.random() * fighters.length);
    let random = Math.floor(Math.random() * fighters.length)
    // Return the item at the random index
    while (randomIndex === random)
    {
        random = Math.floor(Math.random() * fighters.length)
    }
    let fighter1 = fighters[randomIndex];
    let fighter2 = fighters[random];
    stageEl.textContent = `${fighter1} vs ${fighter2}`;




})
