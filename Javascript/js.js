var btn_destacado, btn_proyecto, btn_biografia;
 btn_destacado = document.getElementById('destacado');
 btn_proyecto = document.getElementById('proyectos');
 btn_biografia = document.getElementById('biografia');

var caja_destacado, caja_proyectos, caja_biografia;
caja_destacado = document.getElementById('caja-destacado');
caja_proyectos = document.getElementById('caja-proyectos');
caja_biografia = document.getElementById('caja-biografia');

function index(){
    caja_destacado.classList.add("activarCaja");
}
index();
    
btn_destacado.addEventListener("click", function(){
   
    caja_destacado.classList.add("activarCaja");
    caja_proyectos.classList.remove("activarCaja");
    caja_biografia.classList.remove("activarCaja");
});


btn_proyecto.addEventListener("click", function(){
   
    caja_proyectos.classList.add("activarCaja");
    caja_destacado.classList.remove("activarCaja");
    caja_biografia.classList.remove("activarCaja");
});

btn_biografia.addEventListener("click", function(){

    caja_biografia.classList.add("activarCaja");
    caja_proyectos.classList.remove("activarCaja");
    caja_destacado.classList.remove("activarCaja");
});