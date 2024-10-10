console.log('its works');

/* 
Descrizione:
 Scrivere un programma che chieda all’utente:
Il numero di chilometri da percorrere
Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
*/

/* 
MILESTONE 1: Iniziamo implementando il programma senza alcuna estetica:
usando esclusivamente due input e un bottone (non stilizzati),
realizziamo le specifiche scritte sopra. La risposta finale (o output)
sarà anch’essa da scrivere in console.
*/


const memberKmEl = document.getElementById('memberKm')
console.log(memberKmEl);

const memberAgeEl = document.getElementById('memberAge')
console.log(memberAgeEl);

const memberNameEl = document.getElementById('memberName')
console.log(memberNameEl);


const formOneEl = document.getElementById('formOne')
console.log(formOneEl);

const cardsEl = document.querySelector('.cardBody')

function randomSeat() {
    let seat = Math.floor((Math.random() * 20) +1);
    document.getElementById('random-seat').innerHTML = seat;
}

function randomId() {
    let codex = Math.floor((Math.random() * 99999) + 11111);
    document.getElementById('random-code').innerHTML = codex;
}


formOneEl.addEventListener('submit', (e) => {
e.preventDefault()
const inputName = memberNameEl.value;
console.log(inputName);

const inputDistance = memberKmEl.value;
console.log(inputDistance);

const inputAge = memberAgeEl.value;
console.log(inputAge);


// calcolo prezzo per km
basePrice = inputDistance * 0.21;

// applicazione sconto
if (inputAge < 18 && inputAge > 0) {
    basePrice = basePrice - (basePrice * 0.2);
    document.getElementById('ticket').innerHTML = 'Biglietto ridotto - minorenni';
}
else if (inputAge >= 65) {
    basePrice = basePrice - (basePrice * 0.4);
    document.getElementById('ticket').innerHTML = 'Biglietto ridotto - pensionati';
}
else {

    document.getElementById('ticket').innerHTML = 'Biglietto standard';
}




document.getElementById('costumer').innerHTML = inputName;
document.getElementById('out-price').innerHTML = `${basePrice.toFixed(2)}€`;

randomSeat();
randomId();



})





