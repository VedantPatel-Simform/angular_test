import { HttpInterceptorFn } from '@angular/common/http';

export const httpInterceptor: HttpInterceptorFn = (req, next) => {
  const apiPrefix = 'http://localhost:3000/api';
  const token = localStorage.getItem('token');
  let reqClone;
  if (token) {
    reqClone = req.clone({
      setHeaders: { Authorization: `Bearer ${token}` },
      url: apiPrefix + req.url,
    });
    return next(reqClone);
  } else {
    reqClone = req.clone({
      url: apiPrefix + req.url,
    });
    return next(reqClone);
  }
};
