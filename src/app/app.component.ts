import { Component } from '@angular/core';
import { PokemonService } from './services/pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'cursoangular';
  pokemones = null;
  pokemon: any = {};

  constructor(private pokeapi: PokemonService) {}
}
