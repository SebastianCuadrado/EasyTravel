import { Component, ViewChild } from '@angular/core';
import { Paquete } from 'src/app/model/paquete';
import { MatTableDataSource } from '@angular/material/table';
import { PaqueteService } from 'src/app/service/paquete.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { PaqueteDialogoComponent } from './paquete-dialogo/paquete-dialogo.component';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-paquete-listar',
  templateUrl: './paquete-listar.component.html',
  styleUrls: ['./paquete-listar.component.css']
})
export class PaqueteListarComponent {
  lista: Paquete[] = [];
  role:string=""
  idMayor: number = 0;
  dataSource: Paquete[]=[]
  displayedColumns: string[] = ['idPaquete', 'nombre','precio', 'place', 'viaje', 'ahorro', 'tipoHabitacion', 'cantidadNoches', 'hotel', 'checkin', 'checkout', 'accionEditar', 'accionEliminar', 'accionReserva'];

  constructor(private pS: PaqueteService, private dialog: MatDialog,private ls:LoginService) {

  }

  @ViewChild(MatPaginator)paginator!:MatPaginator;
  ngOnInit(): void {
    this.role=this.ls.showRole();
    this.pS.list().subscribe(data => {
      //this.dataSource = new MatTableDataSource(data);
      this.dataSource = data;
      this.lista = data;
      //this.dataSource.paginator=this.paginator;
    })
    this.pS.getList().subscribe(data => {
     // this.dataSource = new MatTableDataSource(data);
     this.dataSource = data;
     // this.dataSource.paginator=this.paginator
    })
  }
  confirm(id: number) {
    this.idMayor = id;
    this.dialog.open(PaqueteDialogoComponent);
  }
  eliminar(id: number) {
    this.pS.delete(id).subscribe(() => {
      this.pS.list().subscribe(data => {
        this.pS.setList(data);
      });
    });
  }
  filter(e: any) {
    this.dataSource.filter = e.target.value.trim();
  }
}
