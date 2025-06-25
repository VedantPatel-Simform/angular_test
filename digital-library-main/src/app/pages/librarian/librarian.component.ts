import { Component, inject, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Book } from '../../../interfaces/Book.interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-librarian',
  imports: [FormsModule],
  templateUrl: './librarian.component.html',
  styleUrl: './librarian.component.scss',
})
export class LibrarianComponent implements OnInit {
  userService = inject(UserService);
  librarian = this.userService.getData();
  bookList!: Book[];
  loading = true;

  searchText = '';

  ngOnInit(): void {
    this.userService.getBooks().subscribe((data) => {
      this.bookList = data;
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
