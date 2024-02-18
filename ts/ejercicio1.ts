/*

Desarrollar una función en TypeScript llamada getRandomSlice que recupere un segmento aleatorio de un arreglo dado con 
una longitud especificada. La función debe aceptar dos parámetros: un arreglo de cualquier tipo y un valor numérico que 
represente la longitud deseada del segmento aleatorio.
Si la longitud solicitada excede la longitud del arreglo, la función deberá lanzar un error indicando que la longitud
solicitada es mayor que la longitud del arreglo.
La función getRandomSlice debe devolver un segmento aleatorio del arreglo de entrada con la longitud especificada. Para 
lograr esto, generará un índice de inicio aleatorio dentro del rango del arreglo. Luego, extraerá
un segmento del arreglo comenzando desde el índice generado aleatoriamente y extendiéndose hasta el índice más la longitud 
especificada.

*/

interface getRandomSliceProps {
    array: any[]
    long: number
}

const getRandomSlice = ({array, long}:getRandomSliceProps):any[] => {


    if(array.length < long){
        throw new Error("La longitud proporcionada supera la del array")
    }

    let aleatorio:number = Math.floor(Math.random() * (array.length - long))

    console.log(aleatorio)
    let segmento:number[] = miArreglo.slice(aleatorio, aleatorio + long)

    
    return segmento
}

let miArreglo: any[] = [7,10,2,45,6,22,4,9,98]

console.log(getRandomSlice({array: miArreglo, long: 4}))