import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicios/api/api.service';
import { Router } from '@angular/router';
import { ListaSubcriptoresI } from 'src/app/modelos/listaSubcriptores.interface';
import { ResponseI } from 'src/app/modelos/response.interface';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { AlertasService } from 'src/app/servicios/alertas/alertas.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  subcriptores:ListaSubcriptoresI[] = [];
  editarForm = new FormGroup({
    nombre: new FormControl(''),
    correo: new FormControl(''),
    dni: new FormControl(''),
    direccion: new FormControl(''),
    codigoPostal: new FormControl(''),
    genero: new FormControl(''),
    telefono: new FormControl(''),
    token: new FormControl(''),
    pacienteId: new FormControl(''),
    fechaNacimiento: new FormControl('')
  });
  constructor(private api:ApiService, private router:Router,  private alertas:AlertasService) {}
  ngOnInit(): void {
    this.api.getAllSubscribers(1).subscribe(data=>{
      console.log(data);
      this.subcriptores = data;
    })
  }
  editarSubcriptor(id:any){
    this.router.navigate(['editar', id])
    console.log(id);
  }
  nuevoSubcriptor(){
    this.router.navigate(['nuevo'])
  }
  eliminar(){
    let datos:any = this.editarForm.value;
    this.api.deleteSubscribers(datos).subscribe(data =>{
      let respuesta:ResponseI = data;
      if (respuesta.status == "ok") {
        this.alertas.showSuccess('Subscriptor eliminado','Hecho');
        this.router.navigate(['dashboard']);
      }else{
        this.alertas.showError(respuesta.result.error_msg, 'Error');
      }
    })
  }
  confirmarEliminar(){
    if (window.confirm("¿Estás seguro de que deseas eliminar el suscriptor?")) {
      this.eliminar();
    }
  }
}
