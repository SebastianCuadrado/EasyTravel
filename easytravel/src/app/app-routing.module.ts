import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Hotels } from './model/hotels';
import { HotelsComponent } from './component/hotels/hotels.component';
import { HotelsCreaeditaComponent } from './component/hotels/hotels-creaedita/hotels-creaedita.component';
import { UsuarioComponent } from './component/usuario/usuario.component';
import { UsuarioCreaeditaComponent } from './component/usuario/usuario-creaedita/usuario-creaedita.component';

import { PlacesComponent } from './component/places/places.component';
import { placements } from '@popperjs/core';
import { EmpresaTransporteComponent } from './component/empresa-transporte/empresa-transporte.component';
import { Place } from './model/places';

import { EmpresatransporteCreaeditaComponent } from './component/empresa-transporte/empresatransporte-creaedita/empresatransporte-creaedita.component';
import { PlacesCreaeditaComponent } from './component/places/places-creaedita/places-creaedita.component';

import { LandingComponent } from './component/landing/landing.component';
import { EmpresaTransporteDialogoComponent } from './component/empresa-transporte/empresa-transporte-listar/empresa-transporte-dialogo/empresa-transporte-dialogo.component';

import { MenuComponent } from './menu/menu.component';

import { TravelComponent } from './component/travel/travel.component';
import { TravelCreaeditaComponent } from './component/travel/travel-creaedita/travel-creaedita.component';

import { ServiciosComponent } from './component/servicios/servicios.component';
import { ServiciosCreaeditaComponent } from './component/servicios/servicios-creaedita/servicios-creaedita.component';
import { PaqueteComponent } from './component/paquete/paquete.component';
import { PaqueteCreaeditaComponent } from './component/paquete/paquete-creaedita/paquete-creaedita.component';
import { ReservaComponent } from './component/reserva/reserva.component';
import { ReservaCreaeditaComponent } from './component/reserva/reserva-creaedita/reserva-creaedita.component';
import { InteresesComponent } from './component/intereses/intereses.component';
import { InteresesCreaEditaComponent } from './component/intereses/intereses-crea-edita/intereses-crea-edita.component';

import { ActividadComponent } from './component/actividad/actividad.component';
import { ActividadCreaeditaComponent } from './component/actividad/actividad-creaedita/actividad-creaedita.component';



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
      { path: 'edicion/:id', component: HotelsCreaeditaComponent },
    ],

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
    ],

  },
  {

    path: 'travel',
    component: TravelComponent,
    children: [
      {
        path: 'new',
        component: TravelCreaeditaComponent
      }
    ]
  },
  {

    path: 'servicios',
    component: ServiciosComponent,
    children: [

      { path: 'new', component: ServiciosCreaeditaComponent },
      { path: 'edicion/:id', component: ServiciosCreaeditaComponent },
    ],

  },
  {

    path: 'paquetes',
    component: PaqueteComponent,
    children: [
      {
        path: 'new',
        component: PaqueteCreaeditaComponent
      }

    ],

  },
  {

    path: 'reservas',
    component: ReservaComponent,
    children: [
      {
        path: 'new',
        component: ReservaCreaeditaComponent
      }
    ],

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
      ],
  },

        {
    path: 'actividades',
    component: ActividadComponent,
    children: [
      {
        path: 'new',
        component: ActividadCreaeditaComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
