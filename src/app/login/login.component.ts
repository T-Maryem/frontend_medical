import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EventsService } from '../services/events.service';
import { UserService } from '../services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder, private service: UserService, private router:Router, private events: EventsService,
    private toastr: ToastrService) { 
    this.loginForm = this.fb.group({
      login: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
    

  }
 
  get f() { return this.loginForm.controls; }
 

  ngOnInit(): void {
  }


  verifUser(){
    let data = this.loginForm.value;
    console.log("data is : "+JSON.stringify(data))
    this.service.checkUser(data).subscribe(res=>{
      if(res!=null){
        localStorage.setItem("IDU", res.id);
        localStorage.setItem("USER", res.nom+" "+res.prenom);
        localStorage.setItem("ROLE", res.role);
        this.events.publishSomeData("refresh");
        this.router.navigate([''])
      }else{
        this.toastr.error('Cordonnées Invalide', 'Erreur', { timeOut: 3000, });
        console.log("erreur res nul")
      }
    }, error=>{})
  }

}
