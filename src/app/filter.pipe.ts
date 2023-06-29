import { Pipe, PipeTransform } from '@angular/core';
import {Pokemon} from "./models/Pokemon";


@Pipe({ name: 'appFilter' })
export class FilterPipe implements PipeTransform {

  transform(pokemons: Pokemon[], searchText: string): Pokemon[] {
    if (!pokemons) return [];
    if (!searchText) return pokemons;

    searchText = searchText.toLowerCase();
    return pokemons.filter((pokemon: any) => {
      return JSON.stringify(pokemon.name.fr).toLowerCase().includes(searchText);
    })
  }


}
