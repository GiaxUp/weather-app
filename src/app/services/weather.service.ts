import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { WeatherData } from '../models/weather.model';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeatherData(cityName: string): Observable<WeatherData> {
    const url = `${environment.weatherApiBaseUrl}city/${cityName}`;

    const headers = new HttpHeaders()
      .set(
        environment.XRapidAPIHostHeaderName,
        environment.XRapidAPIHostHeaderValue
      )
      .set(
        environment.XRapidAPIKeyHeaderName,
        environment.XRapidAPIKeyHeaderValue
      );

    // Puoi impostare ulteriori parametri nella richiesta GET, se necessario.
    const params = new HttpParams()
      .set('paramName1', 'paramValue1')
      .set('paramName2', 'paramValue2');

    return this.http.get<WeatherData>(url, { headers, params });
  }
}
