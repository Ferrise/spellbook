
// All of the code below deals with the form 
const SpellCaster = {
    init: function(){
        this.spells = []
        const form = document.querySelector('#spellManipulators form')
        form.addEventListener('submit', (ev) => this.handleSubmit(ev))
    },
    
    renderProperty: function(className, textContent){
        const span = document.createElement('span')
        span.textContent = textContent
        span.classList.add(className)
        return span
    },

    renderDeleteButton: function(className, textContent){
        const deleteButton = document.createElement('button')
        deleteButton.textContent = textContent
        deleteButton.classList.add(className)
        deleteButton.addEventListener('click', (ev) => this.handleDeleteButton(ev))
        return deleteButton
    },

    handleDeleteButton: function(ev){
        const deleteButton = ev.target
        const parent = deleteButton.parentNode
        
        this.spells.splice(this.spells.indexOf(parent), 1)
        parent.parentNode.removeChild(parent)
    },

    renderItem: function(obj){
        const properties = Object.keys(obj)
        const listItem = document.createElement('li')
    
        properties.forEach((property) => {
            listItem.appendChild(this.renderProperty(property, obj[property]))
        })

        const deleteButton = this.renderDeleteButton('delete', 'Delete Spell')
        listItem.appendChild(deleteButton)
        this.spells.push(listItem)

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