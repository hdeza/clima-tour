import { Component } from '@angular/core';
import { ItineraryService } from '../../../core/services/itinerary.service';
import { ItineraryInfo } from '../../../core/models/itinerary.model';
import { WeatherService } from '../../../core/services/weather.service';
import { ClimaFormatter, Coordenadas } from '../../../core/models/clima.model';
import { TemperatureService } from '../../../core/services/temperature.service';
import { lastValueFrom } from 'rxjs';

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
  weatherData: any;

  coordinateCitySelected: Coordenadas = {
    lat: 0,
    lng: 0,
  };

  paramsWeather: ClimaFormatter = {
    tavg: 0,
    tmin: 0,
    tmax: 0,
    prcp: 0,
    wdir: 0,
    wspd: 0,
    pres: 0,
    latitude: 0,
    longitude: 0,
  };

  constructor(
    private itineraryService: ItineraryService,
    private weatherService: WeatherService,
    private temperatureService: TemperatureService
  ) {}

  dataInfo: ItineraryInfo = {
    city: '',
    temperature: 32,
    days: 2,
  };

  // TO DO: AÑADIR ESTAS COORDENADAS EN UN ARCHIVO
  coordenadasCartagena: Coordenadas = {
    lat: 10.3997,
    lng: -75.5144,
  };

  coordenadasSantaMarta: Coordenadas = {
    lat: 11.2408,
    lng: -74.199,
  };

  //TO DO: METER ESTO EN UN PIPE
  today: Date = new Date();
  formattedDate = `${this.today.getFullYear()}-${(this.today.getMonth() + 1)
    .toString()
    .padStart(2, '0')}-${this.today.getDate().toString().padStart(2, '0')}`;

  // Función que esta pendiente de cualquier cambio en el select y guarda el valor
  onChange(event: Event) {
    const city = (event.target as HTMLSelectElement).value;
    this.city = city;
    this.dataInfo.city = this.city;
  }

  /*-
    Uso de lastValueFrom: El operador lastValueFrom convierte el observable en una promesa, 
    permitiendo usar await en la llamada a getWeather y getTemperature.

    Eliminación de subscribe: Como lastValueFrom espera a que el observable se complete, 
    subscribe ya no es necesario. Ahora puedes esperar a que cada llamada termine antes 
    de pasar a la siguiente.
  */

  // Función que consigue los datos del clima de hoy segun la ciudad
  async getWeather(coordenada: Coordenadas): Promise<void> {
    const response = await lastValueFrom(
      this.weatherService.getWeather(coordenada, this.formattedDate)
    );

    console.log('Datos de meteostat');
    console.log(response.data[0]);
    this.weatherData = response.data[0];
    this.paramsWeather.latitude = coordenada.lat;
    this.paramsWeather.longitude = coordenada.lng;
    this.paramsWeather.prcp = this.weatherData.prcp;
    this.paramsWeather.pres = this.weatherData.pres;
    this.paramsWeather.tavg = this.weatherData.tavg;
    this.paramsWeather.tmax = this.weatherData.tmax;
    this.paramsWeather.tmin = this.weatherData.tmin;
    this.paramsWeather.wdir = this.weatherData.wdir;
    this.paramsWeather.wspd = this.weatherData.wspd;
    console.log('Datos formateado:');
    console.log(this.paramsWeather);
  }

  async getTemperature(): Promise<void> {
    const dataT = await lastValueFrom(
      this.temperatureService.postTemperature(this.paramsWeather)
    );
    this.dataInfo.temperature = dataT[0];

    console.log('Datos de la temperatura');
    console.log(this.dataInfo.temperature);
  }

  async getItinerary(): Promise<void> {
    const dataI = await lastValueFrom(
      this.itineraryService.postData(this.dataInfo)
    );

    this.data = dataI;
    console.log('Datos del itinerario');
    console.log(this.data);
  }

  async createTrip(): Promise<void> {
    console.log(this.city);
    switch (this.city) {
      case 'Cartagena de Indias':
        this.coordinateCitySelected = this.coordenadasCartagena;
        break;
      case 'Santa Marta':
        this.coordinateCitySelected = this.coordenadasSantaMarta;
        break;
      default:
        console.log('Ciudad no encontrada');
        break;
    }
    console.log('city selected:', this.coordinateCitySelected);
    await this.getWeather(this.coordinateCitySelected);
    await this.getTemperature();
    await this.getItinerary();
  }
}
