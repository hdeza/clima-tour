import { Component, Input } from '@angular/core';
import { ItineraryInfo } from '../../core/models/itinerary.model';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss',
})
export class WeatherComponent {
  @Input() dataInfo: ItineraryInfo = {
    city: '',
    temperature: 32,
    days: 2,
  };
}
