import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {UsersService} from '../services/users.service';
import {User} from '../classes/user';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  public newUser: User;
  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.newUser= new User();
  }
  onSubmit() {
    if (this.newUser.username && this.newUser.email && this.newUser.password) {
      this.usersService.add(this.newUser)
        .then(() => {
          this.newUser = new User();
        });
    } else {
      alert('need to fill all the fields');
    }
  }

}
