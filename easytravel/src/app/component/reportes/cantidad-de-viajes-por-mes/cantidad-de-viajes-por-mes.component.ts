import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { viajeMesDTO } from 'src/app/model/viajeMesDTO';
import { TravelService } from 'src/app/service/travel.service';

@Component({
  selector: 'app-cantidad-de-viajes-por-mes',
  templateUrl: './cantidad-de-viajes-por-mes.component.html',
  styleUrls: ['./cantidad-de-viajes-por-mes.component.css']
})
export class CantidadDeViajesPorMesComponent implements OnInit {
  viajeCounts: viajeMesDTO[] = [];
  dataSource: MatTableDataSource<viajeMesDTO> = new MatTableDataSource();

  displayedColumns: string[] = ['mes', 'cantidad'];

  constructor(private tS: TravelService) { }

  ngOnInit(): void {
    this.tS.getViajeCountByMonth(2023).subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
  }

}
