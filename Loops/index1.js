// for (let i = 0; i < 6; i += 1) {
//     console.log(i)
// }

// Create a for loop that counts from 10 to 100 in steps of 10
// Use console.log to log out the numbers

// for (let index = 10 ; index <= 100; index+=10) {

//     console.log(index);
    
// }

// let messages = [
//     "Hey, how's it going?",        
//     "I'm great, thank you! How about you?",
//     "All good. Been working on my portfolio lately.",
//     "Same here!",
//     "Great to hear"
// ]

// // DRY - Don't repeat yourself
// // console.log(messages[0])
// // console.log(messages[1])
// // console.log(messages[2])
// // console.log(messages[3])

// for (let i = 0; i < 5; i += 1) {
//     console.log(messages[i])
// }

// let cards = [7, 3, 9]

// Create a for loop that logs out all the cards in the array
// Use cards.length to specify how long the loop should run

// for( i = 0 ; i<3 ; i++)
// {
//     console.log(cards[i]);
// }

// console.log(cards.length);

let sentence = ["Hello ", "my ", "name ", "is ", "Per"] 
let greetingEl = document.getElementById("greeting-el")

// Render the sentence in the greetingEl paragraph using a for loop and .textContent
for(i=0 ; i<sentence.length ; i++)
{
    greetingEl.textContent += sentence[i]
    
}

