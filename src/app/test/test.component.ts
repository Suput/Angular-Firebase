import { Component, OnInit } from '@angular/core';
import { DatabaseService, MyUser } from '../services/database.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent {
  constructor(private databaseService: DatabaseService) {}

  people: MyUser[] = [];
  id: number = 0;
  username: string = '';
  email: string = '';
  password: string = '';
  rating: number = 0;
  getData() {
    this.databaseService.getData().subscribe(
      (data) => {
        let users = data as MyUser[];
        this.people = users;
        console.log(users);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  addUser() {
    let user: MyUser = {
      email: this.email,
      password: this.password,
      id: this.id,
      username: this.username,
      rating: this.rating,
    };
    this.databaseService.addData(user).subscribe();
    this.getData();
  }
}
