import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Actividad } from 'src/app/model/actividad';
import { ActividadService } from 'src/app/service/actividad.service';

@Component({
  selector: 'app-actividad-listar',
  templateUrl: './actividad-listar.component.html',
  styleUrls: ['./actividad-listar.component.css']
})
export class ActividadListarComponent implements OnInit {
  lista: Actividad[] = [];
  dataSource: MatTableDataSource<Actividad> = new MatTableDataSource();
  displayedColumns: string[] = ['idActividad', 'nombre', 'categoria', 'descripcion', 'duracion', 'paquete'];

  constructor(private aS: ActividadService) {

  }

  ngOnInit(): void {
    this.aS.list().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
    this.aS.getList().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
  }
}
