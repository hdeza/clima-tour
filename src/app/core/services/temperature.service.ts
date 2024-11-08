import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ClimaFormatter } from '../models/clima.model';

@Injectable({
  providedIn: 'root',
})
export class TemperatureService {
  private apiUrl: string = 'http://127.0.0.1:8000/api/predict/';
  private params: ClimaFormatter = {
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
  constructor(private http: HttpClient) {
    // This service can now make HTTP requests via `this.http`.
  }

  postTemperature(data: ClimaFormatter) {
    this.params = {
      tavg: data.tavg,
      tmin: data.tmin,
      tmax: data.tmax,
      prcp: data.prcp,
      wdir: data.wdir,
      wspd: data.wspd,
      pres: data.pres,
      latitude: data.latitude,
      longitude: data.longitude,
    };
    return this.http.post<any>(this.apiUrl, this.params);
  }
}
