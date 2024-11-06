import { Component } from '@angular/core';
import { CarouselComponent } from '../common/carousel/carousel.component';

@Component({
  selector: 'app-featured-destination',
  standalone: true,
  imports: [CarouselComponent],
  templateUrl: './featured-destination.component.html',
  styleUrl: './featured-destination.component.scss',
})
export class FeaturedDestinationComponent {}
