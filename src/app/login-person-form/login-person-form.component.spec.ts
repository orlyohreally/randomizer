import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPersonFormComponent } from './landing-page.component';

describe('LoginPersonFormComponent', () => {
  let component: LoginPersonFormComponent;
  let fixture: ComponentFixture<LoginPersonFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginPersonFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPersonFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
