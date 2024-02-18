/*

Desarrollar una función getRandomSubarray en TypeScript que extraiga un subarreglo completamente aleatorio 
de un arreglo dado. El subarreglo aleatorio debe tener una longitud especificada y estar compuesto por elementos 
seleccionados al azar del arreglo original.
Tu tarea es crear una función que implemente este proceso de manera eficiente y precisa, asegurando que el subarreglo 
generado sea una muestra representativa y aleatoria del arreglo original

*/

const getRandomSubarray = (lista : any[], largo : number) : any[] => {
    if (largo > lista.length) {
        throw new Error("The requested length is greater than the length of the array.");
    }
    let randomSub : any[] = [];
    while(largo > 0){
        let posRandom : number = Math.floor(Math.random() * (lista.length - 1));
        randomSub.push(lista[posRandom]);
        lista.splice(posRandom,1);
        largo--;
    }
    return randomSub;
}

const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const randomSubarray = getRandomSubarray(originalArray, 4);
console.log("Subarreglo Aleatorio:", randomSubarray)