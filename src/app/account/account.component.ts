import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent implements OnInit {
  email;
  phone;
  constructor(private auth: AuthService) {
    this.email = auth.userEmail;
    this.phone = auth.userPhone;
  }

  ngOnInit(): void {}
}
