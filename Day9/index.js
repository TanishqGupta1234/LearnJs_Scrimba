// // template strings/literals

// const recipient = "James"
// const sender = "Per Harald Borgen"

// // Break the email string into multiple lines
// const email = `Hey ${recipient}! How is it going? Cheers ${sender}`

// console.log(email)

// template strings/literals

// const recipient = "James"
// const sender = "Per Harald Borgen"

// // Break the email string into multiple lines
// const email = `Hey ${recipient}!

//  How is it going?

//  Cheers ${sender}`

// console.log(email)

let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    renderLeads()
})

function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        // Refactor the code below to use a template string
        listItems += `
            <li>
                <a target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems  
}
