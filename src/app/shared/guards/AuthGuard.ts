import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from "@angular/router";
import {AuthService} from "../../services/auth.service";

@Injectable()
export class AuthGuard {
  constructor(private router: Router, private auth: AuthService){}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(!this.auth.isAuthenticated()){
      this.router.navigateByUrl('/auth/login');
      return false;
    }
    return true;
  }
}
