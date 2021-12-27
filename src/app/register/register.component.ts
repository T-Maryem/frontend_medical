import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Prestataire } from '../models/prestataire';
import { PrestataireService } from '../services/prestataire.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  constructor(private fb: FormBuilder, private service: PrestataireService, private toastr: ToastrService) { 
    this.registerForm = this.fb.group({
      nom: new FormControl('', [Validators.required]),
      prenom: new FormControl('', [Validators.required]),
      mail: new FormControl('', [Validators.required, Validators.email]),
      tel: new FormControl('', [Validators.required, Validators.pattern("[0-9]+"),Validators.minLength(8), Validators.maxLength(8)]),
      sexe: new FormControl('', [Validators.required]),
      ville: new FormControl('', [Validators.required]),
      adresse: new FormControl('', [Validators.required]),
      specialite: new FormControl('', [Validators.required]),
      login: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      type: new FormControl('', [Validators.required]),
    });
    

  }
 
  get f() { return this.registerForm.controls; }
 

  ngOnInit(): void {
  }
 

  save(){
    let data = this.registerForm.value;
    console.log("data is : "+JSON.stringify(data))
    //champ role yo5eth ya prestatair ya medecin 
    let user = new Prestataire(0, data.nom, data.prenom, data.mail, data.login, data.type, data.sexe, data.tel, data.adresse, data.specialite, data.ville, data.password, "En Attente" );
    this.service.add(user).subscribe(res=>{ this.registerForm.reset();
      this.toastr.success('Inscription Effcetuée avec succées', 'Sucess', { timeOut: 2000, });
        // succes ajout
    }, error=>{ })
  }

}
