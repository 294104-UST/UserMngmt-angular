import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { User } from '../models/user.model';
@Component({
  selector: 'app-update-delete-users',
  imports: [CommonModule, FormsModule],
  templateUrl: './update-delete-users.component.html',
  styleUrl: './update-delete-users.component.css'
})
export class UpdateDeleteUsersComponent {
  userId!: string;
  username: string = '';
  password: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.userId = String(this.route.snapshot.paramMap.get('id'));
    //const user = this.userService.getUserById(this.userId);
    this.userService.getUserById(this.userId).subscribe({
      next: (user: User) => {
        this.username = user.userName;
        this.password = user.password;
      },
      error: () => {
        alert("User not found");
        this.router.navigate(['/view-users']);
      }
    });

    // if (user) {
    //   this.username = user.username;
    //   this.password = user.password;
    // } else {
    //   alert("User not found");
    //   this.router.navigate(['/view-users']);
    // }
  }

  updateUser() {
    if (this.username.trim() && this.password.trim()) {
      // this.userService.updateUser(this.userId, {
      //   username: this.username,
      //   password: this.password
      // });
      // this.router.navigate(['/view-users']);
      this.userService.updateUser(this.userId, {
        userName: this.username,
        password: this.password
      }).subscribe(() => {
        this.router.navigate(['/view-users']);
      });
    } else {
      alert("Username and password are required");
    }
  }
}
