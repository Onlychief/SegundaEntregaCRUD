
import { UsuariosModel } from './models/user.ts';
import {UsuarioController} from './controllers/usuario.ts'

const usuariosModel = new UsuariosModel();
const usuarioController = new UsuarioController();

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
            await usuarioController.create();
            break;
        }
        case "2": {
            const usuarios = await usuariosModel.listar();
            console.log(usuarios);
            const opcion = parseInt(prompt("opcion: ") as string)
            console.log("Asigna nuevos valores al usuario");
            await usuarioController.actualizar(opcion)
            break;
        }
        case "3": {
            await usuarioController.listar()
            break;
        }
        case "4": {
            const usuarios = await usuariosModel.listar();
            console.log(usuarios);
            const opcion = parseInt(prompt("opcion: ") as string);
            await usuarioController.eliminar(opcion)
        
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

