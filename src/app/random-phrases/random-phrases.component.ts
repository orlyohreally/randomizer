import { Component, OnInit } from '@angular/core';
import { PhraseService } from '../phrase.service'
import { Phrase } from '../phrase';
import { FormControl, FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';
import { MatProgressSpinnerModule, MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';

@Component({
  selector: 'app-random-phrases',
  templateUrl: './random-phrases.component.html',
  styleUrls: ['./random-phrases.component.scss']
})
export class RandomPhrasesComponent implements OnInit {

  public phrases: Phrase[];
  public phraseForm: FormGroup;
  public isLoading: boolean;
  constructor(private phraseService: PhraseService, private formBuilder: FormBuilder) { 
    
  }
  
  ngOnInit() {
    this.isLoading = true;
    this.phrases = [];
    this.getPhrases();
    console.log(this.phrases);
  }
  initPhrase() {
    return new FormGroup({
      id: new FormControl(''),
      text: new FormControl('')
    });
  }
  get phraseForms() {
    return this.phraseForm.get('phrases') as FormArray;
  }
  initForm() {
    this.phraseForm = this.formBuilder.group({
      phrases: new FormArray(this.phrases.map(phrase=> {
        const group = this.initPhrase();
        group.patchValue(phrase);
        return group;
      }))
    });
    this.isLoading = false;
  }
  addPhrase() {
    const phrase = this.formBuilder.group({
      id: null,
      text: ''
    });
    this.phraseForms.push(phrase);
  }
  
  removePhrase(i) {
    this.phraseForms.removeAt(i);
  }
  
  getPhrases(): void {
    this.phraseService.getPhrases().subscribe(phrases => 
      {
        console.log("phrases", phrases);
        this.phrases = phrases;
        this.initForm();
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
        
        this.initForm();
      }
    );   
  }
}
