import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';
import { Paquete } from '../model/paquete';
import { HttpClient } from '@angular/common/http';
const base_url = environment.base;

@Injectable({
  providedIn: 'root'
})
export class PaqueteService {
  private url = `${base_url}/paquetes`;
  private listaCambio = new Subject<Paquete[]>();

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Paquete[]>(this.url);
  }

  insert(paquete: Paquete) {
    return this.http.post(this.url, paquete);
  }

  setList(listaNueva: Paquete[]) {
    this.listaCambio.next(listaNueva);
  }

  getList() {
    return this.listaCambio.asObservable();
  }
}
