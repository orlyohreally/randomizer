import { Component, OnInit } from '@angular/core';
import { MatButtonModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import { AuthenticationService, TokenPayload } from '../authentication.service';
import { Router } from '@angular/router';

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
  
  constructor(private authenticationService: AuthenticationService, private router: Router) { 
    
  }
   
  ngOnInit() {
    
  }
  
  register() {
    console.log(this.credentials);
    this.authenticationService.register(this.credentials).subscribe(() => {
      this.router.navigateByUrl('/list');
    },
    (err) => {
      console.log(err);
    });
  }
  
}
