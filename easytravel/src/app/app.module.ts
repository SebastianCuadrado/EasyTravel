import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule }from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HotelsComponent } from './component/hotels/hotels.component';
import { HotelsListarComponent } from './component/hotels/hotels-listar/hotels-listar.component';
import {MatTableModule} from '@angular/material/table';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HotelsCreaeditaComponent } from './component/hotels/hotels-creaedita/hotels-creaedita.component';
import {MatInputModule  } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { UsuarioComponent } from './component/usuario/usuario.component';
import { UsuarioListarComponent } from './component/usuario/usuario-listar/usuario-listar.component';
import { PlacesListarComponent } from './component/places/places-listar/places-listar.component';
import { PlacesComponent } from './component/places/places.component';
import { PlacesCreaeditaComponent } from './component/places/places-creaedita/places-creaedita.component';
import { EmpresaTransporteComponent } from './component/empresa-transporte/empresa-transporte.component';
import { EmpresaTransporteListarComponent } from './component/empresa-transporte/empresa-transporte-listar/empresa-transporte-listar.component';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { UsuarioCreaeditaComponent } from './component/usuario/usuario-creaedita/usuario-creaedita.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { EmpresatransporteCreaeditaComponent } from './component/empresa-transporte/empresatransporte-creaedita/empresatransporte-creaedita.component';
import { MenuComponent } from './menu/menu.component';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';

import { UsuarioDialogoComponent } from './component/usuario/usuario-dialogo/usuario-dialogo.component';
import { MatDialogModule } from '@angular/material/dialog'
import { PlacesDialogoComponent } from './component/places/places-listar/places-dialogo/places-dialogo.component';
import { HotelsDialogoComponent } from './component/hotels/hotels-listar/hotels-dialogo/hotels-dialogo.component';
import { EmpresaTransporteDialogoComponent } from './component/empresa-transporte/empresa-transporte-listar/empresa-transporte-dialogo/empresa-transporte-dialogo.component';
import { LandingComponent } from './component/landing/landing.component';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

import { TravelComponent } from './component/travel/travel.component';
import { TravelListarComponent } from './component/travel/travel-listar/travel-listar.component';
import { TravelCreaeditaComponent } from './component/travel/travel-creaedita/travel-creaedita.component';


import { DetallehotelComponent } from './component/detallehotel/detallehotel.component';
import { DetallehotelCreaeditaComponent } from './component/detallehotel/detallehotel-creaedita/detallehotel-creaedita.component';
import { ServiciosComponent } from './component/servicios/servicios.component';
import { ServiciosListarComponent } from './component/servicios/servicios-listar/servicios-listar.component';
import { ServiciosCreaeditaComponent } from './component/servicios/servicios-creaedita/servicios-creaedita.component';
import { ServiciosDialogoComponent } from './component/servicios/servicios-listar/servicios-dialogo/servicios-dialogo.component';

import { MatSelectModule } from '@angular/material/select';

import { DetallehotelListarComponent } from './component/detallehotel/detallehotel-listar/detallehotel-listar.component';
import { DetallehotelDialogoComponent } from './component/detallehotel/detallehotel-listar/detallehotel-dialogo/detallehotel-dialogo.component';
import { PaqueteComponent } from './component/paquete/paquete.component';
import { PaqueteListarComponent } from './component/paquete/paquete-listar/paquete-listar.component';
import { PaqueteCreaeditaComponent } from './component/paquete/paquete-creaedita/paquete-creaedita.component';
import { ReservaComponent } from './component/reserva/reserva.component';
import { ReservaListarComponent } from './component/reserva/reserva-listar/reserva-listar.component';
import { ReservaCreaeditaComponent } from './component/reserva/reserva-creaedita/reserva-creaedita.component';
import { InteresesComponent } from './component/intereses/intereses.component';
import { InteresesCreaEditaComponent } from './component/intereses/intereses-crea-edita/intereses-crea-edita.component';
import { InteresesListarComponent } from './component/intereses/intereses-listar/intereses-listar.component';
import { InteresesDialogoComponent } from './component/intereses/intereses-listar/intereses-dialogo/intereses-dialogo.component';



@NgModule({
  declarations: [
    AppComponent,
    HotelsComponent,
    HotelsListarComponent,
    HotelsCreaeditaComponent,
    UsuarioComponent,
    UsuarioListarComponent,
    UsuarioCreaeditaComponent,
    EmpresaTransporteComponent,
    EmpresaTransporteListarComponent,
    MenuComponent,
    PlacesComponent,
    PlacesListarComponent,
    PlacesCreaeditaComponent,
    PlacesDialogoComponent,
    UsuarioCreaeditaComponent,
    EmpresaTransporteComponent,
    EmpresaTransporteListarComponent,
    EmpresatransporteCreaeditaComponent,
    EmpresaTransporteDialogoComponent,

    UsuarioDialogoComponent,

    HotelsDialogoComponent,

    TravelComponent,
    TravelListarComponent,
    TravelCreaeditaComponent,



    LandingComponent,
      DetallehotelComponent,
      DetallehotelCreaeditaComponent,
      ServiciosComponent,
      ServiciosListarComponent,
      ServiciosCreaeditaComponent,
      ServiciosDialogoComponent,
      DetallehotelListarComponent,
      DetallehotelDialogoComponent,
      PaqueteComponent,
      PaqueteListarComponent,
      PaqueteCreaeditaComponent,
      ReservaComponent,
      ReservaListarComponent,
      ReservaCreaeditaComponent,
      InteresesComponent,
      InteresesCreaEditaComponent,
      InteresesListarComponent,
      InteresesDialogoComponent,
      




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
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
    MatSelectModule

  ],
  providers: [],
  bootstrap: [AppComponent],schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
