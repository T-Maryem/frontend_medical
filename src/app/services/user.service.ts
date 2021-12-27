import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private urlAPI = "http://localhost:4026/sante/user/";
  constructor(private http:HttpClient) { }

   

  checkUser(data: any){
    return this.http.post<any>(this.urlAPI+"login", data);
  }
}