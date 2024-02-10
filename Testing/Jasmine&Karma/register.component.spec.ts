import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register.component';

describe('Register form Component Test', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterComponent],
      imports: [HttpClientModule, ReactiveFormsModule]
    }).compileComponents();
  });

  it('To test the component created', () => {
    const fixture = TestBed.createComponent(RegisterComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Register Component'`, () => {
    const fixture = TestBed.createComponent(RegisterComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('User');
  });

  it('Register form Component GUI count', () => {
    const fixture = TestBed.createComponent(RegisterComponent);
    const formElement = fixture.debugElement.nativeElement.querySelector("#myForm");
    const inputElements = formElement.querySelectorAll("input");
    const inputElements1 = formElement.querySelectorAll("button");
    expect(inputElements.length).toEqual(4);
    expect(inputElements1.length).toEqual(2);
  });

  it('Register form initial value', () => {
    const fixture = TestBed.createComponent(RegisterComponent);
    const app = fixture.componentInstance;
    const myFormGroup = app.myForm;
    const myFormValues = {
      userId: "",
      userName: '',
      mobileNumber: "",
      emailId: '',
      password: '',
      userType: ''
    };
    expect(myFormGroup.value).toEqual(myFormValues);
  });

  it('Register form valid by valid data', () => {
    const fixture = TestBed.createComponent(RegisterComponent);
    const app = fixture.componentInstance;
    app.myForm.controls?.['userId'].setValue("70");
    app.myForm.controls?.['userName'].setValue("Dom");
    app.myForm.controls?.['mobileNumber'].setValue("9647234567");
    app.myForm.controls?.['emailId'].setValue("dom@gmail.com");
    app.myForm.controls?.['password'].setValue("123");
    app.myForm.controls?.['userType'].setValue("customer");
    expect(app.myForm.valid).toBeTruthy();
  });

  it('Register form valid by invalid data', () => {
    const fixture = TestBed.createComponent(RegisterComponent);
    const app = fixture.componentInstance;
    app.myForm.controls?.['userName'].setValue(" ");
    app.myForm.controls?.['mobileNumber'].setValue(0);
    app.myForm.controls?.['emailId'].setValue(" ");
    app.myForm.controls?.['password'].setValue(" ");
    app.myForm.controls?.['userType'].setValue(" ");
    expect(app.myForm.valid).toBeFalsy();
  });
});
