"use strict";
class User {
    constructor(carica, numeroChiamate) {
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
    }
    ricarica(unaRicarica) {
        this.carica += unaRicarica;
    }
    chiamata(minutiDurata) {
        if (minutiDurata * 0.20 <= this.carica) {
            this.carica -= minutiDurata * 0.20;
            this.numeroChiamate++;
        }
        else {
            let minutiPossibili = this.carica / 0.20;
            console.log("Non c'è credito sufficiente per una chiamata di " + minutiDurata + " minuti. Si possono effettuare chiamate con al massimo " + minutiPossibili + " minuti o fare una ricarica");
        }
    }
    numero404() {
        return this.carica;
    }
    getNumeroChiamate() {
        return this.numeroChiamate;
    }
    azzeraChiamate() {
        this.numeroChiamate = 0;
    }
}
let FirstUser = new User(0, 0);
let SecondUser = new User(1, 3);
let ThirdUser = new User(5, 2);
FirstUser.ricarica(5);
console.log("Il First User aveva 0€, poi dopo una ricarica di 5, ne ha:" + FirstUser.numero404());
FirstUser.chiamata(10);
console.log("Il First User ha fatto una chiamata di dieci minuti, ora ha " + FirstUser.numero404() + "€");
console.log("Il second User ha 1€, e tenta di fare una chiamata da 10 minuti:");
SecondUser.chiamata(10);
console.log("Il second User ha effettuato " + SecondUser.getNumeroChiamate() + " chiamate");
console.log("Il third User ha fatto " + ThirdUser.getNumeroChiamate() + " chiamate e ha " + ThirdUser.numero404() + "€. Fa 3 chiamate da 2 minuti.");
ThirdUser.chiamata(2);
ThirdUser.chiamata(2);
ThirdUser.chiamata(2);
console.log("Ora ha " + ThirdUser.numero404() + " €");
console.log("Azzeriamo le chiamate:");
ThirdUser.azzeraChiamate();
console.log("Ora ne ha " + ThirdUser.getNumeroChiamate() + " di chiamate");
