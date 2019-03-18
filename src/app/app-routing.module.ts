import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { RandomPhrasesComponent }   from './random-phrases/random-phrases.component';
import { RandomPhraseComponent }   from './random-phrase/random-phrase.component';
import { RegisterPersonFormComponent }   from './register-person-form/register-person-form.component';
const routes: Routes = [
  { path: '', component: RandomPhraseComponent },
  { path: 'list', component: RandomPhrasesComponent },
  { path: 'register', component: RegisterPersonFormComponent },
  
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})

export class AppRoutingModule {}