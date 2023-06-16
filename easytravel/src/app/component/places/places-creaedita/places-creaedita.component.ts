import { Component, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective, FormControl } from '@angular/forms';
import { Place } from 'src/app/model/places';
import * as moment from 'moment';
import { PlacesService } from 'src/app/service/places.service';
import {  ActivatedRoute, Params, Router} from '@angular/router';
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
      image: new FormControl()
    });
  }

  constructor(private pS: PlacesService, private router:Router, private route: ActivatedRoute) {}


  aceptar(): void {
    this.places.id=this.form.value['id'];
    this.places.namePlace=this.form.value['namePlace'];
    this.places.descriptionPlace=this.form.value['descriptionPlace'];
    this.places.country=this.form.value['country'];
    this.places.image=this.form.value['image'];


    if(this.form.value['namePlace'].length>0  && this.form.value['descriptionPlace'].length>0 && this.form.value['country'].length>0 && this.form.value['image'].length>0)
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
          descriptionPlace: new FormControl(data.descriptionPlace),
          country: new FormControl(data.country),
          image: new FormControl(data.image)
        })
      })
    }
  }
}
