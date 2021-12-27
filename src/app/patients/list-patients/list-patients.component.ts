import { Component, OnInit } from '@angular/core';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-list-patients',
  templateUrl: './list-patients.component.html',
  styleUrls: ['./list-patients.component.css']
})
export class ListPatientsComponent implements OnInit {
  patients:any=[];
  constructor(private service: PatientService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe(res=>{
      this.patients = res; 
    }, error=>{})
  }

}
