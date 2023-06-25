import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { ResponseI } from 'src/app/modelos/response.interface';
import { SubscriptorI } from 'src/app/modelos/subscriptor.interface';
import { ApiService } from 'src/app/servicios/api/api.service';
import { AlertasService } from 'src/app/servicios/alertas/alertas.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {
  nuevoForm = new FormGroup({
    Name: new FormControl('', Validators.required),
    Email: new FormControl('', [Validators.required, Validators.email]),
    CountryCode: new FormControl('', Validators.required),
    PhoneNumber: new FormControl('', [Validators.required, Validators.minLength(10)]),
    JobTitle: new FormControl('', Validators.required),
    token: new FormControl('', Validators.required)
    // pacienteId: new FormControl('', Validators.required),
  })
  constructor(private api:ApiService, private router:Router, private alert:AlertasService){}
  ngOnInit(): void {
    let token = localStorage.getItem('token');
    this.nuevoForm.patchValue({
      'token': token
    });
  }
  postForm(form:any){
    console.log(form);
    this.api.postSubscribers(form).subscribe(data =>{
      console.log(data);
    });
  }
  salir(){
    this.router.navigate(['dashboard']);
  }
}
