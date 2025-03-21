// Palindroma
// Chiedere all’utente di inserire una parola. Creare una funzione per capire se la parola inserita è palindroma

function isPalindrome(word) {
    // controllo che nella parola non ci siano spazi ed eventualmente li tolgo
    word = word.toLowerCase();
    // confronto la parola originale con l'inverso e torna true se coincidono
    return word === word.split('').reverse().join('');
}

// Chiedo all'utente di inserire una parola
const userInput = prompt("Inserisci una parola per verificare se è palindroma");

// imposto una condizione per controllare se l'utente ha inserito qualcosa
if (userInput && userInput.length >= 3 && !userInput.includes(' ')) {
    // se si, conrollo il risultato della funzione e visualizzo il messaggio corretto in console
    if (isPalindrome(userInput)) {
        console.log(`La parola "${userInput}" è palindroma!`);
    } else {
        console.log(`La parola "${userInput}" non è palindroma!`);
    }
} else {
    alert("Nessuna parola inserita o rilevati spazi \nAggiorna la pagina e scrivi una parola senza spazi!");
}

// problema stringa con uno spazio (es 4 spazi)
// problema lunghezza caratteri