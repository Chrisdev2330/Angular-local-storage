import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service'
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {
  form: FormGroup;

  constructor(public userService: UserService) {

   }

  ngOnInit(): void {
    this.form = new FormGroup({
      nombre: new FormControl('', [ Validators.required, Validators.minLength(4) ]),
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }

  
  AddUser(formData:any) {
    this.userService.addUser({
      nombre: formData.nombre,
      email: formData.email
    });
    formData.nombre = '';
    formData.email = '';
    return false;
  }

  get f(){
    return this.form.controls;
  }
  
}
