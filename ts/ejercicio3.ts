/*

Escribe una función llamada validarContraseña que tome una cadena como argumento y verifique si
cumple con los siguientes criterios para ser considerada una contraseña segura:
● Debe tener al menos 8 caracteres.
● Debe contener al menos una letra mayúscula.
● Debe contener al menos una letra minúscula.
● Debe contener al menos un número.
● Debe contener al menos un carácter especial de la siguiente lista: @$!%*?&.
La función debe devolver true si la contraseña cumple con todos los criterios y false en caso contrario.

*/

const validarContraseña = (contraseña : string) : boolean => {
    const regexp : RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;
    return (contraseña.match(regexp) !== null && contraseña.length >= 8);
}

console.log(validarContraseña("ASzx27$@95ptVK"));
console.log(validarContraseña("asdfg"));
console.log(validarContraseña("PAPAPAPAPAPA"));
console.log(validarContraseña("papapapapapa"));
console.log(validarContraseña("123456789"));