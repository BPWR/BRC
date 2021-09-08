// Evento Click de las categorias

const experienciaDesplegable = document.querySelector('.experiencia-titulo')

experienciaDesplegable.addEventListener('click', function() {
   document.getElementById('experiencia-lista').classList.toggle('active');
})

const formacionDesplegable = document.querySelector('.formacion-titulo')

formacionDesplegable.addEventListener('click', function() {
    document.getElementById('formacion-lista').classList.toggle('active');
})


const habilidadesDesplegable = document.querySelector('.habilidades-titulo')

habilidadesDesplegable.addEventListener('click', function() {
    document.getElementById('habilidades-lista').classList.toggle('active');
})


const otraDesplegable = document.querySelector('.otra-titulo')

otraDesplegable.addEventListener('click', function() {
    document.getElementById('otra-lista').classList.toggle('active');
})

// Evento Click de las Sub-categorias

const explicacion1 = document.querySelector('.experiencia-opciones1 h4')

explicacion1.addEventListener('click', function() {
    document.getElementById('experiencia-second1').classList.toggle('activate');
})

const explicacion2 = document.querySelector('.experiencia-opciones2 h4')

explicacion2.addEventListener('click', function() {
    document.getElementById('experiencia-second2').classList.toggle('activate');
})

const explicacion3 = document.querySelector('.experiencia-opciones3 h4')

explicacion3.addEventListener('click', function() {
    document.getElementById('experiencia-second3').classList.toggle('activate');
})