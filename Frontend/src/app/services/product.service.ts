import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../model/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url : string="http://localhost:6452";
  constructor(private http:HttpClient) { }

  InsertProduct(product: Product){
    this.http.post(this.url+"/insertProducts",product).subscribe();
    return "Record Inserted";
  }

  DeleteProduct(product: Product) {
    this.http.delete(this.url + "/deleteProducts/" + product.productId).subscribe();
    return "Record Deleted";
  }

  UpdateProduct(product: Product)
  {
    this.http.put(this.url+"/updateProducts",product).subscribe();
    return "Record Updated";
  }
  getAllProductDetails() {
    return this.http.get<Product[]>(this.url + "/findAllproducts");
  }

}

