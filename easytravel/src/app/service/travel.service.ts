import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';
import { Travel } from '../model/travel';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const base_url = environment.base;

@Injectable({
  providedIn: 'root'
})

export class TravelService {
  private url = `${base_url}/viaje`;
  private listaCambio = new Subject<Travel[]>();

  constructor(private http: HttpClient) {

  }

  list() {
    let token = sessionStorage.getItem('token');
    return this.http.get<Travel[]>(this.url, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  insert(travel: Travel) {
    let token = sessionStorage.getItem('token');
    return this.http.post(this.url, travel, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  setList(listaNueva: Travel[]) {
    this.listaCambio.next(listaNueva);
  }

  getList() {
    return this.listaCambio.asObservable();
  }
}
