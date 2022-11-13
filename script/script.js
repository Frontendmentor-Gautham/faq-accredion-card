const buttons = document.querySelectorAll('.faq-toggle');
const faqs = document.querySelectorAll('faqs');


function removeActive(){
    buttons.forEach((button) =>{
        button.parentNode.parentNode.classList.remove('active');
    })
}

buttons.forEach((button) => {
    button.addEventListener('click',() =>{
        removeActive();
        button.parentNode.parentNode.classList.add('active');
    })
})