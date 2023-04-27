import { Component, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective, FormControl } from '@angular/forms';
import { Place } from 'src/app/model/places';
import * as moment from 'moment';
import { PlacesService } from 'src/app/service/places.service';
import { Router} from '@angular/router';
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
      id: new FormControl(),
      namePlace: new FormControl(),
      descriptionPlace: new FormControl(),
      country: new FormControl(),
    });
  }

  constructor(private pS: PlacesService, private router:Router) {}


  aceptar(): void {
    this.places.id=this.form.value['id'];
    this.places.namePlace=this.form.value['namePlace'];
    this.places.descriptionPlace=this.form.value['descriptionPlace'];
    this.places.country=this.form.value['country'];


    if(this.form.value['namePlace'].length>0  && this.form.value['descriptionPlace'].length>0 && this.form.value['country'].length>0)
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
