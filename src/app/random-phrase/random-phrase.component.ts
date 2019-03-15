import { Component, OnInit } from '@angular/core';
import { PhraseService } from '../phrase.service'
import { Phrase } from '../phrase';
import { MatCardModule, MatButtonModule, MatProgressSpinnerModule} from '@angular/material';

@Component({
  selector: 'app-random-phrase',
  templateUrl: './random-phrase.component.html',
  styleUrls: ['./random-phrase.component.scss']
})
export class RandomPhraseComponent implements OnInit {

  public phrases: Phrase[];
  public phrase: Phrase;
  public isLoading: boolean;
  constructor(private phraseService: PhraseService) { 
    
  }
   
  ngOnInit() {
    this.isLoading = true;
    this.phrases = [];
    this.phrase = {};
    
    this.getPhrases();
  }
  
  getPhrases(): void {
    this.phraseService.getPhrases().subscribe(phrases => 
      {
        console.log("phrases", phrases);
        this.phrases = phrases;
        this.getRandomPhrase();
      },
      err => {
        console.log("phrases error", err);
        this.phrases = [
          {
            id: 1,
            text: "text 1"
          },
          {
            id: 2,
            text: "text testing"
          }
        ];
        this.getRandomPhrase();
      }
    );   
  }
  getRandomPhrase() {
    this.isLoading = true;
    const i = Math.floor(Math.random() * this.phrases.length);
    console.log("getting radom phrase", i);
    this.phrase = this.phrases[i];
    this.isLoading = false;
  }
  
}
