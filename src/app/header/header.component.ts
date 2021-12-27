import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { EventsService } from '../services/events.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
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
      }else if(localStorage.getItem("ROLE")=="PRESTATAIRE" || localStorage.getItem("ROLE")=="MEDECIN" ){
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
    }else if(localStorage.getItem("ROLE")=="PRESTATAIRE" || localStorage.getItem("ROLE")=="MEDECIN" ){
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
