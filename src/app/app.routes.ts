import { Routes } from '@angular/router';
import { CreateUserComponent } from './create-user/create-user.component';
import { UpdateDeleteUsersComponent } from './update-delete-users/update-delete-users.component';
import { ViewUsersComponent } from './view-users/view-users.component';

export const routes: Routes = [
    { path: '', redirectTo: 'create-user', pathMatch: 'full' },
    { path: 'create-user', component: CreateUserComponent },
    { path: 'update-delete-users/:id', component: UpdateDeleteUsersComponent },
    { path: 'view-users', component: ViewUsersComponent },
];
