import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Product } from '../model/Product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent {

  product:Product;
  result:String="";
  productList:Product[] =[];
  myForm: FormGroup;
  constructor(private pro : ProductService){
    this.myForm = new FormGroup({
      productId: new FormControl('', [Validators.required, Validators.pattern('[0-9]+')]),
      productName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]+')]),
      productDesc: new FormControl('', [Validators.required, Validators.pattern('[[a-zA-Z]+')]),
      productPrice: new FormControl('', [Validators.required, Validators.pattern('[0-9]+')]),
      productQuantity : new FormControl('',[Validators.required,Validators.pattern('[0-9]+')])
    })

    this.product = new Product();
    this.getAllProduct();
  }
  InsertProduct(data:any){
    this.product.productName = data.productName;
    this.product.productDesc = data.productDesc;
    this.product.productPrice = data.productPrice;
    this.product.productQuantity = data.productQuantity;
    this.result = this.pro.InsertProduct(this.product);
    this.getAllProduct();
    // alert("Data Inserted");
  }

  UpdateProduct(data: any) {
    alert("Data Updated");
    this.product.productId= data.productId;
    this.product.productName = data.productName;
    this.product.productDesc = data.productDesc;
    this.product.productPrice = data.productPrice;
    this.product.productQuantity = data.productQuantity;
    this.result = this.pro.UpdateProduct(this.product);
    this.getAllProduct();
  
  
   }

   DeleteProduct(data: any) {
    alert("data Deleted ");
    this.product.productId = data.productId;
    this.result = this.pro.DeleteProduct(this.product);
    this.getAllProduct();
  }

  getAllProduct() {
    this.pro.getAllProductDetails().subscribe(product => this.productList = product);
  }
}
