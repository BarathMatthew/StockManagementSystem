import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../model/User';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user : User;
  result : string=" ";
  userList : User[] = [];
  myForm: FormGroup;

  constructor(private service : UserService,private router:Router){
    this.myForm = new FormGroup({
      userName:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z][a-zA-Z ]+')]),
      password:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z0-9_.-]')]),
    })

    this.user=new User();
  }

  

  login(data: any) {
    this.user.userName = data.userName;
    this.user.password = data.password;
    this.service.loginUser(this.user).subscribe((resultdata: any) => {
      console.log(resultdata);
      if (resultdata.message == 'admin Success') {
        this.router.navigate(['/managedashboard'])
      } else if (resultdata.message == 'customer Success') {
        this.router.navigate(['/webpagecomponent']);
      } else if (resultdata.message == 'supplier Success') {
        this.router.navigate(['/supplierdashboardcomponent']);
      }
      // else{
      // this.router.navigate(['/webpagecomponent']);
      // }
    });

 
}
}