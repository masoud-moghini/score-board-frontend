import { Http, RequestOptions,Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
@Injectable()
export class AuthService {

  NAME_KEY :string='name';
  TOKEN_KEY : string='token';
  BASE_URL='http://localhost:5000/auth';
  
  constructor(private http: Http,private router:Router) { }

  get name(){
    return localStorage.getItem(this.NAME_KEY);
  }


  get isAuthenticated(){
    
    return !!localStorage.getItem(this.NAME_KEY);
  }

  get TokenHeader()
  {
    var headers = new Headers({'Authorization':'Bearer '+localStorage.getItem(this.TOKEN_KEY)});
    return new RequestOptions({headers});
  }
  registerUser(user){
  	delete user.confirmPassword;
    var entity=this.http.post(this.BASE_URL+'/register',user).subscribe((res)=>{
      this.authenticate(res);
    });
    console.log(entity);
  }

  loginUser(loginData)
  {
    this.http.post(this.BASE_URL+'/login',loginData).subscribe(res=> this.authenticate(res))
  }

  authenticate(res)
  {
    var authResponse=res.json().token;
    if(!authResponse)
      return


    localStorage.setItem(this.TOKEN_KEY,res.json().token);
    localStorage.setItem(this.NAME_KEY,res.json().firstName);
    this.router.navigate(['/']);
  }
  logout()
  {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.NAME_KEY);
    
  }

  reload(res)
  {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.setItem(this.NAME_KEY,res.firstName);
    
  }
  
}
