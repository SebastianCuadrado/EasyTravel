import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';
import { DetalleHotel } from '../model/detallehotel';
import { HttpClient } from '@angular/common/http';
const base_url=environment.base
@Injectable({
  providedIn: 'root'
})
export class DetallehotelService {
  private url=`${base_url}/detallehotel`
  private confirmarEliminacion = new Subject<Boolean>()
  private listaCambio=new Subject<DetalleHotel[]>();

  constructor(private http:HttpClient) { }
  list()
  {return this.http.get<DetalleHotel[]>(this.url)}

insert(hotels:DetalleHotel){
  return this.http.post(this.url,hotels)
}

setList(ListaNueva:DetalleHotel[]){
this.listaCambio.next(ListaNueva)
}

getList(){
return this.listaCambio.asObservable();

}


  update(dh:DetalleHotel){
    return this.http.put(this.url+"/"+dh.idDetalle,dh);


  }
  delete(idDetalle: number) {
    return this.http.delete(`${this.url}/${idDetalle}`)
    }
    getConfirmDelete(){
      return this.confirmarEliminacion.asObservable();
      }
      setConfirmDelete(estado:Boolean){
      this.confirmarEliminacion.next(estado);
      }

      listId(idDetalle: number) {
        return this.http.get<DetalleHotel>(`${this.url}/${idDetalle}`);
      }
}
