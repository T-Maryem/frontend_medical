import { Component, OnInit } from '@angular/core';
import { PrestataireService } from 'src/app/services/prestataire.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-list-prestataires',
  templateUrl: './list-prestataires.component.html',
  styleUrls: ['./list-prestataires.component.css']
})
export class ListPrestatairesComponent implements OnInit {
  prestataires:any=[];
  constructor(private service: PrestataireService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.getAllPrestataires().subscribe(res=>{
      this.prestataires = res; 
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
