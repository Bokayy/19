/* const godine = 23;
//conditional operator || kondicionalni operator
godine >=18 ? console.log('možeš pit') : console.log('nemoš pit');
console.log(punoljetan);

//ista stvar napisana u if else
let punoljetan2
if(godine>=18){
    punoljetan2 = 'mos pit';
}else{
    punoljetan2 = 'nemos pit';
}
console.log(punoljetan2);

console.log(`mogu li piti ${godine >= 18 ? 'mos pit' : 'nemos pit'}`); */

/* Joža radi na jednostavnom kalkulatoru za napojnice.
U njegovoj zemlji je uobičajeno dati 15% za napojnicu.
Ako je račun je račun između 50 i 300$.
Ako je vrijednost manja ili veća, napojnica je 20%
Izračunaj napojnicu ovisno o veličini računa. Napravite varijablu za tu potrebu.
Nije dozvoljen if else, već moraš napisati pomoću kondicionalnog operatora.
Ispiši string u konzolu sa iznosom računa i finalnim izračunom (račun + napojnica)
primjer: racun = 275 */

let napojnica;
const racun = 275;

function napojnica1(x){
    return 0.15 * x
}
function napojnica2(x){
    return 0.2 * x
}

racun >=50 && racun<=300 ? napojnica = (napojnica = napojnica1(racun)) : (napojnica = napojnica2(racun));
console.log(napojnica);

//profesorovo rjesenje:
// napojnica = racun >=50 && racun<=300 ? `racun je ${racun}, napojnica je ${racun *0.15}`;
//nisam do kraja prepisao 

const napojnica = (racun <= 300 && racun >= 50) ? racun *0.15 : racun *0.2;
console.log(`racun ${racun},napojnica je ${napojnica}, a ukupna vrijednost je ${racun + napojnica}`);




