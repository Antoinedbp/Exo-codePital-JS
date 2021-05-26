import {marcus, optimus, sangoku, darthvader, semicolon, patients, pharmacie, cimetiere, salleAttente, ctrl, saveOn, checkLink, ventoline, f12} from "./instances.js";
import {Patients, Lieux, Traitements} from "./classes.js";
import {docteur} from "./objet.js";


pharmacie.argent = 5000;
pharmacie.venteTraitement = (malade) => {
    if (malade.argent >= malade.traitement.prix){
        malade.etat = "bonne santé";
        malade.paye(pharmacie);
        console.log(`${malade.nom} est guéri !`);
    } else {
        malade.etat = "mort";
        cimetiere.personnes.push(malade);
        pharmacie.personnes.splice(pharmacie.personnes.indexOf(malade));
        console.log(`${malade.nom} n'avais malheureusement plus assez de ressources financières.. Il est donc décédé des suites de sa maladie et repose au ${cimetiere.nom} ${cimetiere.img}.`);
    }
}

// Chat qui miaule
let chat = () => {
    console.log(`Miauwwww`);
}

let storyTelling = () => {
    let i = 5;
    patients.forEach(elem => {

        
        console.log(`Il y a ${i} personnes dans la ${salleAttente.nom} ${salleAttente.img}`);
        console.log(`Voici l'aventure 🚀 de ${elem.nom} chez son medecin traitant ${docteur.nom} ${docteur.img}.`);
        
        docteur.patientIn(elem);
        docteur.diagnostique(elem);
        elem.takeCare(docteur);
        docteur.patientOut(elem);
        elem.goTo(pharmacie);
        pharmacie.venteTraitement(elem);
        console.log(` `);

        i--;

    })

}
// console.log(`Dans la ${docteur.salleAttente.nom} il y a ${docteur.salleAttente.personnes.length} patients.`);

export {storyTelling};