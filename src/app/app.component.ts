import { MessagesComponent } from './messages/messages.component';
import { Component,ViewChild } from '@angular/core';
import { NewMessageComponent } from "./new-message/new-message.component";
import { NavbarComponent } from "./navbar.component";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';


}
