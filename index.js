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
    
    //list item node
    const spellName = f.textBox.value
    const spellsDiv = document.querySelector('#spellList')
    const textNode = document.createTextNode(`${spellName}`)

    const listNode = buildListItem(spellsDiv, textNode)
   
    //span node
    let magicUserType = document.querySelectorAll('#magicUserType input')

    for(let user = 0; user < magicUserType.length; user++){
        magicUser = magicUserType[user]
        if(magicUser.checked) {
            magicUserType = magicUser.value
            break
        }
    }
    //initialize magicUserType
    buildSpan(magicUserType, spellsDiv, listNode)
    
    f.reset()
})

function buildSpan(classType, parentNode, childNode){
    const spanNode = document.createElement('span')
    spanNode.appendChild(childNode)

    spanNode.className = classType

    parentNode.appendChild(spanNode)
    debugger
    return spanNode
}

function buildListItem(parentNode, childNode){
    const listItemNode = document.createElement('li')
    
    listItemNode.appendChild(childNode)
    parentNode.appendChild(listItemNode)

    return listItemNode
}