import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Usuario } from '../model/usuario';
import { Subject } from 'rxjs';
const base_url=environment.base

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private url=`${base_url}/usuarios`
  private confirmarEliminacion = new Subject<Boolean>()
  private listaCambio=new Subject<Usuario[]>();
  constructor(private http: HttpClient) { }
  list(){
    return this.http.get<Usuario[]>(this.url);
  }

  insert(usuario:Usuario){
    return this.http.post(this.url,usuario)
  }

  setList(ListaNueva:Usuario[]){
    this.listaCambio.next(ListaNueva)
    }

    getList(){
    return this.listaCambio.asObservable();
    }

    listId(id: number) {
      return this.http.get<Usuario>(`${this.url}/${id}`);
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
