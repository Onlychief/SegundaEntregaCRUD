import {UsuariosModel} from '../models/user.ts'
import {UsuarioDTO} from '../dto/usuarios.ts'
import { dataUser } from "../DataUtils.ts";
import {Context} from 'https://deno.land/x/oak/mod.ts'


const usuariosModel =  new UsuariosModel()

export class UsuarioController{

 async listar(){
    const usuarios = await usuariosModel.listar();
    console.log(usuarios)
    //context.response.body =usuarios
}
async create(){

    const user = dataUser();
    await usuariosModel.crear({
        nombre: user.getNombre(),
        apellido: user.getApellido(),
        celular: user.getCelular(),
        correo: user.getCorreo(),
        contrasenia: user.getPassword(),
})
}
async actualizar(id:number){
    const user2 = dataUser();
            const update = await usuariosModel.actualizar({
            nombre:user2.getNombre(), 
            apellido:user2.getApellido(),
            celular:user2.getCelular(),
            correo:user2.getCorreo(),
            contrasenia:user2.getPassword()},
            id)
}
async eliminar(id:number){
    const deleteRegister = await usuariosModel.deletear(id);
    
}
}