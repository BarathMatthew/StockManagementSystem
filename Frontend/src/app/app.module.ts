import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from './services/user.service'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
// import { ManageSupplierComponent } from './manage-supplier/manage-supplier.component';
import { ManageDashboardComponent } from './manage-dashboard/manage-dashboard.component';
import { ManageProductComponent } from './manage-product/manage-product.component';
import { LoginComponent } from './login/login.component';
import { OrdersComponent } from './orders/orders.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { UpdateProductComponent } from './update-product/update-product.component';
import { InsertProductComponent } from './insert-product/insert-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { SupplierDashboardComponent } from './supplier-dashboard/supplier-dashboard.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UpdateOrdersComponent } from './update-orders/update-orders.component';
import { InsertOrdersComponent } from './insert-orders/insert-orders.component';
import { InsertUserComponent } from './insert-user/insert-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { WebpageComponent } from './webpage/webpage.component';
// import { LoginComponent } from './login/login.component';
// import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    DashboardComponent,
    // ManageSupplierComponent,
    ManageDashboardComponent,
    ManageProductComponent,
    LoginComponent,
    OrdersComponent,
    UpdateProductComponent,
    InsertProductComponent,
    DeleteProductComponent,
    SupplierDashboardComponent,
    ManageUsersComponent,
    UserDashboardComponent,
    UpdateOrdersComponent,
    InsertOrdersComponent,
    InsertUserComponent,
    UpdateUserComponent,
    DeleteUserComponent,
    WebpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatSnackBarModule
    
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }






