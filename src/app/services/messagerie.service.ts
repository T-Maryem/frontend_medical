import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessagerieService {

  private urlAPI = "http://localhost:4026/sante/message/";
  constructor(private http:HttpClient) { }

  getMesagesRecus(id:number){
    return this.http.get(this.urlAPI+"allRecivedToUser/"+id);
  }

  getOne(id: number){
    return this.http.get(this.urlAPI+"show/"+id);
  }

  remove(id: number){
    return this.http.delete(this.urlAPI+"delete/"+id);
  }

}