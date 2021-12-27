import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RendezVousService {

  private urlAPI = "http://localhost:4026/sante/rdv/";
  constructor(private http:HttpClient) { }

  getDemandesToUser(id:number){
    return this.http.get(this.urlAPI+"allDMDRecusToUser/"+id);
  }

  getRDVToUser(id:number){
    return this.http.get(this.urlAPI+"allRDVRecusToUser/"+id);
  }

  getOne(id: number){
    return this.http.get(this.urlAPI+"show/"+id);
  }

  traiter(data: any){
    return this.http.put(this.urlAPI+"valider", data);
  }
}