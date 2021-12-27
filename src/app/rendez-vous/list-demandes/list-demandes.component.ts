import { Component, OnInit } from '@angular/core';
import { RendezVousService } from 'src/app/services/rendez-vous.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-list-demandes',
  templateUrl: './list-demandes.component.html',
  styleUrls: ['./list-demandes.component.css']
})
export class ListDemandesComponent implements OnInit {
  dmds:any=[];
  idP:any;
  constructor(private service:RendezVousService, private toastr: ToastrService) { 
    this.idP = localStorage.getItem("IDU");
    
  }

  ngOnInit(): void {
    this.service.getDemandesToUser(this.idP).subscribe(res=>{
      this.dmds = res ; 
    }, error=>{})
  }

  traiter(idRDV:number, action:string){ 
    let data = {id:idRDV, etat:action}
    this.service.traiter(data).subscribe(res=>{
      this.toastr.success('Validation Effcetuée avec succées', 'Sucess', { timeOut: 2000, });
        this.ngOnInit();
    }, error=>{})
  }

}
