import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Empresa_Transporte } from '../model/Empresa_Transporte';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';
const base_url = environment.base;

@Injectable({
  providedIn: 'root',
})
export class EmpresaTransporteService {
  private url = `${base_url}/empresatransporte`;
  private listaCambio = new Subject<Empresa_Transporte[]>();
  private confirmarEliminacion = new Subject<Boolean>();
  constructor(private http: HttpClient) {}
  list() {
    let token = sessionStorage.getItem('token');
    return this.http.get<Empresa_Transporte[]>(this.url, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  insert(empresa_transportes: Empresa_Transporte) {
    let token = sessionStorage.getItem('token');
    return this.http.post(this.url, empresa_transportes, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  setList(ListaNueva: Empresa_Transporte[]) {
    this.listaCambio.next(ListaNueva);
  }

  getList() {
    return this.listaCambio.asObservable();
  }
  listId(id: number) {
    let token = sessionStorage.getItem('token');
    return this.http.get<Empresa_Transporte>(`${this.url}/${id}`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  update(e: Empresa_Transporte) {
    let token = sessionStorage.getItem('token');
    return this.http.put(this.url, e, {
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
