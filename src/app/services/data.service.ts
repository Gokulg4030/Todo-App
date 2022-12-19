import { registerLocaleData } from '@angular/common';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  



  
  currentuser="";



  constructor() { }


  saveDetails()
  {
    if(this.userdetails)
    {
      localStorage.setItem('Databases', JSON.stringify(this.userdetails))
    }
    if(this.currentuser)
    {
      localStorage.setItem('currentuser', JSON.stringify(this.userdetails))
    }
  }

  getDetails()
  {
    if(this.userdetails)
    {
      this.userdetails = JSON.parse(localStorage.getItem('Database')||'')
    }
    if(this.currentuser)
    {
      this.currentuser = JSON.parse(localStorage.getItem('currentuser')||'')
    }

  }
  
  userdetails:any={
    Gokul:{uname:"Gokul" , pswd:1001,mail:'gokulg4030@gmail.com',task:[]}
  }


  login(uname:any,pswd:any)
  {
    let userdetails = this.userdetails
    if(uname in userdetails)
    {
      if(pswd==userdetails[uname]["pswd"])
      {

        this.currentuser = userdetails[uname]['uname']
        return true;
      
      }
      else{
        return false;
      }
    }
    else{
      return false;
    }

  }

  register(uname1:any,pswd1:any,mail:any)
{
  let userdetails = this.userdetails

  if(uname1 in userdetails) 
  {
    return false;
  }
  else{
    userdetails[uname1]={
      uname:uname1,
      pswd:pswd1,
      mail:mail,
      task:[]
    }
    console.log(userdetails)
    return true;
  }
}

add(task:any,uname:any)
{
  let userdetails = this.userdetails
  if(uname in userdetails)
  {
   userdetails[uname]['task'].push({
    Task : task                             // to add task to the object of that array
   })

   console.log(userdetails)
   console.log(localStorage)
   this.saveDetails();
   return true
  }
  else{
   return false
  }
}

logout(user:any)
{
  this.userdetails[user]['task'].pop({})                            // to remove task in lifo format
  return true;
}

getTask(uname1:any)
{
  return this.userdetails[uname1]['task']
}
}








