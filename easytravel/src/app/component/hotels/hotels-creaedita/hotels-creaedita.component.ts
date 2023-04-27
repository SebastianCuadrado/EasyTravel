import { Component, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective, FormControl } from '@angular/forms';
import { Hotels } from 'src/app/model/hotels';
import * as moment from 'moment';
import { HotelsService } from 'src/app/service/hotels.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { from } from 'rxjs';
@Component({
  selector: 'app-hotels-creaedita',
  templateUrl: './hotels-creaedita.component.html',
  styleUrls: ['./hotels-creaedita.component.css'],
})
export class HotelsCreaeditaComponent implements OnInit {
  id: number = 0;
  edicion: boolean = false;
  form: FormGroup = new FormGroup({});
  hotels: Hotels = new Hotels();
  mensaje: string = '';

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });

    this.form = new FormGroup({
      id: new FormControl(),
      nombre: new FormControl(),
      precio_noche: new FormControl(),
      ciudad: new FormControl(),
      valoracion_promedio: new FormControl(),
      estrellas: new FormControl(),
    });
  }

  constructor(
    private hS: HotelsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  aceptar(): void {
    this.hotels.id = this.form.value['id'];
    this.hotels.nombre = this.form.value['nombre'];
    this.hotels.precio_noche = this.form.value['precio_noche'];
    this.hotels.ciudad = this.form.value['ciudad'];
    this.hotels.valoracion_promedio = this.form.value['valoracion_promedio'];
    this.hotels.estrellas = this.form.value['estrellas'];

    if (
      this.form.value['nombre'].length > 0 &&
      this.form.value['ciudad'].length > 0 &&
      this.form.value['estrellas'] < 6
    ) {
      if(this.edicion){
        this.hS.update(this.hotels).subscribe(()=>{
          this.hS.list().subscribe((data) => {
            this.hS.setList(data);})

        })


      } else {
        this.hS.insert(this.hotels).subscribe((data) => {
        this.hS.list().subscribe((data) => {
          this.hS.setList(data);
        });
      });}

      this.router.navigate(['hotels']);
    } else {
      this.mensaje = 'Ingresa los datos correctamente';
    }
  }

  init() {
    if (this.edicion) {
      this.hS.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          id: new FormControl(data.id),
          nombre: new FormControl(data.nombre),
          precio_noche: new FormControl(data.precio_noche),
          ciudad: new FormControl(data.ciudad),
          valoracion_promedio: new FormControl(data.valoracion_promedio),
          estrellas: new FormControl(data.estrellas),
        });
      });
    }
  }
}
