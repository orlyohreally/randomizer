import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './/app-routing.module';

import { FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { MatListModule, MatInputModule, MatFormFieldModule, MatTabsModule, MatCardModule, MatButtonModule, MatProgressSpinnerModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { RandomPhrasesComponent } from './random-phrases/random-phrases.component';
import { RandomPhraseComponent } from './random-phrase/random-phrase.component';
import { RegisterPersonFormComponent } from './register-person-form/register-person-form.component';
import { LoginPersonFormComponent } from './login-person-form/login-person-form.component';
import { MenuNavComponent } from './menu-nav/menu-nav.component';
import { LogoutComponent } from './logout/logout.component';

import { PhraseService } from './phrase.service';
import { AuthenticationService } from './authentication.service';
import { MenuNavService } from './menu-nav.service';

@NgModule({
  declarations: [
    AppComponent,
    RandomPhrasesComponent,
    RandomPhraseComponent,
    RegisterPersonFormComponent,
    LoginPersonFormComponent,
    LogoutComponent,
    MenuNavComponent
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
    MatTabsModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule
  ],
  providers: [PhraseService, AuthenticationService, MenuNavService],
  bootstrap: [AppComponent]
})
export class AppModule { }