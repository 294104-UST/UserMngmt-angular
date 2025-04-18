import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



// @Injectable({
//   providedIn: 'root'
// })
// export class UserService {
//   private users: User[] = [];
//   private idCounter = 1;

//   addUser(user: Omit<User, 'id'>) {
//     const newUser: User = {
//       id: this.idCounter++,
//       ...user
//     };
//     this.users.push(newUser);
//   }

//   getUsers(): User[] {
//     return this.users;
//   }

//   getUserById(id: number): User | undefined {
//     return this.users.find(user => user.id === id);
//   }

//   updateUser(id: number, updatedUser: Omit<User, 'id'>) {
//     const index = this.users.findIndex(user => user.id === id);
//     if (index > -1) {
//       this.users[index] = { id, ...updatedUser };
//     }
//   }

//   deleteUser(id: number) {
//     this.users = this.users.filter(user => user.id !== id);
//   }
// }



//for connection of backend and front end.
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:3000/api/v1/users'; // Your backend route

  constructor(private http: HttpClient) {}

  // Create
  addUser(user: Omit<User, 'id'>): Observable<User> {
    console.log("Sending user:", user);
    return this.http.post<User>(this.apiUrl, user);
  }

  // Read all
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  // Read by ID
  getUserById(id: string): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}`);
  }

  // Update
  updateUser(id: string, updatedUser: Omit<User, 'id'>): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/${id}`, updatedUser);
  }

  // Delete
  deleteUser(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
