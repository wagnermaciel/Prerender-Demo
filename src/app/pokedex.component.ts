import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'pokedex',
  template: `
  <ng-container *ngIf="pokemonObservable | async as pokemon">
    <h1>{{ pokemon.name }}</h1>
    <img src="{{ pokemon.sprites.front_default }}">
  </ng-container>
  `,
  styles: [],
})
export class PokedexComponent {
  pokemonObservable: Observable<any>;
  constructor(http: HttpClient, router: Router) {
    const baseUrl = 'https://pokeapi.co/api/v2/pokemon';
    this.pokemonObservable = http.get(baseUrl + router.url);
  }
}
