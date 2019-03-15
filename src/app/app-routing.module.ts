import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { LandingPageComponent }   from './landing-page/landing-page.component';
import { RandomPhraseComponent }   from './random-phrase/random-phrase.component';
const routes: Routes = [
  { path: '', component: RandomPhraseComponent },
  { path: 'list', component: LandingPageComponent },
  
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})

export class AppRoutingModule {}