/*
Palidroma Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma
*/

/*
1-CHIEDERE ALL'UTENTE UNA PAROLA 
2-CREARE UNA FUNZIONA PER INVERTIRE LA PAROLA AL CONTRARIO 
3-CREARE UN IF DI VERIFICA, PER PARAGONARE LA PAROLA INIZALE CON QUELLA FINALE(INVERTITA)
4-SPAMPARE IL RISULTATO FINALE
*/

function Palindromo(parola) {
    const cleanedWord = parola
    const reversedWord = cleanedWord.split('').reverse().join('');
    return cleanedWord === reversedWord;
}

const parolaP = prompt("Inserisci una parola");

if (Palindromo(parolaP)) {
    console.log(`"${parolaP}" è una parola palindroma.`);
} else {
    console.log(`"${parolaP}" non è una parola palindroma.`);
}
