const numeroTitulo=document.getElementById('numero');
let contador=0;

const btnAumentar= document.getElementById('aumentar');
const btnReset= document.getElementById('reset');
const btnDecrementar= document.getElementById('decrementar');


btnAumentar.addEventListener("click", function(){
    contador=numeroTitulo.textContent
    contador++;
    numeroTitulo.textContent=contador;
})

btnDecrementar.addEventListener("click", function(){
    contador=numeroTitulo.textContent
    contador--;
    numeroTitulo.textContent=contador;
})

btnReset.addEventListener("click",function(){
    contador=0;
    numeroTitulo.textContent=contador;
})