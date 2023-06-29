import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Pokemon} from "../models/Pokemon";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }



 // Url du serveur*
  baseURL: string = 'https://api-pokemon-fr.vercel.app/';



/*  Permet de récupérer la fiche d'un Pokémon grâce à son identifiant dans le Pokédex National
/api/v1/pokemon/<identifiant>
  ex: https://api-pokemon-fr.vercel.app/api/v1/pokemon/881

  Permet de récupérer la liste de tous les Pokémons
/api/v1/pokemon
  ex: https://api-pokemon-fr.vercel.app/api/v1/pokemon

  Permet d'obtenir la forme régionale d'un Pokémon
/api/v1/pokemon/<nom>/<region>
  ex: https://api-pokemon-fr.vercel.app/api/v1/pokemon/caninos/hisui

  Permet de récupérer la liste de tous les Pokémon d'une génération voulue
/api/v1/gen/<generation>
  ex : https://api-pokemon-fr.vercel.app/api/v1/gen/9

*/
  pokemonUrl = '/api/v1/pokemon';
  pokemonGenerationUrl = '/api/v1/gen';


  getPokemonList(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.baseURL + this.pokemonUrl);
  }

  getPokemonById(id: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.baseURL}${this.pokemonUrl} / ${id}`);
  }

  getPokemonByGeneration(generation: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(
      `${this.baseURL} ${this.pokemonGenerationUrl} / ${generation}`
    );
  }

  getPokemonByRegion(nom: String, region: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(
      `${this.baseURL} ${this.pokemonUrl}/${nom}/${region}`
    );
  }
}
