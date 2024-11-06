import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedDestinationComponent } from './featured-destination.component';

describe('FeaturedDestinationComponent', () => {
  let component: FeaturedDestinationComponent;
  let fixture: ComponentFixture<FeaturedDestinationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedDestinationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturedDestinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
