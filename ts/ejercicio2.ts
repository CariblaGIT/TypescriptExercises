/*

Funcion getRoleFromRoleName que reciba como parametro el nombre de un rol como string y devuelva el objeto rol correspondiente
desde un conjunto predefinido de roles

*/

interface Role {
    id: number;
    name: string;
};

const UserRoles: {[key: string] : Role} = {
    ADMIN: {id: 1, name: "admin"},
    MANAGER: {id: 2, name: "manager"},
    USER: {id: 3, name: "user"}
}

const GetRoleFromRoleName = (nombre: string) : Role | undefined => {
    
    const roles = Object.keys(UserRoles);
    let res : Role | undefined;
    roles.forEach((key) => {
        if(UserRoles[key].name === nombre){
            res = UserRoles[key];
        }
    })
    return res;
}

console.log(GetRoleFromRoleName("asdfgh"));

// Object.entries(UserRoles).map(
//     ([clave, valor], i) => {
//         console.log(valor)
//     }
// )