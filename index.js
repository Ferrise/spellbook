
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
        parent.parentNode.removeChild(parent)
    }

    renderItem(obj){
        const properties = Object.keys(obj)
        
        const listItem = this.template.cloneNode(true)
        listItem.classList.remove('liTemplate')
        
        //sets the class and text content of each element
        properties.forEach((property) => {
            let element = listItem.querySelector(`.${property}`)

            //to handle different radio button checks
            if(element){
                element.textContent = obj[property] + " "
            }else{
                element = listItem.querySelector('.dark')
                element.classList.remove('dark')
                element.classList.add(property)
                element.textContent = obj[property] + " "
            }
        })

        //delete button
        listItem
            .querySelector('.delete')
            .addEventListener('click',
            (ev) => this.deleteItem(ev)
        )
        
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