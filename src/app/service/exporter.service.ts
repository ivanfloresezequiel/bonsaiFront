import { Injectable } from '@angular/core';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

const EXCEL_TYPE= 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8'
const EXCEL_EXT='.xlsx';

@Injectable( {providedIn: 'root'})
export class ExporterService {

  constructor() { }


  exportarExcel(json:any[], nombreArchivoExcel: String):void{
      const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
      const workbook: XLSX.WorkBook = {Sheets:{'data':worksheet},
    SheetNames:['data']};
    const excelBuffer: any = XLSX.write(workbook, {bookType:'xlsx', type:'array'});
    this.GuardarExcel(excelBuffer, nombreArchivoExcel);
  }
  private GuardarExcel(buffer:any, fileName: String):void{
    const data: Blob = new Blob([buffer], {type:EXCEL_TYPE});
    FileSaver.saveAs(data, fileName+ '_export_' + new Date().getTime() + EXCEL_EXT);
  }
}
