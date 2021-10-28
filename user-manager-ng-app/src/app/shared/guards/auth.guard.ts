import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthService){

  }
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // check whether the visitor is authenticated or not.
    // if yes... return true; 
    // else ... redirect to login page and return false 

    console.log(state);
    if(this.authService.isAuth()){
      return true;
    }else{
      this.router.navigate(['login'], { queryParams: { returnURL: state.url }});
      return false;
    } 
  }
  
}
