import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DonateService {
  donateTotal: number = 15000000;
  donateCurrent: number = 135000;
  constructor() {}

  getTotal() {
    return this.donateTotal;
  }

  getCurrent() {
    return this.donateCurrent;
  }

  addCurrent(amount: number) {
    this.donateCurrent += amount;
  }
}
