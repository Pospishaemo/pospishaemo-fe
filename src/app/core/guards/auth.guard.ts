import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { AuthorizationService } from '../services/authorization.service';

export const authGuard: CanActivateFn = (route, state) => {

  const authorizationService: AuthorizationService = inject(AuthorizationService);

  return authorizationService.isLoggedIn;
};
