/*

El objetivo es usar arrays en TypeScript para representar un mazo de cartas.
Instrucciones:
● 1. Crea un nuevo archivo TypeScript.
● 2. Crea un array que represente un mazo de cartas.
● 3. El array debe tener 48 cartas, cada una con un palo y un valor.
● 4. Crea una función que baraja el mazo.
● 5. Crea una función que reparte una carta del mazo.
● 6. Prueba las funciones.

*/

let mazo : [Number, string][] = [[1, "OROS"], [2, "OROS"], [3, "OROS"], [4, "OROS"], [5, "OROS"],[6, "OROS"],[7, "OROS"],[8, "OROS"],[9, "OROS"],[10, "OROS"],[11, "OROS"],[12, "OROS"],[1, "COPAS"],[2, "COPAS"],[3, "COPAS"],[4, "COPAS"],[5, "COPAS"],[6, "COPAS"],[7, "COPAS"],[8, "COPAS"],[9, "COPAS"],[10, "COPAS"],[11, "COPAS"],[12, "COPAS"],[1, "BASTOS"],[2, "BASTOS"],[3, "BASTOS"],[4, "BASTOS"],[5, "BASTOS"],[6, "BASTOS"],[7, "BASTOS"],[8, "BASTOS"],[9, "BASTOS"],[10, "BASTOS"],[11, "BASTOS"],[12, "BASTOS"],[1, "ESPADAS"],[2, "ESPADAS"],[3, "ESPADAS"],[4, "ESPADAS"],[5, "ESPADAS"],[6, "ESPADAS"],[7, "ESPADAS"],[8, "ESPADAS"],[9, "ESPADAS"],[10, "ESPADAS"],[11, "ESPADAS"],[12, "ESPADAS"]];

const barajarMazo = (mazo : [Number, string][]) : [Number, string][] => {
    let mazoBarajado : [Number, string][] = [];
    while(mazo.length > 0){
        let posRandom : number = Math.floor(Math.random() * (mazo.length - 1));
        mazoBarajado.push(mazo[posRandom]);
        mazo.splice(posRandom,1);
    }
    return mazoBarajado;
}

const repartirCarta = (mazo : [Number, string][]) : [Number, string] => {
    return mazo[0]
}

let nuevaBarajada = barajarMazo(mazo)
console.log(repartirCarta(nuevaBarajada))