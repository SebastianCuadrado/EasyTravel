import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable,Subject } from 'rxjs';
import { Reserva } from '../model/reserva';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { hotelReservas } from '../model/hotelReservas';

const base_url = environment.base;
@Injectable({
  providedIn: 'root'
})
export class ReservaService {
  private url = `${base_url}/reservas`;
  private listaCambio = new Subject<Reserva[]>();

  constructor(private http: HttpClient) { }

  list() {
    let token = sessionStorage.getItem('token');
    return this.http.get<Reserva[]>(this.url, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  insert(reserva: Reserva) {
    let token = sessionStorage.getItem('token');
    return this.http.post(this.url, reserva, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  setList(listaNueva: Reserva[]) {
    this.listaCambio.next(listaNueva);
  }

  getList() {
    return this.listaCambio.asObservable();
  }

  getReservasCountByHotel():Observable<hotelReservas[]>{
    return this.http.get<hotelReservas[]>(`${this.url}/hotels-count`);
  }
}
