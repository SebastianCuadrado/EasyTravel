import { Component ,OnInit} from '@angular/core';
import { FormGroup, FormGroupDirective, FormControl } from '@angular/forms';
import { DetalleHotel } from 'src/app/model/detallehotel';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DetallehotelService } from 'src/app/service/detallehotel.service';
import { Hotels } from 'src/app/model/hotels';
import * as moment from 'moment';
import { HotelsService } from 'src/app/service/hotels.service';
@Component({
  selector: 'app-detallehotel-creaedita',
  templateUrl: './detallehotel-creaedita.component.html',
  styleUrls: ['./detallehotel-creaedita.component.css']
})
export class DetallehotelCreaeditaComponent implements OnInit{

  id: number = 0;
  edicion: boolean = false;
  form: FormGroup = new FormGroup({});
  detalleHotel: DetalleHotel = new DetalleHotel();
  maxFecha: Date = moment().add(-1, 'days').toDate();
  mensaje: string = '';
  idHotelSeleccionado:number=0;
  listaHotel:Hotels[]=[];

  ngOnInit(): void {
    this.hS.list().subscribe(data => { this.listaHotel = data });

    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
    this.form = new FormGroup({
      idDetalle: new FormControl(),
      tipoHabitacion: new FormControl(),
      cantidadNoches: new FormControl(),
      hotel: new FormControl(),
      checkin :new FormControl(),
      checkout :new FormControl()
    });

}
constructor(
  private dhS: DetallehotelService,
  private router: Router,
  private route: ActivatedRoute,
  private hS:HotelsService
) {}

aceptar(): void {
  this.detalleHotel.idDetalle = this.form.value['idDetalle'];
  this.detalleHotel.tipoHabitacion = this.form.value['tipoHabitacion'];
  this.detalleHotel.cantidadNoches = this.form.value['cantidadNoches'];
  this.detalleHotel.hotel.nombre = this.form.value['hotel.nombre'];
  this.detalleHotel.checkin=this.form.value['checkin'];
  this.detalleHotel.checkout=this.form.value['checkout'];
  if (this.idHotelSeleccionado>0) {
    let h = new Hotels();
    h.idHotels = this.idHotelSeleccionado;
    this.detalleHotel.hotel=h;
    this.dhS.insert(this.detalleHotel).subscribe(() => {
})

    this.router.navigate(['']);

}
}
init() {
  if (this.edicion) {
    this.dhS.listId(this.id).subscribe((data) => {
      this.form = new FormGroup({
        id: new FormControl(data.idDetalle),
        tipohabitacion: new FormControl(data.tipoHabitacion),
        cantidadNoches: new FormControl(data.cantidadNoches),
        hotel: new FormControl(data.hotel.nombre),
        checkin: new FormControl(data.checkin),
        checkout: new FormControl(data.checkout),
      });
    });
  }
}



}
