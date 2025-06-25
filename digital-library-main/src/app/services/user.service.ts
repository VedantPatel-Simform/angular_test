import { inject, Injectable } from '@angular/core';
import { User } from '../../interfaces/User.interface';
import { HttpClient } from '@angular/common/http';
import { Book } from '../../interfaces/Book.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userData!: User;

  http = inject(HttpClient);
  setData(data: User) {
    this.userData = data;
  }

  getData(): User {
    return this.userData;
  }

  isAdmin(): boolean {
    if (this.userData.role === 'user') return false;
    return true;
  }

  getBooks() {
    return this.http.get<Book[]>('/books');
  }
  constructor() {}
}
