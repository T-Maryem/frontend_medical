import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private urlAPI = "http://localhost:4026/sante/patient/";
  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get(this.urlAPI+"all");
  }

  getOne(id: number){
    return this.http.get(this.urlAPI+"show/"+id);
  }
}
