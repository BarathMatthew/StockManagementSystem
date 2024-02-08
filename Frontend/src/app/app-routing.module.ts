import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageDashboardComponent } from './manage-dashboard/manage-dashboard.component';
// import { ManageSupplierComponent } from './manage-supplier/manage-supplier.component';
import { ManageProductComponent } from './manage-product/manage-product.component';
import { LoginComponent } from './login/login.component';
import { OrdersComponent } from './orders/orders.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { InsertProductComponent } from './insert-product/insert-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { SupplierDashboardComponent } from './supplier-dashboard/supplier-dashboard.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { UpdateOrdersComponent } from './update-orders/update-orders.component';
import { InsertOrdersComponent } from './insert-orders/insert-orders.component';
import { InsertUserComponent } from './insert-user/insert-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { WebpageComponent } from './webpage/webpage.component';

const routes: Routes = [
  {path : 'register' , component : RegisterComponent},
  {path : 'login' , component : LoginComponent},
  {path : 'dashboard', component : DashboardComponent},
  {path : 'managedashboard', component : ManageDashboardComponent},
  // {path : 'managesupplier', component : ManageSupplierComponent},
  {path : 'manageproductcomponent', component:ManageProductComponent},
  {path : 'ordercomponent', component:OrdersComponent},
  {path : 'insertproductcomponent', component:InsertProductComponent},
  {path : 'updateproductcomponent', component:UpdateProductComponent},
  {path : 'deleteproductcomponent', component:DeleteProductComponent},
  {path : 'manageuserscomponent', component:ManageUsersComponent},
  {path : 'supplierdashboardcomponent', component:SupplierDashboardComponent},
  {path : 'updateorderscomponent', component:UpdateOrdersComponent},
  {path : 'inserteorderscomponent', component:InsertOrdersComponent},
  {path : 'insertusercomponent', component:InsertUserComponent},
  {path : 'updateusercomponent', component:UpdateUserComponent},
  {path : 'webpagecomponent', component:WebpageComponent},
  {path : '', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
