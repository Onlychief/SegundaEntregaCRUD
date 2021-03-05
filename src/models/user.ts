import { client } from "../config/mariadb.ts";
import {UsuarioDTO} from "../dto/usuarios.ts";

export class UsuariosModel {
    async listar() {
        const showAll = await client.execute('select * from datosuser');

        return showAll.rows;
    }

    async crear(usuario:UsuarioDTO){
        await client.execute(`insert into datosuser(nombre,apellido,celular,correo,contrasenia)
        values(?,?,?,?,?)`,[
            usuario.nombre,
            usuario.apellido,
            usuario.celular,
            usuario.correo,
            usuario.contrasenia
        ])
    }
    async actualizar(usuario:UsuarioDTO,id:number){
        await client.execute(`update datosuser set nombre=?,apellido=?,celular=?,correo=?,contrasenia=? WHERE id=?`,[
            usuario.nombre,
            usuario.apellido,
            usuario.celular,
            usuario.correo,
            usuario.contrasenia,
            id])            
}
async deletear(id:number){
    await client.execute(`delete from datosuser WHERE id=?`,[id])
}
}