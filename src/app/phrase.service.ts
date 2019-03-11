import { Injectable } from '@angular/core';
import { Phrase } from './phrase'
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
@Injectable()
export class PhraseService {
	getPhrases(): Observable<Phrase[]> {
        return this.http.get<Phrase[]>('/api/phrases/');
    }
    
    constructor(
        private http: HttpClient 
    ) { }

}