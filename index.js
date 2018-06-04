console.log('testing')

const button = document.querySelector("button")

// Changes the text of the button when it is clicked
button.addEventListener("click", () => {
    let h1 = document.querySelector("h1")
    h1.textContent = "Expecto Patronum!"
})