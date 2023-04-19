import { Component, OnInit } from '@angular/core';
import { Comentarios_Hotel } from 'src/app/model/comentarios_hotel';
import { ComentariosHotelService } from 'src/app/service/comentarios-hotel.service';
import { MatTableDataSource} from '@angular/material/table'
@Component({
  selector: 'app-comentarios-hotel-listar',
  templateUrl: './comentarios-hotel-listar.component.html',
  styleUrls: ['./comentarios-hotel-listar.component.css']
})
export class ComentariosHotelListarComponent implements OnInit {
  dataSource:MatTableDataSource<Comentarios_Hotel>=new MatTableDataSource();
  displayedColumns:string[]=['codigo','valoracion','comentario']
  constructor(private chS:ComentariosHotelService){

  }
  ngOnInit(): void {
    this.chS.list().subscribe(data=>{
      this.dataSource = new MatTableDataSource(data);
    })
  }
}
