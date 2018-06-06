const button = document.querySelector('button')
const h1 = document.querySelector('h1')

// Changes the text of the first h1 header and the header with the ID spells when it is clicked
button.addEventListener('click', (e) => {
    h1.textContent = 'Expecto Patronum!'
    
    const infoHeader = document.querySelector('h2')
    infoHeader.textContent = 'BOOM!'
})

const headerForm = document.querySelector('#headerManipulators form')

// Changes the text of the first h1 header to whatever is in the text field and clears the text field
headerForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const textBox = document.getElementById('textBox')
    h1.textContent = textBox.value
    
    headerForm.reset()
   
})

// All of the code below deals with the form 
const SpellCaster = {
    init: function(){
        const form = document.querySelector('#spellManipulators form')
        form.addEventListener('submit', (ev) => {
            this.handleSubmit(ev)
        })
    },

    renderProperty: function(className, textContent){
        const span = document.createElement('span')
        span.textContent = textContent
        span.classList.add(className)
        return span
    },

    renderItem: function(obj){
        const properties = Object.keys(obj)
        const listItem = document.createElement('li')
    
        properties.forEach((property) => {
            listItem.appendChild(this.renderProperty(property, obj[property]))
        })
    
        return listItem
    },

    handleSubmit: function(ev){
        ev.preventDefault()

        const form = ev.target
        const magicUserTypes = Array.from(document.querySelectorAll('#magicUserType input'))
        const magicUserType = (magicUserTypes.filter((type) => type.checked))[0].value

        const info = {
            spell: form.textBox.value
        }
        
        info[magicUserType] = magicUserType

        document.querySelector('#spellList').appendChild(this.renderItem(info))
    
        form.reset()
    }
}

SpellCaster.init()