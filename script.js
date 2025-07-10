/*
Consegna:
Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per?
Abbiamo visto qualcosa di particolare che possiamo usare?

Consigli del giorno:
scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano" */



//Per fare questa operazione iterativa devo impostare un ciclo for

//Quali sono i numeri divisibili per 5? Sono i numeri che se divido per 5, il resto è zero. Per farlo devo utilizzare un operatore resto %
//Quali sono i numeri divisibili per 3? Sono i numeri che se divido per 3, il resto è zero. Per farlo devo utilizzare un operatore resto %

//Imposterei un ciclo for per capire quali numeri sono divisibili per 5 e quali sono divisibili per 3 e quali lo sono per tutti e 3.
/* 
if i%5==0 allora il numero è divisibile per 5 quindi devo stampare Buzz
if i%3==0 allora il numero è divisibile per 3 quindi devo stampare Fizz
if (i%3==0 & i%5==0) il numero è divisibile sia per 3 che per 5 
Se non è divisibile per nessuno di questi allora stampa il numero  */

/* La mia idea: 

for (let i=1; i<=5; i++){
     
    if (i%3==0){
    console.log('Fizz')}
    else if (i%5==0){
    console.log('Buzz')}
    else if (i%3==0 & i%5==0){
    console.log('FizzBuzz')}
    else {
    console.log(i)}
}
*/

// Devo mettere la condizione più specifica prima, ovvero divisibiele sia per 3 che per 5

//Il mio codice:

for (let i=1; i<=100; i++){
     
    if (i%3==0 && i%5==0){
    console.log('FizzBuzz')}
    else if (i%3==0){
    console.log('Fizz')}
    else if (i%5==0){
    console.log('Buzz')}
    else {
    console.log(i)}
}