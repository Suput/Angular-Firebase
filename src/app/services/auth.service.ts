import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLogged: boolean = false;
  userEmail: string = '';
  userPhone: string = '';

  getLogged() {
    return this.isLogged;
  }

  setLogged(newvalue: boolean) {
    this.isLogged = newvalue;
  }

  login(email: string, phone: string) {
    this.userEmail = email;
    this.userPhone = phone;
    this.setLogged(true);
    console.log('Logged');
  }

  logout() {
    this.userEmail = this.userPhone = '';
    this.setLogged(false);
  }
}
