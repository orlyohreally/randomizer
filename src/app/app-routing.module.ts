import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RandomPhrasesComponent }   from './random-phrases/random-phrases.component';
import { RandomPhraseComponent }   from './random-phrase/random-phrase.component';
import { LoginPersonFormComponent }   from './login-person-form/login-person-form.component';
import { RegisterPersonFormComponent }   from './register-person-form/register-person-form.component';
import { LogoutComponent }   from './logout/logout.component';

const routes: Routes = [
  { path: '', component: RandomPhraseComponent },
  { path: 'phrases', component: RandomPhrasesComponent },
  //{ path: 'register', component: RegisterPersonFormComponent },
  { path: 'login', component: LoginPersonFormComponent },
  { path: 'logout', component: LogoutComponent },
  
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})

export class AppRoutingModule {}