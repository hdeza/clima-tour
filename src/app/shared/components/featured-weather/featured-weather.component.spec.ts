import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedWeatherComponent } from './featured-weather.component';

describe('FeaturedWeatherComponent', () => {
  let component: FeaturedWeatherComponent;
  let fixture: ComponentFixture<FeaturedWeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedWeatherComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturedWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
