import { Injectable } from '@angular/core';
import {User} from '../classes/user';
import { Router } from '@angular/router';
const UsersStore = Backendless.Data.of('Users');

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private router: Router) { 
  }

  public users: User[] = [];
  public currentUser:User=null;
  public hasLoginUser:boolean=false;

  loadAll() {
    return UsersStore.find().then((users: User[]) => {
      UsersService.prototype.users = users;
    });
   
  }
  add(newUser: User) {
    return Backendless.UserService.register<User>(newUser)
    .then((result: User) =>{
      alert('Registered User: '+ result.username);
      this.login(newUser);
    })
    .catch(error => alert('Can not Register User: '+ error.message));
  }

  login(loginUser: User) {
    var thisEl=this;
    return Backendless.UserService.login<User>(loginUser.email,loginUser.password)
    .then((result: User) =>{
      alert('Logined User: '+ result.username);
      thisEl.hasLoginUser=true;
      thisEl.getCurrentUser().then(function(){
        thisEl.router.navigate(['/home']);
      });
    })
    .catch(error => alert('Can not Login User: '+ error.message));
  }

  getCurrentUser(){
    var thisEl=this;
    if(this.currentUser==null){
      var userService=this;
      return Backendless.UserService.getCurrentUser()
      .then( function( currentUser ) {
          if(currentUser!=null){
            thisEl.currentUser=new User();
            thisEl.currentUser=currentUser;
            thisEl.hasLoginUser=true; 
          }
          else{
            thisEl.hasLoginUser=false;
          }
      })
      .catch( function ( error ) {
        console.log('Can not Get Current User: '+ error.message);
      });
    }
  }
  logout(){
    debugger;
    var thisEl=this;
    return Backendless.UserService.logout()
    .then( function() {
      thisEl.currentUser=null;
      thisEl.hasLoginUser=false;
    })
    .catch( function( error ) {
      alert('Can not Logout User: '+ error.message)
    });
  }
}
