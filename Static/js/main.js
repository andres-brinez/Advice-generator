import { getData } from "./api.js";


const Containeradvice = document.querySelector('.ContainerAdvice');
const ButtonRefresh= document.querySelector('.ButtonRefresh')



const showAdvice = async () => {
    const data = await getData();

    if (data==='Error'){
        Containeradvice.innerHTML = `<div class="Error">No se pudo cargar la información</div>`

    }

    else{
        Containeradvice.textContent= data.slip.advice;
    }

}

window.onload =  showAdvice();

ButtonRefresh.addEventListener('click',function(){
    showAdvice();
});





