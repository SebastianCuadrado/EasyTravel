import { Component, OnInit } from '@angular/core';
import { UsuarioInteresesDTO } from 'src/app/model/UsuarioInteresesDTO';
import { MatTableDataSource } from '@angular/material/table';
import { InteresesService } from 'src/app/service/intereses.service';

@Component({
  selector: 'app-intereses-usuarios',
  templateUrl: './intereses-usuarios.component.html',
  styleUrls: ['./intereses-usuarios.component.css']
})
export class InteresesUsuariosComponent implements OnInit {
  InteresesCounts: UsuarioInteresesDTO[] = [];
  dataSource: MatTableDataSource<UsuarioInteresesDTO> = new MatTableDataSource();

  displayedColumns: string[] = ['usuario','cantidad']

  constructor(private iS: InteresesService) { }

  ngOnInit(): void {
    this.iS.getInteresesCountByUser().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
  }

  getInteresesountByUser(): void {
    this.iS.getInteresesCountByUser()
    .subscribe((data: UsuarioInteresesDTO[]) => {
      this.InteresesCounts = data;
    })
  }
}
