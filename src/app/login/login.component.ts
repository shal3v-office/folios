import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {UsersService} from '../services/users.service';
import {User} from '../classes/user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginUser: User;
  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.loginUser= new User();
  }
  onSubmit() {
    if (this.loginUser.email && this.loginUser.password) {
      this.usersService.login(this.loginUser)
        .then(() => {
          this.loginUser = new User();
        });
    } else {
      alert('need to fill all the fields');
    }
  }

}
