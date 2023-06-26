import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Place } from '../model/places';
import { Subject } from 'rxjs';
import { PlacePaqueteReservaDTO } from '../model/PlacePaqueteReservaDTO';
const base_url = environment.base;

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private url = `${base_url}/places`;
  private confirmarEliminacion = new Subject<Boolean>()
  private listaCambio = new Subject<Place[]>();

  constructor(private http: HttpClient) {}
  list() {
    let token = sessionStorage.getItem('token');
    return this.http.get<Place[]>(this.url, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  insert(places: Place) {
    let token = sessionStorage.getItem('token');
    return this.http.post(this.url, places, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  setList(ListaNueva: Place[]) {
    this.listaCambio.next(ListaNueva);
  }
  getList() {
    return this.listaCambio.asObservable();
  }
  listId(id: number) {
    let token = sessionStorage.getItem('token');
    return this.http.get<Place>(`${this.url}/${id}`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  update(plc: Place) {
    let token = sessionStorage.getItem('token');
    return this.http.put(this.url, plc, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  delete(id: number) {
    let token = sessionStorage.getItem('token');
    return this.http.delete(`${this.url}/${id}`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    })
  }

  getConfirmDelete(){
    return this.confirmarEliminacion.asObservable();
  }
  setConfirmDelete(estado:Boolean){
    this.confirmarEliminacion.next(estado);
  }

  getQuantityofPlaces() {
    let token = sessionStorage.getItem('token');
    return this.http.get<PlacePaqueteReservaDTO[]>(`${this.url}/busqueda`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    })
  }
}
