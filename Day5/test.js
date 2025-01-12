// Create a person object that contains three keys: name, age, and county.
// Use yourself as an example to set the values for name, age, and country

// Create a function, logData(), that uses the person object to create a
// string in the following format: 
// "Per is 35 years old and lives in Norway"

// Call the logData() function to verify that it works

// let person ={
//     name: "tanishq",
//     age:20,
//     country: "India"
// }

// function logData()
// {
//     console.log(person.name + " is " + person.age + " years old and lives in " + person.country);
// }

// console.log(logData());

// let age = 55

// less than 6 years old -> free
// 6 to 17 years old     -> child discount
// 18 to 26 years old    -> student discount
// 27 to 66 years old    -> full price
// over 66 years old     -> senior citizen discount

// Create a conditional statement (if/else/else if) that logs out the discount
// the passenger will get based upon the value of the age variable

// if (age<6) {
//     console.log("free");
// }

// else if(age>6 && age<=17)
// {
//     console.log("child discount");

// }
// else if(age>18 && age<=26)
// {
//     console.log("student discount");
// }
// else if(age>27 && age<=66)
// {
//     console.log("full price");
// }

// else{
//     console.log("senior citizen discount");
// }

// let largeCountries = ["China","India","USA","Indonesia","Pakistan"]

// /* Use a for loop to log the following to the console:

// The 5 largest countries in the world:
// - China
// - India
// - United States
// - Indinesia
// - Pakistan
// */

// for(let i =0 ; i<largeCountries.length ; i++)
// {
//     console.log(largeCountries[i]);
// }

// let largeCountries = ["Tuvalu","India","USA","Indonesia","Monaco"]

// // You need to help me fixup the largeCountries array so that 
// // China and Pakistan are added back into their respective places

// // Use push() & pop() and their counterparts unshift() & shift()
// // Google how to use unshift() and shift()
// largeCountries.pop();
// largeCountries.push("Pakistan");
// largeCountries.shift()
// largeCountries.unshift("china")
// console.log(largeCountries);

// let dayOfMonth = 31
// let weekday = "Friday"

// // If it is Friday the 13th, log out this spooky face: 😱
// // Use the logical "AND operator" -> &&

// if(dayOfMonth ==13 && weekday == "Friday")
// {
//     console.log("😱");
// }

// else{
//     console.log("No the date is normal");
// }
let hands = ["rock", "paper", "scissor"];

// Create a function that returns a random item from the array
function game() {
    // Generate a random index based on the length of the hands array
    let randomIndex = Math.floor(Math.random() * hands.length);
    // Return the item at the random index
    return hands[randomIndex];
}

console.log(game());