import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPredictionComponent } from './main-prediction.component';

describe('MainPredictionComponent', () => {
  let component: MainPredictionComponent;
  let fixture: ComponentFixture<MainPredictionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainPredictionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainPredictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
