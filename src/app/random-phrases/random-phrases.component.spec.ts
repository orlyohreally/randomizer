import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomPhrasesComponent } from './random-phrases.component';

describe('RandomPhrasesComponent', () => {
  let component: RandomPhrasesComponent;
  let fixture: ComponentFixture<RandomPhrasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomPhrasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomPhrasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
