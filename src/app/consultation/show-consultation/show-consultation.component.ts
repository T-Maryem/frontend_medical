import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ConsultationService } from 'src/app/services/consultation.service';
import { OrdonnanceService } from 'src/app/services/ordonnance.service';
import { RendezVousService } from 'src/app/services/rendez-vous.service';

@Component({
  selector: 'app-show-consultation',
  templateUrl: './show-consultation.component.html',
  styleUrls: ['./show-consultation.component.css']
})
export class ShowConsultationComponent implements OnInit {
  diagnostic:string = "";
  desciption:string = "";
  infoRDV:any={}; 
  infoConusltation:any={}; 
  infoOrdonnace:any={};
  idR:any  ; 
  constructor(private apiOrd:OrdonnanceService, private apiCons: ConsultationService, private apiRDV: RendezVousService,
    private activateRoute:ActivatedRoute, private toastr: ToastrService) {
    this.idR = this.activateRoute.snapshot.paramMap.get('id') ;
    console.log("id is : "+this.idR)
   }

  ngOnInit(): void {
    this.apiRDV.getOne(this.idR).subscribe(res=>{
      this.infoRDV= res ;
    }, error=>{console.log("Erreur")})

    //get consultation
    this.apiCons.getOne(this.idR).subscribe(res=>{
      this.infoConusltation= res ;
    }, error=>{console.log("Erreur")})

      //get ordonnance
      this.apiOrd.getOne(this.idR).subscribe(res1=>{
        this.infoOrdonnace= res1 ;
      }, error=>{console.log("Erreur")})
  }




  saveOrdo(id:number){
    let data = {id:id, descrip:this.desciption};
    console.log("id is : "+JSON.stringify(data));
      this.apiOrd.edit(data).subscribe(ress=>{
        this.toastr.success('Ordonnance enregistrée avec succées', 'Sucess', { timeOut: 2000, });
      }, error=>{})    
  }

  saveCons(id:number){
    let data = {id:id, diagnostic:this.diagnostic};
    console.log("id is : "+JSON.stringify(data));
      this.apiCons.edit(data).subscribe(ress1=>{
        this.toastr.success('Consultation enregistrée avec succées', 'Sucess', { timeOut: 2000, });
      }, error=>{})    
  }
}
