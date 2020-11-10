import { Categoria } from 'src/app/Modelo/Categoria';
import { Marca } from './Marca';
export class Producto{
    id_producto:number;
    codigoBarra:number;
    fechaBaja:Date;
 
    presentacion:String;
    productoDescripcion:String;
    productoInformacion: String;
    nombre: String;
    stockActual: number;
    stockMinimo: number;
    marca:Marca;
    categoriId: Categoria;
    estado:Boolean;
}