let indice = 1;
muestraSlides(indice);

function avanza(n){
    muestraSlides( indice+=n ) ;
}

function muestraSlides(n) {
    let i;
    let slides = document.getElementsByClassName('slide');
if(n > slides.length){
    indice = 1;
}
if(n < 1){
    indice = slides.length;
}
for(i = 0; i < slides.length; i++){
    slides[i].style.display = 'none';
}
slides[indice-1].style.display = 'block';

}


/* modal */

let cerrar = document.querySelectorAll(".close")[0];
let abrir = document.querySelectorAll(".usuario, .i-a")[0];
let modal = document.querySelectorAll(".modal")[0];
let modalC = document.querySelectorAll(".contenedor-modal")[0];

abrir.addEventListener("click", function(e){
    e.preventDefault();
    modalC.style.opacity = "1";
    modalC.style.visibility = "visible";
    modal.classList.toggle("modal-c");
});


cerrar.addEventListener("click", function(){
modal.classList.toggle("modal-c");

setTimeout(function(){
    modalC.style.opacity = "0";
modalC.style.visibility = "hidden";
    
},700);

})