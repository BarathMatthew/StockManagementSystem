import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../model/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-insert-user',
  templateUrl: './insert-user.component.html',
  styleUrls: ['./insert-user.component.css']
})
export class InsertUserComponent {

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

}
