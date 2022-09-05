import { Injectable } from '@angular/core';

import { User } from '../models/User'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  users: User[];

  constructor() { 
   
  }

  getUsers() {
    if(localStorage.getItem('users') === null) {
      this.users = [];
    } else {
      this.users = JSON.parse(localStorage.getItem('users') || '{}' );
    }
    return this.users;
  }

  addUser(user: User) {
    this.users.push(user);
    let users = [];
    if(localStorage.getItem('users') === null) {
      users= [];
      users.push(user);
      localStorage.setItem('users', JSON.stringify(users));
    } else {
      users = JSON.parse(localStorage.getItem('users')|| '{}');
      users.push(user); 
      localStorage.setItem('users', JSON.stringify(users));
    }
  }

  deleteUser(user: User) {
    for (let i = 0; i < this.users.length; i++) {
      if (user == this.users[i]) {
        this.users.splice(i, 1);
        localStorage.setItem('users', JSON.stringify(this.users));
      }
    }
  }
}
