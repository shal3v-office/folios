import { Component, OnInit } from '@angular/core';
import {UsersService} from '../services/users.service';
import {User} from '../classes/user';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  public users:User [];
  constructor(private usersService:UsersService) { }
  ngOnInit(): void {
    this.usersService.loadAll().then(() => {
      this.users = this.getUsers();
    });
  }
  public getUsers() {
    return this.usersService.users;
  }

}
