import { Pipe, PipeTransform } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Pipe({
  name: 'authFilter',
  pure: false
})
export class AuthFilterPipe implements PipeTransform {
  
  constructor(private authenticationService: AuthenticationService) {}
  isLoggedIn: boolean = this.authenticationService.isLoggedIn();
  transform(items: any): any {
    if(!items) {
      return items;
    }
    
    return items.filter(item => item.auth === this.isLoggedIn);
  }
}
