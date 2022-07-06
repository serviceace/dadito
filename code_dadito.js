const btnClick = document.querySelector('#btnClick');
const numerito = document.querySelector('#numerito');

let numero = 0;

btnClick.addEventListener('click', () => {
	numero = Math.random()*10;
    numero = Math.round(numero);
    console.log(numero);
    numerito.textContent = numero;
})




