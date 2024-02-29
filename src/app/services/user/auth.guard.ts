import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from './auth.service';


export const authGuard: CanActivateFn = () => {
    //used auth service data to return true
    const authService = inject(AuthService)
    const router = inject(Router)

    if (authService.isAuthenticated()){
      return true
    }else{
      return false
      router.navigate(['/login'])
    }
}
