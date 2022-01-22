import { Component, OnInit } from '@angular/core';
import { Router}  from '@angular/router';
import { LoginModel } from '../models/loginmodel';
import { LoginService } from '../login/login.service';
import { ValidloginService} from '../validlogin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  LoginModel:LoginModel= new LoginModel();

  constructor(public LoginService:LoginService,public router:Router, public valloginser : ValidloginService) { }

  ngOnInit(): void {
  }

  onSubmit()
  {
    //this.router.navigate(['/latlong']);
    
    this.LoginService.ValidateUser(this.LoginModel)
    .subscribe({
      next: (data) =>  {
        console.log(data);
        if (data.data==null)
        {
            alert("Invalid UserID and Password.");  
            this.router.navigate(['/']);
        }
        else
        {
           console.log(data.data);
           localStorage.setItem('currentUser', JSON.stringify({ name: data.data.loginID }));
           this.valloginser.validateLoginUser();
           this.valloginser.toggle();   
           this.router.navigate(['/latlong']);
        }
      },
      complete: () => {},
      error: (error) => {
            alert(error);
            console.log("Error Validating User.", error);
      }
      });
      
  }

}
