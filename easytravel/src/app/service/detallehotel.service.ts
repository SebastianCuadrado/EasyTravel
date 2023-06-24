import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';
import { DetalleHotel } from '../model/detallehotel';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const base_url = environment.base;
@Injectable({
  providedIn: 'root',
})
export class DetallehotelService {
  private url = `${base_url}/detallehotel`;
  private confirmarEliminacion = new Subject<Boolean>();
  private listaCambio = new Subject<DetalleHotel[]>();

  constructor(private http: HttpClient) {}
  list() {
    let token = sessionStorage.getItem('token');
    return this.http.get<DetalleHotel[]>(this.url, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  insert(hotels: DetalleHotel) {
    let token = sessionStorage.getItem('token');
    return this.http.post(this.url, hotels, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  setList(ListaNueva: DetalleHotel[]) {
    this.listaCambio.next(ListaNueva);
  }

  getList() {
    return this.listaCambio.asObservable();
  }

  update(dh: DetalleHotel) {
    let token = sessionStorage.getItem('token');
    return this.http.put(this.url + '/' + dh.idDetalle, dh, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  delete(idDetalle: number) {
    let token = sessionStorage.getItem('token');
    return this.http.delete(`${this.url}/${idDetalle}`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  getConfirmDelete() {
    return this.confirmarEliminacion.asObservable();
  }
  setConfirmDelete(estado: Boolean) {
    this.confirmarEliminacion.next(estado);
  }

  listId(idDetalle: number) {
    let token = sessionStorage.getItem('token');
    return this.http.get<DetalleHotel>(`${this.url}/${idDetalle}`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
}
