import { client } from "./config/mariadb.ts";
import { dataUser } from "./DataUtils.ts";
import { UsuariosModel } from './models/user.ts';

const usuariosModel = new UsuariosModel();

function menu(): string {

    console.log("MENU");
    console.log("1. crear usuario");
    console.log("2. actualizar usuario");
    console.log("3. listar usuarios");
    console.log("4. borrar usuario");
    console.log("5. salir");

    return prompt("opcion: ") as string;
}
let salir = false;
//Bucle principal
while (!salir) {
    const opcion = menu();

    switch (opcion) {
        case "1": {
            const user = dataUser();
            await usuariosModel.crear({
                nombre: user.getNombre(),
                apellido: user.getApellido(),
                celular: user.getCelular(),
                correo: user.getCorreo(),
                contrasenia: user.getPassword(),
            }
            )
            const usuarios = await usuariosModel.listar();
            console.log(usuarios);
            
            break;
        }
        case "2": {
            const usuarios = await usuariosModel.listar();
            console.log(usuarios);
            const opcion = parseInt(prompt("opcion: ") as string)
            console.log("Asigna nuevos valores al usuario");
            const user2 = dataUser();
            const update = await usuariosModel.actualizar({
            nombre:user2.getNombre(), 
            apellido:user2.getApellido(),
            celular:user2.getCelular(),
            correo:user2.getCorreo(),
            contrasenia:user2.getPassword()},
            opcion);
            console.log(update);
            console.log(usuarios)
            break;
        }
        case "3": {
            const usuarios = await usuariosModel.listar();
            console.log(usuarios);
            break;
        }
        case "4": {
            const usuarios = await usuariosModel.listar();
            console.log(usuarios);
            const opcion = parseInt(prompt("opcion: ") as string);
            const deleteRegister = await usuariosModel.eliminar(opcion);
            console.log(deleteRegister)
            const usuarios2 = await usuariosModel.listar();
            console.log(usuarios2)
            break;
        }
        case "5": {
            salir = true;
            console.log("powered by MK(^o^)");
            break;
        }
        default: {
            console.log("La opcion no existe, vuelva a elegir");
            break;
        }
    }
}

