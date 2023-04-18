import { Component, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective, FormControl } from '@angular/forms';
import { Empresa_Transporte } from 'src/app/model/Empresa_Transporte';
import * as moment from 'moment';
import { EmpresaTransporteService } from 'src/app/service/empresa-transporte.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-empresatransporte-creaedita',
  templateUrl: './empresatransporte-creaedita.component.html',
  styleUrls: ['./empresatransporte-creaedita.component.css'],
})
export class EmpresatransporteCreaeditaComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  empresa_transportes: Empresa_Transporte = new Empresa_Transporte();
  mensaje: string = '';

  ngOnInit(): void {
    this.form = new FormGroup({
      idEmpresa: new FormControl(),
    nombre: new FormControl(),
    ruc: new FormControl(),
    direccion: new FormControl(),
    contacto: new FormControl(),
    });
  }

  constructor(private tS: EmpresaTransporteService, private router:Router) {}


  aceptar(): void {
    this.empresa_transportes.idEmpresa=this.form.value['idEmpresa'];
  this.empresa_transportes.nombre=this.form.value['nombre'];
  this.empresa_transportes.ruc=this.form.value['ruc'];
  this.empresa_transportes.direccion=this.form.value['direccion'];
  this.empresa_transportes.contacto=this.form.value['contacto'];

    if(this.form.value['nombre'].length>0  && this.form.value['direccion'].length>0 &&
    this.form.value['ruc'].length>0 && this.form.value['contacto'].length>0)
    {
      this.tS.insert(this.empresa_transportes).subscribe(data=>{
        this.tS.list().subscribe(data =>{
          this.tS.setList(data)
        })
      })
      this.router.navigate(['empresa_transportes']);
    }
    else{this.mensaje="Ingresa los datos correctamente"}
  }
}

