console.log('testing')

const button = document.querySelector("button")

// Changes the text of the first h1 header and the header with the ID spells when it is clicked
button.addEventListener("click", () => {
    let h1 = document.querySelector("h1")
    h1.textContent = "Expecto Patronum!"
    
    let spells = document.getElementById("spells")
    spells.textContent = "BOOM!"
})