import { Injectable } from '@angular/core';
import { Phrase } from './phrase';
import { AuthenticationService } from './authentication.service';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

@Injectable()
export class PhraseService {
  headers = { headers: this.authenticationService.getAuthHeaders() };
  phrasesUrl = '/api/phrases/';
  constructor(
    private http: HttpClient,
    private authenticationService: AuthenticationService
  ) {}

  getPhrases(): Observable<Phrase[]> {
    return this.http.get<Phrase[]>(this.phrasesUrl, this.headers);
  }

  addPhrase(phrase: Phrase): Observable<Phrase> {
    console.log('addPhrase', phrase);
    return this.http.post<Phrase>(this.phrasesUrl, phrase, this.headers);
  }

  updatePhrase(phrase: Phrase): Observable<Phrase> {
    console.log('updatePhrase', phrase);
    return this.http.put<Phrase>(
      this.phrasesUrl + phrase._id,
      phrase,
      this.headers
    );
  }

  deletePhrase(phrase: Phrase): Observable<Phrase> {
    console.log('deletePhrase', phrase);
    return this.http.delete<Phrase>(this.phrasesUrl + phrase._id, this.headers);
  }
}
