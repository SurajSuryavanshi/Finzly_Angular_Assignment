import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPageHomeworkComponent } from './login-page-homework.component';

describe('LoginPageHomeworkComponent', () => {
  let component: LoginPageHomeworkComponent;
  let fixture: ComponentFixture<LoginPageHomeworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginPageHomeworkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPageHomeworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
