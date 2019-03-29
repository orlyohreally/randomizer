import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemovePhraseConfirmDialogComponent } from './remove-phrase-confirm-dialog.component';

describe('RemovePhraseConfirmDialogComponent', () => {
  let component: RemovePhraseConfirmDialogComponent;
  let fixture: ComponentFixture<RemovePhraseConfirmDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemovePhraseConfirmDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemovePhraseConfirmDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
