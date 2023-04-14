import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/service/usuario.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-usuario-listar',
  templateUrl: './usuario-listar.component.html',
  styleUrls: ['./usuario-listar.component.css']
})
export class UsuarioListarComponent implements OnInit {
  dataSource:MatTableDataSource<Usuario> = new MatTableDataSource();
  displayedColumns:string[] = ['id', 'nombre', 'apellidos', 'email', 'fechaNacimiento', 'celular', 'ubicacion']
  constructor(private aS:UsuarioService){

  }

  ngOnInit(): void {
    this.aS.list().subscribe(data =>{
      this.dataSource=new MatTableDataSource(data);
    })
  }
}
