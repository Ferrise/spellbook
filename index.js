
// All of the code below deals with the form 
class SpellCaster{
    constructor(){
        this.spells = []
        this.template = document.querySelector('.liTemplate')
        this.list = document.querySelector('#spellList')

        const form = document.querySelector('#spellManipulators form')
        form.addEventListener('submit', (ev) => this.handleSubmit(ev))
    }

   deleteItem(ev){
        const deleteButton = ev.target
        const parent = deleteButton.closest('li')
        
        this.spells.splice(this.spells.indexOf(parent), 1)
        this.list.removeChild(parent)
    }

    toggleFavorite(ev){
        const favoriteButton = ev.target
        const parent = favoriteButton.closest('li')

        parent.classList.toggle('favorite')
    }

    moveItemUp(ev){
        const upButton = ev.target
        const parent = upButton.closest('li')
        
        // Location of item to be moved in spells array
        const index = this.spells.indexOf(parent)

        // Moves parent unless it is at the top of the list
        if(index > 0){
            // Move list item in spells array
            const previous = this.spells[i - 1]
            this.spells[i - 1] = parent
            this.spells[i] = previous

            this.list.insertBefore(parent, parent.previousSibling)
        }
       
    }

    renderItem(obj){
        const properties = Object.keys(obj)
        
        const listItem = this.template.cloneNode(true)
        //Causes this list item to be visible
        listItem.classList.remove('liTemplate')
        
        //Sets the class and text content of each element
        properties.forEach((property) => {
            let element = listItem.querySelector(`.${property}`)

            //To handle different radio button checks
            if(element){
                element.textContent = obj[property] + ' '
            }else {
                element = listItem.querySelector('.dark')
                element.classList.remove('dark')
                element.classList.add(property)
                element.textContent = obj[property] + ' '
            }
        })

        //delete button
        listItem
            .querySelector('.delete')
            .addEventListener('click',
            (ev) => this.deleteItem(ev)
        )

        //favorite button
        listItem
            .querySelector('#favorite')
            .addEventListener('click',
            (ev) => this.toggleFavorite(ev)
        )

        //up button 
        listItem
            .querySelector('button.move')
            .addEventListener('click',
        (ev) => this.moveItemUp(ev)
    )
        
        this.spells.push(listItem)

        return listItem
    }

    handleSubmit(ev){
        ev.preventDefault()

        //Retrieves class and text value information from inputs
        const form = ev.target
        const magicUserTypes = Array.from(document.querySelectorAll('#magicUserType input'))
        const magicUserType = (magicUserTypes.filter((type) => type.checked))[0].className

        //Holds class-text value key-value pairs
        const info = {
            spell: form.textBox.value,
        }
        
        info[magicUserType] = magicUserType

        //Append new list item to unordered list
        document.querySelector('#spellList').appendChild(this.renderItem(info))
    
        form.reset()
    }
}

new SpellCaster()