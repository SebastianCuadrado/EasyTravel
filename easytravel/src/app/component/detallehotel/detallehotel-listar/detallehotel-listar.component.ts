import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DetalleHotel } from 'src/app/model/detallehotel';
import { DetallehotelService } from 'src/app/service/detallehotel.service';
import { DetallehotelDialogoComponent } from './detallehotel-dialogo/detallehotel-dialogo.component';

@Component({
  selector: 'app-detallehotel-listar',
  templateUrl: './detallehotel-listar.component.html',
  styleUrls: ['./detallehotel-listar.component.css']
})
export class DetallehotelListarComponent implements OnInit{
  idMayor: number = 0
  lista: DetalleHotel[] = []
  dataSource:MatTableDataSource<DetalleHotel>= new MatTableDataSource();
  displayedColumns:string[]=['codigo','nombre','descripcion','hotel',"accion01","accion02"]
  count:number=0

  constructor(private dhS:DetallehotelService,private dialog:MatDialog)
  {

  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;


  ngOnInit(): void {
      this.dhS.list().subscribe(data=>{
        this.dataSource=new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.lista=data;
        this.count=this.lista.length;
      })

      this.dhS.getList().subscribe(data=>{this.dataSource=new MatTableDataSource(data);})
      this.dhS.getConfirmDelete().subscribe(data => {
        data == true ? this.eliminar(this.idMayor) : false;
      })
  }
  confirm(id: number) {
    this.idMayor = id;
    this.dialog.open(DetallehotelDialogoComponent);
  }
  eliminar(id: number) {
    this.dhS.delete(id).subscribe(() => {
      this.dhS.list().subscribe(data => {
        this.dhS.setList(data);
      })
    })
  }

  filtrar(z:any){

    this.dataSource.filter=z.target.value.trim();
    }
  }
