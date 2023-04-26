import { Component, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective, FormControl } from '@angular/forms';
import { Place } from 'src/app/model/places';
import * as moment from 'moment';
import { PlacesService } from 'src/app/service/places.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-places-PlacesCreaeditaComponent',
  templateUrl: './places-creaedita.component.html',
  styleUrls: ['./places-creaedita.component.css'],
})
export class PlacesCreaeditaComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  places: Place = new Place();
  mensaje: string = '';
  id: number = 0;
  edicion: boolean = false;

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    })
    this.form = new FormGroup({
      id: new FormControl(),
      namePlace: new FormControl(),
      descriptionPlace: new FormControl(),
      country: new FormControl(),
    });
  }

  constructor(private pS: PlacesService, private router:Router, private route: ActivatedRoute) {}


  aceptar(): void {
    this.places.id=this.form.value['id'];
    this.places.namePlace=this.form.value['Nombre'];
    this.places.descriptionPlace=this.form.value['Descripción'];
    this.places.country=this.form.value['País'];


    if(this.form.value['Nombre'].length>0  && this.form.value['Descripcion'].length>0 && this.form.value['País']>0)
    {
      if (this.edicion) {
        this.pS.update(this.places).subscribe((data) => {
          this.pS.list().subscribe(data => {
            this.pS.setList(data);
          })
        })
      } else {
        this.pS.insert(this.places).subscribe((data)=> {
          this.pS.list().subscribe(data => {
            this.pS.setList(data);
          })
        })
      }
      this.router.navigate(['places']);
    }
    else{this.mensaje="Ingresa los datos correctamente"}
  }
  init() {
    if (this.edicion) {
      this.pS.listId(this.id).subscribe(data => {
        this.form = new FormGroup({
          id: new FormControl(data.id),
          namePlace: new FormControl(data.namePlace),
          descriptonPlace: new FormControl(data.descriptionPlace),
          country: new FormControl(data.country)
        })
      })
    }
  }
}
