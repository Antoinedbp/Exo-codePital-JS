import {checkLink, f12, saveOn, ventoline, marcus, optimus, sangoku, darthvader, semicolon, ctrl} from "./instances.js";
import {salleAttente} from "./instances.js";

let docteur = {
    nom : "Dr Debug",
    argent : 1000,
    salleAttente : {
        nom : "Salle d'attente",

        personnes : []
    },
    cabinet : [],
    diagnostique (malade) {

        switch (malade.maladie) {
            case "mal indenté":
                malade.traitement = ctrl;
                break;
            case "unsave":
                malade.traitement = saveOn;
                break;
            case "404":
                malade.traitement = checkLink;
                break;
            case "asmathique":
                malade.traitement = ventoline;
                break;
            case "syntaxError":
                malade.traitement = f12;
                break;
            default:
                break;
        }
        console.log(`${malade.nom} est malade.. Il est victime de ${malade.maladie}, il va devoir suivre le traitement suivant : ${malade.traitement.traitement}`);   
    },
    patientIn (malade) {
        this.cabinet.push(malade);
        salleAttente.personnes.splice(salleAttente.personnes[salleAttente.personnes.indexOf(malade.nom)], 1);
        malade.etat = "En traitement";
        console.log(`${malade.nom} rentre dans le cabinet du Dr Debug !`);
    },
    patientOut (malade) {
        salleAttente.personnes.push(malade);
        this.cabinet.splice(this.cabinet.indexOf(malade));
        console.log(`${malade.nom} resort du cabinet du Dr Debug !`);
    }
}

docteur.salleAttente = [marcus, optimus, sangoku, darthvader, semicolon];


export {docteur};