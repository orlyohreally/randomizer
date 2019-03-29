import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';
import { Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class MenuNavService {
  menuNav: any[] = [
    {
      name: 'random-phrase',
      label: 'Random phrase',
      path: '/phrase',
      hidden: false,
      auth: false
    },
    {
      name: 'random-phrases',
      label: 'All phrases',
      path: '/phrases',
      hidden: false,
      auth: true
    },
    {
      name: 'login',
      label: 'Login',
      path: '/login',
      hidden: this.authenticationService.isLoggedIn(),
      auth: false
    },
    /*{
        name: 'register',
        label: 'Register',
        path: '/register',
        auth: false
      },*/
    {
      name: 'logout',
      label: 'Log out',
      path: '/logout',
      hidden: false,
      auth: true
    }
  ];
  constructor(private authenticationService: AuthenticationService) {}

  getNavMenu(): any[] {
    return this.menuNav.filter(
      item =>
        !item.hidden &&
        (item.auth === false || this.authenticationService.isLoggedIn())
    );
  }
}
