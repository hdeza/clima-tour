import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Clima, Coordenadas } from '../models/clima.model';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  options: any;

  constructor(private http: HttpClient) {}

  getWeather(coordenada: Coordenadas, dateT: string) {
    this.options = {
      method: 'GET',
      url: 'https://meteostat.p.rapidapi.com/point/daily',
      params: {
        lat: coordenada.lat,
        lon: coordenada.lng,
        start: dateT,
        end: dateT,
      },
      headers: {
        'x-rapidapi-key': 'b1932eaad6msh4b2d6ba5ad36701p1dd6ccjsn90affbdb3cc4',
        'x-rapidapi-host': 'meteostat.p.rapidapi.com',
      },
    };

    return this.http.request<any>('GET', this.options.url, {
      params: this.options.params,
      headers: this.options.headers,
    });
  }
}
