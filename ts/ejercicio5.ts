/*

Escribe una función llamada generarContraseña que tome un parámetro longitud de tipo
number y devuelva una cadena aleatoria de esa longitud que cumpla con los siguientes
requisitos:
● Debe contener una combinación de letras mayúsculas y minúsculas.
● Debe contener al menos un número.
● Debe contener al menos un carácter especial de la siguiente lista: !@#$%^&*.

*/

const verificarContraseña = (contraseña : string) : boolean => {
    const regexp : RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]+$/;
    return (regexp.test(contraseña));
}

const generarContraseña = (longitud : number) : string => {
    const randomCharacters: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
    let newPass : string = "";
    for(let i = 0; i < longitud; i++){
        newPass += randomCharacters.charAt(Math.floor(Math.random() * randomCharacters.length));
    }
    if(verificarContraseña(newPass) == false){
        generarContraseña(longitud);
    }
    return newPass;
}

console.log(generarContraseña(16))