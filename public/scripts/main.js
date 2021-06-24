import Modal from './modal.js'

const modal = Modal()

// get buttons check
const checkButtons = document.querySelectorAll('.actions a.check')

checkButtons.forEach(button => {
    // add the listen
    button.addEventListener("click", event => {
        modal.open()
    })
})


// Delete button click
const deleteButton = document.querySelectorAll(".actions a.delete")

deleteButton.forEach(button => {
    button.addEventListener("click", event =>{
        modal.open()
    })
})