import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { InsertProductComponent } from './insert-product.component';


describe('Insert Product form Component Test', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InsertProductComponent],
      imports: [HttpClientModule, ReactiveFormsModule]
    }).compileComponents();
  });

  it('To test the Insert Product component created', () => {
    const fixture = TestBed.createComponent(InsertProductComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Insert Product Component'`, () => {
    const fixture = TestBed.createComponent(InsertProductComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Insert-Product');
  });

  it('Insert Product form Component GUI count', () => {
    const fixture = TestBed.createComponent(InsertProductComponent);
    const formElement = fixture.debugElement.nativeElement.querySelector("#myForm");
    const inputElements = formElement.querySelectorAll("input");
    const inputElements1 = formElement.querySelectorAll("button");
    expect(inputElements.length).toEqual(4);
    expect(inputElements1.length).toEqual(3);
  });

  it('Insert Product form initial value', () => {
    const fixture = TestBed.createComponent(InsertProductComponent);
    const app = fixture.componentInstance;
    const myFormGroup = app.myForm;
    const myFormValues = {
      productId: '',
      productName:'',
      productDesc:'',
      productPrice: '',
      productQuantity: ''
    };
    expect(myFormGroup.value).toEqual(myFormValues);
  });

  it('Insert product form valid by valid data', () => {
    const fixture = TestBed.createComponent(InsertProductComponent);
    const app = fixture.componentInstance;
    app.myForm.controls?.['productId'].setValue("7");
    app.myForm.controls?.['productName'].setValue("mobile");
    app.myForm.controls?.['productDesc'].setValue("good");
    app.myForm.controls?.['productPrice'].setValue("500");
    app.myForm.controls?.['productQuantity'].setValue("12");
    expect(app.myForm.valid).toBeTruthy();
  });

  it('Insert Order form valid by invalid data', () => {
    const fixture = TestBed.createComponent(InsertProductComponent);
    const app = fixture.componentInstance;
    app.myForm.controls?.['productId'].setValue(" ");
    app.myForm.controls?.['productName'].setValue(" ");
    app.myForm.controls?.['productDesc'].setValue(" ");
    app.myForm.controls?.['productPrice'].setValue(" ");
    app.myForm.controls?.['productQuantity'].setValue(" ");

    expect(app.myForm.valid).toBeFalsy();
  });
});
