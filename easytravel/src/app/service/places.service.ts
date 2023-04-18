import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Place } from '../model/places';
import { Subject } from 'rxjs';
const base_url = environment.base;

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private url = `${base_url}/places`;
  private listaCambio = new Subject<Place[]>();

  constructor(private http: HttpClient) {}
  list() {
    return this.http.get<Place[]>(this.url);
  }
  insert(place: Place) {
    return this.http.post(this.url, place);
  }
  setList(ListaNueva: Place[]) {
    this.listaCambio.next(ListaNueva);
  }
  getList() {
    return this.listaCambio.asObservable();
  }
}
