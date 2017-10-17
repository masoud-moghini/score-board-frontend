import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
    <md-toolbar color="primary">
      <button md-button routerLink=''>Home</button>
      <button md-button routerLink='/messages'>Messages</button>
      <button md-button routerLink='/todo'>Todos</button>
      
      <button md-button *ngIf="!auth.isAuthenticated" routerLink='/register'>Register</button>

      <span style="flex:1 1 auto"></span>
      <button md-button *ngIf="!auth.isAuthenticated" routerLink='/login'>Login</button>      
      <button md-button routerLink='/user' *ngIf="auth.isAuthenticated">Welcome {{auth.name}}</button>
      <button md-button  *ngIf="auth.isAuthenticated" (click)="auth.logout()">Logout</button>
      
    </md-toolbar>
  `,
  styles: []
})
export class NavbarComponent implements OnInit {

  constructor(private auth:AuthService) { }

  ngOnInit() {
  }

}
