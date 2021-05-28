import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { LocationService } from 'src/app/services/location.service';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  constructor(
    private locationService: LocationService,
    private weatherService: WeatherService
  ) { }

  weatherForm = new FormGroup({
    city: new FormControl('', [Validators.required])
  })

  weatherData: any;

  getWeatherByCityName() {
    this.weatherService.city = this.weatherForm.value.city;

    this.weatherService.getWeatherByCityName().subscribe(result => {
      this.weatherData = result;
      this.showWeather(result);
    })
  }

  getWeatherByAutoLocation() {
    this.weatherService.latitude = this.position.latitude;
    this.weatherService.longitude = this.position.longitude;

    this.weatherService.getWeatherByAutoLocation().subscribe(result => {
      this.weatherData = result;
      this.showWeather(result);
    });
  }

  cityName!: string;
  country!: string;
  population!: number;
  sunrise!: any;
  sunriseHour!: any;
  sunriseMinute!: any;
  sunset!: any;
  sunsetHour!: any;
  sunsetMinute!: any;
  actualTemp!: number;
  actualPressure!: number;
  actualHumidity!: number;
  actualClouds!: number;
  actualWindV!: number;
  actualWindDir!: number;

  hourByHour: any;
  dayByDay: any;

  showWeather(result: any) {
    this.cityName = Object(result).city.name;
    this.country = Object(result).city.country;
    this.population = Object(result).city.population;
    this.sunrise = Object(result).city.sunrise;
    this.sunriseHour = new Date(1000 * this.sunrise).getHours();
    this.sunriseMinute = new Date(1000 * this.sunrise).getMinutes();
    this.sunset = Object(result).city.sunset;
    this.sunsetHour = new Date(1000 * this.sunset).getHours();
    this.sunsetMinute = new Date(1000 * this.sunset).getMinutes();
    this.actualTemp = Object(result).list[0].main.temp - 273.15;
    this.actualPressure = Object(result).list[0].main.pressure;
    this.actualHumidity = Object(result).list[0].main.humidity;
    this.actualClouds = Object(result).list[0].clouds.all;
    this.actualWindV = Object(result).list[0].wind.speed * 3, 6;
    this.actualWindDir = Object(result).list[0].wind.deg;

    this.hourByHour = [];
    for (let i = 0; i < 9; i++) {
      this.hourByHour.push([{
        hour: Object(result).list[i].dt_txt.slice(11, 16),
        temp: Object(result).list[i].main.temp - 273.15,
        clouds: Object(result).list[i].weather[0].main,
        icon: Object(result).list[i].weather[0].icon
      }])
    }

    this.dayByDay = [];
    for (let i = 0; i < result.list.length; i++) {
      if (result.list[i].dt_txt.slice(11, 13) === "12") {
        this.dayByDay.push([{
          day: new Date(Object(result).list[i].dt_txt),
          temp: Object(result).list[i].main.temp - 273.15,
          clouds: Object(result).list[i].weather[0].main,
          icon: Object(result).list[i].weather[0].icon
        }])
      }
    }
  }

  position: any = {
    latitude: 0,
    longitude: 0
  }

  ngOnInit() {
    this.locationService.getPosition()
      .then(pos => {
        this.position.latitude = pos.lat, this.position.longitude = pos.lng
      });

    setTimeout(() => {
      this.getWeatherByAutoLocation();
    }, 4000);
  }
}

