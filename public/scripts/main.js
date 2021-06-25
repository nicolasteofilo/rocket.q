
import Modal from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')


//get the buttons existentes with class check
const checkButtons = document.querySelectorAll(".actions a.check") 

checkButtons.forEach(button => {
    //add the listen
    button.addEventListener("click", handleClick)
})


/*When the button delete for clicked it opens to modal */
const deleteButton = document.querySelectorAll(".actions a.delete")

deleteButton.forEach(button => {
    button.addEventListener("click", (event) => handleClick(event, false))
})

function handleClick(event, check = true) {
    event.preventDefault()
    const text = check ? "Marcar como lida" : "Excluir"
    

    modalTitle.innerHTML = `${text} esta pergunta`;
    modalDescription.innerHTML= `Tem certeza que deseja ${text.toLocaleLowerCase()} esta pergunta`
    modalButton.innerHTML = `Sim, ${text.toLocaleLowerCase()}`
    check ? modalButton.classList.remove("red") : modalButton.classList.add("red")
    // open modal
    modal.open()
}