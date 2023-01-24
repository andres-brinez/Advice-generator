import { getData } from "./api.js";

const Containeradvice = document.querySelector('.Advice');
const IdAdvice=document.querySelector('#idAdvice')
const ButtonRefresh= document.querySelector('.ButtonRefresh')

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

ButtonRefresh.addEventListener('click',showAdvice);







