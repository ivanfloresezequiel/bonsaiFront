import { Categoria } from 'src/app/Modelo/Categoria';
export class Producto{
    id_producto:number;
    codigoBarra:number;
    fechaBaja:Date;
    fechaLimiteVencimiento:Date;
    presentacion:String;
    productoDescripcion:String;
    productoInformacion: String;
    nombre: String;
    stockActual: number;
    stockMinimo: number;
    fechaVencimiento:Date;
    categoriId: Categoria;
}