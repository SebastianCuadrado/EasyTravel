import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Intereses } from 'src/app/model/intereses';
import { InteresesService } from 'src/app/service/intereses.service';
import { InteresesDialogoComponent } from './intereses-dialogo/intereses-dialogo.component';

@Component({
  selector: 'app-intereses-listar',
  templateUrl: './intereses-listar.component.html',
  styleUrls: ['./intereses-listar.component.css']
})
export class InteresesListarComponent implements OnInit {
  idMayor: number = 0
  lista: Intereses[] = []
  dataSource:MatTableDataSource<Intereses>= new MatTableDataSource();
  displayedColumns:string[]=['idInteres','nombre','usuarios',"accion01","accion02"]
  count:number=0

  constructor(private iS:InteresesService,private dialog:MatDialog)
  {

  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;


  ngOnInit(): void {
      this.iS.list().subscribe(data=>{
        this.dataSource=new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.lista=data;
        this.count=this.lista.length;
      })

      this.iS.getList().subscribe(data=>{this.dataSource=new MatTableDataSource(data);})
      this.iS.getConfirmDelete().subscribe(data => {
        data == true ? this.eliminar(this.idMayor) : false;
      })
  }
  confirm(id: number) {
    this.idMayor = id;
    this.dialog.open(InteresesDialogoComponent);
  }
  eliminar(id: number) {
    this.iS.delete(id).subscribe(() => {
      this.iS.list().subscribe(data => {
        this.iS.setList(data);
      })
    })
  }

  filtrar(z:any){

    this.dataSource.filter=z.target.value.trim();
    }
}
