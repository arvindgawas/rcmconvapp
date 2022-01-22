import { Component, OnInit } from '@angular/core';
import { Router}  from '@angular/router';
import {MatIconRegistry} from '@angular/material/icon';
import { Observable, throwError,BehaviorSubject } from 'rxjs';
import { ValidloginService} from '../validlogin.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  isLoggedIn: Observable<boolean>;
  isOpen = false;
  ID : string;

  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private logged :boolean;

  constructor(public validloginser : ValidloginService,public router : Router) { }

  ngOnInit(): void {
     let userdata : any ;

     this.validloginser.change.subscribe(isOpen => {
       userdata = JSON.parse(localStorage.getItem('currentUser') || '{}');
       this.ID = userdata.name;
       this.isLoggedIn = this.validloginser.isLoggedIn;
       this.isOpen = isOpen;
      });
      
      this.validloginser.getuserLoggedIn.subscribe(user => { this.ID = user });
  }

  navlogin()
  {
    localStorage.removeItem('currentUser');
    this.ID="";
    this.validloginser.validateLoginUser()
    this.isLoggedIn = this.validloginser.isLoggedIn;
    this.router.navigate(['']);
  }

}
