// Pari e Dispari
// L’utente sceglie pari o dispari e
// inserisce un numero da 1 a 5. 
// 
// Generiamo un numero random(sempre da 1 a 5) per il computer(usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari(usando una funzione)
// Dichiariamo chi ha vinto.

/**
 * genero un numero random tra 1 e 5
 * 
 * @returns {number}
 * 
*/
function generateCpuNum() {
    return Math.floor((Math.random() * 5) + 1);
}

/**
 * stabilisco se una somma di due numeri è pari
 * 
 * @param {number} num1 user number
 * @param {number} num2 cpu number
 * @returns {boolean}
 * 
*/
function isEven(num1, num2) {
    let sum = num1 + num2;
    // stabilisco se la somma è pari o dispari
    let isEven = false;
    if (sum % 2 === 0) {
        return isEven = true;
    }
    return isEven = false;
}

// inizializzo le costanti che conterranno i valori scelti per il gioco
const userChoice = prompt('Scegliere Pari o Dispari').toLowerCase();
console.log(`Scelta dell'utente: ${userChoice}`);

const userNum = parseInt(prompt('Inserisci un numero da 1 a 5'));
console.log(`Numero scelto dall'utente:\n${userNum}`);

let cpuRandomNum = generateCpuNum();
console.log(cpuRandomNum);

// determino il vincitore in base al risultato della funzione e alla scelta dell'utente
if (isEven(userNum, cpuRandomNum)) {
    if (userChoice === 'pari') {
        console.log('Ha vinto l\'utente');
    } else {
        console.log('Ha vinto la cpu');
    }
} else {
    if (userChoice === 'dispari') {
        console.log('L\'utente ha vinto');
    } else {
        console.log('Ha vinto la cpu');
    }
}