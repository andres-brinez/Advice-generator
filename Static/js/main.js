import { getData } from "./api.js";

const Containeradvice = document.querySelector('.Advice');
const IdAdvice=document.querySelector('#idAdvice')
const ButtonRefresh= document.querySelector('.ButtonRefresh')
const button = document.querySelector(".roll")

let rot = 360

const showAdvice = async () => {
    const data = await getData();

    if (data==='Error'){
        Containeradvice.innerHTML = `<div class="Error">No se pudo cargar la información</div>`
    }
    
    else{
        IdAdvice.textContent= data.slip.id ;
        Containeradvice.textContent= data.slip.advice;
    }

}

window.onload =  showAdvice();

ButtonRefresh.addEventListener('click',()=>{
    rot += 360
    button.style.transform = "translateY(0) rotate("+rot+"deg)" // estilos para hacer la rotación 
    button.classList.add("active")

    showAdvice()
    setTimeout(() => {
        button.classList.remove("active")
    }, 1000);
    ;
});







