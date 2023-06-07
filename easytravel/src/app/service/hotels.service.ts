import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Hotels } from '../model/hotels';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
const base_url=environment.base

@Injectable({
  providedIn: 'root'
})
export class HotelsService {
  private url=`${base_url}/hotels`
  private confirmarEliminacion = new Subject<Boolean>()
  private listaCambio=new Subject<Hotels[]>();
    constructor(private http:HttpClient) { }
  list()
  {return this.http.get<Hotels[]>(this.url)}

insert(hotels:Hotels){
  return this.http.post(this.url,hotels)
}

setList(ListaNueva:Hotels[]){
this.listaCambio.next(ListaNueva)
}

getList(){
return this.listaCambio.asObservable();

}


listId(id: number) {
  return this.http.get<Hotels>(`${this.url}/${id}`);
}
update(h:Hotels){
  return this.http.put(this.url+"/"+h.idHotels,h);


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

