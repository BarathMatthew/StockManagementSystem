import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../model/Order';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private url : string="http://localhost:6452";
  constructor(private http:HttpClient) { }

  InsertOrder(order: Order){
    this.http.post(this.url+"/insertOrders",order).subscribe();
    return "Record Inserted";
  }

  DeleteOrder(order: Order) {
    this.http.delete(this.url + "/deleteOrders/" + order.orderId).subscribe();
    return "Record Deleted";
  }

  UpdateOrder(order: Order)
  {
    this.http.put(this.url+"/updateOrders",order).subscribe();
    return "Record Updated";
  }
  getAllOrderDetails() {
    return this.http.get<Order[]>(this.url + "/findallOrders");
  }


}

