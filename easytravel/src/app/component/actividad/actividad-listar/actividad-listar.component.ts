import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Actividad } from 'src/app/model/actividad';
import { ActividadService } from 'src/app/service/actividad.service';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-actividad-listar',
  templateUrl: './actividad-listar.component.html',
  styleUrls: ['./actividad-listar.component.css']
})
export class ActividadListarComponent implements OnInit {
  role:string="";
  lista: Actividad[] = [];
  dataSource: MatTableDataSource<Actividad> = new MatTableDataSource();
  displayedColumns: string[] = ['idActividad', 'nombre', 'categoria', 'descripcion', 'duracion', 'paquete'];

  constructor(private aS: ActividadService,private ls:LoginService) {

  }

  ngOnInit(): void {
    this.role=this.ls.showRole();
    this.aS.list().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
    this.aS.getList().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
  }
}
