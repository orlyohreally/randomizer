import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './/app-routing.module';

import { FormsModule } from '@angular/forms';
import { MatListModule, MatInputModule, MatFormFieldModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
    HttpClientModule,
	FormsModule,
	MatListModule,
	MatFormFieldModule,
	MatInputModule,
	BrowserAnimationsModule
  ],
  providers: [PhraseService],
  bootstrap: [AppComponent]
})
export class AppModule { }


