import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Hotels } from './model/hotels';
import { HotelsComponent } from './component/hotels/hotels.component';
import { HotelsCreaeditaComponent } from './component/hotels/hotels-creaedita/hotels-creaedita.component';
import { UsuarioComponent } from './component/usuario/usuario.component';
import { UsuarioCreaeditaComponent } from './component/usuario/usuario-creaedita/usuario-creaedita.component';
import { EmpresaTransporteComponent } from './component/empresa-transporte/empresa-transporte.component';
import { EmpresatransporteCreaeditaComponent } from './component/empresatransporte-creaedita/empresatransporte-creaedita.component';

const routes: Routes = [
  {
    path: 'hotels',
    component: HotelsComponent,
    children: [{ path: 'new', component: HotelsCreaeditaComponent }],

  },
  {
    path: 'usuario',
    component: UsuarioComponent,
    children: [{ path: 'new', component: UsuarioCreaeditaComponent }],
  },
  {
    path: 'empresa_transportes',
    component: EmpresaTransporteComponent,
    children: [{ path: 'new', component:EmpresatransporteCreaeditaComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
