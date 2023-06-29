import {Sexe} from "./Sexe";
import {Precedent} from "./precedent";
import {Suivant} from "./suivant";

export interface Evolution {
  precedent : Precedent[];
  suivant: Suivant[];
  mega:null;
  hauteur:number;
  poids:number;
  groupe_oeuf:Sexe[];
  taux_capture : number;
  niveau_100:number;
  forme:null;

}
