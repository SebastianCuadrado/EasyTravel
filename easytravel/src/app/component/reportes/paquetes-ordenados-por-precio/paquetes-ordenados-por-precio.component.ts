import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { PaqueteHotelPlaceDTO } from 'src/app/model/PaqueteHotelPlaceDTO';
import { PaqueteService } from 'src/app/service/paquete.service';

@Component({
  selector: 'app-paquetes-ordenados-por-precio',
  templateUrl: './paquetes-ordenados-por-precio.component.html',
  styleUrls: ['./paquetes-ordenados-por-precio.component.css']
})
export class PaquetesOrdenadosPorPrecioComponent implements OnInit{
  PaqueteHotelPlace: PaqueteHotelPlaceDTO[]=[];
  dataSource: MatTableDataSource<PaqueteHotelPlaceDTO> = new MatTableDataSource();

  displayedColumns: string[] = ['nombre', 'precio', 'namePlace'];

  constructor(private pS: PaqueteService) { }

  ngOnInit(): void {
    this.pS.getPaquetesByHotelsAndPlace().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
    })
  }

}
