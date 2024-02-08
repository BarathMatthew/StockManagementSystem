import { Component } from '@angular/core';
import { Product } from '../model/Product';
import { ProductService } from '../services/product.service';
// import { ManageProductComponent } from '../manage-product/manage-product.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-manage-dashboard',
  templateUrl: './manage-dashboard.component.html',
  styleUrls: ['./manage-dashboard.component.css']
})
export class ManageDashboardComponent {

  product:Product;
  result:String="";
  productList:Product[] =[];
  productList2:Product[] =[];
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
    this.getAllProductWithAdjustedPrice();
  }

  getAllProduct() {
    this.pro.getAllProductDetails().subscribe(product => this.productList = product);
  }

  getAllProductWithAdjustedPrice() {
    this.pro.getAllProductDetails().subscribe(products => {
      this.productList2 = products.map(product => ({
        ...product,
        modifiedPrice: product.productPrice * 0.999 // Reduce the price by 0.1%
      }));
    });
  }
}

