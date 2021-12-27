export class Prestataire {
    constructor (
        private id?:number, 
        private nom?:string,
        private prenom?:string ,
        private email?:string,
        private login?:string,
        private role?:string,
        private sexe?:string,
        private tel?: number,
        private adresse?:string,
        private specialite?:string,
        private ville?:string, 
        private password?:string, 
        private etat?:string
  ){}
}