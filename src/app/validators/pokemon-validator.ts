import {
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
} from '@angular/forms';
import { Observable, map } from 'rxjs';
import { PokemonService } from '../services/pokemon.service';

export class PokemonValidador {
  static nombreValidador(pokemonServicio: PokemonService): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return pokemonServicio
        .pokemonExiste(control.value)
        .pipe(
          map((result: boolean) =>
            result ? { nameAlReadyExists: true } : null
          )
        );
    };
  }
}
