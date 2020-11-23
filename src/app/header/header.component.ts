import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  hasLoginUser:boolean;
  constructor(public usersService: UsersService) { }

  ngOnInit(): void {
    this.hasLoginUser=this.usersService.hasLoginUser;
  }
  onSignOut(){
    var thisEl=this;
    this.usersService.logout()
    .then( function() {
      thisEl.hasLoginUser=thisEl.usersService.hasLoginUser;
    })
  }

}
