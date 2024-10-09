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


const membersNameInputEl = document.getElementById('memberName')

const formOneEl = document.getElementById('formOne')
console.log(formOneEl);

const cardsEl = document.querySelector('.cardBody')
const letPrice = 0.21;
let finalPrice = letPrice * memberKm;

formOneEl.addEventListener('submit', function(e){
e.preventDefault()

const memberKm = e.target.memberKm.value
const memberAge = e.target.memberAge.value
const memberName = e.target.memberName.value

console.log(memberAge, memberKm, memberName);



const memberEl = `
<div class"member">
 <div class="col-4>
            <h4>nome passeggero</h4>
            <p class="name_utente"></p>
        </div>
        <div class="col-2">
            <h4>Offerta</h4>
            <p>Biglietto Standard</p>
        </div>
        <div class="col-2">
            <h4>carrozza</h4>
            <p>5</p>
        </div>
        <div class="col-2">
            <h4>codice cp</h4>
            <p>56433</p>
        </div>
        <div class="col-2">
            <h4>costo biglietto</h4>
            <p class="price"></p>
        </div>
            
</div>

`

cardsEl.insertAdjacentElement('beforeend', memberEl)

})





