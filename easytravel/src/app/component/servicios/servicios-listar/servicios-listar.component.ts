import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Servicios } from 'src/app/model/servicios';
import { ServiciosService } from 'src/app/service/servicios.service';
import { ServiciosDialogoComponent } from './servicios-dialogo/servicios-dialogo.component';

@Component({
  selector: 'app-servicios-listar',
  templateUrl: './servicios-listar.component.html',
  styleUrls: ['./servicios-listar.component.css']
})
export class ServiciosListarComponent implements OnInit{
  idMayor: number = 0
  lista: Servicios[] = []
  dataSource:MatTableDataSource<Servicios>= new MatTableDataSource();
  displayedColumns:string[]=['codigo','nombre','descripcion','hotel',"accion01","accion02"]
  count:number=0

  constructor(private sS:ServiciosService,private dialog:MatDialog)
  {

  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;


  ngOnInit(): void {
      this.sS.list().subscribe(data=>{
        this.dataSource=new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.lista=data;
        this.count=this.lista.length;
      })

      this.sS.getList().subscribe(data=>{this.dataSource=new MatTableDataSource(data);})
      this.sS.getConfirmDelete().subscribe(data => {
        data == true ? this.eliminar(this.idMayor) : false;
      })
  }
  confirm(id: number) {
    this.idMayor = id;
    this.dialog.open(ServiciosDialogoComponent);
  }
  eliminar(id: number) {
    this.sS.delete(id).subscribe(() => {
      this.sS.list().subscribe(data => {
        this.sS.setList(data);
      })
    })
  }

  filtrar(z:any){

    this.dataSource.filter=z.target.value.trim();
    }
}
