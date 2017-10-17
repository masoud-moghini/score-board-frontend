import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { MdSnackBar } from "@angular/material";
import { Subject } from "rxjs/Rx";
import 'rxjs/add/operator/toPromise';
@Injectable()
export class WebService {

  BASE_URL='http://localhost:5000';
  private messagesStore=[];
  private messageSubject=new Subject();


  private todoStore=[];
  private todoSubject = new Subject();
  todos = this.todoSubject.asObservable();

  messages=this.messageSubject.asObservable();
  constructor(private http:Http,private sb:MdSnackBar,private auth:AuthService) { 
    this.getService();
  }


  getService(user?:any){

    user =(user)?'/'+user :'';
    this.http.get(this.BASE_URL+'/api/messages'+user).subscribe(message =>
      {
        this.messagesStore=message.json();
        this.messageSubject.next(this.messagesStore);;
      }
      ,(error)=>{
        
        this.handleErrors("Unable to get messages");

      }
    ) ;


  }


  async postService(message){

    try {
      message=  await this.http.post(this.BASE_URL+'/api/messages',message).toPromise();
      this.messagesStore.push(message.json());
      this.messageSubject.next(this.messagesStore)
      
    } catch (error) {
      this.handleErrors('Unable to post messages')
    }
    
  }

  getUser()
  {
    return this.http.get(this.BASE_URL+'/user/me',this.auth.TokenHeader).map(res=>res.json());
  }

  postUser(data)
  {
    return this.http.post(this.BASE_URL+'/user/me',data,this.auth.TokenHeader).map(res=>res.json());
  }


  private handleErrors(error) {
    console.error(error);
    this.sb.open(error,'Close',{duration:4000});
  }




  //does not relate to this app
  getTodo() {
    this.http.get("http://localhost:3000/todos").subscribe(res=>{
      this.todoStore=res.json()['todos'];
      console.log(JSON.stringify((res.json()['todos'][0])));
      this.todoSubject.next(this.todoStore);
    })
  }




}
