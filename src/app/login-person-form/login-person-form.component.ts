import { Component, OnInit } from '@angular/core';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatCardModule, MatProgressSpinnerModule } from '@angular/material';
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
  isLoading: boolean;
  errorMessage: String;
  
  constructor(private authenticationService: AuthenticationService, private router: Router) { 
    
  }
   
  ngOnInit() {
    this.isLoading = false;
    this.loginForm = new FormGroup({
      'login': new FormControl(),
      'password': new FormControl()
    });
  }
  get login() { return this.loginForm.get('login'); }
  get password() { return this.loginForm.get('password'); }
  
  loginPerson() {
    this.startLoading();
    this.credentials = {
      login: this.loginForm.get('login').value,
      password: this.loginForm.get('password').value,
    }
    this.authenticationService.login(this.credentials).subscribe(() => {
      this.stopLoading();
      this.router.navigateByUrl('/phrases');
    },
    (err) => {
      this.stopLoading();
      console.log(err);
      this.errorMessage = err.message;
    });
  }
  
  startLoading(): void {
    this.isLoading = true;
    this.errorMessage = '';
  }
  
  stopLoading(): void {
    this.isLoading = false;
  }
  
}
