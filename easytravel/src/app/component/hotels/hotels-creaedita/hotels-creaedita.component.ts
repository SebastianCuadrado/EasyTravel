import { Component, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective, FormControl } from '@angular/forms';
import { Hotels } from 'src/app/model/hotels';
import * as moment from 'moment';
import { HotelsService } from 'src/app/service/hotels.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-hotels-creaedita',
  templateUrl: './hotels-creaedita.component.html',
  styleUrls: ['./hotels-creaedita.component.css'],
})
export class HotelsCreaeditaComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  hotels: Hotels = new Hotels();
  mensaje: string = '';

  ngOnInit(): void {
    this.form = new FormGroup({
      idHotels: new FormControl(),
      nombre: new FormControl(),
      precio_noche: new FormControl(),
      ciudad: new FormControl(),
      valoracion_promedio: new FormControl(),
      estrellas: new FormControl(),
    });
  }

  constructor(private hS: HotelsService, private router:Router) {}


  aceptar(): void {
    this.hotels.idHotel=this.form.value['idHotel'];
    this.hotels.nombre=this.form.value['nombre'];
    this.hotels.precio_noche=this.form.value['precio_noche'];
    this.hotels.ciudad=this.form.value['ciudad'];
    this.hotels.valoracion_promedio=this.form.value['valoracion_promedio'];
    this.hotels.estrellas=this.form.value['estrellas'];

    if(this.form.value['nombre'].length>0  && this.form.value['ciudad'].length>0 &&
    this.form.value['estrellas']<6)
    {
      this.hS.insert(this.hotels).subscribe(data=>{
        this.hS.list().subscribe(data =>{
          this.hS.setList(data)
        })
      })
      this.router.navigate(['hotels']);
    }
    else{this.mensaje="Ingresa los datos correctamente"}
  }
}
