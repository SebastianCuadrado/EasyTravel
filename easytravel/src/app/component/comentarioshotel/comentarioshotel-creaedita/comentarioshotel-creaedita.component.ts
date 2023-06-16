import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ComentariosHotel } from 'src/app/model/comentarioshotel';
import { Hotels } from 'src/app/model/hotels';
import { Usuario } from 'src/app/model/usuario';
import { ComentarioshotelService } from 'src/app/service/comentarioshotel.service';
import { HotelsService } from 'src/app/service/hotels.service';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-comentarioshotel-creaedita',
  templateUrl: './comentarioshotel-creaedita.component.html',
  styleUrls: ['./comentarioshotel-creaedita.component.css']
})
export class ComentarioshotelCreaeditaComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  comentario: ComentariosHotel = new ComentariosHotel();
  mensaje: string = "";
  listaUsuarios: Usuario[] = [];
  idUsuarioSeleccionado: number = 0;
  idHotel: number = 0;
  nombreHotel: string = '';


  constructor(
    private cS: ComentarioshotelService,
    private router: Router,
    private route: ActivatedRoute,
    private hS: HotelsService,
    private uS: UsuarioService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.idHotel = +params['idHotels'];
      this.hS.listId(this.idHotel).subscribe((hotel) => {
        this.nombreHotel = hotel.nombre; // Asignar el nombre del hotel a la propiedad nombreHotel
      });
    });


    this.form = new FormGroup({
      idComentariosHotel: new FormControl(),
      usuario: new FormControl(),
      hotels: new FormControl({ idHotels: this.idHotel }), // Crear objeto Hotels con el ID del hotel seleccionado
      valoracion: new FormControl(),
      comentario: new FormControl(),
    });

    this.uS.list().subscribe((data) => {
      this.listaUsuarios = data;
    });


  }

  aceptar(): void {
    this.comentario.idComentariosHotel = this.form.value['idComentariosHotel'];
    this.comentario.usuario = this.form.value['usuario'];
    this.comentario.hotels = this.form.value['hotels'];
    this.comentario.valoracion = this.form.value['valoracion'];
    this.comentario.comentario = this.form.value['comentario'];

    this.cS.insert(this.comentario).subscribe((data) => {
      this.cS.list().subscribe((data) => {
        this.cS.setList(data);
      });
    });
    this.router.navigate(['hotels']);
  }
}






