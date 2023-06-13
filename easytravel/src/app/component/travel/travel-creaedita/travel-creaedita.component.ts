import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Travel } from 'src/app/model/travel';
import { EmpresaTransporteService } from 'src/app/service/empresa-transporte.service';
import { TravelService } from 'src/app/service/travel.service';
import * as moment from 'moment';
import { Empresa_Transporte } from 'src/app/model/Empresa_Transporte';
@Component({
  selector: 'app-travel-creaedita',
  templateUrl: './travel-creaedita.component.html',
  styleUrls: ['./travel-creaedita.component.css']
})
export class TravelCreaeditaComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  travel: Travel = new Travel();
  mensaje: string = "";
  minFecha: Date = moment().add(+1, 'days').toDate();
  lista: Empresa_Transporte[] = [];
  idEmpresaSeleccionada: number = 0;

  constructor(private tS: TravelService, private router: Router, private route: ActivatedRoute, private etS: EmpresaTransporteService) {

  }

  ngOnInit(): void {
    this.etS.list().subscribe(data => {
      this.lista = data;
    })

    this.form = new FormGroup({
      idViaje: new FormControl(),
      empresaTransporte: new FormControl(),
      medioTransporte: new FormControl(),
      fechaIda: new FormControl(),
      fechaVuelta: new FormControl(),
      ruta: new FormControl(),
      duracionPromedio: new FormControl()
    })
  }

  aceptar(): void {
    this.travel.idViaje = this.form.value['idViaje'];
    this.travel.empresaTransporte = this.form.value['empresaTransporte'];
    this.travel.medioTransporte = this.form.value['medioTransporte'];
    this.travel.fechaIda = this.form.value['fechaIda'];
    this.travel.fechaVuelta = this.form.value['fechaVuelta'];
    this.travel.ruta = this.form.value['ruta'];
    this.travel.duracionPromedio = this.form.value['duracionPromedio'];
    if (this.idEmpresaSeleccionada > 0) {
      let et = new Empresa_Transporte();
      et.idEmpresa = this.idEmpresaSeleccionada;
      this.travel.empresaTransporte = et;
      this.tS.insert(this.travel).subscribe(() => {
        this.tS.list().subscribe((data) => {
          this.tS.setList(data);
        })
      })

      this.router.navigate(['travel']);
    }
  }
}
