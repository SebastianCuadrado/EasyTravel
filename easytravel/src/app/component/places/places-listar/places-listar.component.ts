import { Component, OnInit } from '@angular/core';
import { Place } from 'src/app/model/places';
import { PlacesService } from 'src/app/service/places.service';
import { MatTableDataSource } from '@angular/material/table';
import { PlacesDialogoComponent } from './places-dialogo/places-dialogo.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-places-listar',
  templateUrl: './places-listar.component.html',
  styleUrls: ['./places-listar.component.css'],
})
export class PlacesListarComponent implements OnInit {
  dataSource: MatTableDataSource<Place> = new MatTableDataSource();
  idMayor: number = 0;
  displayedColumns: string[] = ['Codigo', 'Nombre', 'Descripcion', 'País'];
  constructor(private as: PlacesService, private dialog: MatDialog) {}
  ngOnInit(): void {
    this.as.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });

    this.as.getList().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });

    this.as.getConfirmDelete().subscribe((data) => {
      data == true ? this.eliminar(this.idMayor) : false;
    });
  }
  confirm(id: number) {
    this.idMayor = id;
    this.dialog.open(PlacesDialogoComponent);
  }
  eliminar(id: number) {
    this.as.delete(id).subscribe(() => {
      this.as.list().subscribe((data) => {
        this.as.setList(data);
      });
    });
  }
  filter(e: any) {
    this.dataSource.filter = e.target.value.trim();
  }
}
