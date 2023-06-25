import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { PlacePaqueteReservaDTO } from 'src/app/model/PlacePaqueteReservaDTO';
import { PlacesService } from 'src/app/service/places.service';

@Component({
  selector: 'app-cantidad-de-paises-en-reserva',
  templateUrl: './cantidad-de-paises-en-reserva.component.html',
  styleUrls: ['./cantidad-de-paises-en-reserva.component.css']
})
export class CantidadDePaisesEnReservaComponent implements OnInit{
  CountCountry: PlacePaqueteReservaDTO[]=[];
  dataSource: MatTableDataSource<PlacePaqueteReservaDTO> = new MatTableDataSource();
  displayedColumns: string[] = ['pais', 'cantidad'];

  constructor(private pS: PlacesService) { }

  ngOnInit(): void {
    this.pS.getQuantityofPlaces().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
    })
  }
}
