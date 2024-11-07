import { Component } from '@angular/core';
import { ItineraryService } from '../../../core/services/itinerary.service';

export interface ItineraryInfo {
  city: string;
  temperature: number;
  days: number;
}

@Component({
  selector: 'app-main-prediction',
  standalone: true,
  imports: [],
  templateUrl: './main-prediction.component.html',
  styleUrl: './main-prediction.component.scss',
})
export class MainPredictionComponent {
  backGroundUrl: string = 'images/travel.jpg';
  city: string = '';
  data: any;

  dataInfo: ItineraryInfo = {
    city: 'Bogotá',
    temperature: 32,
    days: 2,
  };

  constructor(private itineraryService: ItineraryService) {}

  onChange(event: Event) {
    const city = (event.target as HTMLSelectElement).value;
    this.city = city;
    this.dataInfo.city = this.city;
  }

  getItinerary() {
    this.itineraryService.postData(this.dataInfo).subscribe((data) => {
      this.data = data;
      console.log(this.data);
    });
  }
}
