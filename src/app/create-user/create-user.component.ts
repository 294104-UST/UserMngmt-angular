import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { UserService } from '../service/user.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  imports: [CommonModule, FormsModule],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css'
})
export class CreateUserComponent {
  username: string = '';
  password: string = '';

  constructor(private userService: UserService, private router: Router) {}

  createUser() {
    if (this.username.trim() && this.password.trim()) {
      this.userService.addUser({ username: this.username, password: this.password });
      this.router.navigate(['/view-users']);
    } else {
      alert("Username and password are required");
    }
  }

}
