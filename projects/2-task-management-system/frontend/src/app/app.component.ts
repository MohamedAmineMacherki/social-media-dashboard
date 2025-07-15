import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { WebSocketService } from './services/websocket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Task Management System';
  isAuthenticated = false;
  sidenavOpened = false;

  constructor(
    private authService: AuthService,
    private wsService: WebSocketService
  ) {}

  ngOnInit() {
    this.authService.isAuthenticated$.subscribe(
      isAuth => {
        this.isAuthenticated = isAuth;
        if (isAuth) {
          this.wsService.connect();
        } else {
          this.wsService.disconnect();
        }
      }
    );
  }

  toggleSidenav() {
    this.sidenavOpened = !this.sidenavOpened;
  }

  logout() {
    this.authService.logout();
  }
}