import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';
import { Reserva } from '../model/reserva';
import { HttpClient } from '@angular/common/http';
const base_url = environment.base;
@Injectable({
  providedIn: 'root'
})
export class ReservaService {
  private url = `${base_url}/reservas`;
  private listaCambio = new Subject<Reserva[]>();

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Reserva[]>(this.url);
  }

  insert(reserva: Reserva) {
    return this.http.post(this.url, reserva);
  }

  setList(listaNueva: Reserva[]) {
    this.listaCambio.next(listaNueva);
  }

  getList() {
    return this.listaCambio.asObservable();
  }
}
