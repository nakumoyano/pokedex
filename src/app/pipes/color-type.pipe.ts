import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'colorType',
})
export class ColorTypePipe implements PipeTransform {
  transform(name: string): string {
    if (!name) {
      return '';
    } else if (name == 'fire') {
      return '#FF0000';
    } else if (name == 'grass') {
      return '#008000';
    } else if (name == 'normal') {
      return '#fff';
    } else if (name == 'water') {
      return '#2a9df4';
    } else if (name == 'bug') {
      return '#729F3F';
    } else if (name == 'poison') {
      return '#B97FC9';
    } else if (name == 'electric') {
      return '#EED535';
    } else if (name == 'ice') {
      return '#2a9df4';
    } else if (name == 'rock') {
      return '#A38C21';
    } else if (name == 'psychic') {
      //psiq
      return '#F366B9';
    } else if (name == 'ground') {
      //acero
      return '#9EB6B7';
    } else if (name == 'dragon') {
      return '#F16E57';
    } else if (name == 'ground') {
      return '#A38C21';
    } else if (name == 'fairy') {
      return '#F9DAD9';
    } else if (name == 'fighting') {
      return '#D56723';
    } else if (name == 'dark') {
      return '#707070';
    } else {
      return '';
    }
  }
}
