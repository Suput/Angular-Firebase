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
  // Небольшое описание, какой должна быть ссылка на вашу базу данных в Firebase
  //
  // Во-первых, идём по пути https://console.firebase.google.com/
  // Там ищем свой проект. И заходим (слева меню) во вкладку Realtime Database
  // Нам сразу по центру экрана покажут ссылку на нашу базу данных
  //
  // Во-вторых, в конце добавляем 'data.json'. json показывает, что мы будем хранить json строки (или что объекты нужно преобразовывать в json)
  // data нужна для названия базы данных
  // Можно дать другое название (test/users/people/mydb/my-database), но '.json' добавить обязательно

  URL: string = '';
  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get(this.URL);
  }

  addData(data: MyUser) {
    return this.http.post(this.URL, data);
  }
}
