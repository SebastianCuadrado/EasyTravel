import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Actividad } from 'src/app/model/actividad';
import { Paquete } from 'src/app/model/paquete';
import { ActividadService } from 'src/app/service/actividad.service';
import { PaqueteService } from 'src/app/service/paquete.service';

@Component({
  selector: 'app-actividad-creaedita',
  templateUrl: './actividad-creaedita.component.html',
  styleUrls: ['./actividad-creaedita.component.css']
})
export class ActividadCreaeditaComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  actividad: Actividad = new Actividad();
  mensaje: string = "";
  lista: Paquete[] = [];
  idPaqueteSeleccionado: number = 0;

  constructor(private aS: ActividadService, private router: Router, private route: ActivatedRoute, private pS: PaqueteService) {

  }

  ngOnInit(): void {
    this.pS.list().subscribe(data => {
      this.lista = data;
    })

    this.form = new FormGroup({
      idActividad: new FormControl(),
      nombre: new FormControl(),
      categoria: new FormControl(),
      descripcion: new FormControl(),
      duracion: new FormControl(),
      paquete: new FormControl()
    })
  }

  aceptar(): void {
    this.actividad.idActividad = this.form.value['idActividad'];
    this.actividad.nombre = this.form.value['nombre'];
    this.actividad.categoria = this.form.value['categoria'];
    this.actividad.descripcion = this.form.value['descripcion'];
    this.actividad.duracion = this.form.value['duracion'];
    this.actividad.paquete = this.form.value['paquete'];
    if (this.idPaqueteSeleccionado > 0) {
      let p = new Paquete()
      p.idPaquete = this.idPaqueteSeleccionado;
      this.actividad.paquete = p;
      this.aS.insert(this.actividad).subscribe(() => {
        this.aS.list().subscribe((data) => {
          this.aS.setList(data);
        })
      })
      this.router.navigate(['actividades']);
    }
  }
}
