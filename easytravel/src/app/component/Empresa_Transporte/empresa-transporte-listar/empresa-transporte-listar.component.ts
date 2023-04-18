import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Empresa_Transporte } from 'src/app/model/Empresa_Transporte';
import { EmpresaTransporteService } from 'src/app/service/empresa-transporte.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-empresa-transporte-listar',
  templateUrl: './empresa-transporte-listar.component.html',
  styleUrls: ['./empresa-transporte-listar.component.css']
})
export class EmpresaTransporteListarComponent implements OnInit{
  dataSource:MatTableDataSource<Empresa_Transporte>= new MatTableDataSource();
  displayedColumns:string[]=['codigo','nombre','ruc','direccion','contacto']
  constructor(private eT:EmpresaTransporteService ){
}

ngOnInit(): void {
this.eT.list().subscribe(data=>{
this.dataSource= new MatTableDataSource(data);
})

}
}
