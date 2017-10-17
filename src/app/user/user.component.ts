import { AuthService } from './../auth.service';
import { WebService } from './../web.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private webService:WebService,private auth:AuthService) { }
  user = {
    firstName:' ',
    lastName:' '
  }
  ngOnInit() {
    this.webService.getUser().subscribe(res=>{
      this.user.firstName=res.firstName,
      this.user.lastName=res.lastName
    });
 
  }
  postUser(){
    this.webService.postUser(this.user).subscribe(res=>{
      this.auth.reload(res);
    });
  }

}
