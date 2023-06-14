import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DetalleHotel } from 'src/app/model/detallehotel';
import { Paquete } from 'src/app/model/paquete';
import { Place } from 'src/app/model/places';
import { Travel } from 'src/app/model/travel';
import { DetallehotelService } from 'src/app/service/detallehotel.service';
import { PaqueteService } from 'src/app/service/paquete.service';
import { PlacesService } from 'src/app/service/places.service';
import { TravelService } from 'src/app/service/travel.service';

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
  lista_detalle: DetalleHotel[] = [];
  idPlaceSel: number = 0;
  idTravelSel: number = 0;
  idDetalleSel: number = 0;

  constructor(private pS: PaqueteService, private router: Router, private route: ActivatedRoute, private plS: PlacesService, private tS: TravelService, private dhS: DetallehotelService) { }

  ngOnInit(): void {
    this.plS.list().subscribe(data => {
      this.lista_place = data;
    })

    this.tS.list().subscribe(data => {
      this.lista_travel = data;
    })

    this.dhS.list().subscribe(data => {
      this.lista_detalle = data;
    })

    this.form = new FormGroup({
      idPaquete: new FormControl(),
      precio: new FormControl(),
      place: new FormControl(),
      viaje: new FormControl(),
      detalle: new FormControl(),
      ahorro: new FormControl(),
    })
  }

  aceptar(): void {
    this.paquete.idPaquete = this.form.value['idPaquete'];
    this.paquete.precio = this.form.value['precio'];
    this.paquete.place = this.form.value['place'];
    this.paquete.viaje = this.form.value['viaje'];
    this.paquete.detalle = this.form.value['detalle'];
    this.paquete.ahorro = this.form.value['ahorro'];

    if (this.idPlaceSel > 0 && this.idTravelSel > 0 && this.idDetalleSel > 0) {
      let p = new Place();
      p.id = this.idPlaceSel;
      let t = new Travel();
      t.idViaje = this.idTravelSel;
      let d = new DetalleHotel();
      d.idDetalle = this.idDetalleSel;

      this.paquete.place = p;
      this.paquete.viaje = t;
      this.paquete.detalle = d;

      this.pS.insert(this.paquete).subscribe(() => {
        this.pS.list().subscribe((data) => {
          this.pS.setList(data);
        })
      })

      this.router.navigate(['paquetes']);
    }
  }
}
