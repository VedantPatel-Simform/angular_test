import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../../interfaces/User.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userData = new BehaviorSubject<Partial<User>>({});
  user$ = this.userData.asObservable();

  setData(data: User) {
    this.userData.next(data);
  }

  getData(): Partial<User> {
    return this.userData.value;
  }
  constructor() {}
}
