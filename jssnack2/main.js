// --chiedo la prima parola all'utente con un promt
// --chiedo la seconda parola all'utente con un promt

// se la prima parola e piu lunga della seconda allora stampo prima la prima parola poi al seconda 
// altrimenti stampo prima la seconda poi la prima


const firstWord = prompt("inserisci la prima parola");//chiedo la prima parola
const secondWord = prompt("inserisci la seconda parola");//chiedo la seconda parola

if (firstWord.length>secondWord.length){
    console.log (`${secondWord} ${firstWord}`)
}else{
    console.log (`${firstWord} ${secondWord}`)
}