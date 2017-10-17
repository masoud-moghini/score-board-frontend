import { AuthService } from './../auth.service';
import { WebService } from './../web.service';
import { Component} from '@angular/core';

@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.css']
})
export class NewMessageComponent  {

  constructor(private webService:WebService,private auth:AuthService) { }


  message={
    Owner:this.webService.getUser.name,
    Text:""
  }

  onPost()
  {
    this.webService.postService(this.message);
  }
}
