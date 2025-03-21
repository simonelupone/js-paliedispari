// Palindroma
// Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma

function isPalindrome(word) {
    // controllo che nella parola non ci siano spazi ed eventualmente li tolgo
    word = word.toLowerCase().replace(/\s/g, '');
    // confronto la parola originale con l'inverso e torna true se coincidono
    return word === word.split('').reverse().join('');
}

// Pari e Dispari
// L’utente sceglie pari o dispari e
// inserisce un numero da 1 a 5. Generiamo un numero random(sempre da 1 a 5) per il computer(usando una funzione).
// Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari(usando una funzione)
// Dichiariamo chi ha vinto.