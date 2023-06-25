import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicios/api/api.service';
import { Router } from '@angular/router';
import { ListaSubcriptoresI } from 'src/app/modelos/listaSubcriptores.interface';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  subcriptores:ListaSubcriptoresI[] = [];
  constructor(private api:ApiService, private router:Router) {}
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
}
