import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Empresa_Transporte } from 'src/app/model/Empresa_Transporte';
import { EmpresaTransporteService } from 'src/app/service/empresa-transporte.service';
import { MatTableDataSource } from '@angular/material/table';
import { EmpresaTransporteDialogoComponent } from './empresa-transporte-dialogo/empresa-transporte-dialogo.component';
import { MatDialog } from '@angular/material/dialog'
@Component({
  selector: 'app-empresa-transporte-listar',
  templateUrl: './empresa-transporte-listar.component.html',
  styleUrls: ['./empresa-transporte-listar.component.css'],
})
export class EmpresaTransporteListarComponent implements OnInit {
  dataSource: MatTableDataSource<Empresa_Transporte> = new MatTableDataSource();
  displayedColumns: string[] = [
    'codigo',
    'nombre',
    'ruc',
    'direccion',
    'contacto',
    'accion01',
    'accion02',
  ];
  idMayor: number = 0;
  lista: EmpresaTransporteService[] = []

  constructor(
    private tS: EmpresaTransporteService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.tS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    })
    this.tS.getList().subscribe(data=>{this.dataSource=new MatTableDataSource(data)})
    this.tS.getConfirmDelete().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    })




  }


  confirm(id: number) {
    this.idMayor = id;
    this.dialog.open(EmpresaTransporteDialogoComponent);
  }
  eliminar(id: number) {
    this.tS.delete(id).subscribe(() => {
      this.tS.list().subscribe(data => {
        this.tS.setList(data);
      })
    })
  }
  filtrar(z:any){

    this.dataSource.filter=z.target.value.trim();
    }
}
