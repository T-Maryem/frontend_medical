import { Component, OnInit } from '@angular/core';
import { PrestataireService } from 'src/app/services/prestataire.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-list-medecins',
  templateUrl: './list-medecins.component.html',
  styleUrls: ['./list-medecins.component.css']
})
export class ListMedecinsComponent implements OnInit {
  medecins:any=[];
  constructor(private service: PrestataireService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.getAllMedecins().subscribe(res=>{
      this.medecins = res; 
    }, error=>{})
  }

  traiter(idPrest:number, action:string){ 
    let data = {id:idPrest, etat:action}
    this.service.traiter(data).subscribe(res=>{
      this.toastr.success('Validation Effcetuée avec succées', 'Sucess', { timeOut: 2000, });
        this.ngOnInit();
    }, error=>{})
  }

}
