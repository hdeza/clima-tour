import { Component } from '@angular/core';
import { MainComponent } from '../../shared/components/main/main.component';
import { FeaturedWeatherComponent } from '../../shared/components/featured-weather/featured-weather.component';
import { FeaturedDestinationComponent } from '../../shared/components/featured-destination/featured-destination.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MainComponent,
    FeaturedWeatherComponent,
    FeaturedDestinationComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
