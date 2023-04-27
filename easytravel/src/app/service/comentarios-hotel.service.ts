import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Comentarios_Hotel } from '../model/comentarios_hotel';
import { Subject } from 'rxjs';
const base_url=environment.base
@Injectable({
  providedIn: 'root'
})
export class ComentariosHotelService {
  private url = `${base_url}/Comentarios_Hotel`
  private listaCambio = new Subject<Comentarios_Hotel[]>();
  constructor(private http:HttpClient) { }
  list(){
    return this.http.get<Comentarios_Hotel[]>(this.url);
  }
  insert(comentarios_hotel:Comentarios_Hotel){
    return this.http.post(this.url,comentarios_hotel);
  }
  setList(ListaNueva:Comentarios_Hotel[]){
    this.listaCambio.next(ListaNueva);
  }
  getList(){
    return this.listaCambio.asObservable();
  }
}
