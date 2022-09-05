import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/User';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: User[];
  constructor( public userService: UserService) { }

  ngOnInit(): void {
    this.users = this.userService.getUsers()
  }

  deleteUser(user: User){
    if(confirm('Estas seguro de eliminar?')) {
      this.userService.deleteUser(user);
    }
  }
}
