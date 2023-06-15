import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Notificacion } from '../model/notificacion';

const base_url=environment.base
@Injectable({
  providedIn: 'root'
})
export class NotificacionService {
  private url=`${base_url}/notificacion`
  private confirmarEliminacion = new Subject<Boolean>()
  private listaCambio=new Subject<Notificacion[]>();

  constructor(private http:HttpClient) { }
  list()
  {return this.http.get<Notificacion[]>(this.url)}

insert(intereses:Notificacion){
  return this.http.post(this.url,intereses)
}

setList(ListaNueva:Notificacion[]){
this.listaCambio.next(ListaNueva)
}

getList(){
return this.listaCambio.asObservable();

}


  update(n:Notificacion){
    return this.http.put(this.url+"/"+n.idNotificacion,n);
  }
  delete(idNotificacion: number) {
    return this.http.delete(`${this.url}/${idNotificacion}`)
    }
    getConfirmDelete(){
      return this.confirmarEliminacion.asObservable();
      }
      setConfirmDelete(estado:Boolean){
      this.confirmarEliminacion.next(estado);
      }

      listId(idNotificacion: number) {
        return this.http.get<Notificacion>(`${this.url}/${idNotificacion}`);
      }
}
