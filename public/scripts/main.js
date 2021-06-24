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
