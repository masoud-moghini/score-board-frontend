import { WebService } from './../web.service';
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  constructor(private http:Http,private webService:WebService) { }
  todos=[];
  ngOnInit() {
    this.webService.getTodo();
    }
  

}
