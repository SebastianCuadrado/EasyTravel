import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Hotels } from '../model/hotels';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';
const base_url = environment.base;

@Injectable({
  providedIn: 'root',
})
export class HotelsService {
  private url = `${base_url}/hotels`;
  private confirmarEliminacion = new Subject<Boolean>();
  private listaCambio = new Subject<Hotels[]>();
  constructor(private http: HttpClient) {}
  list() {
    let token = sessionStorage.getItem('token');
    return this.http.get<Hotels[]>(this.url, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  insert(hotels: Hotels) {
    let token = sessionStorage.getItem('token');
    return this.http.post(this.url, hotels, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  getHotels(id: number) {
    let token = sessionStorage.getItem('token');
    return this.http.get<Hotels>(`${this.url}/${id}`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  setList(ListaNueva: Hotels[]) {
    this.listaCambio.next(ListaNueva);
  }

  getList() {
    return this.listaCambio.asObservable();
  }

  listId(id: number) {
    let token = sessionStorage.getItem('token');
    return this.http.get<Hotels>(`${this.url}/${id}`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  update(h: Hotels) {
    let token = sessionStorage.getItem('token');
    return this.http.put(this.url + '/' + h.idHotels, h, {
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
}
