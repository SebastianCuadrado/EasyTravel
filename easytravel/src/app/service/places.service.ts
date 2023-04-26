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
  private confirmarEliminacion = new Subject<Boolean>()
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
  listId(id: number) {
    return this.http.get<Place>(`${this.url}/${id}`);
  }
  update(plc: Place) {
    return this.http.put(this.url + "/" + plc.idPlace, plc);
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`)
  }

  getConfirmDelete(){
    return this.confirmarEliminacion.asObservable();
  }
  setConfirmDelete(estado:Boolean){
    this.confirmarEliminacion.next(estado);
  }
}
