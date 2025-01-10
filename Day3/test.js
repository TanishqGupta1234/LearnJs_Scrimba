// let randomNumber = Math.random()

// console.log(randomNumber)


// /* 

// What does Math.random() do?

// Your answer: 

// */

// let randomNumber = Math.random() * 6

// console.log(randomNumber)


/* 

In which range will our randomNumber be now?

From:
To:

*/ 

// let randomNumber = Math.random() * 6

// let flooredNumber = Math.floor(3.45632)

// console.log(flooredNumber)


/* 

What does Math.floor() do to positive numbers?

Your answer: will provide only particular value ie only the integer value... 

*/
// let randomNumber = Math.floor( Math.random() * 6 )

// console.log(randomNumber)

/* 

Write down all the possible values randomNumber can hold now!
0
1
2
3
4
5
*/

// Try to modify the expression so that we get a range from 1 to 6
// let randomNumber = Math.floor( Math.random() * 6 ) +1

// console.log(randomNumber)





// Create a function, rollDice(), that returns a random number between 1 and 6

// function rollDice() 
// {  
//     let randomNumber = Math.floor( Math.random() * 6 ) + 1
//     return randomNumber;
// }

// console.log(rollDice());

// let hasSolvedChallenge = false
// let hasHintsLeft = false

// // Create an if statement that checks that both variables are false.
// // If so, run the showSolution() function

// if (hasSolvedChallenge === false && hasHintsLeft === false) {
//     showSolution()
// }

// function showSolution() {
//     console.log("Showing the solution....")
// }


// Create two boolean variables, likesDocumentaries and likesStartups
// Use an OR statement (||) to call recommendMovie() if either of those variables are true

let likesDocumentaries = true;
let likesStartups =true

if(likesDocumentaries == true || likesStartups ==true)
{
    return recommendMovie()
}

function recommendMovie() {
    console.log("Hey, check out this new film we think you will like!")
}




