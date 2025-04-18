import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { UserService } from '../service/user.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { error } from 'console';

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
      // this.userService.addUser({ username: this.username, password: this.password });
      // this.router.navigate(['/view-users']);
      this.userService.addUser({ userName: this.username, password: this.password }).subscribe({
        next: () => {this.router.navigate(['/view-users'])},
        error: () => {alert("Failed to create user. Try again.")}
      });
    } else {
      alert("Username and password are required");
    }
  } 
}
