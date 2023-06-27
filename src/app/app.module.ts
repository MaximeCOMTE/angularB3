import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import {RouterLink} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent
  ],
    imports: [
        BrowserModule,
        RouterLink
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
