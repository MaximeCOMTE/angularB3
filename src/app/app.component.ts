import { Component } from '@angular/core';
import {RouterModule} from "@angular/router";
import {PokemonComponent} from "./pokemon/pokemon.component";
import {Pokemon} from "./models/Pokemon";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pokedex-angular';
  protected readonly PokemonComponent = PokemonComponent;


}
