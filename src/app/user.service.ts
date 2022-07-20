import { Injectable } from '@angular/core';
import { User } from './model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  USERS:User[] = [
    {
      id:1, 
      username: "toto"
    },
    {
      id:2,
      username:"tata"
    }
  ]

  constructor() { }

  getUsers() : User[]{
    return this.USERS
  }

  getUserById(id:number):User{
    return this.USERS[id];
  }
}
