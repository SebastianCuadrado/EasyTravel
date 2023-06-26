import { Component, OnInit, ViewChild } from '@angular/core';
import { Hotels } from 'src/app/model/hotels';
import { HotelsService } from 'src/app/service/hotels.service';
import { MatTableDataSource} from '@angular/material/table'
import { MatDialog } from '@angular/material/dialog'
import { HotelsDialogoComponent } from './hotels-dialogo/hotels-dialogo.component';
import {MatPaginator} from '@angular/material/paginator';
import { ComentariosHotel } from 'src/app/model/comentarioshotel';
import { ComentarioshotelService } from 'src/app/service/comentarioshotel.service';
import { ServiciosService } from 'src/app/service/servicios.service'; // Importa el servicio de servicios
import { Servicios } from 'src/app/model/servicios';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-hotels-listar',
  templateUrl: './hotels-listar.component.html',
  styleUrls: ['./hotels-listar.component.css']
})
export class HotelsListarComponent implements OnInit {
  idMayor: number = 0;
  role:string="";

  lista: Hotels[] = [];
  dataSource: Hotels[] = [];
  displayedColumns: string[] = ['codigo', 'nombre', 'precio_noche', 'ciudad', 'valoracion_prom', 'estrellas', 'descripcion', 'accion01', 'accion02'];
  count: number = 0;
  comentarios: { [hotelId: number]: ComentariosHotel[] } = {};
  servicios: { [hotelId: number]: Servicios[] } = {};
  constructor(private hS: HotelsService,     private sS: ServiciosService ,// Inyecta el servicio de servicios
  private dialog: MatDialog, private cS: ComentarioshotelService, private ls:LoginService) {}

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.role=this.ls.showRole();
    //console.log(this.role);
    //this.role="ADMIN"
    console.log(this.role);
    this.hS.list().subscribe(data => {
      this.dataSource = data;
      this.lista = data;
      this.count = this.lista.length;
      this.lista.forEach(hotel => {
        this.cargarServicios(hotel.idHotels);
      });

    });

    this.hS.getList().subscribe(data => {
      this.dataSource = data;
    });

    this.hS.getConfirmDelete().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    });
  }

  showComments: { [key: number]: boolean } = {};

  toggleComments(id: number): void {
    if (this.showComments[id]) {
      this.showComments[id] = false;
    } else {
      this.cargarComentarios(id);
      this.showComments[id] = true;
    }
  }

  cargarComentarios(id: number): void {
    this.cS.findByHotelId(id).subscribe((data) => {
      this.comentarios[id] = data;
      // Realiza aquí cualquier operación necesaria con la lista de comentarios del hotel
    });
  }
  cargarServicios(id: number): void {
    this.sS.findByHotelId(id).subscribe((data) => {
      this.servicios[id] = data;
    });
  }

  cadenaServicios(idHotel: number): string {
    const serviciosHotel = this.servicios[idHotel];
    if (serviciosHotel) {
      return serviciosHotel.map(servicio => servicio.nombre).join(', ');
    } else {
      return '';
    }
  }



  confirm(id: number) {
    this.idMayor = id;
    this.dialog.open(HotelsDialogoComponent);
  }

  eliminar(id: number) {
    this.hS.delete(id).subscribe(() => {
      this.hS.list().subscribe(data => {
        this.hS.setList(data);
      });
    });
  }



  agregarComentario() {
    // Lógica para agregar un comentario al hotel seleccionado
    // Puedes mostrar un formulario o realizar alguna otra acción según tus requerimientos
  }

  filtrar(z: any) {
    this.dataSource.filter = z.target.value.trim();
  }


}

