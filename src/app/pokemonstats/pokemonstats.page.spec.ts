import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PokemonstatsPage } from './pokemonstats.page';

describe('PokemonstatsPage', () => {
  let component: PokemonstatsPage;
  let fixture: ComponentFixture<PokemonstatsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonstatsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PokemonstatsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
