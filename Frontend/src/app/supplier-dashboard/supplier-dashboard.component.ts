import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Order } from '../model/Order';
import { OrdersService } from '../services/orders.service';

@Component({
  selector: 'app-supplier-dashboard',
  templateUrl: './supplier-dashboard.component.html',
  styleUrls: ['./supplier-dashboard.component.css']
})
export class SupplierDashboardComponent {

  order:Order;
  result:String="";
  orderList:Order[] =[];
  myForm: FormGroup;
  constructor(private ord : OrdersService){
    this.myForm = new FormGroup({
      orderId: new FormControl('', [Validators.required, Validators.pattern('[0-9]+')]),
      productId: new FormControl('', [Validators.required, Validators.pattern('[0-9]+')]),
      UserId: new FormControl('', [Validators.required, Validators.pattern('[0-9]+')]),
      orderQuantity: new FormControl('', [Validators.required, Validators.pattern('[0-9]+')]),
      orderStatus: new FormControl('', [Validators.required, Validators.pattern('[[a-zA-Z]+')])
    })

    this.order = new Order();
    this.getAllOrder();
  }
  InsertOrder(data:any){
    this.order.orderId= data.orderId;
    this.order.productId = data.productId;
    this.order.userId = data.UserId;
    this.order.orderQuantity = data.orderQuantity;
    this.order.orderStatus = data.orderStatus;
    this.result = this.ord.InsertOrder(this.order);
    this.getAllOrder();
    alert("Data Inserted");
  }

  UpdateOrder(data: any) {
    this.order.orderId= data.orderId;
    this.order.productId = data.productId;
    this.order.userId = data.UserId;
    this.order.orderQuantity = data.orderQuantity;
    this.order.orderStatus = data.orderStatus;
    this.result = this.ord.InsertOrder(this.order);
    this.getAllOrder();
   }

   DeleteOrder(data: any) {
    alert("data Deleted ");
    this.order.orderId = data.orderId;
    this.result = this.ord.DeleteOrder(this.order);
    this.getAllOrder();
  }

  getAllOrder() {
    this.ord.getAllOrderDetails().subscribe(order => this.orderList = order);
  }

  approve(data:any){
    this.order.orderStatus=data.orderStatus;
    this.result=this.ord.UpdateOrder(this.order);
    this.getAllOrder();
  }

}
