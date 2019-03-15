import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomPhraseComponent } from './landing-page.component';

describe('RandomPhraseComponent', () => {
  let component: RandomPhraseComponent;
  let fixture: ComponentFixture<RandomPhraseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomPhraseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomPhraseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
