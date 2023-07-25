import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroPokemon',
})
export class FiltroPokemonPipe implements PipeTransform {
  transform(value: any, arg: any): any {
    const resultPosts = [];
    for (const pokemon of value) {
      if (pokemon) {
        resultPosts.push(pokemon);
      }
    }
    return resultPosts;
  }
}
