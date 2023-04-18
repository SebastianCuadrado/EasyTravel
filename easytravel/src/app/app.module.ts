import { NgModule } from '@angular/core';
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
import { EmpresaTransporteListarComponent } from './component/Empresa_Transporte/empresa-transporte-listar/empresa-transporte-listar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UsuarioCreaeditaComponent } from './component/usuario/usuario-creaedita/usuario-creaedita.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';



@NgModule({
  declarations: [
    AppComponent,
    HotelsComponent,
    HotelsListarComponent,
    HotelsCreaeditaComponent,
    UsuarioComponent,
    UsuarioListarComponent,
    PlacesComponent,
    PlacesListarComponent,
    PlacesCreaeditaComponent,
    UsuarioCreaeditaComponent,
    EmpresaTransporteComponent,
    EmpresaTransporteListarComponent
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
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
