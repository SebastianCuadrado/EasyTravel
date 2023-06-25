import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Paquete } from 'src/app/model/paquete';
import { Reserva } from 'src/app/model/reserva';
import { Usuario } from 'src/app/model/usuario';
import { PaqueteService } from 'src/app/service/paquete.service';
import { ReservaService } from 'src/app/service/reserva.service';
import { UsuarioService } from 'src/app/service/usuario.service';
import * as moment from 'moment';

@Component({
  selector: 'app-reserva-creaedita',
  templateUrl: './reserva-creaedita.component.html',
  styleUrls: ['./reserva-creaedita.component.css']
})
export class ReservaCreaeditaComponent implements OnInit{
  form: FormGroup = new FormGroup({});
  reserva: Reserva = new Reserva();
  mensaje: string = "";
  lista_paquete: Paquete[] = [];
  lista_usuario: Usuario[] = [];
  idPaqueteSel: number = 0;
  idUsuarioSel: number = 0;
  maxFecha: Date = moment().add(-1, 'days').toDate();

  constructor(private rS: ReservaService, private router: Router, private route: ActivatedRoute, private pS: PaqueteService, private uS: UsuarioService) { }

  ngOnInit(): void {
    this.pS.list().subscribe(data => {
      this.lista_paquete = data;
    })

    this.uS.list().subscribe(data => {
      this.lista_usuario = data;
    })

    this.form = new FormGroup({
      idReserva: new FormControl(),
      paquete: new FormControl(),
      fechaReserva: new FormControl(),
      usuario: new FormControl(),
    })
    this.route.params.subscribe(params => {
      const nombrePaquete = params['nombrePaquete'];

      this.form.patchValue({
        paquete: nombrePaquete,
      });

      // Actualizar el nombre del paquete en el formulario (opcional)
      this.form.get('paquete')?.setAsyncValidators(() => Promise.resolve(nombrePaquete));
    });
  }

  aceptar(): void {
    this.reserva.idReserva = this.form.value['idReserva'];
    this.reserva.paquete = this.form.value['paquete'];
    this.reserva.fechaReserva = this.form.value['fechaReserva'];
    this.reserva.usuario = this.form.value['usuario'];

    if (this.idPaqueteSel > 0 && this.idUsuarioSel > 0) {
      let p = new Paquete();
      p.idPaquete = this.idPaqueteSel;
      let u = new Usuario();
      u.id = this.idUsuarioSel;

      this.reserva.paquete = p;
      this.reserva.usuario = u;

      this.rS.insert(this.reserva).subscribe(() => {
        this.rS.list().subscribe((data) => {
          this.rS.setList(data);
        })
      })

      this.router.navigate(['/pages/paquetes']);
    }
  }
}
