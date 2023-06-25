import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UsuarioNotificacionDTO } from 'src/app/model/UsuarioNotificacionDTO';
import { NotificacionService } from 'src/app/service/notificacion.service';

@Component({
  selector: 'app-notificacion-usuarios',
  templateUrl: './notificacion-usuarios.component.html',
  styleUrls: ['./notificacion-usuarios.component.css']
})
export class NotificacionUsuariosComponent implements OnInit {
  notificaiconCounts: UsuarioNotificacionDTO[] = [];
  dataSource: MatTableDataSource<UsuarioNotificacionDTO> = new MatTableDataSource();

  displayedColumns: string[] = ['usuario','cantidad']

  constructor(private nS: NotificacionService) { }

  ngOnInit(): void {
    this.nS.getNotificacionCountByUser().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
  }

  getNotificacionCountByUser(): void {
    this.nS.getNotificacionCountByUser()
    .subscribe((data: UsuarioNotificacionDTO[]) =>{
      this.notificaiconCounts = data;
    })
  }
}
