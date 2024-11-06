import { Component } from '@angular/core';
import { DayComponent } from '../../shared/components/common/day/day.component';

@Component({
  selector: 'app-itinerary',
  standalone: true,
  imports: [DayComponent],
  templateUrl: './itinerary.component.html',
  styleUrl: './itinerary.component.scss',
})
export class ItineraryComponent {}
