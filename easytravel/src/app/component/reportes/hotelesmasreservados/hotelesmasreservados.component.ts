import { Component, OnInit } from '@angular/core';
import { hotelReservas } from 'src/app/model/hotelReservas';
import { MatTableDataSource } from '@angular/material/table';
import { ReservaService } from 'src/app/service/reserva.service';

@Component({
  selector: 'app-hotelesmasreservados',
  templateUrl: './hotelesmasreservados.component.html',
  styleUrls: ['./hotelesmasreservados.component.css']
})
export class HotelesmasreservadosComponent implements OnInit {


  reservaCounts: hotelReservas[]=[];
  dataSource:MatTableDataSource<hotelReservas>=new MatTableDataSource();
  displayedColumns:string[]=['hotel','cantidad']
  constructor(private rS:ReservaService){}
  ngOnInit(): void {
    this.rS.getReservasCountByHotel().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
    })

  }

  getReservasCountByHotel():void{
    this.rS.getReservasCountByHotel().subscribe((data:hotelReservas[])=>{
      this.reservaCounts=data;
    })

  }
}
