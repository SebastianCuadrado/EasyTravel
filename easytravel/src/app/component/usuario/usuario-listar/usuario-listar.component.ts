import { Component, OnInit, ViewChild } from '@angular/core';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/service/usuario.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog'
import { UsuarioDialogoComponent } from '../usuario-dialogo/usuario-dialogo.component';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-usuario-listar',
  templateUrl: './usuario-listar.component.html',
  styleUrls: ['./usuario-listar.component.css']
})
export class UsuarioListarComponent implements OnInit {
  dataSource:MatTableDataSource<Usuario> = new MatTableDataSource();
  idMayor: number = 0
  displayedColumns:string[] = ['id', 'nombre', 'apellidos', 'email', 'fechaNacimiento', 'celular', 'ubicacion', 'password', 'username', 'accionActualizar' ,'accionEliminar']
  constructor(private uS:UsuarioService, private dialog: MatDialog){

  }
@ViewChild(MatPaginator)paginator!:MatPaginator
  ngOnInit(): void {
    this.uS.list().subscribe(data =>{
      this.dataSource=new MatTableDataSource(data);
      this.dataSource.paginator=this.paginator;
    })

    this.uS.getList().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })

    this.uS.getConfirmDelete().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    })

  }

  confirm(id: number) {
    this.idMayor = id;
    this.dialog.open(UsuarioDialogoComponent);
  }
  eliminar(id: number) {
    this.uS.delete(id).subscribe(() => {
      this.uS.list().subscribe(data => {
        this.uS.setList(data);
      })
    })
  }

  filter(e: any) {
    this.dataSource.filter = e.target.value.trim();
  }

  ocultarContrasenia(password: string): string {
    return '*******';
  }

}
