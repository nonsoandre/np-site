const closeBtn = document.querySelector('.gallery-close-btn');
const modalDispBtn = document.querySelector('.gallery-preview__btn')

console.log(modalDispBtn)

//open modal when button is clicked
modalDispBtn.addEventListener('click', ()=>{
    openModal();
})

//remove modal when button is clicked
closeBtn.addEventListener('click', ()=>{
    closeModal();
    
})
function openModal(){
    const modalBox = document.querySelector('#modal-portal');
    // const modalBox = document.querySelector('.gallery-dtl');

    modalBox.style.display = 'flex'
}

function closeModal(){
    const modalBox = document.querySelector('#modal-portal');
    modalBox.style.display = 'none'
}