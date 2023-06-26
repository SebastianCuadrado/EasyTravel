import { Component ,OnInit} from '@angular/core';
import { FormGroup, FormGroupDirective, FormControl } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Intereses } from 'src/app/model/intereses';
import { Usuario } from 'src/app/model/usuario';
import { InteresesService } from 'src/app/service/intereses.service';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-intereses-crea-edita',
  templateUrl: './intereses-crea-edita.component.html',
  styleUrls: ['./intereses-crea-edita.component.css']
})
export class InteresesCreaEditaComponent {
  form: FormGroup = new FormGroup({});
  interes: Intereses = new Intereses();
  mensaje: string = "";
  lista_usuario: Usuario[] = [];
  idUsuario: number = 0;

  constructor(private iS: InteresesService, private router: Router, private route: ActivatedRoute, private uS: UsuarioService) { }

  ngOnInit(): void {
    this.uS.list().subscribe(data => {
      this.lista_usuario = data;
    })

    this.form = new FormGroup({
      idInteres: new FormControl(),
      nombre: new FormControl(),
      usuario: new FormControl(),
    })
  }

  aceptar(): void {
    this.interes.idInteres = this.form.value['idInteres'];
    this.interes.nombre = this.form.value['nombre'];
    this.interes.usuario = this.form.value['usuario.id'];


    if (this.idUsuario > 0) {
      let u = new Usuario();
      u.id = this.idUsuario;

      this.interes.usuario = u;

      this.iS.insert(this.interes).subscribe(() => {
        this.iS.list().subscribe((data) => {
          this.iS.setList(data);
        })
      })

      this.router.navigate(['intereses']);
    }
  }
}
