import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-demande-rdv',
  templateUrl: './demande-rdv.component.html',
  styleUrls: ['./demande-rdv.component.css']
})
export class DemandeRdvComponent implements OnInit {
  rdvForm!: FormGroup;
  constructor(private fb: FormBuilder, private toastr: ToastrService) { 
    this.rdvForm = this.fb.group({
      date: new FormControl('', [Validators.required]),
      heure: new FormControl('', [Validators.required]), 
      comment: new FormControl('', [Validators.required]) 
    });
    

  }
 
  get f() { return this.rdvForm.controls; }
 

  ngOnInit(): void {
  }


  sendDemande(){
    let data = this.rdvForm.value;
    console.log("data is : "+JSON.stringify(data))
  }

}
