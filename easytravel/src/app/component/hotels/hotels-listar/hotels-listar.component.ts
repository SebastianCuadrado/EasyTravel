import { Component, OnInit } from '@angular/core';
import { Hotels } from 'src/app/model/hotels';
import { HotelsService } from 'src/app/service/hotels.service';
import { MatTableDataSource} from '@angular/material/table'

@Component({
  selector: 'app-hotels-listar',
  templateUrl: './hotels-listar.component.html',
  styleUrls: ['./hotels-listar.component.css']
})
export class HotelsListarComponent implements OnInit {
  dataSource:MatTableDataSource<Hotels>= new MatTableDataSource();
  displayedColumns:string[]=['codigo','nombre','precio_noche','ciudad','valoracion_prom','estrellas']

  constructor(private hS:HotelsService)
  {

  }
  ngOnInit(): void {
      this.hS.list().subscribe(data=>{
        this.dataSource=new MatTableDataSource(data);
      })
  }
}
