import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule }from '@angular/common/http';



import {MatTableModule} from '@angular/material/table';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MatInputModule  } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';


import { MatDialogModule } from '@angular/material/dialog'
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';





import { MatSelectModule } from '@angular/material/select';

import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

import { MatFormFieldModule } from '@angular/material/form-field';
import { PagesRoutingModule } from './pages-routing.module';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HotelsComponent } from './hotels/hotels.component';
import { HotelsListarComponent } from './hotels/hotels-listar/hotels-listar.component';
import { HotelsCreaeditaComponent } from './hotels/hotels-creaedita/hotels-creaedita.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { UsuarioCreaeditaComponent } from './usuario/usuario-creaedita/usuario-creaedita.component';
import { UsuarioListarComponent } from './usuario/usuario-listar/usuario-listar.component';
import { UsuarioDialogoComponent } from './usuario/usuario-dialogo/usuario-dialogo.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ServiciosCreaeditaComponent } from './servicios/servicios-creaedita/servicios-creaedita.component';
import { ServiciosDialogoComponent } from './servicios/servicios-listar/servicios-dialogo/servicios-dialogo.component';
import { ServiciosListarComponent } from './servicios/servicios-listar/servicios-listar.component';
import { EmpresaTransporteComponent } from './empresa-transporte/empresa-transporte.component';
import { EmpresaTransporteListarComponent } from './empresa-transporte/empresa-transporte-listar/empresa-transporte-listar.component';
import { MenuComponent } from '../menu/menu.component';
import { PlacesComponent } from './places/places.component';
import { PlacesCreaeditaComponent } from './places/places-creaedita/places-creaedita.component';
import { PlacesDialogoComponent } from './places/places-listar/places-dialogo/places-dialogo.component';
import { PlacesListarComponent } from './places/places-listar/places-listar.component';
import { EmpresatransporteCreaeditaComponent } from './empresa-transporte/empresatransporte-creaedita/empresatransporte-creaedita.component';
import { EmpresaTransporteDialogoComponent } from './empresa-transporte/empresa-transporte-listar/empresa-transporte-dialogo/empresa-transporte-dialogo.component';
import { HotelsDialogoComponent } from './hotels/hotels-listar/hotels-dialogo/hotels-dialogo.component';
import { TravelComponent } from './travel/travel.component';
import { TravelListarComponent } from './travel/travel-listar/travel-listar.component';
import { TravelCreaeditaComponent } from './travel/travel-creaedita/travel-creaedita.component';
import { LandingComponent } from './landing/landing.component';
import { DetallehotelComponent } from './detallehotel/detallehotel.component';
import { DetallehotelCreaeditaComponent } from './detallehotel/detallehotel-creaedita/detallehotel-creaedita.component';
import { DetallehotelListarComponent } from './detallehotel/detallehotel-listar/detallehotel-listar.component';
import { DetallehotelDialogoComponent } from './detallehotel/detallehotel-listar/detallehotel-dialogo/detallehotel-dialogo.component';
import { PaqueteComponent } from './paquete/paquete.component';
import { PaqueteListarComponent } from './paquete/paquete-listar/paquete-listar.component';
import { PaqueteCreaeditaComponent } from './paquete/paquete-creaedita/paquete-creaedita.component';
import { PaqueteDialogoComponent } from './paquete/paquete-listar/paquete-dialogo/paquete-dialogo.component';
import { ReservaComponent } from './reserva/reserva.component';
import { ReservaCreaeditaComponent } from './reserva/reserva-creaedita/reserva-creaedita.component';
import { ReservaListarComponent } from './reserva/reserva-listar/reserva-listar.component';
import { InteresesComponent } from './intereses/intereses.component';
import { InteresesCreaEditaComponent } from './intereses/intereses-crea-edita/intereses-crea-edita.component';
import { InteresesListarComponent } from './intereses/intereses-listar/intereses-listar.component';
import { InteresesDialogoComponent } from './intereses/intereses-listar/intereses-dialogo/intereses-dialogo.component';
import { NotificacionComponent } from './notificacion/notificacion.component';
import { NotificacionCreaEditaComponent } from './notificacion/notificacion-crea-edita/notificacion-crea-edita.component';
import { NotificacionDialogoComponent } from './notificacion/notificacion-listar/notificacion-dialogo/notificacion-dialogo.component';
import { NotificacionListarComponent } from './notificacion/notificacion-listar/notificacion-listar.component';
import { CommonModule } from '@angular/common';
import { ActividadComponent } from './actividad/actividad.component';
import { ActividadListarComponent } from './actividad/actividad-listar/actividad-listar.component';
import { ActividadCreaeditaComponent } from './actividad/actividad-creaedita/actividad-creaedita.component';
import { ComentarioshotelComponent } from './comentarioshotel/comentarioshotel.component';
import { ComentarioshotelCreaeditaComponent } from './comentarioshotel/comentarioshotel-creaedita/comentarioshotel-creaedita.component';
import { ReportesComponent } from './reportes/reportes.component';

import { HotelesmasreservadosComponent } from './reportes/hotelesmasreservados/hotelesmasreservados.component';
import { HotelesmasserviciosComponent } from './reportes/hotelesmasservicios/hotelesmasservicios.component';
import { InteresesUsuariosComponent } from './reportes/intereses-usuarios/intereses-usuarios.component';
import { NotificacionUsuariosComponent } from './reportes/notificacion-usuarios/notificacion-usuarios.component';





@NgModule({
  declarations: [

    HotelsComponent,
    HotelsListarComponent,
    HotelsCreaeditaComponent,
   UsuarioComponent,
   UsuarioCreaeditaComponent,
   UsuarioListarComponent,
   UsuarioDialogoComponent,
  EmpresaTransporteComponent,
  EmpresaTransporteListarComponent,
    MenuComponent,
    PlacesComponent,
    PlacesCreaeditaComponent,
    PlacesDialogoComponent,
    PlacesListarComponent,

    EmpresaTransporteComponent,
    EmpresaTransporteListarComponent,
    EmpresatransporteCreaeditaComponent,
    EmpresaTransporteDialogoComponent,


HotelsDialogoComponent,

   TravelComponent,
   TravelListarComponent,
   TravelCreaeditaComponent,



    LandingComponent,
      DetallehotelComponent,
      DetallehotelCreaeditaComponent,
     ServiciosComponent,
     ServiciosCreaeditaComponent,
     ServiciosDialogoComponent,
     ServiciosListarComponent,
      DetallehotelListarComponent,
      DetallehotelDialogoComponent,
PaqueteComponent,
PaqueteListarComponent,
PaqueteCreaeditaComponent,
PaqueteDialogoComponent,
    ReservaComponent,
    ReservaCreaeditaComponent,
    ReservaListarComponent,
  InteresesComponent,
  InteresesCreaEditaComponent,
  InteresesListarComponent,
  InteresesDialogoComponent,
      NotificacionComponent,
      NotificacionCreaEditaComponent,
      NotificacionDialogoComponent,
      NotificacionListarComponent,

ComentarioshotelComponent,
ComentarioshotelCreaeditaComponent,
   ActividadComponent,
   ActividadListarComponent,
   ActividadCreaeditaComponent,
   ReportesComponent,

   HotelesmasreservadosComponent,
   HotelesmasserviciosComponent,
   InteresesUsuariosComponent,
   NotificacionUsuariosComponent,







  ],
  imports: [
CommonModule,
    PagesRoutingModule,
    HttpClientModule,
    MatTableModule,
    ReactiveFormsModule,

FormsModule,
    MatInputModule,
    MatButtonModule,
    NgbModule,
    MatDatepickerModule,
    MatNativeDateModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatDialogModule,
    MatPaginatorModule,
    MatSelectModule,

    MatCardModule,
    MatGridListModule,

    MatFormFieldModule,


  ],
  providers: []
})
export class PagesModule { }
