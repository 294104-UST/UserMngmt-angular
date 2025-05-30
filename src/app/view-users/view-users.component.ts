import { Component } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-view-users',
  imports: [CommonModule, FormsModule],
  templateUrl: './view-users.component.html',
  styleUrl: './view-users.component.css'
})
export class ViewUsersComponent {
  users: User[] = [];

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    //this.users = this.userService.getUsers();
    this.userService.getUsers().subscribe((data: User[]) => {
      this.users = data;
    });
  }

  editUser(id: string) {
    this.router.navigate(['update-delete-users', id]);
  }

  deleteUser(id: string | undefined) {
    if (!id) {
      console.error("User ID is undefined!");
      return;
    }
    if (confirm("Are you sure you want to delete this user?")) {
      // this.userService.deleteUser(id);
      // this.loadUsers(); // Refresh list
      this.userService.deleteUser(id).subscribe(() => {
      this.loadUsers(); // Refresh list after delete
      });
    }
  }
}
