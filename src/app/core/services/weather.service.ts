import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiUrl: string = 'http://127.0.0.1:8000/api/prediction/';

  constructor(private http: HttpClient) {}

  public postData(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data, { responseType: 'text' });
  }
}
