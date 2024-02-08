import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../model/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent {

  title = 'User';
  user : User;
  result : string=" ";
  userList : User[] = [];
  myForm: FormGroup;

  constructor(private service : UserService){
    this.user = new User;
    this.myForm = new FormGroup({
      userId:new FormControl('',[Validators.required,Validators.pattern('[0-9]+')]),
      userName:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z][a-zA-Z ]+')]),
      mobileNumber:new FormControl('',[Validators.required,Validators.pattern('[0-9]+')]),
      emailId:new FormControl('',[Validators.required,Validators.pattern('[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$')]),
      password:new FormControl('',[Validators.required,Validators.pattern('[0-9]+')]),
      userType:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z][a-zA-Z ]+')]),
    })
  }

  register(data : any){
    
  }

  
  registerUser(data : any){
    this.user.userId = data.userId;
    this.user.userName = data.userName;
    this.user.mobileNumber = data.mobileNumber;
    this.user.emailId = data.emailId;
    this.user.password = data.password;
    this.user.userType = data.userType;
    
    this.result = this.service.registerUser(this.user);

  }

  InsertUser(data:any){
    this.user.userName = data.userName;
    this.user.mobileNumber = data.userDesc;
    this.user.emailId = data.userPrice;
    this.user.password = data.userQuantity;
    this.user.userType= data.userType;
    this.result = this.service.InsertUser(this.user);
    this.getAllUser();
    alert("Data Inserted");
  }

  UpdateUser(data: any) {
    alert("Data Updated");
    this.user.userId = data.userId;
    this.user.userName = data.userName;
    this.user.mobileNumber = data.userDesc;
    this.user.emailId = data.userPrice;
    this.user.password = data.userQuantity;
    this.user.userType= data.userType;
    this.result = this.service.UpdateUser(this.user);
    this.getAllUser();
  
  
   }

   DeleteUser(data: any) {
    alert("data Deleted ");
    this.user.userId = data.userId;
    this.result = this.service.DeleteUser(this.user);
    this.getAllUser();
  }

  getAllUser() {
    this.service.getAllUserDetails().subscribe(user => this.userList = user);
  }


}
