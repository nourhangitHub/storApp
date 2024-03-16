import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { map } from 'rxjs';
import { LoginService } from '../../services/loginService/login.service';

export const userGuard: CanActivateFn = (route, state) => {
  return  localStorage.getItem("role") === "user"  || inject(LoginService).getRole.pipe(map((role) => role=== "user"));
};
