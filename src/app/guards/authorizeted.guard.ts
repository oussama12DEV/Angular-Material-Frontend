import {
  ActivatedRouteSnapshot,
  GuardResult,
  MaybeAsync, Router,
  RouterStateSnapshot
} from '@angular/router';
import {AuthenticationService} from "../services/authentication.service";
import {Injectable} from "@angular/core";


@Injectable()
export class AuthorizetedGuardGuard {
  constructor(private auth: AuthenticationService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    let authorize: boolean = false;
    let authorizetedRoles: string[] = route.data['roles'];
    //let roles: string[] = this.auth.roles
    for (let role of this.auth.roles) {
      if (authorizetedRoles.includes(role)) {
        authorize = true;
      }
    }
    return authorize;

  }


}

