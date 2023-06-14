import { Component, ViewChild } from '@angular/core';
import { Paquete } from 'src/app/model/paquete';
import { MatTableDataSource } from '@angular/material/table';
import { PaqueteService } from 'src/app/service/paquete.service';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-paquete-listar',
  templateUrl: './paquete-listar.component.html',
  styleUrls: ['./paquete-listar.component.css']
})
export class PaqueteListarComponent {
  lista: Paquete[] = [];
  dataSource: MatTableDataSource<Paquete> = new MatTableDataSource();
  displayedColumns: string[] = ['idPaquete', 'precio', 'place', 'viaje', 'detalle', 'ahorro'];

  constructor(private pS: PaqueteService) {

  }

  @ViewChild(MatPaginator)paginator!:MatPaginator;
  ngOnInit(): void {
    this.pS.list().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator=this.paginator;
    })
    this.pS.getList().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator=this.paginator
    })
  }
}
