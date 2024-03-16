import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { LoginService } from '../../services/loginService/login.service';
import { map } from 'rxjs';

export const adminGuard: CanActivateFn = () => {
  return localStorage.getItem("role") === "admin"|| inject(LoginService).getRole.pipe(map((role) => role=== "admin")) ;
};
