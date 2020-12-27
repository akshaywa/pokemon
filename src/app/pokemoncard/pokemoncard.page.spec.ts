import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PokemoncardPage } from './pokemoncard.page';

describe('PokemoncardPage', () => {
  let component: PokemoncardPage;
  let fixture: ComponentFixture<PokemoncardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemoncardPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PokemoncardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
