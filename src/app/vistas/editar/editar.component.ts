import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/servicios/api/api.service';
import { AlertasService } from 'src/app/servicios/alertas/alertas.service';
import { ResponseI } from 'src/app/modelos/response.interface';
import { SubscriptorI } from 'src/app/modelos/subscriptor.interface';
import { FormGroup,FormControl,Validators } from '@angular/forms';
@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  constructor(private activerouter:ActivatedRoute, private router:Router, private api:ApiService, private alertas:AlertasService){}

  // datosSubscriptor!:SubscriptorI;
  // editarForm = new FormGroup({
  //   nombre: new FormControl(''),
  //   correo: new FormControl(''),
  //   dni: new FormControl(''),
  //   direccion: new FormControl(''),
  //   codigoPostal: new FormControl(''),
  //   genero: new FormControl(''),
  //   telefono: new FormControl(''),
  //   token: new FormControl(''),
  //   pacienteId: new FormControl(''),
  //   fechaNacimiento: new FormControl('')
  // });

   ngOnInit(): void {
  //   let pacienteid = this.activerouter.snapshot.paramMap.get('id');
  //   let token = this.getToken();
  //   this.api.getSingleSubscribers(pacienteid).subscribe(data =>{
  //     console.log(data);
  //     // this.datosSubscriptor = data[0];
  //     if (Array.isArray(data) && data.length > 0) {
  //       this.datosSubscriptor = data[0];
  //     }
  //     this.editarForm.setValue({
  //       'nombre': this.datosSubscriptor.Nombre,
  //       'correo': this.datosSubscriptor.Correo,
  //       'dni': this.datosSubscriptor.DNI,
  //       'direccion': this.datosSubscriptor.Direccion,
  //       'codigoPostal': this.datosSubscriptor.CodigoPostal,
  //       'genero': this.datosSubscriptor.Genero,
  //       'telefono': this.datosSubscriptor.Telefono,
  //       'token': token,
  //       'pacienteId': pacienteid,
  //       'fechaNacimiento': this.datosSubscriptor.FechaNacimiento
  //     })
  //     // console.log(this.editarForm.value);

  //   })
   }
  // getToken(){
  //   return localStorage.getItem('token');
  // }
  // postForm(form:any){
  //   this.api.putSubscribers(form).subscribe(data =>{
  //    let respuesta:ResponseI = data;
  //    if (respuesta.status == "ok") {
  //     this.alertas.showSuccess('Subscriptor modificados','Hecho');
  //     this.router.navigate(['dashboard']);
  //    }else{
  //     this.alertas.showError(respuesta.result.error_msg, 'Error');
  //    }
  //   })
  // }
  // eliminar(){
  //   let datos:any = this.editarForm.value;
  //   this.api.deleteSubscribers(datos).subscribe(data =>{
  //     let respuesta:ResponseI = data;
  //     if (respuesta.status == "ok") {
  //       this.alertas.showSuccess('Subscriptor eliminado','Hecho');
  //       this.router.navigate(['dashboard']);
  //     }else{
  //       this.alertas.showError(respuesta.result.error_msg, 'Error');
  //     }
  //   })
  // }
  // confirmarEliminar(){
  //   if (window.confirm("¿Estás seguro de que deseas eliminar el suscriptor?")) {
  //     this.eliminar();
  //   }
  // }
  // salir(){
  //   this.router.navigate(['dashboard']);
  // }
}
