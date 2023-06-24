import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { viajeEmpresaTransporteDTO } from 'src/app/model/viajeEmpresaTransporteDTO';
import { TravelService } from 'src/app/service/travel.service';

@Component({
  selector: 'app-cantidad-de-viajes-por-empresa-transporte',
  templateUrl: './cantidad-de-viajes-por-empresa-transporte.component.html',
  styleUrls: ['./cantidad-de-viajes-por-empresa-transporte.component.css']
})
export class CantidadDeViajesPorEmpresaTransporteComponent implements OnInit {
  viajeCounts: viajeEmpresaTransporteDTO[] = [];
  dataSource: MatTableDataSource<viajeEmpresaTransporteDTO> = new MatTableDataSource();

  displayedColumns: string[] = ['empresa', 'cantidad'];

  constructor(private tS: TravelService) { }

  ngOnInit(): void {
    this.tS.getEmpresaTransporteCountByViaje().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
  }
}
