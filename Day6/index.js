// let inputBtn = document.getElementById("input-btn")

// inputBtn.addEventListener("click", function() {
//     console.log("Button clicked from addEventListener")
// })

// Create two variables:
// myLeads -> should be assigned to an empty array
// inputEl -> should be assigned to the text input field

let myLeads = [];
const inputEl = document.getElementById("input-el")
let inputBtn = document.getElementById("box")
inputBtn.addEventListener("click", function() {
    console.log("I want to open the box!");
})

// // If possible, use const. If not, use let.

// // Which variables below should be changed from let to const?

// // The customer wants to order some stuff. Here are the details:
// const basePrice = 520
// const discount = 120
// let shippingCost = 12
// const shippingTime = "5-12 days"

// // Whops! Turns out the shipping will be a bit more complex
// const shippingCost = 15
//  const shippingTime = "7-14 days"

// // Calculating the full price
// let fullPrice = basePrice - discount + shippingCost

// // Finally, notifying the customer
// console.log("Total cost: " + fullPrice + ". It will arrive in " + shippingTime)
