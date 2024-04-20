import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {AuthenticationService} from "../services/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  public formgroupe!:FormGroup
  constructor(private fb:FormBuilder,private loginnservice:AuthenticationService,private router :Router) {
  }
  ngOnInit(): void {
    this.formgroupe = this.fb.group({
      username : this.fb.control(''),
      password : this.fb.control('')
    })
  }

  login() {
    let username = this.formgroupe.value.username;
    let password = this.formgroupe.value.password;
    let auth = this.loginnservice.login(username,password);
    if(auth==true){
      this.router.navigateByUrl("/admin");
    }
  }
}
