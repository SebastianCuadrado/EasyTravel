import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Intereses } from '../model/intereses';
const base_url=environment.base
@Injectable({
  providedIn: 'root'
})
export class InteresesService {
  private url=`${base_url}/intereses`
  private confirmarEliminacion = new Subject<Boolean>()
  private listaCambio=new Subject<Intereses[]>();

  constructor(private http:HttpClient) { }
  list()
  {return this.http.get<Intereses[]>(this.url)}

insert(intereses:Intereses){
  return this.http.post(this.url,intereses)
}

setList(ListaNueva:Intereses[]){
this.listaCambio.next(ListaNueva)
}

getList(){
return this.listaCambio.asObservable();

}


  update(i:Intereses){
    return this.http.put(this.url+"/"+i.idInteres,i);
  }
  delete(idInteres: number) {
    return this.http.delete(`${this.url}/${idInteres}`)
    }
    getConfirmDelete(){
      return this.confirmarEliminacion.asObservable();
      }
      setConfirmDelete(estado:Boolean){
      this.confirmarEliminacion.next(estado);
      }

      listId(idInteres: number) {
        return this.http.get<Intereses>(`${this.url}/${idInteres}`);
      }
}
