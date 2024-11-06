import { Component } from '@angular/core';
import { MainPredictionComponent } from '../../shared/components/main-prediction/main-prediction.component';
import { WeatherComponent } from '../../features/weather/weather.component';
import { ItineraryComponent } from '../../features/itinerary/itinerary.component';

@Component({
  selector: 'app-prediction',
  standalone: true,
  imports: [MainPredictionComponent, WeatherComponent, ItineraryComponent],
  templateUrl: './prediction.component.html',
  styleUrl: './prediction.component.scss',
})
export class PredictionComponent {}
