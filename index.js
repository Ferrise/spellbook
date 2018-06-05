const button = document.querySelector("button")
const h1 = document.querySelector("h1")

// Changes the text of the first h1 header and the header with the ID spells when it is clicked
button.addEventListener("click", (e) => {
    h1.textContent = "Expecto Patronum!"
    
    const spells = document.getElementById("spells")
    spells.textContent = "BOOM!"
})

const submitButton = document.querySelector("#submit")

// Changes the text of the first h1 header to whatever is in the text field and clears the text field
submitButton.addEventListener("click", (e) => {
    e.preventDefault()
    const textBox = document.getElementById("textBox")
    h1.textContent = textBox.value
    textBox.value = ""
   
})

// Triggers a click event on the submit button when the user clicks enter in the text field
document.addEventListener('keypress', (e) => {
    const keyName = event.keyCode
    if(keyName === 13){
        document.querySelector("form").submit()
    }
})