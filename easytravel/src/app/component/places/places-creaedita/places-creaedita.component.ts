import { Component, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective, FormControl } from '@angular/forms';
import { Place } from 'src/app/model/places';
import * as moment from 'moment';
import { PlacesService } from 'src/app/service/places.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-places-PlacesCreaeditaComponent',
  templateUrl: './places-creaedita.component.html',
  styleUrls: ['./places-creaedita.component.css'],
})
export class PlacesCreaeditaComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  places: Place = new Place();
  mensaje: string = '';

  ngOnInit(): void {
    this.form = new FormGroup({
      idPlaces: new FormControl(),
      namePlace: new FormControl(),
      descriptionPlace: new FormControl(),
      country: new FormControl(),
    });
  }

  constructor(private pS: PlacesService, private router:Router) {}


  aceptar(): void {
    this.places.idPlace=this.form.value['idHotel'];
    this.places.namePlace=this.form.value['Nombre'];
    this.places.descriptionPlace=this.form.value['Descripción'];
    this.places.country=this.form.value['País'];


    if(this.form.value['Nombre'].length>0  && this.form.value['Descripcion'].length>0 && this.form.value['País']>0)
    {
      this.pS.insert(this.places).subscribe(data=>{
        this.pS.list().subscribe(data =>{
          this.pS.setList(data)
        })
      })
      this.router.navigate(['places']);
    }
    else{this.mensaje="Ingresa los datos correctamente"}
  }
}
