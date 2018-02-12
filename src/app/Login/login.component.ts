import { Component} from '@angular/core';
import {Router} from '@angular/router'
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: 'login.component.html'
})
export class LoginComponent  {

  constructor(private router:Router,private user:UserService) { }

  login(e)
   {
     e.preventDefault();
     var username=e.target.elements[0].value;
     var password=e.target.elements[1].value;
     
if(username=='admin'&& password=='admin'){
  this.user.userName=username;
  this.user.setUserLoginState();
  this.router.navigate(['/home']);
}
    }
}
