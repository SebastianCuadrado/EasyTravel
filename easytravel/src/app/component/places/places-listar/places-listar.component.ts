import { Component, OnInit, ViewChild } from '@angular/core';
import { Place } from 'src/app/model/places';
import { PlacesService } from 'src/app/service/places.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { PlacesDialogoComponent } from './places-dialogo/places-dialogo.component';
import {MatPaginator} from '@angular/material/paginator';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-places-listar',
  templateUrl: './places-listar.component.html',
  styleUrls: ['./places-listar.component.css'],
})
export class PlacesListarComponent implements OnInit {
  lista: Place[] = []
  role:string=""
  //dataSource: MatTableDataSource<Place> = new MatTableDataSource();
  dataSource: Place[] = [];
  idMayor: number = 0;
  displayedColumns: string[] = ['id', 'Nombre', 'Descripcion', 'País', 'Imagen', 'accionEditar','accionEliminar']
  constructor(private pS: PlacesService, private dialog: MatDialog,private ls:LoginService) {}

  @ViewChild(MatPaginator)paginator!:MatPaginator

  ngOnInit(): void {

    this.role=this.ls.showRole();
    /*this.pS.list().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator=this.paginator
    });*/

    this.pS.list().subscribe(data => {
      this.dataSource = data;
      this.lista = data;
    });

    /*this.pS.getList().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator=this.paginator
    });*/

    this.pS.getList().subscribe(data =>{
      this.dataSource = data;
    })

    this.pS.getConfirmDelete().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    });
  }
  confirm(id: number) {
    this.idMayor = id;
    this.dialog.open(PlacesDialogoComponent);
  }
  eliminar(id: number) {
    this.pS.delete(id).subscribe(() => {
      this.pS.list().subscribe(data => {
        this.pS.setList(data);
      });
    });
  }
  filter(e: any) {
    this.dataSource.filter = e.target.value.trim();
  }
}
