import {salleAttente, patients} from "./instances.js";
class Patients{
    constructor(nom, maladie, argent, poche, etatSante){
        this.nom = nom;
        this.maladie = maladie;
        this.argent = argent;
        this.poche = poche;
        this.etatSante = etatSante;
        this.goTo = (arrivee) => {
            arrivee.personnes.push(salleAttente.personnes);
            console.log(`${this.nom} est arrivé à la ${arrivee.nom}`);
        }
        this.takeCare = (docteur) => {
            this.argent -= 50;
            docteur.argent += 50;
            console.log(`${this.nom} effectue un versement de 50$ au ${docteur.nom}`);
        }
        this.paye = (personneAchat) => {
            this.argent -= this.traitement.prix;
            personneAchat.argent += this.traitement.prix;
        }
    }
}

class Lieux{
    constructor(nom, personnes){
        this.nom = nom;
        this.personnes = personnes;
    }
}

class Traitements{
    constructor(traitement, prix){
        this.traitement = traitement;
        this.prix = prix;
    }
};

export {Patients, Lieux, Traitements};