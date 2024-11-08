import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ItineraryInfo } from '../models/itinerary.model';

@Injectable({
  providedIn: 'root',
})
export class ItineraryService {
  private apiUrl: string = 'http://127.0.0.1:8000/gemini/itinerary/';

  constructor(private http: HttpClient) {
    // This service can now make HTTP requests via `this.http`.
  }

  public postData(data: ItineraryInfo): Observable<any> {
    return this.http.post(this.apiUrl, data, { responseType: 'text' });
  }
}
