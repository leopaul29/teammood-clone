import { Component, OnInit } from '@angular/core';
import { User } from './model';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'teammood-clone';
  users: User[]= [];


  constructor(private userService: UserService) {

  }
  ngOnInit(): void {
    this.users = this.userService.getUsers()
  }

  
}
