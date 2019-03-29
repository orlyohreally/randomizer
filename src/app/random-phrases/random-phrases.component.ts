import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PhraseService } from '../phrase.service';
import { Phrase } from '../phrase';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
  FormArray
} from '@angular/forms';
import { MatDialog, MatSnackBar } from '@angular/material';
import { RemovePhraseConfirmDialogComponent } from '../remove-phrase-confirm-dialog/remove-phrase-confirm-dialog.component';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
export interface DialogData {
  delete: boolean;
}

@Component({
  selector: 'app-random-phrases',
  templateUrl: './random-phrases.component.html',
  styleUrls: ['./random-phrases.component.scss']
})
export class RandomPhrasesComponent implements OnInit {
  public phrases: Phrase[];
  public phraseForm: FormGroup;
  public isLoading: boolean;
  public errorMessage: String;
  constructor(
    private phraseService: PhraseService,
    private formBuilder: FormBuilder,
    private router: Router,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.errorMessage = '';
    this.isLoading = true;
    this.phrases = [];
    this.getPhrases();
  }

  initPhrase(phrase: Phrase) {
    const group = new FormGroup({
      _id: new FormControl(phrase._id),
      text: new FormControl(phrase.text)
    });
    this.onChanges(group);
    return group;
  }

  get phraseForms() {
    return this.phraseForm.get('phrases') as FormArray;
  }

  initForm() {
    this.phraseForm = this.formBuilder.group({
      phrases: new FormArray(
        this.phrases.map(phrase => {
          const group = this.initPhrase(phrase);
          return group;
        })
      )
    });
    this.isLoading = false;
  }

  createPhrase(group: FormGroup, phrase: Phrase) {
    this.phraseService.addPhrase(phrase).subscribe(
      res => {
        group.setValue({ _id: res._id, text: res.text });
        this.snackBar.open('Phase was added');
      },
      err => {
        console.log('on add err', err);
        this.snackBar.open(err);
      }
    );
  }

  editPhrase(group: FormGroup, phrase: Phrase) {
    this.phraseService.updatePhrase(phrase).subscribe(
      res => {
        console.log('on edit', res);
        this.snackBar.open('Phase was updated');
      },
      err => {
        console.log('on edit err', err);
      }
    );
  }
  onChanges(group: FormGroup): void {
    group.valueChanges
      .pipe(
        debounceTime(400),
        distinctUntilChanged()
      )
      .subscribe(val => {
        console.log('on changes', val);
        if (!val._id) {
          this.createPhrase(group, val);
        } else {
          this.editPhrase(group, val);
        }
      });
  }

  addPhrase() {
    const phrase = this.formBuilder.group({
      _id: null,
      text: ''
    });
    this.phraseForms.push(phrase);
    this.onChanges(phrase);
  }

  confirmRemove(): Promise<boolean> {
    const dialogRef = this.dialog.open(RemovePhraseConfirmDialogComponent, {
      data: { delete: false }
    });

    return dialogRef.afterClosed().toPromise();
  }

  async removePhrase(i: number): Promise<void> {
    if (await this.confirmRemove()) {
      this.phraseService
        .deletePhrase(this.phraseForms.controls[i].value)
        .subscribe(
          res => {
            this.phraseForms.removeAt(i);
            console.log('on delete', this.phraseForms, i);
            this.snackBar.open('Phase was removed', null, {
              duration: 1000
            });
          },
          err => {
            console.log('on delete err', err);
          }
        );
    }
  }

  getPhrases(): void {
    this.phraseService.getPhrases().subscribe(
      phrases => {
        console.log('phrases', phrases);
        this.phrases = phrases;
        this.initForm();
      },
      err => {
        console.log('phrases error', err);
        if (err.status === 401) {
          this.router.navigateByUrl('/login');
        } else {
          this.errorMessage = err;
          this.displayFake();
        }
      }
    );
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

    this.initForm();
  }
}
