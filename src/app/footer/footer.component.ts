import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventsService } from '../services/events.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  isAdmin=false;  
  isPrestataire=false; 
  isConnected=false; 
 constructor(private router:Router, private events: EventsService) { 
   this.events.getObservable().subscribe((data) => {
     console.log("Data received-------------------:", data);
     if(localStorage.getItem("ROLE")=="ADMIN"){
       this.isAdmin=true;  
       this.isPrestataire=false; 
       this.isPrestataire=false; 
       this.isConnected=true; 
     }else if(localStorage.getItem("ROLE")=="PRESTATAIRE"){
       this.isAdmin=false;  
       this.isPrestataire=true;  
       this.isConnected=true; 
     }
   })
    if(localStorage.getItem("ROLE")=="ADMIN"){
     this.isAdmin=true;  
     this.isPrestataire=false; 
     this.isPrestataire=false; 
     this.isConnected=true; 
   }else if(localStorage.getItem("ROLE")=="PRESTATAIRE"){
     this.isAdmin=false;  
     this.isPrestataire=true;  
     this.isConnected=true; 
   }
 }

 ngOnInit(): void {
 }


 logout(){
   localStorage.removeItem("ROLE");
   localStorage.removeItem("IDU");
   localStorage.removeItem("USER");
   localStorage.clear();
   this.isConnected=false; 
   this.router.navigate(['login']);
 }
}
