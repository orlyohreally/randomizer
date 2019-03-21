import { Component, OnInit } from '@angular/core';
import { MatButtonModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import { AuthenticationService, TokenPayload } from '../authentication.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup }from '@angular/forms';

@Component({
  selector: 'app-random-phrase',
  templateUrl: './login-person-form.component.html',
  styleUrls: ['./login-person-form.component.scss']
})
export class LoginPersonFormComponent implements OnInit {

  credentials: TokenPayload = {
    login: '',
    password: ''
  };
  loginForm: FormGroup;
  constructor(private authenticationService: AuthenticationService, private router: Router) { 
    
  }
   
  ngOnInit() {
    this.loginForm = new FormGroup({
      'login': new FormControl(),
      'password': new FormControl()
    });
  }
  get login() { return this.loginForm.get('login'); }
  get password() { return this.loginForm.get('password'); }
  
  loginPerson() {
    this.credentials = {
      login: this.loginForm.get('login').value,
      password: this.loginForm.get('password').value,
    }
    console.log(this.credentials);
    this.authenticationService.login(this.credentials).subscribe(() => {
      this.router.navigateByUrl('/phrases');
    },
    (err) => {
      console.log(err);
    });
  }
  
}
