import { Component, OnInit } from '@angular/core';
import { MatButtonModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import { AuthenticationService, TokenPayload } from '../authentication.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-random-phrase',
  templateUrl: './register-person-form.component.html',
  styleUrls: ['./register-person-form.component.scss']
})
export class RegisterPersonFormComponent implements OnInit {

  credentials: TokenPayload = {
    login: '',
    password: ''
  };
  registerForm: FormGroup;
  constructor(private authenticationService: AuthenticationService, private router: Router) { 
    
  }
   
  ngOnInit() {
    this.registerForm = new FormGroup({
      'login': new FormControl(),
      'password': new FormControl()
    });
  }
  get login() { return this.registerForm.get('login'); }
  get password() { return this.registerForm.get('password'); }
  
  register() {
    this.credentials = {
      login: this.registerForm.get('login').value,
      password: this.registerForm.get('password').value,
    }
    console.log(this.credentials);
    this.authenticationService.register(this.credentials).subscribe(() => {
      this.router.navigateByUrl('/phrases');
    },
    (err) => {
      console.log(err);
    });
  }
  
}
