import { Component, OnInit } from '@angular/core';
import { Place } from 'src/app/model/places';
import { PlacesService } from 'src/app/service/places.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { PlacesDialogoComponent } from '../places-dialogo/places-dialogo.component';
@Component({
  selector: 'app-places-listar',
  templateUrl: './places-listar.component.html',
  styleUrls: ['./places-listar.component.css'],
})
export class PlacesListarComponent implements OnInit {
  lista: Place[] = []
  dataSource: MatTableDataSource<Place> = new MatTableDataSource();
  idMayor: number = 0;
  displayedColumns: string[] = ['id', 'Nombre', 'Descripcion', 'País','accionEditar' ,'accionEliminar']
  constructor(private pS: PlacesService, private dialog: MatDialog) {}
  ngOnInit(): void {
    this.pS.list().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });

    this.pS.getList().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });

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
