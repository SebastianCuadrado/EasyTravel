import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';
import { Travel } from '../model/travel';
import { HttpClient } from '@angular/common/http';
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
    return this.http.get<Travel[]>(this.url);
  }

  insert(travel: Travel) {
    return this.http.post(this.url, travel);
  }

  setList(listaNueva: Travel[]) {
    this.listaCambio.next(listaNueva);
  }

  getList() {
    return this.listaCambio.asObservable();
  }
}
