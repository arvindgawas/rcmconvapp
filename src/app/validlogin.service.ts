import { Injectable, Output, EventEmitter } from '@angular/core';
import { Observable, throwError,BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ValidloginService {

  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private userloggedIn: BehaviorSubject<string> = new BehaviorSubject<string>('');

  isOpen = false;

  @Output() change: EventEmitter<boolean> = new EventEmitter();

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  get getuserLoggedIn() {
    return this.userloggedIn.asObservable();
  }

  constructor() { }
      
  toggle() {
    this.isOpen = !this.isOpen;
    this.change.emit(this.isOpen);
  }

  public validateLoginUser()
  {
    
    let userdata : any ;
    let adminuser : any;
    let ID : string;

    userdata = JSON.parse(localStorage.getItem('currentUser')|| '{}');
    console.log(userdata);
    if (userdata.name== null) 
    {
      this.loggedIn.next(false);
   
    }
    else
    {
      ID = userdata.name;
      this.userloggedIn.next(ID);
      this.loggedIn.next(true);
    }
  }
}
