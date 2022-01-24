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
        let users: MyUser[] = [];
        for (let key in data) {
          // Внутри 'data' хранится словарь, где есть какой-то ключ (firebase сам его придумывает; это рандомная строка)
          // А значение - это собственно наш обхект.
          //
          // Record<string, MyUser>
          // Record - это тип данных, аналогичных словарю (дословно "Запись")
          // <type1, type2> - это тип ключа и тип значения по ключу
          // type1 у нас это string, то есть ключом является строка
          // type2 у нас это MyUser, то есть значением является наш тип данных с пользователем

          users.push((data as Record<string, MyUser>)[key]);
        }
        this.people = users;
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
  }
}
