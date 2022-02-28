let palos = ['♦', '♥', '♠', '♣']
let numeros = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
let carta = document.getElementById('card')
let paloArriba = document.getElementById('paloArriba')
let paloAbajo = document.getElementById('paloAbajo')
let numeroCarta = document.getElementById('numero')

const mostrarCarta = () =>{
    let palo = palos[Math.floor(Math.random()*palos.length)]
    /* console.log(palo) */
    let numero = numeros[Math.floor(Math.random()*numeros.length)]
    paloArriba.innerHTML = palo 
    numeroCarta.innerHTML = numero
    paloAbajo.innerHTML = palo
}

mostrarCarta()