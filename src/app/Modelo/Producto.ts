import { Categoria } from 'src/app/Modelo/Categoria';
import { Marca } from './Marca';
import { Presentacion } from './Presentacion';

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
    estado:Boolean;
    categoriaID: Categoria;
    marcaID:Marca;
   presentacionID: Presentacion;
}    