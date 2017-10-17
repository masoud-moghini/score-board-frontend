import { Subject } from 'rxjs/Rx';
import { WebService } from './../web.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent  {

  constructor(private webService:WebService,private route:ActivatedRoute) {
   }

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
     var name =this.route.snapshot.params.name;
     this.webService.getService(name);
     console.log(name);
     this.webService.getUser().subscribe(res=>console.log(res));
  }
}
