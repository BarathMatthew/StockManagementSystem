import { Injectable } from '@angular/core';
import { User } from '../model/User';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  login(user: User) {
    throw new Error('Method not implemented.');
  }

  private url : string="http://localhost:6452";
  loginUSer: any;

  registerUser(user : User){
    this.http.post(this.url+"/insertUsers",user).subscribe();
    return "Register successfully";
}
loginUser(user : User){
  return this.http.post(this.url+"/login",user);
}
  constructor(private http : HttpClient) { }
  InsertUser(user: User){
    this.http.post(this.url+"/insertUsers",user).subscribe();
    return "Record Inserted";
  }
  
  DeleteUser(user: User) {
    this.http.delete(this.url + "/deleteUsers/" + user.userId).subscribe();
    return "Record Deleted";
  }
  
  UpdateUser(user: User)
  {
    this.http.put(this.url+"/updateUsers",user).subscribe();
    return "Record Updated";
  }
  getAllUserDetails() {
    return this.http.get<User[]>(this.url + "/findAllusers");
  }



  
}

