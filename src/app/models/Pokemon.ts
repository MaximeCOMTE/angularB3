import { Evolution } from "./Evolution";
import { Name } from "./Name";
import { Resistances } from "./Resistances";
import { Sexe } from "./Sexe";
import { Sprites } from "./Sprites";
import { Stats } from "./Stats";
import { Talents } from "./Talents";
import { Types } from "./Types";


export interface Pokemon {
  pokedexId: number;
  generation: number;
  category: string;
  name: Name;
  sprites: Sprites;
  types: Types[];
  talents: Talents[];
  stats: Stats;
  resistances: Resistances[];
  evolution: Evolution[] | null;
  height: string;
  weight: string;
  egg_groups: [] | null;
  sexe: Sexe;
  catch_rate: number;
  level_100: number;
  forme?: null;
}
