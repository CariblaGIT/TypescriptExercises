/*

Escribe una función llamada validarCorreoElectrónico que tome una cadena como argumento y
verifique si es una dirección de correo electrónico válida según el siguiente patrón:
● Debe comenzar con una cadena que no contenga espacios ni símbolos especiales.
● Debe contener un símbolo '@' seguido de una cadena que no contenga espacios ni símbolos
especiales.
● Después del símbolo '@', debe contener un punto '.' seguido de una cadena que no contenga
espacios ni símbolos especiales.
● La función debe devolver true si la cadena cumple con el patrón de una dirección de correo
electrónico válida y false en caso contrario.

*/

const validarCorreoElectronico = (correo : string) : boolean => {
    if(correo.indexOf("@") != -1 && correo.indexOf(".") != -1){
        let previous : string = correo.slice(0, correo.indexOf("@"));
        let middle : string = correo.slice(correo.indexOf("@")+1, correo.indexOf("."));
        let end : string = correo.slice(correo.indexOf(".")+1, correo.length);
        let regexp : RegExp = /[A-Za-z]/
        return (regexp.test(previous) && regexp.test(middle) && regexp.test(end)) ? true : false
    } else {
        return false;
    }
}

console.log(validarCorreoElectronico("asdfghj@asdfgh.asdfg"));
console.log(validarCorreoElectronico("asdfghjasdfgh.asdfg"));
console.log(validarCorreoElectronico("asdfghj@asdfghasdfg"));
console.log(validarCorreoElectronico("asdfghjasdfghasdfg"));
console.log(validarCorreoElectronico("12345@gmail.com"));
