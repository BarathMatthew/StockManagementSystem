import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { InsertUserComponent } from './insert-user.component';


describe('Insert User form Component Test', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InsertUserComponent],
      imports: [HttpClientModule, ReactiveFormsModule]
    }).compileComponents();
  });

  it('To test Insert User the component created', () => {
    const fixture = TestBed.createComponent(InsertUserComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Insert User Component'`, () => {
    const fixture = TestBed.createComponent(InsertUserComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('User');
  });

  it('Insert User form Component GUI count', () => {
    const fixture = TestBed.createComponent(InsertUserComponent);
    const formElement = fixture.debugElement.nativeElement.querySelector("#myForm");
    const inputElements = formElement.querySelectorAll("input");
    const inputElements1 = formElement.querySelectorAll("button");
    expect(inputElements.length).toEqual(4);
    expect(inputElements1.length).toEqual(3);
  });

  it('Insert User form initial value', () => {
    const fixture = TestBed.createComponent(InsertUserComponent);
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

  it('Insert User form valid by valid data', () => {
    const fixture = TestBed.createComponent(InsertUserComponent);
    const app = fixture.componentInstance;
    app.myForm.controls?.['userId'].setValue("70");
    app.myForm.controls?.['userName'].setValue("Dom");
    app.myForm.controls?.['mobileNumber'].setValue("9647234567");
    app.myForm.controls?.['emailId'].setValue("dom@gmail.com");
    app.myForm.controls?.['password'].setValue("123");
    app.myForm.controls?.['userType'].setValue("customer");
    expect(app.myForm.valid).toBeTruthy();
  });

  it('Insert User form valid by invalid data', () => {
    const fixture = TestBed.createComponent(InsertUserComponent);
    const app = fixture.componentInstance;
    app.myForm.controls?.['userName'].setValue(" ");
    app.myForm.controls?.['mobileNumber'].setValue(0);
    app.myForm.controls?.['emailId'].setValue(" ");
    app.myForm.controls?.['password'].setValue(" ");
    app.myForm.controls?.['userType'].setValue(" ");
    expect(app.myForm.valid).toBeFalsy();
  });
});
