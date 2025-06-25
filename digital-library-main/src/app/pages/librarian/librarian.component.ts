import { Component, inject, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Book } from '../../../interfaces/Book.interface';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-librarian',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './librarian.component.html',
  styleUrl: './librarian.component.scss',
})
export class LibrarianComponent implements OnInit {
  userService = inject(UserService);
  librarian = this.userService.getData();
  bookList!: Book[];
  loading = true;
  form!: FormGroup;
  searchText = '';
  fb = inject(FormBuilder);
  constructor() {
    this.form = this.fb.group({
      availability: ['', Validators.required],
      title: ['', Validators.required],
      author: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.userService.getBooks().subscribe((data) => {
      this.bookList = data;
      this.loading = false;
    });
  }
  http = inject(HttpClient);
  submit() {
    if (this.form.invalid) {
      alert('invalid form');
    }

    this.http.post('/books', this.form.getRawValue()).subscribe((data) => {
      console.log(data);

      alert('Books added successfully');
    });
  }

  get books() {
    if (this.searchText === '') return this.bookList;
    return this.bookList.filter((value) => {
      return value.title.toLowerCase().includes(this.searchText.toLowerCase());
    });
  }
}
