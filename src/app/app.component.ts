import { Component } from '@angular/core';
import { HttpServiceService } from './services/http-service.service';

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'http-app';

  name: string = '';
  username: string = '';
  email: string = '';

  error: string = '';
  constructor(private http: HttpServiceService) {
    // http.getData('users1').subscribe(
    //   (data) => {
    //     console.log(data);
    //   },
    //   (error) => {
    //     this.error = error.message;
    //     console.log(error);
    //   }
    // );

    http.getData('users/1').subscribe(
      (data) => {
        let user = data as User;
        this.name = user.name;
        this.email = user.email;
        this.username = user.username;
      },
      (error) => {
        this.error = error;
        console.log(error);
      }
    );
  }
}
