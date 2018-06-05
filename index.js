const button = document.querySelector('button')
const h1 = document.querySelector('h1')

// Changes the text of the first h1 header and the header with the ID spells when it is clicked
button.addEventListener('click', (e) => {
    h1.textContent = 'Expecto Patronum!'
    
    const infoHeader = document.querySelector('h2')
    infoHeader.textContent = 'BOOM!'
})

const headerForm = document.querySelector("#headerManipulators form")

// Changes the text of the first h1 header to whatever is in the text field and clears the text field
headerForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const textBox = document.getElementById("textBox")
    h1.textContent = textBox.value

    headerForm.reset()
   
})

const spellForm = document.querySelector('#spellManipulators form')

// Adds a spell to a unordered list based on what the user submitted in the text field
spellForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const f = e.target
   
    const spellName = f.textBox.value
    const spellsDiv = document.querySelector("#spellList")

    const listNode = document.createElement("li")
    const textNode = document.createTextNode(`${spellName}`)

    listNode.appendChild(textNode)
    spellsDiv.appendChild(listNode)

    f.reset()
})

function createSpan(classType, parentNode, childNode){
    const spanNode = document.createElement("span")
    spanNode.appendChild(childNode)

    spanNode.className = classType

    parentNode.appendChild(spanNode)
}