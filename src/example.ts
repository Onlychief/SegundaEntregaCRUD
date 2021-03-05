//let nombres=prompt("Ingresa tu nombre") as string;
//let edad=parseInt(prompt("Ingresa tu edad") as string);

//const EDAD_MIN_ADULTO=18;

//Leer un valor de un producto.. $20.000
//Mostrar por consola el precio final de venta incluido el iva:19%

let venta=parseInt(prompt("precio total producto") as string);

console.log((venta*0.19)+venta);
/*
se va registrar usuarios
guardar en memirira ram(array)
nombre- apellido > 3 charactere, celular(optional==10characteres), correo(requerido,formatoemail),
    constrasenia(8characteres, letra mayus, character especial)

//si todo esta bien se guarda el registor
*/

class User{
    nombre:string;
    apellido:string;
    celular:string;
    correo:string;
    contrasenia:string;

    constructor(nombre:string,apellido:string,celular:string,correo:string,contrasenia:string){
        this.nombre=nombre;
        this.apellido=apellido;
        this.celular=celular;
        this.correo=correo;
        this.contrasenia=contrasenia;
    }
}
function validThreeChar(cad:string,tipo:string):boolean{
    if(cad.length<3){
        console.log("El "+tipo+" no puede tener menos de 3 caracteres");
        return false;
    }
    return true;
}
function validCel(cad:string):boolean{
    if(cad.length!=10){
        console.log("El celular debe tener 10 caracteres");
        return false;
    }
    return true;
}
function valEmail(cad:string):boolean{
    let valid:boolean;

    let regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

    valid= regexp.test(cad);
    if(!valid){
        console.log("El email no es valido");
        return false;
    }
    return true;
}
function validPassword(cad:string):boolean{
    if(cad.length!=8){
        console.log("debe tener 8 digitos");
        return false;
    }else{

    }

}