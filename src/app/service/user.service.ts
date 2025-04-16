import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = [];
  private idCounter = 1;

  addUser(user: Omit<User, 'id'>) {
    const newUser: User = {
      id: this.idCounter++,
      ...user
    };
    this.users.push(newUser);
  }

  getUsers(): User[] {
    return this.users;
  }

  getUserById(id: number): User | undefined {
    return this.users.find(user => user.id === id);
  }

  updateUser(id: number, updatedUser: Omit<User, 'id'>) {
    const index = this.users.findIndex(user => user.id === id);
    if (index > -1) {
      this.users[index] = { id, ...updatedUser };
    }
  }

  deleteUser(id: number) {
    this.users = this.users.filter(user => user.id !== id);
  }
}
