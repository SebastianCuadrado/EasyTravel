import { Component ,OnInit} from '@angular/core';
import { FormGroup, FormGroupDirective, FormControl } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Intereses } from 'src/app/model/intereses';
import { Notificacion } from 'src/app/model/notificacion';
import { Paquete } from 'src/app/model/paquete';
import { InteresesService } from 'src/app/service/intereses.service';
import { NotificacionService } from 'src/app/service/notificacion.service';
import { PaqueteService } from 'src/app/service/paquete.service';

@Component({
  selector: 'app-notificacion-crea-edita',
  templateUrl: './notificacion-crea-edita.component.html',
  styleUrls: ['./notificacion-crea-edita.component.css']
})
export class NotificacionCreaEditaComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  notificacion: Notificacion = new Notificacion();
  mensaje: string = "";
  lista_paquete: Paquete[] = [];
  lista_intereses: Intereses[] = [];
  idPaquete: number = 0;
  idIntereses: number = 0;

  constructor(private nS: NotificacionService, private router: Router, private route: ActivatedRoute, private pS: PaqueteService, private iS: InteresesService) { }

  ngOnInit(): void {
    this.pS.list().subscribe(data => {
      this.lista_paquete = data;
    })

    this.iS.list().subscribe(data => {
      this.lista_intereses = data;
    })


    this.form = new FormGroup({
      idNotificacion: new FormControl(),
      paquete: new FormControl(),
      intereses: new FormControl(),
      mensaje: new FormControl(),
    })
  }

  aceptar(): void {
    this.notificacion.idNotificacion = this.form.value['idNotificacion'];
    this.notificacion.paquete = this.form.value['paquete'];
    this.notificacion.intereses = this.form.value['intereses'];
    this.notificacion.mensaje = this.form.value['mensaje'];


    if (this.idPaquete > 0 && this.idIntereses > 0) {
      let p = new Paquete();
      p.idPaquete = this.idPaquete;
      let i = new Intereses();
      i.idInteres = this.idIntereses;

      this.notificacion.paquete = p;
      this.notificacion.intereses = i;

      this.nS.insert(this.notificacion).subscribe(() => {
        this.nS.list().subscribe((data) => {
          this.nS.setList(data);
        })
      })

      this.router.navigate(['notificacion']);
    }
  }
}
