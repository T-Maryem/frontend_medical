import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConsultationService {
 
  private urlAPI = "http://localhost:4026/sante/consultation/";
  constructor(private http:HttpClient) { }
 


  edit(data:any){
    return this.http.put(this.urlAPI+"edit", data);
  }
  
  getOne(id: number){
    return this.http.get(this.urlAPI+"show/"+id);
  }
}
