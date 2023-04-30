import { Component, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective, FormControl } from '@angular/forms';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/service/usuario.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-usuario-creaedita',
  templateUrl: './usuario-creaedita.component.html',
  styleUrls: ['./usuario-creaedita.component.css']
})
export class UsuarioCreaeditaComponent implements OnInit{

  id: number = 0
  edicion: boolean = false

  form: FormGroup = new FormGroup({});
  usuarios: Usuario = new Usuario();
  mensaje: string = '';
  maxFecha: Date = moment().add(-1, 'days').toDate();
  ngOnInit(): void {

    this.route.params.subscribe((data:Params) =>{
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    })


    this.form = new FormGroup({
      id: new FormControl(),
      nombre: new FormControl(),
      apellidos: new FormControl(),
      email: new FormControl(),
      fechaNacimiento: new FormControl(),
      celular: new FormControl(),
      ubicacion: new FormControl(),
})
}

constructor(private uS: UsuarioService, private router:Router, private route:ActivatedRoute) {}

aceptar(): void {
  this.usuarios.id=this.form.value['id'];
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
    if(this.edicion)
    {
      this.uS.update(this.usuarios).subscribe(() => {
        this.uS.list().subscribe(data =>{
          this.uS.setList(data)
        })
      })
    }
    else{
      this.uS.insert(this.usuarios).subscribe(data=>{
        this.uS.list().subscribe(data =>{
          this.uS.setList(data)
        })
      })
    }

    this.router.navigate(['usuario']);
  }
  else{this.mensaje="Ingresa los datos correctamente"}
}

  init(){

    if(this.edicion){
      this.uS.listId(this.id).subscribe(data =>{
        this.form=new FormGroup({
          id: new FormControl(data.id),
          nombre: new FormControl(data.nombre),
          apellidos:new FormControl(data.apellidos),
          email:new FormControl(data.email),
          fechaNacimiento:new FormControl(data.fechaNacimiento),
          celular:new FormControl(data.celular),
          ubicacion:new FormControl(data.ubicacion)
        })

      })
    }

  }

}
