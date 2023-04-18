import { Component, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective, FormControl } from '@angular/forms';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/service/usuario.service';
import { Router } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-usuario-creaedita',
  templateUrl: './usuario-creaedita.component.html',
  styleUrls: ['./usuario-creaedita.component.css']
})
export class UsuarioCreaeditaComponent implements OnInit{
  form: FormGroup = new FormGroup({});
  usuarios: Usuario = new Usuario();
  mensaje: string = '';
  maxFecha: Date = moment().add(-1, 'days').toDate();
  ngOnInit(): void {
    this.form = new FormGroup({
      idUsuario: new FormControl(),
      nombre: new FormControl(),
      apellidos: new FormControl(),
      email: new FormControl(),
      fechaNacimiento: new FormControl(),
      celular: new FormControl(),
      ubicacion: new FormControl(),
})
}

constructor(private uS: UsuarioService, private router:Router) {}

aceptar(): void {
  this.usuarios.idUsuario=this.form.value['idUsuario'];
  this.usuarios.nombre=this.form.value['nombre'];
  this.usuarios.apellidos=this.form.value['apellidos'];
  this.usuarios.email=this.form.value['email'];
  this.usuarios.fechaNacimiento=this.form.value['fechaNacimiento'];
  this.usuarios.celular=this.form.value['celular'];
  this.usuarios.ubicacion=this.form.value['ubicacion'];

  if((this.form.value['nombre'].length>0  &&
  this.form.value['apellidos'].length>0 &&
  this.form.value['ubicacion'].length>0)&&(
    this.form.value['email']>0 || this.form.value['celular']>0))
  {
    this.uS.insert(this.usuarios).subscribe(data=>{
      this.uS.list().subscribe(data =>{
        this.uS.setList(data)
      })
    })
    this.router.navigate(['usuario']);
  }
  else{this.mensaje="Ingresa los datos correctamente"}
}
}
