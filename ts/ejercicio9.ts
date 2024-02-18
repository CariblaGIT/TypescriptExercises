/*

Desarrollar una función en TypeScript utilizando arrow function que reciba un arreglo como entrada y devuelva un 
valor aleatorio del arreglo. La función deberá calcular un índice aleatorio utilizando la función Math.random() y
el tamaño del arreglo proporcionado. Una vez calculado el índice aleatorio, se utilizará para extraer un elemento 
aleatorio del arreglo.
Tu tarea es crear una función que realice este proceso de manera eficiente y precisa, asegurando que el valor extraído 
sea uno de los elementos del arreglo.

*/

const getRandomValueFromArray = (lista : any[]) : any => {
    return lista[Math.floor(Math.random() * (lista.length - 1))];
}

const authors = ["John Doe", "Jane Smith", "Alice Johnson", "Bob Brown"];
const randomAuthor = getRandomValueFromArray(authors);
console.log("Autor Aleatorio:", randomAuthor);