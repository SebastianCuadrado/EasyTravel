import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Empresa_Transporte } from '../model/Empresa_Transporte';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
const base_url=environment.base

@Injectable({
  providedIn: 'root'
})
export class EmpresaTransporteService {
  private url=`${base_url}/empresatransporte`
  private listaCambio=new Subject<Empresa_Transporte[]>();
  private confirmarEliminacion = new Subject<Boolean>()
    constructor(private http:HttpClient) { }
  list()
  {return this.http.get<Empresa_Transporte[]>(this.url)}

insert(empresa_transportes:Empresa_Transporte){
  return this.http.post(this.url,empresa_transportes)
}

setList(ListaNueva:Empresa_Transporte[]){
this.listaCambio.next(ListaNueva)
}

getList(){
return this.listaCambio.asObservable();

}
listId(id: number) {
  return this.http.get<Empresa_Transporte>(`${this.url}/${id}`);
}
update(e:Empresa_Transporte){
  return this.http.put(this.url,e);


}
delete(id: number) {
return this.http.delete(`${this.url}/${id}`)
}

getConfirmDelete(){
return this.confirmarEliminacion.asObservable();
}
setConfirmDelete(estado:Boolean){
this.confirmarEliminacion.next(estado);
}



}
