import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpServiceService {
  URL: string = 'https://jsonplaceholder.typicode.com';
  constructor(private http: HttpClient) {}

  getData(path: string) {
    return this.http.get(this.URL + "/" + path);
  }
}
