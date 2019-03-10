import { Component, OnInit } from '@angular/core';
import { PhraseService } from '../phrase.service'
import { Phrase } from '../phrase';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';

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
	this.phraseService.getPhrases().subscribe(phrases => {
	console.log("phrases", phrases);
		//this.phrases = phrases;
	});   
  }
}
