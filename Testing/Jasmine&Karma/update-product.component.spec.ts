import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateProductComponent } from './update-product.component';



describe('Update Product form Component Test', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateProductComponent],
      imports: [HttpClientModule, ReactiveFormsModule]
    }).compileComponents();
  });

  it('To test the Update Product component created', () => {
    const fixture = TestBed.createComponent(UpdateProductComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Update Product Component'`, () => {
    const fixture = TestBed.createComponent(UpdateProductComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Update-Product');
  });

  it('Update Product form Component GUI count', () => {
    const fixture = TestBed.createComponent(UpdateProductComponent);
    const formElement = fixture.debugElement.nativeElement.querySelector("#myForm");
    const inputElements = formElement.querySelectorAll("input");
    const inputElements1 = formElement.querySelectorAll("button");
    expect(inputElements.length).toEqual(5);
    expect(inputElements1.length).toEqual(3);
  });

  it('Update Order form initial value', () => {
    const fixture = TestBed.createComponent(UpdateProductComponent);
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

  it('Update Order form valid by valid data', () => {
    const fixture = TestBed.createComponent(UpdateProductComponent);
    const app = fixture.componentInstance;
    app.myForm.controls?.['productId'].setValue("7");
    app.myForm.controls?.['productName'].setValue("mobile");
    app.myForm.controls?.['productDesc'].setValue("good");
    app.myForm.controls?.['productPrice'].setValue("500");
    app.myForm.controls?.['productQuantity'].setValue("12");
    expect(app.myForm.valid).toBeTruthy();
  });

  it('Update Order form valid by invalid data', () => {
    const fixture = TestBed.createComponent(UpdateProductComponent);
    const app = fixture.componentInstance;
    app.myForm.controls?.['productId'].setValue(" ");
    app.myForm.controls?.['productName'].setValue(" ");
    app.myForm.controls?.['productDesc'].setValue(" ");
    app.myForm.controls?.['productPrice'].setValue(" ");
    app.myForm.controls?.['productQuantity'].setValue(" ");

    expect(app.myForm.valid).toBeFalsy();
  });
});
