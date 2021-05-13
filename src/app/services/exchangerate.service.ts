import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExchangerateService {

  constructor(private http: HttpClient) { }

  url = 'http://api.nbp.pl/api/exchangerates/tables/a/';

  getActualExchangeRate() {
    return this.http.get(this.url);
  }

}
