import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../../servicios/api/api.service';
import { LoginI } from '../../modelos/login.interface';
import { Router } from '@angular/router';
import { ResponseI } from 'src/app/modelos/response.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   loginForm = new FormGroup({
    usuario: new FormControl('usuario1@gmail.com', Validators.required),
    password: new FormControl('123456', Validators.required)
   })
  constructor( private api:ApiService, private router:Router){}
  errorStatus:boolean = false;
  errorMsj:any = "";

  ngOnInit():void {
    this.checkLocalStorage();
  }
  checkLocalStorage(){
    if(localStorage.getItem('token')){
      this.router.navigate(['dashboard']);
    }
  }

  onLogin(form:any){
  console.log(form);
  this.api.loginByEmail(form).subscribe(data =>{
    console.log(data);
    let dataResponse:ResponseI = data;
    if (dataResponse.status == "ok") {
        localStorage.setItem("token", dataResponse.result.token);
        this.router.navigate(['dashboard']);
    }else{
      this.errorStatus = true;
      this.errorMsj = dataResponse.result.error_msg;
    }
  })

   }
}
