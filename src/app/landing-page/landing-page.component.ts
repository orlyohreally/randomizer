import { Component, OnInit } from '@angular/core';
import { PhraseService } from '../phrase.service'
import { Phrase } from '../phrase';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  public phrases: Phrase[];
  
  constructor(private phraseService: PhraseService) { 
    
  }
  
  ngOnInit() {
    this.phrases = [];
    this.getPhrases();
    console.log(this.phrases);
  }
  
  getPhrases(): void {
    this.phrases = this.phraseService.getPhrases();
   
  }
}
