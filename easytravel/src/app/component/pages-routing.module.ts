import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GuardServiceService } from '../service/guard.service.service';
import { LandingComponent } from './landing/landing.component';
import { HotelsComponent } from './hotels/hotels.component';
import { HotelsCreaeditaComponent } from './hotels/hotels-creaedita/hotels-creaedita.component';
import { ComentarioshotelCreaeditaComponent } from './comentarioshotel/comentarioshotel-creaedita/comentarioshotel-creaedita.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { UsuarioCreaeditaComponent } from './usuario/usuario-creaedita/usuario-creaedita.component';
import { PlacesComponent } from './places/places.component';
import { PlacesCreaeditaComponent } from './places/places-creaedita/places-creaedita.component';
import { EmpresaTransporteComponent } from './empresa-transporte/empresa-transporte.component';
import { EmpresatransporteCreaeditaComponent } from './empresa-transporte/empresatransporte-creaedita/empresatransporte-creaedita.component';
import { TravelComponent } from './travel/travel.component';
import { TravelCreaeditaComponent } from './travel/travel-creaedita/travel-creaedita.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ServiciosCreaeditaComponent } from './servicios/servicios-creaedita/servicios-creaedita.component';
import { PaqueteComponent } from './paquete/paquete.component';
import { PaqueteCreaeditaComponent } from './paquete/paquete-creaedita/paquete-creaedita.component';
import { ReservaComponent } from './reserva/reserva.component';
import { ReservaCreaeditaComponent } from './reserva/reserva-creaedita/reserva-creaedita.component';
import { InteresesComponent } from './intereses/intereses.component';
import { InteresesCreaEditaComponent } from './intereses/intereses-crea-edita/intereses-crea-edita.component';
import { ActividadComponent } from './actividad/actividad.component';
import { ActividadCreaeditaComponent } from './actividad/actividad-creaedita/actividad-creaedita.component';
import { NotificacionComponent } from './notificacion/notificacion.component';
import { NotificacionCreaEditaComponent } from './notificacion/notificacion-crea-edita/notificacion-crea-edita.component';
import { ReportesComponent } from './reportes/reportes.component';
import { CantidadDeViajesPorMesComponent } from './reportes/cantidad-de-viajes-por-mes/cantidad-de-viajes-por-mes.component';
import { CantidadDeViajesPorEmpresaTransporteComponent } from './reportes/cantidad-de-viajes-por-empresa-transporte/cantidad-de-viajes-por-empresa-transporte.component';
import { PaquetesOrdenadosPorPrecioComponent } from './reportes/paquetes-ordenados-por-precio/paquetes-ordenados-por-precio.component';
import { CantidadDePaisesEnReservaComponent } from './reportes/cantidad-de-paises-en-reserva/cantidad-de-paises-en-reserva.component';

import { HotelesmasserviciosComponent } from './reportes/hotelesmasservicios/hotelesmasservicios.component';
import { ReportesComponent } from './reportes/reportes.component';

import { HotelesmasreservadosComponent } from './reportes/hotelesmasreservados/hotelesmasreservados.component';

import { InteresesUsuariosComponent } from './reportes/intereses-usuarios/intereses-usuarios.component';
import { NotificacionUsuariosComponent } from './reportes/notificacion-usuarios/notificacion-usuarios.component';






const routes: Routes = [
  {
    path: 'landing',
    component: LandingComponent,


  },
  {
    path: 'hotels',
    component: HotelsComponent,
    children: [

      { path: 'new', component: HotelsCreaeditaComponent },
      { path: 'edicion/:idHotels', component: HotelsCreaeditaComponent },
      {path:'comentario/:idHotels',component:ComentarioshotelCreaeditaComponent}
    ],canActivate:[GuardServiceService]

  },
  {
    path: 'usuario',
    component: UsuarioComponent,

    children: [
      { path: 'new', component: UsuarioCreaeditaComponent },
      { path: 'edicion/:id', component: UsuarioCreaeditaComponent },
    ],

  },
  {
    path: 'places',
    component: PlacesComponent,

    children: [{ path: 'new', component: PlacesCreaeditaComponent},
    {path: 'edicion/:id', component: PlacesCreaeditaComponent }]

  },
  {
    path: 'empresa-transporte',
    component: EmpresaTransporteComponent,

    children: [
      { path: 'new', component: EmpresatransporteCreaeditaComponent },
      {
        path: 'edicion/:id',
        component: EmpresatransporteCreaeditaComponent,
      },
    ],canActivate:[GuardServiceService]

  },
  {

    path: 'travel',
    component: TravelComponent,
    children: [
      {
        path: 'new',
        component: TravelCreaeditaComponent
      }
    ],canActivate:[GuardServiceService]
  },
  {

    path: 'servicios',
    component: ServiciosComponent,
    children: [

      { path: 'new', component: ServiciosCreaeditaComponent },
      { path: 'edicion/:id', component: ServiciosCreaeditaComponent },

      {path:'servicios-count',component:HotelesmasserviciosComponent}

    ],canActivate:[GuardServiceService]

  },
  {

    path: 'paquetes',
    component: PaqueteComponent,
    children: [
      {
        path: 'new',
        component: PaqueteCreaeditaComponent
      },
      { path: 'edicion/:id', component: PaqueteCreaeditaComponent },

    ],canActivate:[GuardServiceService]

  },
  {

    path: 'reservas',
    component: ReservaComponent,
    children: [
      {
        path: 'new',
        component: ReservaCreaeditaComponent
      }
    ],canActivate:[GuardServiceService]

  },
  {

    path: 'intereses',
    component: InteresesComponent,
    children: [
      {
        path: 'new',
        component: InteresesCreaEditaComponent
      },
      {
        path: 'edicion/:id', component:InteresesCreaEditaComponent
      }
      ],canActivate:[GuardServiceService]
  },

        {
    path: 'actividades',
    component: ActividadComponent,
    children: [
      {
        path: 'new',
        component: ActividadCreaeditaComponent
      }
    ],canActivate:[GuardServiceService]
  },
  {
    path: 'notificacion',
    component: NotificacionComponent,
    children: [
      {
        path: 'new',
        component: NotificacionCreaEditaComponent
      },
      {
        path: 'edicion/:id', component:NotificacionCreaEditaComponent
      }
    ],canActivate:[GuardServiceService]
  },
  {


    path:'reportes',
    component:ReportesComponent,
    children:[
      {
        path:'hotelesmasservicios',
        component:HotelesmasserviciosComponent
      },
      {
        path:'hotelesmasreservados',
        component:HotelesmasreservadosComponent
      },
      {
        path:'intereses-count-user', component: InteresesUsuariosComponent
      },
      {
        path: 'notificacion-count-user', component: NotificacionUsuariosComponent
      },
 
      {
        path: 'viaje-count-month',
        component: CantidadDeViajesPorMesComponent
      },
      {
        path: 'viaje-count-empresa-transporte',
        component: CantidadDeViajesPorEmpresaTransporteComponent
      },
      {
        path: 'paquetes-order-price',
        component: PaquetesOrdenadosPorPrecioComponent
      },
      {
        path: 'quantity-paises-reserva',
        component: CantidadDePaisesEnReservaComponent
      }
    ], canActivate:[GuardServiceService]
>
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
