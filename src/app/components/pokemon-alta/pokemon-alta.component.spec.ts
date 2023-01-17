import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonAltaComponent } from './pokemon-alta.component';

describe('PokemonAltaComponent', () => {
  let component: PokemonAltaComponent;
  let fixture: ComponentFixture<PokemonAltaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonAltaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonAltaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
