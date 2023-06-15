import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Notificacion } from 'src/app/model/notificacion';
import { NotificacionService } from 'src/app/service/notificacion.service';
import { NotificacionDialogoComponent } from './notificacion-dialogo/notificacion-dialogo.component';

@Component({
  selector: 'app-notificacion-listar',
  templateUrl: './notificacion-listar.component.html',
  styleUrls: ['./notificacion-listar.component.css']
})
export class NotificacionListarComponent implements OnInit {
  idMayor: number = 0
  lista: Notificacion[] = []
  dataSource:MatTableDataSource<Notificacion>= new MatTableDataSource();
  displayedColumns:string[]=['idNotificacion','intereses','paquete', 'mensaje',"accion01","accion02"]
  count:number=0

  constructor(private nS:NotificacionService,private dialog:MatDialog)
  {
    
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;


  ngOnInit(): void {
      this.nS.list().subscribe(data=>{
        this.dataSource=new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.lista=data;
        this.count=this.lista.length;
      })

      this.nS.getList().subscribe(data=>{this.dataSource=new MatTableDataSource(data);})
      this.nS.getConfirmDelete().subscribe(data => {
        data == true ? this.eliminar(this.idMayor) : false;
      })
  }
  confirm(id: number) {
    this.idMayor = id;
    this.dialog.open(NotificacionDialogoComponent);
  }
  eliminar(id: number) {
    this.nS.delete(id).subscribe(() => {
      this.nS.list().subscribe(data => {
        this.nS.setList(data);
      })
    })
  }

  filtrar(z:any){

    this.dataSource.filter=z.target.value.trim();
    }
}
