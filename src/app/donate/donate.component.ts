import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DonateService } from '../services/donate.service';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css'],
})
export class DonateComponent implements OnInit {
  donateGroup: FormGroup;
  progress: number;
  progressStyle: string = '';
  constructor(private donateService: DonateService) {
    this.donateGroup = new FormGroup({
      summ: new FormControl(0, [Validators.required, Validators.max(500000)]),
    });
    this.progress =
      (donateService.getCurrent() / donateService.getTotal()) * 100;
    if (this.progress < 0) {
      this.progressStyle = 'width: 0%';
    }
    if (this.progress > 100) {
      this.progressStyle = 'width: 100%';
    }
    this.progressStyle = 'width: ' + this.progress.toString() + '%';
  }

  ngOnInit(): void {}

  donate() {
    let amount = this.donateGroup.controls['summ'].value;
    this.donateService.addCurrent(amount);

    this.progress =
      (this.donateService.getCurrent() / this.donateService.getTotal()) * 100;
    if (this.progress < 0) {
      this.progressStyle = 'width: 0%';
    }
    if (this.progress > 100) {
      this.progressStyle = 'width: 100%';
    }
    this.progressStyle = 'width: ' + this.progress.toString() + '%';
  }
}
