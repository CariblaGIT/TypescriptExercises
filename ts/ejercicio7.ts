/*

Escribe una función llamada cifradoCesar que tome dos parámetros: una cadena de texto y un número que represente 
el desplazamiento del cifrado César. La función debe cifrar la cadena de texto utilizando el cifrado César con el 
desplazamiento especificado y devolver la cadena cifrada. El cifrado César consiste en desplazar cada letra en el 
alfabeto un número fijo de posiciones hacia la derecha. Si la letra alcanza el final del alfabeto, continúa desde 
el principio. Los números y otros caracteres no deben ser cifrados.

*/

const cifradoCesar = (texto: string, desplazamiento: number): string => {
    const charactersUpper: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const charactersLower: string = 'abcdefghijklmnopqrstuvwxyz';
    let newText: string = "";
    let sliced: string[] = texto.split('');
    for (let i = 0; i < sliced.length; i++) {
        if(/[A-Z]/.test(sliced[i])){
            let pos : number = (charactersUpper.indexOf(sliced[i]) + desplazamiento) % charactersUpper.length;
            newText += charactersUpper[pos];
        } else if (/[a-z]/.test(sliced[i])){
            let pos : number = (charactersLower.indexOf(sliced[i]) + desplazamiento) % charactersLower.length;
            newText += charactersLower[pos];
        } else {
            newText += sliced[i];
        }
    }
    return newText;
}

console.log(cifradoCesar("Hello, World!", 3)); // Outputs: Khoor, Zruog!
