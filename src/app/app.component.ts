import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CreateUserComponent } from './create-user/create-user.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [HttpClientModule,RouterOutlet,],   //CreateUserComponent
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'UserMngmt';
}
