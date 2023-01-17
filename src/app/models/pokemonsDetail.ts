export class PokemonDetail {
  id: number;
  order: number;
  name: string;
  height: number;
  abilities: Ability[];

  constructor() {
    this.abilities = [];
  }
}

class Ability {
  ability: {
    name: String;
  };

  constructor() {}
}
