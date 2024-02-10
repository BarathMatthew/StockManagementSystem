import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateUserComponent } from './update-user.component';


describe('Update User form Component Test', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateUserComponent],
      imports: [HttpClientModule, ReactiveFormsModule]
    }).compileComponents();
  });

  it('To test the Update User component created', () => {
    const fixture = TestBed.createComponent(UpdateUserComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Update User Component'`, () => {
    const fixture = TestBed.createComponent(UpdateUserComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('User');
  });

  it('Update User form Component GUI count', () => {
    const fixture = TestBed.createComponent(UpdateUserComponent);
    const formElement = fixture.debugElement.nativeElement.querySelector("#myForm");
    const inputElements = formElement.querySelectorAll("input");
    const inputElements1 = formElement.querySelectorAll("button");
    expect(inputElements.length).toEqual(5);
    expect(inputElements1.length).toEqual(3);
  });

  it('Update User form initial value', () => {
    const fixture = TestBed.createComponent(UpdateUserComponent);
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

  it('Update User form valid by valid data', () => {
    const fixture = TestBed.createComponent(UpdateUserComponent);
    const app = fixture.componentInstance;
    app.myForm.controls?.['userId'].setValue("70");
    app.myForm.controls?.['userName'].setValue("Dom");
    app.myForm.controls?.['mobileNumber'].setValue("9647234567");
    app.myForm.controls?.['emailId'].setValue("dom@gmail.com");
    app.myForm.controls?.['password'].setValue("123");
    app.myForm.controls?.['userType'].setValue("customer");
    expect(app.myForm.valid).toBeTruthy();
  });

  it('Update User form valid by invalid data', () => {
    const fixture = TestBed.createComponent(UpdateUserComponent);
    const app = fixture.componentInstance;
    app.myForm.controls?.['userName'].setValue(" ");
    app.myForm.controls?.['mobileNumber'].setValue(0);
    app.myForm.controls?.['emailId'].setValue(" ");
    app.myForm.controls?.['password'].setValue(" ");
    app.myForm.controls?.['userType'].setValue(" ");
    expect(app.myForm.valid).toBeFalsy();
  });
});
