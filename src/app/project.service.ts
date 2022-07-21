import { Injectable } from '@angular/core';
import { Project } from './model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  PROJECTS:Project[] = [
    {
      id:1, 
      name: "project toto"
    },
    {
      id:2,
      name:"project tata"
    }
  ]

  constructor() { }

  getProjects() : Project[]{
    return this.PROJECTS
  }

  getProjectById(id:number):Project{
    return this.PROJECTS[id];
  }
}
