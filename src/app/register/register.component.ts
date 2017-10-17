import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from "@angular/forms";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private fb:FormBuilder,private auth:AuthService) { 
    this.form=fb.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      email:['',[Validators.required,emailValid()]],
      password:['',Validators.required],
      confirmPassword:['',Validators.required]
    },{validator :checkPassword('password','confirmPassword')})
  }

  form
  ngOnInit() {
  }

  onSubmit()
  {
    if(this.form.valid)
      this.auth.registerUser(this.form.value); 
    else{
      console.log(this.form.errors);
    }                                                                                                                  
  }

  isValid(control){
    return this.form.controls[control].invalid && this.form.controls[control].touched
  }
}


function checkPassword(field1 , field2) {



  //does not matter name of this
  return fora=>{
    if(fora.controls[field1].value !== fora.controls[field2].value){
      return {mismatchedValue:true}
    }
  }
}

function emailValid() {
  return control=>{
    var regex =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    
    return regex.test(control.value) ?null :{emailInvalid:true};
  }
}