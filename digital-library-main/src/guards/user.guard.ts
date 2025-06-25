import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../app/services/user.service';

export const userGuard: CanActivateFn = (route, state) => {
  const user = inject(UserService);
  const router = inject(Router);

  if (!user.getData()) {
    return router.createUrlTree(['']);
  } else if (user.getData().role === 'user') {
    return true;
  }
  return router.createUrlTree(['librarian']);
};
