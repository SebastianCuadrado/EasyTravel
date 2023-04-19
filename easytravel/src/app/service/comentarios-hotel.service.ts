import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Comentarios_Hotel } from '../model/comentarios_hotel';
const base_url=environment.base
@Injectable({
  providedIn: 'root'
})
export class ComentariosHotelService {
  private url=`${base_url}/Comentarios_Hotel`
  constructor(private http:HttpClient) { }
  list(){
    return this.http.get<Comentarios_Hotel[]>(this.url);
  }
}
