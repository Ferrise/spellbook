const button = document.querySelector('button')
const h1 = document.querySelector('h1')

// Changes the text of the first h1 header and the header with the ID spells when it is clicked
button.addEventListener('click', (e) => {
    h1.textContent = 'Expecto Patronum!'
    
    const spells = document.getElementById('spells')
    spells.textContent = 'BOOM!'
})

const form = document.querySelector('form')

// Adds a spell to a unordered list based on what the user submitted in the text field
form.addEventListener('submit', (e) => {
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
