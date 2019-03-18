import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPersonFormComponent } from './register-person-form.component';

describe('RegisterPersonFormComponent', () => {
  let component: RegisterPersonFormComponent;
  let fixture: ComponentFixture<RegisterPersonFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterPersonFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterPersonFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
