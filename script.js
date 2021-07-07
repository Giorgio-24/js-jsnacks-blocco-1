/* SNACK 1 : Il software deve chiedere per 5 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
Esegui questo programma in due versioni, con il for e con il while. */

//=VERSIONE FOR:

var numbers;

var sum = 0;
//!Dargli il valore 0 serve a far capire al linguaggio che quella variabile è numerica, cosicchè quando andremo ad inserire dei numeri
//! saprà che dovra farci delle operazioni, e non metterli uno di fianco all'altro.

for (var i = 1; i <= 5; i++) {
    numbers = parseInt(prompt('Inserisci un numero (' + i + '/5)'));
    console.log(numbers);
    if (!isNaN(numbers)) {//!Eseguirà solo se ciò che riceve è un numero.
        sum += numbers;
        //!Facendo += è come se dicessimo di aggiungere numbers a se stesso(e ai nuovi valori che assumerà ad ogni ciclo).
    }
}
console.log('La somma totale è ' + sum);
/* 
var stampa = document.getElementById('numbers-list')
stampa.innerHTML = '<li> La somma totale dei numeri inseriti è ' + sum + '.</li>'; */

//=VERSIONE WHILE

var wNumbers;

var wSum = 0;

var wY = 1;

while (wY <= 5) {
    wNumbers = parseInt(prompt('Inserisci un numero (' + wY + '/5)'));
    console.log(wNumbers);
    if (!isNaN(wNumbers)) {
        wSum += wNumbers;
    }
    wY++;//!Questo è il contatore del ciclo while, e va sempre ricordato altimenti il ciclo andrà all'infinito.
}

console.log('La somma totale è ' + wSum);

var stampa = document.getElementById('snack-1');
stampa.innerHTML = '<li> La somma totale dei numeri inseriti è ' + '<span class="red">' + '"' + sum + '"' + '</span > ' + '.</li>'
    + '<li> La somma totale dei numeri inseriti nel ciclo while è ' + '<span class="red">' + '"' + wSum + '"' + '</span > ' + '.</li>';


/* SNACK 2: Chiedi un numero all'utente, se è pari stampa il numero,
se è dispari stampa il numero successivo. */

var userNumber = parseInt(prompt('Digita un numero'));

if ((userNumber % 2) == 0) {//!Se un numero diviso due da resto 0 vuol dire che è pari, perciò scriviamo la condizione cosi.
    stampa = document.getElementById('snack-2');
    stampa.innerHTML = '<li> Il numero che hai inserito è ' + '<span class="red">'
        + '"' + userNumber + '"' + '</span > ' + ' ed è pari.</li>';
} else {
    var userNextNumber = userNumber + 1;
    stampa = document.getElementById('snack-2');
    stampa.innerHTML = '<li> Il numero che hai inserito è ' + '<span class="red">' + '"' + userNumber + '"' + '</span > '
        + ' ed è dispari, perciò è stato portato al numero pari successivo che è: ' + '<span class="red">' + '"' + userNextNumber + '"' + '</span > ' + '.</li>';
}

/*  Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi,
 Gatsby vuole generare una falsa lista di 3 invitati. */

var lastNamesList = ['Bravi', 'Bacci', 'Giovannelli', 'Romagnuolo', 'Awani', 'Oxa', 'Colombai', 'Scmith', 'Gintonico', 'Amianto'];
console.log(lastNamesList);

var firstNamesList = ['Cajo', 'Simo', 'Femi', 'Ocin', 'Giovanni', 'Daniele', 'Shpetim', 'Dodo', 'Checco', 'Ginevro'];
console.log(firstNamesList);

var gatsbyList = [];//!All'inizio l'array deve essere vuoto.

for (var q = 0; q < 3; q++) {
    var randoms1 = Math.floor(Math.random() * firstNamesList.length);//!Numero random generato in base alla lunghezza dell' array
    console.log(randoms1);//!(nel caso non sapessi il numero degli elementi al suo interno).

    var randoms2 = Math.floor(Math.random() * lastNamesList.length);//!Numero random generato in base alla lunghezza del secondo array
    console.log(randoms2);//!(nel caso non sapessi il numero degli elementi al suo interno).

    gatsbyList += firstNamesList[randoms1] + ' ' + lastNamesList[randoms2] + '<span class="green">' + ';  ' + '</span>';
}

console.log(gatsbyList);

stampa = document.getElementById('snack-3');
stampa.innerHTML = '<li> I 3 nomi della lista sono: ' + '<span class="red">' + gatsbyList + '</span >' + '</li>';

/* Crea due array che hanno un numero di elementi diversi.
Aggiungi elementi casuali all’array che ha meno elementi,
fino a quando ne avrà tanti quanti l’altro. */

var firstList = ['70', '71', '72', '73', '74', '75', '76'];
console.log(firstList);

var secondList = ['80', '81', '82', '83', '84', '85', '86', '87', '88', '89'];
console.log(secondList);

stampa = document.getElementById('snack-4-start');
stampa.innerHTML = '<li> Le tue liste iniziali erano: </li>'
    + '<li>' + firstList + '</li>' + '<li>' + secondList + '</li>';

var lenght1 = firstList.length;
console.log(lenght1);

var lenght2 = secondList.length;
console.log(secondList);

while (lenght1 !== lenght2) {
    var rand = Math.floor(Math.random() * 100) + 1;

    if (lenght1 < lenght2) {
        firstList.push(rand);

    } else {
        secondList.push(rand);
    }

    lenght1 = firstList.length;
    console.log();

    lenght2 = secondList.length;
    console.log(secondList);
    /*     console.log('Fine while' + firstList); */
}


console.log(firstList);
stampa = document.getElementById('snack-4-end');
stampa.innerHTML = '<li> Le tue liste di adesso hanno un numero uguale di elementi, e sono rispettivamente: </li>'
    + '<li>' + firstList + '</li>' + '<li>' + secondList + '</li>';


console.log(secondList);