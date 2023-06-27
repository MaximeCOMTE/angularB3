import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataService} from "../service/data.service";
import {takeUntil} from "rxjs";


@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject();
  listView = false;
  pokemons: Pokemon[] = [];
  isLoading = false;

  constructor(
    private pokemonService: DataService,
  ) {}

  ngOnInit(): void {
    this.getPokemonsList();
  }

  ngOnDestroy(): void {
    this.unsubscribeObservables();
  }

  private unsubscribeObservables() {
    this.unsubscribe$.next(void 0);
    this.unsubscribe$.complete;
  }

  changeView() {
    this.listView = !this.listView;
  }

  getPokemonsList() {
    if (this.isLoading) return;
    this.isLoading = true;

    this.pokemonService
      .getPokemonList()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe({
        next: (pokemons: Pokemon[]) => {
          this.sortPokemonsList(pokemons);
          this.isLoading = false;
        },
        complete: () => {

        },
      });
  }

  sortPokemonsList(pokemons: Pokemon[]) {
    this.pokemons = pokemons
    console.log(this.pokemons);
  }
}
