import { TestBed } from '@angular/core/testing';

import { PokemonlistService } from './pokemonlist.service';

describe('PokemonlistService', () => {
  let service: PokemonlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
