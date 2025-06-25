import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../../interfaces/User.interface';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  router = inject(Router);
  http = inject(HttpClient);
  user = inject(UserService);
  loginAsLibrarian() {
    this.http.post<User>('/login-librarian', {}).subscribe((data) => {
      console.log(data);
      localStorage.setItem('token', data.token);
      this.user.setData(data);
      this.router.navigate(['librarian']);
    });
  }

  loginAsUser() {
    this.http.post<User>('/login-user', {}).subscribe((data) => {
      console.log(data);
      localStorage.setItem('token', data.token);
      this.user.setData(data);
      this.router.navigate(['dashboard']);
    });
  }
}
