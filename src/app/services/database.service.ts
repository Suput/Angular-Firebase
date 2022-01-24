import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface MyUser {
  id: number;
  username: string;
  email: string;
  password: string;
  rating: number;
}

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  URL: string = '';
  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get(this.URL);
  }

  addData(data: MyUser) {
    return this.http.post(this.URL, data);
  }
}
