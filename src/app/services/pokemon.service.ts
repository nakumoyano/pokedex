import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { Pokemon } from '../models/pokemon';
import { PokemonDetail } from '../models/pokemonsDetail';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private url: string = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100';
  constructor(private http: HttpClient) {}

  // getPokemons(limit: number, offset: number) {
  //   return this.http.get(
  //     `https://pokeapi.co/api/v2/pokemon?limit=${20}&offset=${offset}`
  //   );
  // }
  getPokemons(limit: number, offset: number, searchTerm?: string) {
    let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;

    if (searchTerm && searchTerm.trim() !== '') {
      url = `https://pokeapi.co/api/v2/pokemon/${searchTerm.toLowerCase()}`;
    }

    return this.http.get(url);
  }

  getMoreData(name: string) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }

  public apiGetPokemon(url: string): Observable<any> {
    return this.http.get<any>(url).pipe(map((res) => res));
  }

  addPokemon(pokemon: PokemonDetail): Observable<PokemonDetail> {
    return this.http.post<PokemonDetail>(
      'https://pokeapi.co/api/v2/pokemon',
      pokemon
    );
  }

  pokemonExiste(valor: string): Observable<boolean> {
    return this.http
      .get<PokemonDetail[]>('https://pokeapi.co/api/v2/pokemon/')
      .pipe(map((x) => x.some((pokemon) => pokemon.name == valor)));
  }
}
