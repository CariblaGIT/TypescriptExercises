/*

Escribe una función llamada sumarMatrices que tome dos matrices como argumentos y
devuelva una nueva matriz que sea el resultado de la suma de las dos matrices de entrada.
Asegúrate de manejar correctamente los casos en los que las matrices no tengan las mismas
dimensiones para poder realizar la operación de suma. Las matrices se representan como
arrays bidimensionales de números.

*/

const sumarMatrices = (matrizA : number[][], matrizB : number[][]) : number[][] => {
    let resSum : number[][] = [];
    for(let i = 0; i < matrizA.length; i++){
        let rowMatriz : number[] = [];
        for(let j = 0; j < matrizA[i].length; j++){
            rowMatriz.push(matrizA[i][j] + matrizB[i][j]);
        }
        resSum.push(rowMatriz);
    }
    return resSum;
}

console.log(sumarMatrices([[1, 2],[3, 4]], [[2,1],[4,3]]));