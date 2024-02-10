import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { OrdersComponent } from '../orders/orders.component';
import { UpdateOrdersComponent } from './update-orders.component';


describe('Update Order form Component Test', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateOrdersComponent],
      imports: [HttpClientModule, ReactiveFormsModule]
    }).compileComponents();
  });

  it('To test the Update order component created', () => {
    const fixture = TestBed.createComponent(UpdateOrdersComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Update Order Component'`, () => {
    const fixture = TestBed.createComponent(UpdateOrdersComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Update-Order');
  });

  it('Update Order form Component GUI count', () => {
    const fixture = TestBed.createComponent(UpdateOrdersComponent);
    const formElement = fixture.debugElement.nativeElement.querySelector("#myForm");
    const inputElements = formElement.querySelectorAll("input");
    const inputElements1 = formElement.querySelectorAll("button");
    expect(inputElements.length).toEqual(4);
    expect(inputElements1.length).toEqual(3);
  });

  it('Update Order form initial value', () => {
    const fixture = TestBed.createComponent(UpdateOrdersComponent);
    const app = fixture.componentInstance;
    const myFormGroup = app.myForm;
    const myFormValues = {
      orderId: "",
      productId: '',
      userId: '',
      orderQuantity: "",
      orderStatus: ''
    };
    expect(myFormGroup.value).toEqual(myFormValues);
  });

  it('Update Order form valid by valid data', () => {
    const fixture = TestBed.createComponent(UpdateOrdersComponent);
    const app = fixture.componentInstance;
    app.myForm.controls?.['orderId'].setValue("7");
    app.myForm.controls?.['productId'].setValue("4");
    app.myForm.controls?.['userId'].setValue("9");
    app.myForm.controls?.['orderQuantity'].setValue("5");
    app.myForm.controls?.['orderStatus'].setValue("Pending");
    expect(app.myForm.valid).toBeTruthy();
  });

  it('Update Order form valid by invalid data', () => {
    const fixture = TestBed.createComponent(UpdateOrdersComponent);
    const app = fixture.componentInstance;
    app.myForm.controls?.['orderId'].setValue(" ");
    app.myForm.controls?.['productId'].setValue(" ");
    app.myForm.controls?.['userId'].setValue(" ");
    app.myForm.controls?.['orderQuantity'].setValue(" ");
    app.myForm.controls?.['orderStatus'].setValue(" ");

    expect(app.myForm.valid).toBeFalsy();
  });
});
