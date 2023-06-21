import { Injectable } from '@angular/core';
import { LoginI } from 'src/app/modelos/login.interface';
import { ResponseI } from 'src/app/modelos/response.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url:string = "https://lab.app.invertebrado.co/api/";

  constructor(private http:HttpClient) { }
  loginByEmail(form:LoginI):Observable<ResponseI>{
    let direccion = this.url + "account/login/";
    return this.http.post<ResponseI>(direccion,form)
  }
}
