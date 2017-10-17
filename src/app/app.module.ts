import { AuthService } from './auth.service';
import { WebService } from './web.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MaterialModule} from'@angular/material'
import {HttpModule} from '@angular/http'
import { AppComponent } from './app.component';
import { MessagesComponent } from './messages/messages.component';
import { NewMessageComponent } from './new-message/new-message.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { RouterModule,Route } from "@angular/router";
import { NavbarComponent } from './navbar.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { TodosComponent } from './todos/todos.component'

var routes:Route[]=[
  {
    path:'',
    component:HomeComponent
  },{
    path:'messages',
    component:MessagesComponent
  },{
    path:'messages/:name',
    component:MessagesComponent
  },{
    path:'register',
    component:RegisterComponent
  },
  {
    path:'user',
    component:UserComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'todo',
    component:TodosComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    NewMessageComponent,
    NavbarComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    UserComponent,
    TodosComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    MaterialModule,
    HttpModule,
    NoopAnimationsModule
  ],
  providers: [WebService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
