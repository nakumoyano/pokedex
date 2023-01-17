import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PokemonAltaComponent } from './components/pokemon-alta/pokemon-alta.component';
import { PokemonDetailsComponent } from './components/pokemon-details/pokemon-details.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';

const routes: Routes = [
  {
    path: 'pokemon/:id',
    component: PokemonDetailsComponent,
  },
  {
    path: '',
    component: PokemonListComponent,
  },
  {
    path: 'cargar-pokemon',
    component: PokemonAltaComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
