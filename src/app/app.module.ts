import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './/app-routing.module';


import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

import { PhraseService } from './phrase.service';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PhraseService],
  bootstrap: [AppComponent]
})
export class AppModule { }


