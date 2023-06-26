import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Empresa_Transporte } from 'src/app/model/Empresa_Transporte';
import { EmpresaTransporteService } from 'src/app/service/empresa-transporte.service';
import { EmpresaTransporteDialogoComponent } from './empresa-transporte-dialogo/empresa-transporte-dialogo.component';
import { MatDialog } from '@angular/material/dialog'
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-empresa-transporte-listar',
  templateUrl: './empresa-transporte-listar.component.html',
  styleUrls: ['./empresa-transporte-listar.component.css'],
})
export class EmpresaTransporteListarComponent implements OnInit {
  dataList: Empresa_Transporte[] = [];
  idMayor: number = 0;
  lista: EmpresaTransporteService[] = []
  role: string=""

  constructor(
    private tS: EmpresaTransporteService,
    private dialog: MatDialog, private ls:LoginService
  ) {}

  ngOnInit(): void {
    this.role=this.ls.showRole();
    console.log(this.role);
    this.tS.list().subscribe((data) => {
      this.dataList = data;
    })
    this.tS.getList().subscribe(data => {
      this.dataList = data;
    })
    this.tS.getConfirmDelete().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    })
  }

  confirm(id: number) {
    this.idMayor = id;
    this.dialog.open(EmpresaTransporteDialogoComponent);
  }
  eliminar(id: number) {
    this.tS.delete(id).subscribe(() => {
      this.tS.list().subscribe(data => {
        this.tS.setList(data);
      })
    })
  }
  filtrar(z:any){

    this.dataList.filter=z.target.value.trim();
    }
}
