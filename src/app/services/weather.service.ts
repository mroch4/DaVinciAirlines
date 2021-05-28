import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(
    private http: HttpClient
  ) { }

  city: any;

  getWeatherByCityName() {
    return this.http.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${this.city
      }&appid=bfa8d203a2b69590176bad8472c2f002`
    );
  }

  latitude: any;
  longitude: any;

  getWeatherByAutoLocation() {
    return this.http.get(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${this.latitude}&lon=${this.longitude}&appid=bfa8d203a2b69590176bad8472c2f002`

    );
  }
}
