// creo un array vuoto
// creo un ciclo che chieda un numero con uñ prompt  6 volte
// trasformo da string a number
// verifico che sia uñ numero se non è un numero richiedo il numero
// controllo se il numero è dispari se il numero è dispari inserisilo nell array
// stampa in console i numeri risultanti


const numdisp = ["33"]
for (let i = 0 ; i < 6 ; i++) {
    let number = +(prompt("inserisci uñ numero"));
    console.log (number)
    console.log (i)
    
    if (number = NaN){
        --i
    }


}