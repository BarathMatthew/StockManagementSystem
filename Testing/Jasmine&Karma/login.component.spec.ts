import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';


describe('Login form Component Test', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [HttpClientModule, ReactiveFormsModule]
    }).compileComponents();
  });

  it('To test the Login component created', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Login Component'`, () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Login');
  });

  it('Login form Component GUI count', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const formElement = fixture.debugElement.nativeElement.querySelector("#myForm");
    const inputElements = formElement.querySelectorAll("input");
    const inputElements1 = formElement.querySelectorAll("button");
    expect(inputElements.length).toEqual(2);
    expect(inputElements1.length).toEqual(2);
  });

  it('Login form initial value', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const app = fixture.componentInstance;
    const myFormGroup = app.myForm;
    const myFormValues = {
      userName: '',
      password: '',
    };
    expect(myFormGroup.value).toEqual(myFormValues);
  });

  it('Login form valid by valid data', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const app = fixture.componentInstance;
    app.myForm.controls?.['userName'].setValue("Admin");
    app.myForm.controls?.['password'].setValue("admin-123");
    expect(app.myForm.valid).toBeFalsy();
  });

  it('Login form valid by invalid data', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const app = fixture.componentInstance;
    app.myForm.controls?.['userName'].setValue(" ");
    app.myForm.controls?.['password'].setValue(" ");
    expect(app.myForm.valid).toBeFalsy();
  });
});
