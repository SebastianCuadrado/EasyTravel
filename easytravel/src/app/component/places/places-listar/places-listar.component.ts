import { Component, OnInit } from '@angular/core';
import { Place } from 'src/app/model/places';
import { PlacesService } from 'src/app/service/places.service';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-places-listar',
  templateUrl: './places-listar.component.html',
  styleUrls: ['./places-listar.component.css']
})
export class PlacesListarComponent implements OnInit{
  dataSource:MatTableDataSource<Place>=new MatTableDataSource();
  displayedColumns:string[]=['Codigo','Nombre','Descripcion','País']
  constructor(private as:PlacesService){}
  ngOnInit(): void { this.as.list().subscribe(data=>{this.dataSource=new MatTableDataSource(data)})}
}
