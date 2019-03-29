import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-remove-phrase-confirm-dialog',
  templateUrl: './remove-phrase-confirm-dialog.component.html',
  styleUrls: ['./remove-phrase-confirm-dialog.component.scss']
})
export class RemovePhraseConfirmDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<RemovePhraseConfirmDialogComponent>
  ) {}

  ngOnInit() {}
}
