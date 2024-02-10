import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { OrdersComponent } from '../orders/orders.component';
import { InsertOrdersComponent } from './insert-orders.component';
// import { RegisterComponent } from './register.component';

describe('Order form Component Test', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InsertOrdersComponent],
      imports: [HttpClientModule, ReactiveFormsModule]
    }).compileComponents();
  });

  it('To test the component created', () => {
    const fixture = TestBed.createComponent(InsertOrdersComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Order Component'`, () => {
    const fixture = TestBed.createComponent(InsertOrdersComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Order');
  });

  it('Order form Component GUI count', () => {
    const fixture = TestBed.createComponent(InsertOrdersComponent);
    const formElement = fixture.debugElement.nativeElement.querySelector("#myForm");
    const inputElements = formElement.querySelectorAll("input");
    const inputElements1 = formElement.querySelectorAll("button");
    expect(inputElements.length).toEqual(3);
    expect(inputElements1.length).toEqual(3);
  });

  it('Order form initial value', () => {
    const fixture = TestBed.createComponent(InsertOrdersComponent);
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

  it('Order form valid by valid data', () => {
    const fixture = TestBed.createComponent(InsertOrdersComponent);
    const app = fixture.componentInstance;
    app.myForm.controls?.['orderId'].setValue("7");
    app.myForm.controls?.['productId'].setValue("4");
    app.myForm.controls?.['userId'].setValue("9");
    app.myForm.controls?.['orderQuantity'].setValue("5");
    app.myForm.controls?.['orderStatus'].setValue("Pending");
    expect(app.myForm.valid).toBeTruthy();
  });

  it('Order form valid by invalid data', () => {
    const fixture = TestBed.createComponent(InsertOrdersComponent);
    const app = fixture.componentInstance;
    app.myForm.controls?.['orderId'].setValue(" ");
    app.myForm.controls?.['productId'].setValue(" ");
    app.myForm.controls?.['userId'].setValue(" ");
    app.myForm.controls?.['orderQuantity'].setValue(" ");
    app.myForm.controls?.['orderStatus'].setValue(" ");

    expect(app.myForm.valid).toBeFalsy();
  });
});
