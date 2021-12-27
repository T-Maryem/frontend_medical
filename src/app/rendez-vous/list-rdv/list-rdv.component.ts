import { Component, OnInit } from '@angular/core';
import { RendezVousService } from 'src/app/services/rendez-vous.service';

@Component({
  selector: 'app-list-rdv',
  templateUrl: './list-rdv.component.html',
  styleUrls: ['./list-rdv.component.css']
})
export class ListRdvComponent implements OnInit {
  rdvs:any=[];
  idP:any;
  isMedecin=false;
  constructor(private service:RendezVousService) { 
    this.idP = localStorage.getItem("IDU");
    if(localStorage.getItem("ROLE")=="MEDECIN"){
      this.isMedecin = true;
    }
    this.service.getRDVToUser(this.idP).subscribe(res=>{
      this.rdvs = res ; 
    }, error=>{})
  }

  ngOnInit(): void {
  }

}
