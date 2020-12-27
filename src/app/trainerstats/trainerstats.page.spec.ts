import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TrainerstatsPage } from './trainerstats.page';

describe('TrainerstatsPage', () => {
  let component: TrainerstatsPage;
  let fixture: ComponentFixture<TrainerstatsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainerstatsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TrainerstatsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
