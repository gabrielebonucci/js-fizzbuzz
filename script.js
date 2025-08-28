// CONSEGNA 
// Scrivi un programma che stampi in console i numeri da 1 a 100.
// Per i multipli di 3 stampi “Fizz” al posto del numero.
// Per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.


// RAGIONAMENTO

// 1. creare un ciclo for per generare i numeri da 1 a 100

// 2. per ogni numero controllare nell'ordine:
//    a. Che sia multiplo sia di 3 che di 5, se sì, stampa “FizzBuzz”.
//    b. Altrimenti, è multiplo solo di 3? se sì, stampa "Fizz".
//    c. Altrimenti, è multiplo solo di 5? se sì, stampa "Buzz"
//    d. Se non è nessuna delle precedenti, stampa il numero stesso.

// SVOLGIMENT0

// 1. creo un ciclo che va da 1 a 100

for(let i = 1; i <=100; i++) {

    // 2. Controllo il caso più specifico, cioè se il numero è multiplo sia di 3 che di 5.
    // Uso l'operatore AND (&&) per unire le due condizioni.
    if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");

}

// 3. Se non lo è, allora controllo se è multiplo solo di 3.
    else if (i % 3 === 0) {
    console.log("Fizz");
}

// 4. Se non lo è, allora controllo se è multiplo solo di 5.
else if (i % 5 === 0) {
    console.log("Buzz")
}

// 5. Se non rientra in nessuno dei casi precedenti, allora stampo il numero.

else{
    console.log(i)
}

}