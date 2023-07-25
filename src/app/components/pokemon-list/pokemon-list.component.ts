import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { PokemonDetail } from 'src/app/models/pokemonsDetail';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonListComponent implements OnInit {
  @Output() public emmitSearch: EventEmitter<string> = new EventEmitter();

  pokemons: any[] = [];
  page = 1;
  totalPokemons: number;
  name: string;
  PokemonDetail: PokemonDetail[];

  searchTerm: string = ''; // Declaración de la variable searchTerm

  constructor(private pokemonService: PokemonService, private router: Router) {}

  ngOnInit(): void {
    this.getInitialPokemons();
    // this.getPokemons();
  }

  // getPokemons() {
  //   this.pokemonService
  //     .getPokemons(20, this.page + 0)
  //     .subscribe((response: any) => {
  //       this.totalPokemons = response.count;

  //       response.results.forEach((result: any) => {
  //         this.pokemonService
  //           .getMoreData(result.name)
  //           .subscribe((uniqResponse: any) => {
  //             this.pokemons.push(uniqResponse);
  //           });
  //       });
  //     });
  // }

  getInitialPokemons() {
    const limit = 20;
    const offset = this.page * limit;

    this.pokemonService
      .getPokemons(limit, this.page + 0)
      .subscribe((response: any) => {
        this.totalPokemons = response.count;
        response.results.forEach((result: any) => {
          this.pokemonService
            .getMoreData(result.name)
            .subscribe((uniqResponse: any) => {
              this.pokemons.push(uniqResponse);
            });
        });
      });
  }

  getPokemons() {
    const limit = 20;
    const offset = this.page * limit;
    const searchTerm = this.searchTerm; // Obtener el término de búsqueda ingresado

    this.pokemons = []; // Limpiar la lista de Pokémon antes de obtener nuevos datos

    if (searchTerm && searchTerm.trim() !== '') {
      this.pokemonService
        .getPokemons(limit, offset, searchTerm)
        .subscribe((response: any) => {
          if (Array.isArray(response)) {
            // Si se recibe un array, es la respuesta de la búsqueda por término
            this.pokemons = response;
          } else {
            // Si es un objeto, se asume que es el resultado de un solo Pokémon encontrado
            this.pokemons = [response];
          }
          this.totalPokemons = this.pokemons.length; // Actualizar el total de Pokémon para la paginación
        });
    } else {
      this.getInitialPokemons(); // Obtener los Pokémon iniciales si no hay término de búsqueda
    }
  }
}
