export class Messagerie {
    constructor (
        private id?:number,  
        private contenue?:string,
        private date_envoie?:Date,
        private sujet?:string,
        private expiditeur?:number,
        private recepteur?:number,
     
  ) {}
}
