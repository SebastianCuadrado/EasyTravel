import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Hotels } from 'src/app/model/hotels';
import { Paquete } from 'src/app/model/paquete';
import { Place } from 'src/app/model/places';
import { Travel } from 'src/app/model/travel';
import { HotelsService } from 'src/app/service/hotels.service';
import { PaqueteService } from 'src/app/service/paquete.service';
import { PlacesService } from 'src/app/service/places.service';
import { TravelService } from 'src/app/service/travel.service';
import * as moment from 'moment';

@Component({
  selector: 'app-paquete-creaedita',
  templateUrl: './paquete-creaedita.component.html',
  styleUrls: ['./paquete-creaedita.component.css']
})
export class PaqueteCreaeditaComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  paquete: Paquete = new Paquete();
  mensaje: string = "";
  lista_place: Place[] = [];
  lista_travel: Travel[] = [];
  lista_hotel: Hotels[] = [];
  idPlaceSel: number = 0;
  idTravelSel: number = 0;
  idHotelSel: number = 0;
  maxFecha: Date = moment().add(-1, 'days').toDate();


  constructor(private pS: PaqueteService, private router: Router, private route: ActivatedRoute, private plS: PlacesService, private tS: TravelService, private hS: HotelsService) { }

  ngOnInit(): void {
    this.plS.list().subscribe(data => {
      this.lista_place = data;
    })

    this.tS.list().subscribe(data => {
      this.lista_travel = data;
    })

    this.hS.list().subscribe(data => {
      this.lista_hotel = data;
    })

    this.form = new FormGroup({
      idPaquete: new FormControl(),
      precio: new FormControl(),
      place: new FormControl(),
      viaje: new FormControl(),
      ahorro: new FormControl(),
      tipoHabitacion: new FormControl(),
      cantidadNoches: new FormControl(),
      hotel: new FormControl(),
      checkin: new FormControl(),
      checkout: new FormControl()
    })
  }

  aceptar(): void {
    this.paquete.idPaquete = this.form.value['idPaquete'];
    this.paquete.precio = this.form.value['precio'];
    this.paquete.place = this.form.value['place'];
    this.paquete.viaje = this.form.value['viaje'];
    this.paquete.ahorro = this.form.value['ahorro'];
    this.paquete.tipoHabitacion = this.form.value['tipoHabitacion'];
    this.paquete.cantidadNoches = this.form.value['cantidadNoches'];
    this.paquete.hotels = this.form.value['hotel'];
    this.paquete.checkin = this.form.value['checkin'];
    this.paquete.checkout = this.form.value['checkout'];



    if (this.idPlaceSel > 0 && this.idTravelSel > 0 && this.idHotelSel > 0) {
      let p = new Place();
      p.id = this.idPlaceSel;
      let t = new Travel();
      t.idViaje = this.idTravelSel;
      let h = new Hotels();
      h.idHotels = this.idHotelSel;

      this.paquete.place = p;
      this.paquete.viaje = t;
      this.paquete.hotels = h;

      this.pS.insert(this.paquete).subscribe(() => {
        this.pS.list().subscribe((data) => {
          this.pS.setList(data);
        })
      })

      this.router.navigate(['pages/paquetes']);
    }
  }

}
