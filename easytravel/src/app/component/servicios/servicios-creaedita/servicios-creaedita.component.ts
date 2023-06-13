import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormsModule } from '@angular/forms';
import { MatOptionSelectionChange } from '@angular/material/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Hotels } from 'src/app/model/hotels';
import { Servicios } from 'src/app/model/servicios';
import { HotelsService } from 'src/app/service/hotels.service';
import { ServiciosService } from 'src/app/service/servicios.service';
import { MatSelectChange } from '@angular/material/select';



@Component({
  selector: 'app-servicios-creaedita',
  templateUrl: './servicios-creaedita.component.html',
  styleUrls: ['./servicios-creaedita.component.css']
})
export class ServiciosCreaeditaComponent implements OnInit {


  id: number = 0;
  edicion: boolean = false;
  form: FormGroup = new FormGroup({});
  servicio: Servicios = new Servicios();
  mensaje: string = '';
  hotelSeleccionado: number = 0;
  listaHotel:Hotels[]=[];
constructor(
  private sS: ServiciosService,
  private router: Router,
  private route: ActivatedRoute,
  private hS:HotelsService
) {}




  ngOnInit(): void {
    this.hS.list().subscribe(data => { this.listaHotel = data });

    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
    this.form = new FormGroup({
      idServicio: new FormControl(),
      nombre: new FormControl(),
      descripcion: new FormControl(),
      hotels: new FormControl(),

    });

}


aceptar(): void {
  this.servicio.idServicio = this.form.value['idServicio'];
  this.servicio.nombre = this.form.value['nombre'];
  this.servicio.descripcion = this.form.value['descripcion'];
  this.servicio.hotels.nombre = this.form.value['hotels.nombre'];

  if (this.hotelSeleccionado>0) {
    let h = new Hotels();
    h.idHotels = this.hotelSeleccionado;
    this.servicio.hotels=h;
    this.sS.insert(this.servicio).subscribe(() => {
      this.sS.list().subscribe(data => {
            this.sS.setList(data);
          })
        })

    this.router.navigate(['servicios']);

}
}

init() {
  if (this.edicion) {
    this.sS.listId(this.id).subscribe((data) => {
      this.form = new FormGroup({
        id: new FormControl(data.idServicio),
        nombre: new FormControl(data.nombre),
        descripcion: new FormControl(data.descripcion),
        hotels : new FormControl(data.hotels.nombre),

      });
    });
  }
}


}
