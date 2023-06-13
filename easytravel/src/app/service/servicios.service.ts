import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Servicios } from '../model/servicios';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

 const base_url=environment.base
@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  private url=`${base_url}/servicios`
  private confirmarEliminacion = new Subject<Boolean>()
  private listaCambio=new Subject<Servicios[]>();

  constructor(private http:HttpClient) { }
  list()
  {return this.http.get<Servicios[]>(this.url)}

insert(servicio:Servicios){
  return this.http.post(this.url,servicio)
}

setList(ListaNueva:Servicios[]){
this.listaCambio.next(ListaNueva)
}

getList(){
return this.listaCambio.asObservable();

}


listId(id: number) {
  return this.http.get<Servicios>(`${this.url}/${id}`);
}
update(s:Servicios){
  return this.http.put(this.url+"/"+s.idServicio,s);


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
