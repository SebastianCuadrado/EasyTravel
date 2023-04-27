import { Component, OnInit } from '@angular/core';
import { Hotels } from 'src/app/model/hotels';
import { HotelsService } from 'src/app/service/hotels.service';
import { MatTableDataSource} from '@angular/material/table'
import { MatDialog } from '@angular/material/dialog'
import { HotelsDialogoComponent } from './hotels-dialogo/hotels-dialogo.component';

@Component({
  selector: 'app-hotels-listar',
  templateUrl: './hotels-listar.component.html',
  styleUrls: ['./hotels-listar.component.css']
})
export class HotelsListarComponent implements OnInit {
  idMayor: number = 0
  lista: Hotels[] = []
  dataSource:MatTableDataSource<Hotels>= new MatTableDataSource();
  displayedColumns:string[]=['codigo','nombre','precio_noche','ciudad','valoracion_prom','estrellas','accion01','accion02']

  constructor(private hS:HotelsService,private dialog:MatDialog)
  {

  }
  ngOnInit(): void {
      this.hS.list().subscribe(data=>{
        this.dataSource=new MatTableDataSource(data);
      })

      this.hS.getList().subscribe(data=>{this.dataSource=new MatTableDataSource(data)})
      this.hS.getConfirmDelete().subscribe(data => {
        data == true ? this.eliminar(this.idMayor) : false;
      })
  }
  confirm(id: number) {
    this.idMayor = id;
    this.dialog.open(HotelsDialogoComponent);
  }
  eliminar(id: number) {
    this.hS.delete(id).subscribe(() => {
      this.hS.list().subscribe(data => {
        this.hS.setList(data);
      })
    })
  }

  filtrar(z:any){

    this.dataSource.filter=z.target.value.trim();
    }
}
