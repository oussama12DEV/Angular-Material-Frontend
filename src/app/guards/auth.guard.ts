import {
  ActivatedRouteSnapshot,
  GuardResult,
  MaybeAsync, Router,
  RouterStateSnapshot
} from '@angular/router';
import {AuthenticationService} from "../services/authentication.service";
import {Injectable} from "@angular/core";


@Injectable()
export class AuthGuard {
  constructor(private auth :AuthenticationService,private router : Router) {
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    if(this.auth.authenticated ==true){
      return true;
    }
    else {
      this.router.navigateByUrl("/login")
      return false;
    }

  }


}

