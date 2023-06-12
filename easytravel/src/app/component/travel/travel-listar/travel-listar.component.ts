import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Travel } from 'src/app/model/travel';
import { TravelService } from 'src/app/service/travel.service';

@Component({
  selector: 'app-travel-listar',
  templateUrl: './travel-listar.component.html',
  styleUrls: ['./travel-listar.component.css']
})
export class TravelListarComponent implements OnInit {
  lista: Travel[] = [];
  dataSource: MatTableDataSource<Travel> = new MatTableDataSource();
  displayedColumns: string[] = ['idViaje', 'empresaTransporte', 'medioTransporte', 'fechaIda', 'fechaVuelta', 'ruta', 'duracionPromedio'];

  constructor(private tS: TravelService) {

  }

  ngOnInit(): void {
    this.tS.list().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
    this.tS.getList().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
  }
}
