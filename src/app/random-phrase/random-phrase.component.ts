import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PhraseService } from '../phrase.service';
import { Phrase } from '../phrase';

@Component({
  selector: 'app-random-phrase',
  templateUrl: './random-phrase.component.html',
  styleUrls: ['./random-phrase.component.scss']
})
export class RandomPhraseComponent implements OnInit {
  public phrases: Phrase[];
  public phrase: Phrase;
  public isLoading: boolean;
  public errorMessage: String;
  constructor(private phraseService: PhraseService, private router: Router) {}

  ngOnInit() {
    this.isLoading = true;
    this.phrases = [];
    this.phrase = null;
    this.getPhrases();
  }

  getPhrases(): void {
    this.phraseService.getPhrases().subscribe(
      phrases => {
        console.log('phrases', phrases);
        this.phrases = phrases;
        this.getRandomPhrase();
      },
      err => {
        console.log('phrase error', err);
        if (err.status === 401) {
          this.router.navigateByUrl('/login');
        } else {
          this.errorMessage = err;
          this.displayFake();
        }
      }
    );
  }

  getRandomPhrase() {
    this.isLoading = true;
    const i = Math.floor(Math.random() * this.phrases.length);
    console.log('getting random phrase', i);
    this.phrase = this.phrases[i];
    this.isLoading = false;
  }

  displayFake(): void {
    this.phrases = [
      {
        _id: 1,
        text: 'text 1'
      },
      {
        _id: 2,
        text: 'text testing'
      }
    ];
    this.getRandomPhrase();
  }
}
