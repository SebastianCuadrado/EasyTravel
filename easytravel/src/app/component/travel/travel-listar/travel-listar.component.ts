import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Travel } from 'src/app/model/travel';
import { LoginService } from 'src/app/service/login.service';
import { TravelService } from 'src/app/service/travel.service';

@Component({
  selector: 'app-travel-listar',
  templateUrl: './travel-listar.component.html',
  styleUrls: ['./travel-listar.component.css']
})
export class TravelListarComponent implements OnInit {
  lista: Travel[] = [];
  role:string=""
  dataSource: MatTableDataSource<Travel> = new MatTableDataSource();
  displayedColumns: string[] = ['idViaje', 'empresaTransporte', 'medioTransporte', 'fechaIda', 'fechaVuelta', 'ruta', 'duracionPromedio'];

  constructor(private tS: TravelService, private ls:LoginService) {

  }

  ngOnInit(): void {
    this.role=this.ls.showRole();
    this.tS.list().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
    this.tS.getList().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
  }
}
