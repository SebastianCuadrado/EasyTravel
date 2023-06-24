import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Notificacion } from '../model/notificacion';

const base_url = environment.base;
@Injectable({
  providedIn: 'root',
})
export class NotificacionService {
  private url = `${base_url}/notificacion`;
  private confirmarEliminacion = new Subject<Boolean>();
  private listaCambio = new Subject<Notificacion[]>();

  constructor(private http: HttpClient) {}
  list() {
    let token = sessionStorage.getItem('token');
    return this.http.get<Notificacion[]>(this.url, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  insert(intereses: Notificacion) {
    let token = sessionStorage.getItem('token');
    return this.http.post(this.url, intereses, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  setList(ListaNueva: Notificacion[]) {
    this.listaCambio.next(ListaNueva);
  }

  getList() {
    return this.listaCambio.asObservable();
  }

  update(n: Notificacion) {
    let token = sessionStorage.getItem('token');
    return this.http.put(this.url + '/' + n.idNotificacion, n, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  delete(idNotificacion: number) {
    let token = sessionStorage.getItem('token');
    return this.http.delete(`${this.url}/${idNotificacion}`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  getConfirmDelete() {
    return this.confirmarEliminacion.asObservable();
  }
  setConfirmDelete(estado: Boolean) {
    this.confirmarEliminacion.next(estado);
  }

  listId(idNotificacion: number) {
    let token = sessionStorage.getItem('token');
    return this.http.get<Notificacion>(`${this.url}/${idNotificacion}`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
}
