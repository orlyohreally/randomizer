import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './/app-routing.module';

import { FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { MatListModule, MatInputModule, MatFormFieldModule, MatCardModule, MatButtonModule, MatProgressSpinnerModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RandomPhraseComponent } from './random-phrase/random-phrase.component';

import { PhraseService } from './phrase.service';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    RandomPhraseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule
  ],
  providers: [PhraseService],
  bootstrap: [AppComponent]
})
export class AppModule { }