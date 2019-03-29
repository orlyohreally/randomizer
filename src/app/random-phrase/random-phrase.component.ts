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
  public currentIndex: number;
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
        this.phrases = phrases;
        this.shuffle(this.phrases);
        this.getRandomPhrase();
      },
      err => {
        console.log('phrase error', err);
        if (err.status === 401) {
          this.router.navigateByUrl('/login');
        } else {
          this.errorMessage = err;
        }
      }
    );
  }

  getRandomPhrase() {
    this.currentIndex = this.currentIndex >= 0 ? this.currentIndex + 1 : 0;

    if (this.currentIndex >= this.phrases.length) {
      this.shuffle(this.phrases);
      this.currentIndex = 0;
    }

    this.isLoading = true;
    this.phrase = this.phrases[this.currentIndex];
    this.isLoading = false;
  }

  // Fisher-Yates shuffle
  shuffle(array: Array<Object>) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
}
