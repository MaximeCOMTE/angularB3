import { NgModule } from '@angular/core';
import {PokemonComponent} from "./pokemon/pokemon.component";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  { path: 'pokemon', component: PokemonComponent },
  { path: '',redirectTo:'pokemon', pathMatch:'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
