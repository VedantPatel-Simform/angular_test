import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../app/services/user.service';

export const adminGuard: CanActivateFn = (route, state) => {
  const user = inject(UserService);
  const router = inject(Router);
  const role = user.getData().role;
  if (!role) {
    return router.createUrlTree(['']);
  } else if (role === 'librarian') {
    return true;
  } else {
    return false;
  }
};
