import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { DeleteProductComponent } from './delete-product.component';




describe('Delete Product form Component Test', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeleteProductComponent],
      imports: [HttpClientModule, ReactiveFormsModule]
    }).compileComponents();
  });

  it('To test the Delete Product component created', () => {
    const fixture = TestBed.createComponent(DeleteProductComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Delete Product Component'`, () => {
    const fixture = TestBed.createComponent(DeleteProductComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Delete-Product');
  });

  it('Delete Product form Component GUI count', () => {
    const fixture = TestBed.createComponent(DeleteProductComponent);
    const formElement = fixture.debugElement.nativeElement.querySelector("#myForm");
    const inputElements = formElement.querySelectorAll("input");
    const inputElements1 = formElement.querySelectorAll("button");
    expect(inputElements.length).toEqual(1);
    expect(inputElements1.length).toEqual(3);
  });

  it('Delete Order form initial value', () => {
    const fixture = TestBed.createComponent(DeleteProductComponent);
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

  it('Delete Order form valid by valid data', () => {
    const fixture = TestBed.createComponent(DeleteProductComponent);
    const app = fixture.componentInstance;
    app.myForm.controls?.['productId'].setValue("7");
    app.myForm.controls?.['productName'].setValue("mobile");
    app.myForm.controls?.['productDesc'].setValue("good");
    app.myForm.controls?.['productPrice'].setValue("500");
    app.myForm.controls?.['productQuantity'].setValue("12");
    expect(app.myForm.valid).toBeTruthy();
  });

  it('Delete Order form valid by invalid data', () => {
    const fixture = TestBed.createComponent(DeleteProductComponent);
    const app = fixture.componentInstance;
    app.myForm.controls?.['productId'].setValue(" ");
    app.myForm.controls?.['productName'].setValue(" ");
    app.myForm.controls?.['productDesc'].setValue(" ");
    app.myForm.controls?.['productPrice'].setValue(" ");
    app.myForm.controls?.['productQuantity'].setValue(" ");

    expect(app.myForm.valid).toBeFalsy();
  });
});
