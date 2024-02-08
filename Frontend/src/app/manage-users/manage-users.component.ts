import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../model/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent {

  user:User;
  result:String="";
  userList:User[] =[];
  myForm: FormGroup;
  constructor(private pro : UserService){
    this.myForm = new FormGroup({
      userId: new FormControl('', [Validators.required, Validators.pattern('[0-9]+')]),
      userName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]+')]),
      mobileNumber: new FormControl('', [Validators.required, Validators.pattern('[0-9]+')]),
      emailId: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]+')]),
      password : new FormControl('',[Validators.required,Validators.pattern('[0-9]+')]),
      userType: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+')])
    })

    this.user = new User();
    this.getAllUser();
  }
  InsertUser(data:any){
    this.user.userName = data.userName;
    this.user.mobileNumber = data.userDesc;
    this.user.emailId = data.userPrice;
    this.user.password = data.userQuantity;
    this.user.userType= data.userType;
    this.result = this.pro.InsertUser(this.user);
    this.getAllUser();
    alert("Data Inserted");
  }

  UpdateUser(data: any) {
    alert("Data Updated");
    this.user.userName = data.userName;
    this.user.mobileNumber = data.userDesc;
    this.user.emailId = data.userPrice;
    this.user.password = data.userQuantity;
    this.user.userType= data.userType;
    this.result = this.pro.UpdateUser(this.user);
    this.getAllUser();
  
  
   }

   DeleteUser(data: any) {
    alert("data Deleted ");
    this.user.userId = data.userId;
    this.result = this.pro.DeleteUser(this.user);
    this.getAllUser();
  }

  getAllUser() {
    this.pro.getAllUserDetails().subscribe(user => this.userList = user);
  }

}
