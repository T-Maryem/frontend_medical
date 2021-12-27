import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Prestataire } from 'src/app/models/prestataire';
import { PrestataireService } from 'src/app/services/prestataire.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  profileForm!: FormGroup;
  idP:any;
  constructor(private fb: FormBuilder, private service: PrestataireService, private toastr: ToastrService) { 
    this.idP = localStorage.getItem("IDU");
    this.profileForm = this.fb.group({
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
    });
    

  }
 
  get f() { return this.profileForm.controls; }
 

  ngOnInit(): void {
    this.service.getOne(this.idP).subscribe(res=>{
      let p = res ; 
      this.profileForm.patchValue({
        nom: p.nom,
        prenom: p.prenom,
        mail: p.email,
        tel: p.tel,
        sexe: p.sexe,
        ville: p.ville,
        adresse: p.adresse,
        specialite: p.specialite,
        login: p.login,
        password: p.password,
      })
    }, error=>{})
  }
 

  save(){
    let data = this.profileForm.value;
    console.log("data is : "+JSON.stringify(data))
    //champ role yo5eth ya prestatair ya medecin 
    let user = new Prestataire(this.idP, data.nom, data.prenom, data.mail, data.login, "PRESTATAIRE", data.sexe, data.tel, data.adresse, data.specialite, data.ville, data.password );
    this.service.edit(user).subscribe(res=>{
      this.toastr.success('Modification Effcetuée avec succées', 'Sucess', { timeOut: 2000, });
        // succes edit
    }, error=>{ })
  }

}
