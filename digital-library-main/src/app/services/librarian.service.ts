import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../../interfaces/User.interface';

@Injectable({
  providedIn: 'root',
})
export class LibrarianService {
  private librarianData = new BehaviorSubject<Partial<User>>({});
  user$ = this.librarianData.asObservable();

  setData(data: User) {
    this.librarianData.next(data);
  }
  constructor() {}
}
