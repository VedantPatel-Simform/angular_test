import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../app/services/user.service';

export const adminGuard: CanActivateFn = (route, state) => {
  const user = inject(UserService);
  const router = inject(Router);
  console.log(user.getData());
  if (!user.getData()) {
    return router.createUrlTree(['']);
  }
  if (user.isAdmin()) {
    return true;
  }
  return router.createUrlTree(['dashboard']);
};
