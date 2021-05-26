import {Patients, Lieux, Traitements} from "./classes.js";

// Instances des Patients
let marcus = new Patients("Marcus", "mal indenté", 100, [], "malade");
let optimus = new Patients("Optimus", "unsave", 200, [], "malade");
let sangoku = new Patients("Sangoku", "404", 80, [], "malade");
let darthvader = new Patients("DarthVader", "asmathique", 110, [], "malade");
let semicolon = new Patients("Semicolon", "syntaxError", 60, [], "malade");
let patients = [marcus, optimus, sangoku, darthvader, semicolon];


// Instances des Lieux
let pharmacie = new Lieux("pharmacie", []);
let cimetiere = new Lieux("cimetière", []);
let salleAttente = new Lieux("salle d'attente", []);


// Instances des Traitements
let ctrl = new Traitements("ctrl + maj + f", 60);
let saveOn = new Traitements("saveOnFocusChange", 100);
let checkLink = new Traitements("checkLinkRelation", 35);
let ventoline = new Traitements("ventoline", 40);
let f12 = new Traitements("f12 + doc", 20);

export {marcus, optimus, sangoku, darthvader, semicolon, patients, pharmacie, cimetiere,salleAttente , ctrl, saveOn, checkLink, ventoline, f12};