import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CardsgamePage } from './cardsgame.page';

describe('CardsgamePage', () => {
  let component: CardsgamePage;
  let fixture: ComponentFixture<CardsgamePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardsgamePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CardsgamePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
