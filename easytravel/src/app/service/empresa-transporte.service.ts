import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Empresa_Transporte } from '../model/Empresa_Transporte';
const base_url=environment.base
@Injectable({
  providedIn: 'root'
})
export class EmpresaTransporteService {
  private url=`${base_url}/Empresa_Transporte`

  constructor(private http:HttpClient) { }
  list(){
    return this.http.get<Empresa_Transporte[]>(this.url)
  }
}
