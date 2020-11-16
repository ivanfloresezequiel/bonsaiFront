import { Banco } from './Banco';
import { Proveedor } from './proveedor';


export class CuentaBancaria{
    id_cuentaBancaria:number;
    cbu:string;
    tipoCuenta: string;
    estado:boolean;
    bancoID:Banco;
    proveedorID:Proveedor;
    
}