import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Subscription } from 'rxjs';
import { PokemonDetail } from 'src/app/models/pokemonsDetail';
import { PokemonService } from 'src/app/services/pokemon.service';
import { PokemonValidador } from 'src/app/validators/pokemon-validator';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pokemon-alta',
  templateUrl: './pokemon-alta.component.html',
  styleUrls: ['./pokemon-alta.component.css'],
})
export class PokemonAltaComponent implements OnInit {
  formulario: FormGroup;
  pokemon: PokemonDetail;

  constructor(
    private pokemonService: PokemonService,
    private formBuilder: FormBuilder
  ) {}

  private subscription = new Subscription();

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nombre: [
        null,
        [Validators.required],
        [PokemonValidador.nombreValidador(this.pokemonService)],
      ],
      type: [null, [Validators.required]],
      height: [, Validators.required],
      ability: [, Validators.required],
    });
  }

  guardar() {
    if (this.formulario.valid) {
      this.subscription.add(
        this.pokemonService.addPokemon(this.formulario.value).subscribe({
          next: (r: PokemonDetail) => {
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Pokémon registrado!',
              showConfirmButton: false,
              timer: 5000,
            });
          },
          error: (e) => {
            console.error(e);
          },
        })
      );
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Error al cargar el pokémon!',
      });
    }
  }

  get controlNombre(): FormControl {
    return this.formulario.controls['nombre'] as FormControl;
  }
  get controlType(): FormControl {
    return this.formulario.controls['type'] as FormControl;
  }
  get controlHeight(): FormControl {
    return this.formulario.controls['height'] as FormControl;
  }
  get controlAbility(): FormControl {
    return this.formulario.controls['ability'] as FormControl;
  }
}
