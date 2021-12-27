export class Ordonnance {
    constructor (
        private id?:number,  
        private date_ordo?:Date,
        private description?:string,
        private observation?:string,
        private consultation?:number,
  ){}
}