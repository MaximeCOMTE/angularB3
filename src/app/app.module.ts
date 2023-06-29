import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import {RouterLink, RouterLinkActive, RouterModule, RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {CardModule} from "primeng/card";
import { FormsModule } from '@angular/forms';
import {FilterPipe} from "./filter.pipe";
import {HttpClientModule} from "@angular/common/http";
import {ImageModule} from "primeng/image";
import { PokecardComponent } from './pokemon/pokecard/pokecard.component';
import {ButtonModule} from "primeng/button";
import {NgOptimizedImage} from "@angular/common";
import { CommonModule } from "@angular/common";



@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    FilterPipe,
    PokecardComponent,

  ],
  imports: [
    BrowserModule,
    RouterLink,
    RouterOutlet,
    RouterModule,
    RouterLinkActive,
    AppRoutingModule,
    CardModule,
    FormsModule,
    HttpClientModule,
    ImageModule,
    ButtonModule,
    NgOptimizedImage,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
