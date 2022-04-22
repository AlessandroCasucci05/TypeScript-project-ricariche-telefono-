

interface Smartphone{
    carica:number;
    numeroChiamate:number;

    ricarica(unaRicarica:number):void;
    chiamata(minutiDurata:number):void;
    numero404():void;
    getNumeroChiamate():number;
    azzeraChiamate():void;
}

class User implements Smartphone{

     carica: number;
     numeroChiamate: number;

    constructor(carica:number,numeroChiamate:number){
        this.carica=carica;
        this.numeroChiamate=numeroChiamate;
    }
      
     public ricarica(unaRicarica:number):void{
          this.carica+=unaRicarica;
     }

     public chiamata(minutiDurata: number):void{
         
         if (minutiDurata*0.20<=this.carica){
            this.carica-= minutiDurata*0.20;
            this.numeroChiamate++;
        }else{
            let minutiPossibili=this.carica/0.20;
            console.log("Non c'è credito sufficiente per una chiamata di "+minutiDurata+" minuti. Si possono effettuare chiamate con al massimo "+minutiPossibili+ " minuti o fare una ricarica");
        }
         
     }

     public numero404():number{
        return this.carica;
     }

     public getNumeroChiamate(): number{
        return this.numeroChiamate;
     }

     public azzeraChiamate():void{
         this.numeroChiamate=0;
     }



}

let FirstUser= new User(0,0);
let SecondUser=new User(1,3);
let ThirdUser= new User(5,2);

FirstUser.ricarica(5);
console.log("Il First User aveva 0€, poi dopo una ricarica di 5, ne ha:"+FirstUser.numero404());

FirstUser.chiamata(10);
console.log("Il First User ha fatto una chiamata di dieci minuti, ora ha "+FirstUser.numero404() +"€");


console.log("Il second User ha 1€, e tenta di fare una chiamata da 10 minuti:")
SecondUser.chiamata(10);
console.log("Il second User ha effettuato "+SecondUser.getNumeroChiamate()+" chiamate");

console.log("Il third User ha fatto " +ThirdUser.getNumeroChiamate()+ " chiamate e ha "+ThirdUser.numero404() + "€. Fa 3 chiamate da 2 minuti.");
ThirdUser.chiamata(2);
ThirdUser.chiamata(2);
ThirdUser.chiamata(2);
console.log("Ora ha "+ThirdUser.numero404()+" €");
console.log("Azzeriamo le chiamate:");
ThirdUser.azzeraChiamate();
console.log("Ora ne ha "+ThirdUser.getNumeroChiamate()+" di chiamate");
