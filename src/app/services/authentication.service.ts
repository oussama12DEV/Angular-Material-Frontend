import { Injectable } from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
 public username:any;
 public roles:any;
 public authenticated : boolean=false;
 public users:any ={
   admin : ['STUDENT','ADMIN'],
   users : ['STUDENT']
 }
  constructor(private router :Router) { }
  public login(username:string ,password:string){
    if(this.users[username] && password=="1234"){
      this.username=username;
      this.roles = this.users[username];
      console.log(this.roles);
      this.authenticated=true;
      return true;
    }
    return false;
  }

  logout() {
    this.username=undefined;
    this.roles=undefined;
    this.authenticated=false;
    this.router.navigateByUrl("/login");
  }
}
