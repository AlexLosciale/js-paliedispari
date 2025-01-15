/*
Pari e Dispari L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) 
per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando 
una funzione) Dichiariamo chi ha vinto.
*/

/*
1-FAR SCEGLIERE ALL'UTENTE UN NUMERO
2-CREARE UN NUMERO RANDOM AL PC CON UNA FUNZIONE 
3-SOMMA I DUE CON UNA FUNZIONE 
  3.2-CREA UN IF PER STABILIRE SE IL NUMERO E PARI O DISPARI 
4-SPAMAPRE IL RISULTATO DI CHI VINCE 
*/

function creaNumeri() {
  return Math.floor(Math.random() * 5) + 1;
}

function controlloPari(number) {
  return number % 2 === 0;
}

const numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5:"));

if (numeroUtente < 1, numeroUtente > 5) {
  alert("Numero non valido");

} else {
  const numeroComputer = creaNumeri();
  const numeriUniti = numeroUtente + numeroComputer;

  let result;
  if (controlloPari(numeriUniti)) {
    result = "pari";
  } else {
    result = "dispari";
  }

  if (result = "pari") {
    console.log("Il computer ha vinto");
  } else {
    console.log("Complimenti, hai vinto");
  }
}
