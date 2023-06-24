import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Servicios } from '../model/servicios';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';
import { serviciosHotel } from '../model/serviciosHotel';

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
findByHotelId(hotelId: number): Observable<Servicios[]> {
  const url = `${this.url}/hotels/${hotelId}`;
  return this.http.get<Servicios[]>(url);
}



<<<<<<< Updated upstream
=======
  setList(ListaNueva: Servicios[]) {
    this.listaCambio.next(ListaNueva);
  }

  getList() {
    return this.listaCambio.asObservable();
  }

  listId(id: number) {
    let token = sessionStorage.getItem('token');
    return this.http.get<Servicios>(`${this.url}/${id}`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  update(s: Servicios) {
    let token = sessionStorage.getItem('token');
    return this.http.put(this.url + '/' + s.idServicio, s, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  delete(id: number) {
    let token = sessionStorage.getItem('token');
    return this.http.delete(`${this.url}/${id}`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  getConfirmDelete() {
    return this.confirmarEliminacion.asObservable();
  }
  setConfirmDelete(estado: Boolean) {
    this.confirmarEliminacion.next(estado);
  }
  findByHotelId(hotelId: number): Observable<Servicios[]> {
    const url = `${this.url}/hotels/${hotelId}`;
    let token = sessionStorage.getItem('token');
    return this.http.get<Servicios[]>(url, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  getServicioCountByHotel():Observable<serviciosHotel[]>{
    let token = sessionStorage.getItem('token');
    return this.http.get<serviciosHotel[]>(`${this.url}/servicios-count`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    })

  }

>>>>>>> Stashed changes
}
