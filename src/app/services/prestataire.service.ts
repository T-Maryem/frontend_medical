import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PrestataireService {

  private urlAPI = "http://localhost:4026/sante/prestataire/";
  constructor(private http:HttpClient) { }

  getAllMedecins(){
    return this.http.get(this.urlAPI+"allMedecin");
  }

  getAll(){
    return this.http.get(this.urlAPI+"all");
  }

  getAllPrestataires(){
    return this.http.get(this.urlAPI+"allMedical");
  }

  getOne(id: number){
    return this.http.get<any>(this.urlAPI+"show/"+id);
  }

  add(data: any){
    return this.http.post(this.urlAPI+"add", data);
  }

  edit(data: any){
    return this.http.put(this.urlAPI+"edit", data);
  }

  traiter(data:any){
    return this.http.put(this.urlAPI+"valider", data);
  }

   
}