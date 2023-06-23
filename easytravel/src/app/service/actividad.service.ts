import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { environment } from "src/environments/environment";
import { Actividad } from "../model/actividad";
import { HttpClient, HttpHeaders } from "@angular/common/http";
const base_url = environment.base;

@Injectable({
  providedIn: 'root'
})

export class ActividadService {
  private url = `${base_url}/actividad`;
  private listaCambio = new Subject<Actividad[]>();

  constructor (private http: HttpClient) {

  }

  list() {
    let token = sessionStorage.getItem('token');
    return this.http.get<Actividad[]>(this.url, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  insert(actividad: Actividad) {
    let token = sessionStorage.getItem('token');
    return this.http.post(this.url, actividad, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  setList(listaNueva: Actividad[]) {
    this.listaCambio.next(listaNueva);
  }

  getList() {
    return this.listaCambio.asObservable();
  }
}
