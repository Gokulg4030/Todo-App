import { registerLocaleData } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  uname="";
  pswd="";
  


  loginForm=this.fb.group({
    uname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    
    pswd:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]*')]]
  })
  
  uname1="";
  pswd1="";
  mail="";
  
  RegisterForm=this.fb.group({
    uname1:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    mail:['',[Validators.required,Validators.pattern('a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    pswd1:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]*')]]
  })

  constructor(private ds:DataService ,private router:Router,private fb:FormBuilder) { }

  
  ngOnInit(): void {
  }
  
  
  
  login()
  {
    var uname=this.loginForm.value.uname
    var pswd=this.loginForm.value.pswd

    if(this.loginForm.value){

      const result=this.ds.login(uname,pswd)
  if(result)
  {
    alert("login successfull");
    this.router.navigateByUrl('index')
  }
  else
  {
    alert("login Failed")
  }

    }else{
      alert('Invalid Form')
    }

    
    
}


register()
{
   var uname1 = this.RegisterForm.value.uname1;
   var mail = this.RegisterForm.value.mail;
   var pswd1= this.RegisterForm.value.pswd1;

   if(this.RegisterForm.value)
   {
    const result=this.ds.register(uname1,pswd1,mail)
    if(result)
    {
      alert('Registration successful')
      alert('Swipe To Login')
    }
    else{
      alert("User alredy Registerd")
      alert('Swipe To Login');
    }
    
   }
   else
   {
    alert('Registration failed');
    
    
   }
}
}
