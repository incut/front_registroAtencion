import { HttpInterceptorFn, HttpRequest, HttpHandlerFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../app/service/auth.service';

export const authInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn) => {
  // En interceptores funcionales usamos inject()
  const auth = inject(AuthService);
  const token = auth.getToken();

  if (!token) {
    return next(req.clone({withCredentials:true}));
  }

  const authReq = req.clone({
    setHeaders: { Authorization: `Token ${token}` },
    
    withCredentials:true
  }
);

  return next(authReq);
};
