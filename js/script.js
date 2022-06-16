// Visualizzare in un alert 5 numeri casuali.
// 30 secondi dopo la chiusura dell'alert, l'utente deve inserire,
// uno alla volta, i numeri che ha visto precedentemente, 
// tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, 
// il software dice quanti e quali dei numeri da indovinare sono stati individuati.


// dare all'utente 5 numeri dentro un Array
const randomNumber = randomNumbers(1, 5);
alert(`Tieni a mente questi numeri: ${randomNumber}`);

// array numeri dati dall'utente
const userArrayNumbers = [];

// array per i tentativi buoni dell'utente
const goodAttempt = [];

// dopo 30 secondi
setTimeout(function(){
    for(let i = 1; i <= 5; i++){
        // chiedo all'utente i numeri che è riuscito a tenere a mente e li pusho in userArrayNumbers
        const userNumber = parseInt(prompt('Dimmi i numeri che hai visto'));
        userArrayNumbers.push(userNumber);

        // se i numeri dell'utente sono inclusi sia nell'array randomNumber sia nell'array userArrayNumbers li pusho in goodAttempt
        if(randomNumber.includes(userNumber) && userArrayNumbers.includes(userNumber)){
            goodAttempt.push(userNumber);
        }
    }
    alert(`I numeri da ricordare erano: ${randomNumber}. Quelli che hai ricordato sono: ${goodAttempt}`) 
   
}, 30000);


// --------------------
// FUNZIONI
// --------------------
// funzione per generare i numeri random
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// funzione per creare array numeri random
function randomNumbers(min, max) {
    const array = [];

    while(array.length < max) {
        const bombs = getRndInteger(min, 100);
        if(!array.includes(bombs)) {
            array.push(bombs);
        }
    }

    return array;
}