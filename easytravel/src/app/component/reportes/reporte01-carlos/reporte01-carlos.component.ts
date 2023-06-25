import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UsuarioInteresDTO } from 'src/app/model/UsuarioInteresDTO';
import { InteresesService } from 'src/app/service/intereses.service';


@Component({
  selector: 'app-reporte01-carlos',
  templateUrl: './reporte01-carlos.component.html',
  styleUrls: ['./reporte01-carlos.component.css']
})
export class Reporte01CarlosComponent implements OnInit{
  InteresesCounts: UsuarioInteresDTO[] = [];
  dataSource: MatTableDataSource<UsuarioInteresDTO> = new MatTableDataSource();

  displayedColumns: string[] = ['usuario','cantidad']

  constructor(private iS: InteresesService) { }

  ngOnInit(): void {
    this.iS.getInteresCountByUser().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
  }

  getBookCountByAuthor(): void {
    this.iS.getInteresCountByUser().subscribe((data: UsuarioInteresDTO[]) => {
    this.InteresesCounts = data;
    })
  }
}
