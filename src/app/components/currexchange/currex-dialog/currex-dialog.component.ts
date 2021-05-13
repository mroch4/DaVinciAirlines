import { Component, OnInit } from '@angular/core';
import { CurrexdialogService } from '../../../services/currexdialog.service'

@Component({
  selector: 'app-currex-dialog',
  templateUrl: './currex-dialog.component.html',
  styleUrls: ['./currex-dialog.component.scss']
})
export class CurrexDialogComponent implements OnInit {

  constructor(private data: CurrexdialogService) { }

  baseCurrency: string = '';
  targetCurrency: string = '';
  amount: number = 0;
  rate: number = 0;
  computedValue: number = 0;
  date: string = '';
  no: string = '';

  message: any;

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message);
    this.baseCurrency = this.message[0];
    this.targetCurrency = this.message[1];
    this.amount = this.message[2];
    this.rate = this.message[3];
    this.computedValue = this.message[4];
    this.date = this.message[5];
    this.no = this.message[6];
  }
}
