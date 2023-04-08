import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Hotels } from '../model/hotels';
import { HttpClient } from '@angular/common/http';
const base_url=environment.base

@Injectable({
  providedIn: 'root'
})
export class HotelsService {
  private url=`${base_url}/hotels`

  constructor(private http:HttpClient) { }
  list(){return this.http.get<Hotels[]>(this.url)}
}
