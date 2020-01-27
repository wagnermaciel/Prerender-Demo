import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Pokeapi } from './pokeapi.service';

@Component({
  selector: 'pokedex',
  template: `
    <h1>Temtem!</h1>
    <h1>{{ pokemon.name }}</h1>
    <img src="{{ pokemon.img }}">
  `,
  styles: [],
})
export class PokedexComponent {
  pokemon: any;
  constructor(private pokeapi: Pokeapi, router: Router) {
    const pokeId = router.url.replace(/\//g, ''); // Remove slashes from url.
    this.pokemon = pokeapi.getPokemon(pokeId);
  }
}
