import { Injectable } from '@angular/core';
import { LoginI } from 'src/app/modelos/login.interface';
import { ResponseI } from 'src/app/modelos/response.interface';
import { ListaSubcriptoresI } from 'src/app/modelos/listaSubcriptores.interface';
import { SubscriptorI } from 'src/app/modelos/subscriptor.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // Api de prueba mientras tanto
  url:string = "https://api.solodata.es/";
  // url:string = "https://lab.app.invertebrado.co/api/";


  constructor(private http:HttpClient) { }
  loginByEmail(form:LoginI):Observable<ResponseI>{
    let direccion = this.url + "auth";
    return this.http.post<ResponseI>(direccion,form)
  }
  getAllSubscribers(page:number):Observable<ListaSubcriptoresI[]>{
    let direccion = this.url + "pacientes?page=" + page;
    return this.http.get<ListaSubcriptoresI[]>(direccion);
  }
  getSingleSubscribers(id:unknown):Observable<SubscriptorI>{
    let direccion = this.url + "pacientes?id=" + id;
    return this.http.get<SubscriptorI>(direccion)
  }
  putSubscribers(form:SubscriptorI):Observable<ResponseI>{
    let direccion = this.url + "pacientes";
    return this.http.put<ResponseI>(direccion, form)
  }
  deleteSubscribers(form:SubscriptorI):Observable<ResponseI>{
    let direccion = this.url + "pacientes";
    let Options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body:form
    }
    return this.http.delete<ResponseI>(direccion, Options)
  }
  postSubscribers(form:SubscriptorI):Observable<ResponseI>{
    let direccion = this.url + "pacientes";
    return this.http.post<ResponseI>(direccion,form)
  }

}
