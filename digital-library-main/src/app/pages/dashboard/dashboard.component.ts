import { Component, inject, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../../interfaces/User.interface';
import { Book } from '../../../interfaces/Book.interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  imports: [FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  userService = inject(UserService);
  user!: User;
  bookList!: Book[];
  loading = true;

  searchText = '';

  search(data: string) {
    this.searchText = data;
  }
  constructor() {
    console.log(this.userService.getData());
  }

  ngOnInit(): void {
    this.userService.getUserMethods().getBooks.subscribe((data) => {
      this.bookList = data;
      console.log(this.bookList);
      this.loading = false;
    });
  }

  get books() {
    if (this.searchText === '') return this.bookList;
    return this.bookList.filter((value) => {
      return value.title.toLowerCase().includes(this.searchText.toLowerCase());
    });
  }
}
