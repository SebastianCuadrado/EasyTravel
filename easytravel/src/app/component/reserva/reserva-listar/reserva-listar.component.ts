import { Component, ViewChild } from '@angular/core';
import { Reserva } from 'src/app/model/reserva';
import { MatTableDataSource } from '@angular/material/table';
import { ReservaService } from 'src/app/service/reserva.service';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-reserva-listar',
  templateUrl: './reserva-listar.component.html',
  styleUrls: ['./reserva-listar.component.css']
})
export class ReservaListarComponent {
  lista: Reserva[] = [];
  dataSource: MatTableDataSource<Reserva> = new MatTableDataSource();
  displayedColumns: string[] = ['idReserva', 'paquete', 'fechaReserva', 'usuario'];

  constructor(private rS: ReservaService) {

  }

  @ViewChild(MatPaginator)paginator!:MatPaginator;
  ngOnInit(): void {
    this.rS.list().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator=this.paginator;
    })
    this.rS.getList().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator=this.paginator
    })
  }
}
