
// All of the code below deals with the form 
class SpellCaster{
    constructor(){
        this.spells = []
        const form = document.querySelector('#spellManipulators form')
        form.addEventListener('submit', (ev) => this.handleSubmit(ev))
    }
    
    renderProperty(className, textContent){
        const span = document.createElement('span')
        span.textContent = textContent
        span.classList.add(className)
        return span
    }

    renderDeleteButton(className, textContent){
        const deleteButton = document.createElement('button')
        deleteButton.textContent = textContent
        deleteButton.classList.add(className)
        deleteButton.addEventListener('click', (ev) => this.handleDeleteButton(ev))
        return deleteButton
    }

    handleDeleteButton(ev){
        const deleteButton = ev.target
        const parent = deleteButton.parentNode
        
        this.spells.splice(this.spells.indexOf(parent), 1)
        parent.parentNode.removeChild(parent)
    }

    renderItem(obj){
        const properties = Object.keys(obj)
        const listItem = document.createElement('li')
    
        properties.forEach((property) => {
            listItem.appendChild(this.renderProperty(property, obj[property] + " "))
        })

        const deleteButton = this.renderDeleteButton('delete', 'Delete Spell')
        listItem.appendChild(deleteButton)
        this.spells.push(listItem)

        return listItem
    }

    handleSubmit(ev){
        ev.preventDefault()

        const form = ev.target
        const magicUserTypes = Array.from(document.querySelectorAll('#magicUserType input'))
        const magicUserType = (magicUserTypes.filter((type) => type.checked))[0].className

        const info = {
        }
        
        info[magicUserType] = magicUserType
        info["spell"] = form.textBox.value

        document.querySelector('#spellList').appendChild(this.renderItem(info))
    
        form.reset()
    }
}

new SpellCaster()