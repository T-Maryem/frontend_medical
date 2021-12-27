import { LoginComponent } from "../login/login.component";

export class Patient {

    constructor(
        private id?:number, 
        private nom?:string,
        private prenom?:string ,
        private email?:string,
        private login?:string,
        private role?:string,
        private sexe?:string,
        private tel?: number,
        private dateCreation?:Date 

             
    ){}
}
