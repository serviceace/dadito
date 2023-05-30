// levantando elementos del DOM 
const btnClick = document.querySelector('#btnClick');
const numerito = document.querySelector('#numerito');
const dadoUNO = document.querySelector('.dadoUNO');


//variables auxiliares
let numero = 1;


//eventos 

btnClick.addEventListener('click', () => {
	
    numero = Math.random()*6;
    numero = Math.round(numero);
    console.log(numero);

  switch (numero) {
    case 1:
      console.log('salio UNO');
      dadazo.classList.add('uno');
      break;
    case 2:
      console.log('salio DOS');
      dadazo.classList.add('dos');
      break;
    case 3:
      console.log('salio TRES');
      dadazo.classList.add('tres');
      break;
    case 4:
      console.log('salio CUATRO');
      dadazo.classList.add('cuatro');
      break;
    case 5:
      console.log('salio CINCO');
      dadazo.classList.add('cinco');
      break;
    case 6:
      console.log('salio SEIS');
      dadazo.classList.add('seis')
      break;
    default:
      console.log('salio CERO');
  }

 
    //dadazo.classList.add('seis')
})




