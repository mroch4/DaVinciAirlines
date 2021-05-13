import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { ExchangerateService } from 'src/app/services/exchangerate.service';
import { CurrexdialogService } from 'src/app/services/currexdialog.service'

import { CurrexDialogComponent } from './currex-dialog/currex-dialog.component';

@Component({
  selector: 'app-currexchange',
  templateUrl: './currexchange.component.html',
  styleUrls: ['./currexchange.component.scss']
})

export class CurrexchangeComponent implements OnInit {

  constructor(
    private exchangeRate: ExchangerateService,
    private dialog: MatDialog,
    private data: CurrexdialogService
  ) { }

  // form controls

  currencyCalc = new FormGroup({
    amount: new FormControl('', [Validators.required]),
    baseCurrency: new FormControl('', [Validators.required]),
    targetCurrency: new FormControl('', [Validators.required]),
  })

  // swap

  swapCurrencies() {
    let x = this.currencyCalc.value.baseCurrency;
    let y = this.currencyCalc.value.targetCurrency;
    // console.log(y, x)
  }

  // calculating values

  toDialogArray: any;

  openCurrexDialog() {
    let base = this.myCurrencies.find((base: { code: string; }) => base.code == this.currencyCalc.value.baseCurrency);
    let indexOfBase = this.myCurrencies.indexOf(base);
    let rateOfBase = this.myCurrencies[indexOfBase].mid;

    let target = this.myCurrencies.find((target: { code: string; }) => target.code == this.currencyCalc.value.targetCurrency);
    let indexOfTarget = this.myCurrencies.indexOf(target);
    let rateOfTarget = this.myCurrencies[indexOfTarget].mid;

    let rate = rateOfBase / rateOfTarget
    let computedValue = (rate * this.currencyCalc.value.amount);

    this.toDialogArray = [
      this.currencyCalc.value.baseCurrency,
      this.currencyCalc.value.targetCurrency,
      this.currencyCalc.value.amount,
      rate,
      computedValue,
      this.exchangeArray[0].effectiveDate,
      this.exchangeArray[0].no,
    ]

    this.dialog.open(CurrexDialogComponent);
    this.data.changeMessage(this.toDialogArray);
  }

  // receive message from API

  exchangeArray: any;
  myCurrencies: any;
  message: any;

  ngOnInit() {
    this.exchangeRate.getActualExchangeRate().subscribe((result) => {
      this.exchangeArray = result;
      this.myCurrencies = [
        { 'currency': "złoty polski", "code": "PLN", "mid": 1 },
        this.exchangeArray[0].rates[7],
        this.exchangeArray[0].rates[1],
        this.exchangeArray[0].rates[10],
        this.exchangeArray[0].rates[9],
        this.exchangeArray[0].rates[11],
        this.exchangeArray[0].rates[8],
        this.exchangeArray[0].rates[13],
        this.exchangeArray[0].rates[14],
        this.exchangeArray[0].rates[16],
        this.exchangeArray[0].rates[17],
        this.exchangeArray[0].rates[22],
      ];
      for (let i = 0; i < this.myCurrencies.length; i++) {
        this.myCurrencies[i].url = '/assets/currencies/' + i + '.png'
      }
    });
    this.data.currentMessage.subscribe(message => this.message = message)
  }
}
