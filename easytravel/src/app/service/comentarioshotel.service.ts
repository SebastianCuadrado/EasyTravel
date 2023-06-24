import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ComentariosHotel} from '../model/comentarioshotel';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const base_url = environment.base;@Injectable({
  providedIn: 'root'
})
export class ComentarioshotelService {
  private url = `${base_url}/comentariosHotel`;
  private listaCambio = new Subject<ComentariosHotel[]>();

  constructor(private http: HttpClient) {

  }

  list() {
    let token = sessionStorage.getItem('token');
    return this.http.get<ComentariosHotel[]>(this.url, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  insert(comentario: ComentariosHotel) {
    let token = sessionStorage.getItem('token');
    return this.http.post(this.url, comentario, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  setList(listaNueva: ComentariosHotel[]) {
    this.listaCambio.next(listaNueva);
  }

  getList() {
    return this.listaCambio.asObservable();
  }
  findByHotelId(hotelId: number): Observable<ComentariosHotel[]> {
    const url = `${this.url}/hotels/${hotelId}`;
    let token = sessionStorage.getItem('token');
    return this.http.get<ComentariosHotel[]>(url, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
}
