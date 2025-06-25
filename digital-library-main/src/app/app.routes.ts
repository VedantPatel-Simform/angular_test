import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LibrarianComponent } from './pages/librarian/librarian.component';
import { adminGuard } from '../guards/admin.guard';
import { userGuard } from '../guards/user.guard';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [userGuard],
  },
  {
    path: 'librarian',
    component: LibrarianComponent,
    canActivate: [adminGuard],
  },
];
