import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { PokeDB } from './pokedb';

@Injectable({
  providedIn: 'root'
})
export class Pokeapi {
  constructor(private router: Router) {}
  getPokemon(id: string) {
    const index = Number(id);
    if (isNaN(index)) {
      this.router.navigateByUrl('1');
    }

    const pokeEntry = PokeDB[index - 1];
    if (!pokeEntry) {
      this.router.navigateByUrl('1');
    }
    return {
      name: pokeEntry[0],
      img: pokeEntry[1],
    };
  }
}
