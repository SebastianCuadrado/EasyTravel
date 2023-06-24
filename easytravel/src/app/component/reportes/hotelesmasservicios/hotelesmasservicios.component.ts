import { Component, OnInit } from '@angular/core';
import { serviciosHotel } from 'src/app/model/serviciosHotel';
import { MatTableDataSource } from '@angular/material/table';
import { ServiciosService } from 'src/app/service/servicios.service';

@Component({
  selector: 'app-hotelesmasservicios',
  templateUrl: './hotelesmasservicios.component.html',
  styleUrls: ['./hotelesmasservicios.component.css']
})
export class HotelesmasserviciosComponent implements OnInit{

  serviciosCounts:serviciosHotel[]=[];
  dataSource:MatTableDataSource<serviciosHotel>=new  MatTableDataSource();
  displayedColumns:string[]=['hotel','cantidad']
constructor(private sS:ServiciosService){}
  ngOnInit(): void {
    this.sS.getServicioCountByHotel().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
    })

  }
  getServicioCountByHotel():void{
    this.sS.getServicioCountByHotel().subscribe((data:serviciosHotel[])=>{
      this.serviciosCounts=data;
    })
  }

}
