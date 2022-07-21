import { Component, OnInit } from '@angular/core';
import { Project, User } from './model';
import { ProjectService } from './project.service';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'teammood-clone';
  users: User[]= [];
  projects:Project[]=[]


  constructor(private userService: UserService, private projectService:ProjectService) {

  }
  ngOnInit(): void {
    this.users = this.userService.getUsers()
    this.projects = this.projectService.getProjects()
  }

  
}
