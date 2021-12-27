import { Component, OnInit } from '@angular/core';
import { MessagerieService } from 'src/app/services/messagerie.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-list-messages',
  templateUrl: './list-messages.component.html',
  styleUrls: ['./list-messages.component.css']
})
export class ListMessagesComponent implements OnInit {
  messages:any=[];
  idP:any;
  constructor(private service:MessagerieService, private toastr: ToastrService) { 
    this.idP = localStorage.getItem("IDU");
    
  }

  ngOnInit(): void {
    this.service.getMesagesRecus(this.idP).subscribe(res=>{
      this.messages = res ; 
    }, error=>{})
  }

  delete(id:number){
    this.service.remove(id).subscribe(res=>{
      this.toastr.success('Suppression Effcetuée avec succées', 'Sucess', { timeOut: 2000, });
      this.ngOnInit();
    }, error=>{})
  }

}
