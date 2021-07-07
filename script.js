/* SNACK 1 : Il software deve chiedere per 5 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
Esegui questo programma in due versioni, con il for e con il while. */

//=VERSIONE FOR:

/* var printa = document.getElementById('numbers-list').innerHTML = '<li>' + numbers + '</li>'; */

var numbers;
console.log(numbers)

var sum = 0;
//!Dargli il valore 0 serve a far capire al linguaggio che quella variabile è numerica, cosicchè quando andremo ad inserire dei numeri
//! saprà che dovra farci delle operazioni, e non metterli uno di fianco all'altro.

for (var i = 1; i <= 5; i++) {
    numbers = parseInt(prompt('Inserisci un numero (' + i + '/5)'));
    console.log(numbers)
    if (!isNaN(numbers)) {//!Eseguirà solo se ciò che riceve è un numero.
        sum += numbers;
        //!Facendo += è come se dicessimo di aggiungere numbers a se stesso(e ai nuovi valori che assumerà ad ogni ciclo).
    }
}
console.log('La somma totale è ' + sum)

var stampa = document.getElementById('numbers-list')
stampa.innerHTML = '<li> La somma totale dei numeri inseriti è ' + sum + '</li>';