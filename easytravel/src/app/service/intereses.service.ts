import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable ,Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Intereses } from '../model/intereses';
import { UsuarioInteresesDTO } from '../model/UsuarioInteresesDTO';
const base_url = environment.base;
@Injectable({
  providedIn: 'root',
})
export class InteresesService {
  private url = `${base_url}/intereses`;
  private confirmarEliminacion = new Subject<Boolean>();
  private listaCambio = new Subject<Intereses[]>();

  constructor(private http: HttpClient) {}
  list() {
    let token = sessionStorage.getItem('token');
    return this.http.get<Intereses[]>(this.url, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  insert(intereses: Intereses) {
    let token = sessionStorage.getItem('token');
    return this.http.post(this.url, intereses, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  setList(ListaNueva: Intereses[]) {
    this.listaCambio.next(ListaNueva);
  }

  getList() {
    return this.listaCambio.asObservable();
  }

  update(i: Intereses) {
    let token = sessionStorage.getItem('token');
    return this.http.put(this.url + '/' + i.idInteres, i, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  delete(idInteres: number) {
    let token = sessionStorage.getItem('token');
    return this.http.delete(`${this.url}/${idInteres}`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  getConfirmDelete() {
    return this.confirmarEliminacion.asObservable();
  }
  setConfirmDelete(estado: Boolean) {
    this.confirmarEliminacion.next(estado);
  }

  listId(idInteres: number) {
    let token = sessionStorage.getItem('token');
    return this.http.get<Intereses>(`${this.url}/${idInteres}`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  getInteresesCountByUser(): Observable<UsuarioInteresesDTO[]> {
    return this.http.get<UsuarioInteresesDTO[]>(`${this.url}/intereses-count`);
  }

}

