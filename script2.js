'use strict';

let imaVozackuDozvolu = false;
const prosaoVozackiIspit = true;

if(prosaoVozackiIspit) imaVozackuDozvolu = true;

/* when using strict your console will log  the use of "interface" 
and "private" as reserved words that cannot be used as variable names */

/* const interface = 'Audio';
const private = 534; */

//variable types can changed be after initial declaration
let ligma = 'fortnite'
console.log(ligma);

ligma = 69;
console.log(ligma);

/* napisi funkciju opisZemlje sa 3 parametra : zemlja, populacija i glavniGrad
Bazirano na inputu funckije treba vratiti string u ovom formatu: Zagreb ima 1.5M stanovnika
i glavni je grad Hrvatske
Pozovi ovu funkciju 3 PublicKeyCredential, sa podacima 3ju različitih zemalja.
Spremi return value u 3 razlicite varijable i logaj u konzolu

Hrvatska, 3.8e+6, Zagreb
Slovenija, 2e+6,Ljubljana
BIH, 3.4e+6, Sarajevo
*/

//profesor
/* function opisZemlje(zemlja,populacija,glavniGrad){
    return console.log(`${glavniGrad} ima ${populacija} stanovnika i glavni je grad ${zemlja} \n`);
}
const hrvatska = opisZemlje('Hrvatske',3.8e+6,'Zagreb');

const slovenija = opisZemlje('Slovenija',2e+6,'Ljubljana');

const bih = opisZemlje('Bosne i Herzegovine',3.4e+6,'Sarajevo'); */

/* 1000 lovaca u Hrvatskoj. Koji je postotak tih lovaca iz Središnje Hrvatske,
iz SMŽ i Dalmacije */

/* broj1 = 300
broj2 = 100
broj3 = 150 */

/* function(broj_lovaca){
    return(broj_lovaca/1000) *100;
}

const broj_lovaca1 = postotak(300);
const broj_lovaca2 = postotak(100);
const broj_lovaca3 = postotak(150);

*/
/* console.log(broj_lovaca1,broj_lovaca2,broj_lovaca3); */

/* //brže pisanje funkcija
const IgorRodjen = function(godinaRodjenja){
    return (2022 - godinaRodjenja);
}
//arrow fucntion
const IgorRodjen = godinaRodjenja => 2022-godinaRodjenja; */

/* const godinaRodjenja1 = IgorRodjen(1983);
console.log(godinaRodjenja1); */

/* const godinaDoMirovina = (godinaRodjenja2, imePrezime) => {
    const godine = 2022 - godinaRodjenja2;
    const mirovina = 65 - godine;
    return `${imePrezime} ce se umiroviti za ${mirovina} godina`;
}

console.log(godinaDoMirovina(1983,'Igor')); */

//functions inside of functions
/* function komadiHrane(voce){
    return voce * 4;
}

function nutriBullet(jabuke,narance){
    const komadiJabuke = komadiHrane(jabuke);
    const komadiNarance = komadiHrane(narance);
    const sok = `Sok od ${jabuke} jabuka i  ${narance} naranči`;
    return sok;
}

const sok = nutriBullet(5,0);
console.log(sok); */

/* Na svijetu imamo 10,000 profesionalnih igraca stolong tenisa
Hrvatska = 10, Kina = 4300, USA = 330
Izracunaj postotak tih igraca u odnosu na sve profi igrace i onda ih ispisite
ispis tako to definirate dve funkcije, prva koja ce racunati postotak i drugu u koju
cemo ubaciti taj postotak i koja ce imati 2 parametra - zemlja i populacija. 
nakon toga ispisite sve 3 vrijednosti pomocu:  */

/* `${zemlja} ima ${populacija} igraca sto je oko ${postotak} svijeta` */

let igraciCro = 10;
let igraciKina = 4300;
let igraciUSA = 330;

function percentageWorld(players){
    return (players/10000)*100;
}

const opisZemlje = function(zemlja,populacija){
    const postotak = percentageWorld(populacija);
    console.log(`${zemlja} ima ${populacija} igraca sto je oko ${postotak}% svijeta`);
}

opisZemlje('Hrvatska',igraciCro);
opisZemlje('Kina',igraciKina);
opisZemlje('Amerika',igraciUSA);