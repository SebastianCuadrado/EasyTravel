import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { environment } from "src/environments/environment";
import { Actividad } from "../model/actividad";
import { HttpClient } from "@angular/common/http";
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
    return this.http.get<Actividad[]>(this.url);
  }

  insert(actividad: Actividad) {
    return this.http.post(this.url, actividad);
  }

  setList(listaNueva: Actividad[]) {
    this.listaCambio.next(listaNueva);
  }

  getList() {
    return this.listaCambio.asObservable();
  }
}
