import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import { CapaciteComponent } from './capacite/capacite.component';
import {AppRoutingModule} from "./app-routing.module";
import {CardModule} from "primeng/card";
import { FormsModule } from '@angular/forms';
import {FilterPipe} from "./filter.pipe";
import {HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    CapaciteComponent,
    FilterPipe

  ],
  imports: [
    BrowserModule,
    RouterLink,
    RouterOutlet,
    RouterLinkActive,
    AppRoutingModule,
    CardModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
